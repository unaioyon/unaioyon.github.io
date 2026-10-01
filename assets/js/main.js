// Theme toggle — light is always the default; dark only once explicitly chosen.
(function () {
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  root.setAttribute('data-theme', stored === 'dark' ? 'dark' : 'light');

  window.getEffectiveTheme = function () {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  };

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = window.getEffectiveTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }));
    });
  });
})();

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
});

// Scroll reveal
document.addEventListener('DOMContentLoaded', function () {
  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el) { observer.observe(el); });
});

// Marquees (e.g. music playlists): continuous, infinite, hover-to-steer
// auto-scroll. Driven by rAF + a measured pixel offset (not a CSS keyframe
// loop) specifically because long-running CSS `animation: ... infinite`
// loops are prone to drifting and visibly jumping after a few cycles in
// some engines — a plain per-frame modulo wrap can never desync.
document.addEventListener('DOMContentLoaded', function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.marquee').forEach(function (marquee) {
    var viewport = marquee.querySelector('.marquee-viewport');
    var track = marquee.querySelector('.marquee-track');
    if (!viewport || !track || prefersReduced) return; // CSS keeps a plain scrollable row instead

    var AMBIENT_SPEED = 24;    // px/s ambient drift (slow, constant, leftward)
    var STEER_SPEED = 170;     // px/s while hovering an edge zone
    var EDGE_FRACTION = 0.18;  // fraction of viewport width treated as an edge

    var setWidth = 0;
    var offset = 0;
    var hoverZone = null; // 'left' | 'right' | 'center' | null (not hovering)
    var focused = false;
    var lastTime = null;

    function measure() {
      var firstCard = track.querySelector('.playlist-card');
      var firstDup = track.querySelector('.playlist-card[aria-hidden="true"]');
      if (!firstCard || !firstDup) return;
      // Distance between matching points one repeat apart — invariant to
      // the track's current transform, since a uniform shift cancels out.
      setWidth = firstDup.getBoundingClientRect().left - firstCard.getBoundingClientRect().left;
    }

    function frame(now) {
      if (lastTime === null) lastTime = now;
      var dt = (now - lastTime) / 1000;
      lastTime = now;

      var speed;
      if (focused || hoverZone === 'center') speed = 0;
      else if (hoverZone === 'left') speed = STEER_SPEED;
      else if (hoverZone === 'right') speed = -STEER_SPEED;
      else speed = -AMBIENT_SPEED;

      offset += speed * dt;

      if (setWidth > 0) {
        while (offset <= -setWidth) offset += setWidth;
        while (offset > 0) offset -= setWidth;
      }

      track.style.transform = 'translateX(' + offset.toFixed(2) + 'px)';
      requestAnimationFrame(frame);
    }

    viewport.addEventListener('mousemove', function (e) {
      var rect = viewport.getBoundingClientRect();
      var relX = (e.clientX - rect.left) / rect.width;
      if (relX < EDGE_FRACTION) hoverZone = 'left';
      else if (relX > 1 - EDGE_FRACTION) hoverZone = 'right';
      else hoverZone = 'center';
    });
    viewport.addEventListener('mouseleave', function () { hoverZone = null; });
    viewport.addEventListener('focusin', function () { focused = true; });
    viewport.addEventListener('focusout', function () { focused = false; });

    measure();
    window.addEventListener('resize', measure);
    requestAnimationFrame(frame);
  });
});

// Abstract expand/collapse
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.abstract-toggle').forEach(function (btn) {
    var body = document.getElementById(btn.getAttribute('aria-controls'));
    if (!body) return;
    var showLabel = btn.dataset.labelShow || btn.textContent;
    var hideLabel = btn.dataset.labelHide || 'Hide abstract';
    btn.addEventListener('click', function () {
      var isOpen = body.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      btn.textContent = isOpen ? hideLabel : showLabel;
    });
  });
});
