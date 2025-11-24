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
* **Causal Inference in the Presence of Multi-Dimensional Factor Structures in the AKM Model.**

* **Recovering Partially-Identified Causal Parameters in Difference-in-Differences using Optimal Transport.**
<!-- Added a span ID to update text dynamically -->
<span class="toggle-link" id="toggle-text-abstract1" onclick="toggleAbstract('abstract1', 'toggle-text-abstract1')">[Show Abstract]</span>
<p id="abstract1" class="abstract" style="display: none;">Some families of causal parameters are a function of the joint distribution of potential outcomes and thus can only be partially identified. Framing identification as an optimal transport problem, I construct sharp bounds that are valid even under arbitrary model misspecification. Both continuous and discrete covariates can be used to tighten the identified set, which does not inherit any bias from incorrect model specification. This approach constructs counterfactual distributions by imposing assumptions in the spirit of so-called distributional difference-in-differences, which hold by construction in RCTs and can be defended in many nonexperimental settings with panel data. Additionally, it exploits the time dependency structure in potential outcomes to reduce the space of copulas over which the solution is defined. I finally study applications with real and simulated data.</p>

#### *Applied Economics*
* **Evaluating the Effect of Training Programs for the Unemployed: An Examiner Design Approach** (with [Luc Behaghel](https://www.parisschoolofeconomics.com/behaghel-luc/behaghel.htm), [Marc Gurgand](https://www.parisschoolofeconomics.eu/equipes/marc-gurgand/) and [Yagan Hazard](https://yaganhazard.github.io/)).
<!-- Added a span ID to update text dynamically -->
<span class="toggle-link" id="toggle-text-abstract2" onclick="toggleAbstract('abstract2', 'toggle-text-abstract2')">[Show Abstract]</span>
<p id="abstract2" class="abstract" style="display: none;">We exploit the random allocation of caseworkers to job seekers in France---and the heterogeneity in caseworkers' propensity to place individuals in training programs---in order to build an instrument for entering a training program while unemployed. To alleviate threats to the exclusion restriction assumption, we are currently developing an identification approach combining (i) the intuition behind of so-called ''zero-first-stage'' falsification test, (ii) an identification-at-infinity argument and (iii) a single-index assumption imposed on caseworkers' direct impact on individuals' job finding rate (violating the exclusion restriction of the instrument). Our framework lends itself nicely to the use of machine-learning predictions in a first step to identify the zero-first-stage subgroups that are essential for our identification-at-infinity approach.</p>

## **Publications**
#### *Applied Economics*
* **Cost-effectiveness analysis of the daily HIV pre-exposure prophylaxis in men who have sex with men in Barcelona** [(PLOS ONE, 2023)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0277571)

<!-- Added CSS for cursor pointer -->
<style>
    .toggle-link {
        color: var(--global-theme-color); /*@UNAI sets the color to the theme one */
        cursor: pointer;  /* Changes cursor to a pointer */
        text-decoration: underline;
    }

    /* Justify the abstract text */
    .abstract {
        text-align: justify; /* Ensures the text is justified */
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




