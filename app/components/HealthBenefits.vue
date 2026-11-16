<template>
    <section id="benefits" class="relative bg-ink py-16 md:py-24 honeycomb-bg overflow-hidden">
        <div class="pointer-events-none absolute -left-40 top-24 w-96 h-96 rounded-full" style="background: radial-gradient(circle, rgba(212,160,23,0.09), transparent 65%);"></div>
        <div class="pointer-events-none absolute -right-40 bottom-24 w-96 h-96 rounded-full" style="background: radial-gradient(circle, rgba(212,160,23,0.09), transparent 65%);"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center reveal">
                <span class="kicker">The Sidr Difference</span>
                <h2 class="mt-4 font-display font-bold text-cream text-3xl sm:text-5xl tracking-tight">
                    Simple Reasons to <span class="text-gold-gradient italic">Love It</span>
                </h2>
                <p class="mt-3 text-muted max-w-lg mx-auto">Nature's oldest sweetener — revered for centuries, backed by modern purity standards.</p>
            </div>

            <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div
                    v-for="(b, i) in benefits"
                    :key="b.title"
                    class="card-dark card-dark-hover reveal p-6 sm:p-7 flex items-start gap-5"
                    :style="{ '--reveal-delay': `${i * 90}ms` }"
                >
                    <!-- Honeycomb icon -->
                    <div class="shrink-0 w-16 h-[4.4rem] sm:w-[4.5rem] sm:h-20 hex-clip flex items-center justify-center"
                         style="background: linear-gradient(160deg, #F6D87A, #D4A017 55%, #8A5A00);">
                        <div class="w-[calc(100%-3px)] h-[calc(100%-3px)] hex-clip bg-[#1a1611] flex items-center justify-center">
                            <svg class="w-7 h-7 sm:w-8 sm:h-8 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" v-html="b.icon"></svg>
                        </div>
                    </div>
                    <div>
                        <p class="text-[10px] font-extrabold uppercase tracking-[0.28em] text-gold-600">0{{ i + 1 }}</p>
                        <h3 class="mt-1 font-display font-bold text-lg text-cream leading-snug">{{ b.title }}</h3>
                        <p class="mt-2 text-sm text-muted leading-relaxed">{{ b.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const benefits = [
    {
        title: "A Natural Choice for Everyday Life",
        text: "Raw honey is a simple way to add a natural ingredient to your daily routine — minimal processing retains the qualities that make honey naturally valued.",
        icon: '<path d="M11 20A7 7 0 0 1 4 13c0-4 3-8 8-9 4.5 3.5 6 8 4 12-1.5 3-3.5 4-5 4z"/><path d="M11 20c0-5 2-9 6-12"/>',
    },
    {
        title: "Naturally Contains Antioxidants",
        text: "Honey contains naturally occurring antioxidant compounds, including phenolic compounds — part of honey's natural composition.",
        icon: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>',
    },
    {
        title: "Natural Energy from Honey",
        text: "Wild Forest Sidr Honey contains naturally occurring sugars that provide carbohydrates — the body's preferred source of energy.",
        icon: '<path d="M13 2L4.5 13.5H11L9.5 22 18 10.5h-6.5L13 2z"/>',
    },
    {
        title: "A Simple Way to Add Sweetness",
        text: "Drizzle over toast, stir into a warm drink, or add to your favourite foods — Sidr honey elevates the everyday.",
        icon: '<path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 5 0"/>',
    },
    {
        title: "A Warm & Comforting Tradition",
        text: "A spoonful of Sidr honey in a warm drink is a simple ritual enjoyed in homes for generations.",
        icon: '<path d="M4 10h13v5a5 5 0 0 1-5 5h-3a5 5 0 0 1-5-5v-5z"/><path d="M17 11h2a2 2 0 0 1 0 4h-2"/><path d="M8 6c0-1 .8-1 .8-2M12 6c0-1 .8-1 .8-2"/>',
    },
    {
        title: "A Touch of Natural Indulgence",
        text: "Rich, unblended and free of additives — pure Sidr honey makes even ordinary meals feel like an occasion.",
        icon: '<path d="M20 12l-8 8-9-9V4h7l10 8z"/><circle cx="7.5" cy="7.5" r="1.2"/>',
    },
];
</script>
