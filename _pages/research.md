---
layout: page
permalink: /research/
title: Research
description: 
nav: true
nav_order: 2
---

## **Work in Progress**

#### *Econometrics*
* **Average Treatment Effects Conditional on Unobservables: A Welfare Maximization Approach.**

* **Recovering Partially-Identified Causal Parameters in Difference-in-Differences using Optimal Transport** (draft available soon!).
<!-- Added a span ID to update text dynamically -->
<span class="toggle-link" id="toggle-text-abstract1" onclick="toggleAbstract('abstract1', 'toggle-text-abstract1')">[Show Abstract]</span>
<p id="abstract1" class="abstract" style="display: none;">This is the abstract for Paper 1.</p>

#### *Applied Economics*
* **Evaluating the Effect of Training Programs for the Unemployed: An Examiner Design Approach** (with [Luc Behaghel](https://www.parisschoolofeconomics.com/behaghel-luc/behaghel.htm), [Marc Gurgand](https://www.parisschoolofeconomics.eu/equipes/marc-gurgand/) and [Yagan Hazard](https://yaganhazard.github.io/)).

* **Social Mobility in South Korea** (with [Sehyun Hong](https://sites.google.com/view/sehyunhong/), [Zhexun Mo](https://sites.google.com/view/zhexunmo/home) and [Li Yang](https://sites.google.com/view/lyang/)).

## **Publications**
#### *Applied Economics*
* **Cost-effectiveness analysis of the daily HIV pre-exposure prophylaxis in men who have sex with men in Barcelona** [(PLOS ONE, 2023)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0277571)

<!-- Added CSS for cursor pointer -->
<style>
    .toggle-link {
        color: blue;
        cursor: pointer;  /* Changes cursor to a pointer */
        text-decoration: underline;
    }
</style>

<script>
    // Updated function to change text dynamically
    function toggleAbstract(abstractId, textId) {
        var abstract = document.getElementById(abstractId);
        var toggleText = document.getElementById(textId);
        if (abstract.style.display === "none" || abstract.style.display === "") {
            abstract.style.display = "block";
            toggleText.innerHTML = "[Hide Abstract]"; // Changes text when clicked
        } else {
            abstract.style.display = "none";
            toggleText.innerHTML = "[Show Abstract]"; // Reverts text back
        }
    }
</script>



