<template>
    <section id="story" class="relative bg-onyx py-16 md:py-24 border-t border-line overflow-hidden honeycomb-bg">
        <FlyingBees :count="2" :size="30" class="z-[5] opacity-90" />
        <!-- Giant decorative quote -->
        <svg class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-6 w-40 h-40 text-gold-500/[0.07]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.5 5C7 7 5.5 9.3 5.5 12.6 5.5 15.5 7.4 18 10.3 18c2.5 0 4.2-1.7 4.2-4 0-2.1-1.5-3.7-3.7-3.7-.4 0-.9.1-1.2.3.4-1.7 1.9-3.6 3.7-4.6L9.5 5zm9 0C16 7 14.5 9.3 14.5 12.6c0 2.9 1.9 5.4 4.8 5.4 2.5 0 4.2-1.7 4.2-4 0-2.1-1.5-3.7-3.7-3.7-.4 0-.9.1-1.2.3.4-1.7 1.9-3.6 3.7-4.6L18.5 5z"/></svg>

        <div class="relative max-w-3xl mx-auto px-6 text-center">
            <span class="kicker reveal">Our Story</span>
            <h2 class="reveal mt-4 font-display font-bold text-cream text-3xl sm:text-5xl tracking-tight">
                It Started With a <span class="text-gold-gradient italic">Spoonful.</span>
            </h2>

            <div class="reveal mt-8 space-y-6 text-muted leading-relaxed text-[15px] sm:text-base" style="--reveal-delay: 120ms">
                <p>Our story began with a simple childhood experience that stayed with me. I struggled with a persistent cough, and I remember how pure Sidr honey became something I personally relied on when nothing else seemed to help. That experience created a lasting appreciation for the natural richness of Sidr honey.</p>
                <p>Years later, Sidr honey remains part of my daily routine — enjoyed often alongside shilajit, because it is something I genuinely value and have trusted for years.</p>
                <p class="text-cream/80">But our story is not only about honey. It is also about bees — their discipline, teamwork, resilience, and remarkable precision. During the short Sidr flowering season, they work with incredible focus, gathering nectar from blooming Sidr flowers and transforming it into something truly special.</p>
                <p>That natural process taught me the importance of patience, purpose, and respect for nature. These values are at the heart of <span class="text-gold-300 font-semibold">SDR Honey</span>.</p>
                <p>Today, our goal is simple: to share authentic Sidr honey from the wild forests of Karak with people around the world — while honoring the bees, the land, and the natural process behind every jar.</p>
            </div>

            <div class="reveal mt-10 flex items-center justify-center gap-4" style="--reveal-delay: 220ms">
                <span class="h-px w-14 bg-gradient-to-r from-transparent to-gold-600"></span>
                <div>
                    <p class="font-display italic text-xl text-gold-300">The SDR Honey Family</p>
                    <p class="text-[10px] uppercase tracking-[0.28em] text-muted font-bold mt-1">Organic Aprico · Karak, Pakistan</p>
                </div>
                <span class="h-px w-14 bg-gradient-to-l from-transparent to-gold-600"></span>
            </div>
        </div>
    </section>
</template>

<script setup>
import FlyingBees from "~/components/FlyingBees.vue";
</script>
