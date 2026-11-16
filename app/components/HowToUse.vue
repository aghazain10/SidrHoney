<template>
    <section id="how-to-use" class="relative bg-ink py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center reveal">
                <span class="kicker">Rituals</span>
                <h2 class="mt-4 font-display font-bold text-cream text-3xl sm:text-5xl tracking-tight">
                    The Daily <span class="text-gold-gradient italic">Ritual</span>
                </h2>
                <p class="mt-3 text-muted max-w-lg mx-auto">Simple ways to bring nature's goodness into every day.</p>
            </div>

            <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div
                    v-for="(tip, index) in tips"
                    :key="index"
                    class="reveal group relative rounded-2xl border border-line bg-white/[0.02] p-6 pt-8 transition-all duration-500 hover:border-gold-500/35 hover:bg-gold-500/[0.04] hover:-translate-y-1"
                    :style="{ '--reveal-delay': `${index * 90}ms` }"
                >
                    <span class="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full font-display font-extrabold text-base text-[#241300]"
                          style="background: linear-gradient(160deg,#fbe98a,#d4a017 60%,#a86e14); box-shadow: 0 6px 16px rgba(212,160,23,0.4);">
                        {{ index + 1 }}
                    </span>
                    <svg class="w-7 h-7 text-gold-400 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" v-html="tip.icon"></svg>
                    <h3 class="mt-3 font-display font-bold text-cream">{{ tip.title }}</h3>
                    <p class="mt-1.5 text-sm text-muted leading-relaxed">{{ tip.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const tips = [
    {
        title: "Straight From the Jar",
        text: "Enjoy a spoonful of Sidr Honey directly — the purest way to taste it.",
        icon: '<path d="M4 12h16"/><path d="M6 12a6 6 0 0 0 12 0"/><path d="M12 3v3"/>',
    },
    {
        title: "Warm, Not Hot",
        text: "Stir into warm tea, milk, or herbal infusions — never boiling, to keep enzymes intact.",
        icon: '<path d="M4 10h13v5a5 5 0 0 1-5 5h-3a5 5 0 0 1-5-5v-5z"/><path d="M17 11h2a2 2 0 0 1 0 4h-2"/><path d="M8 6c0-1 .8-1 .8-2M12 6c0-1 .8-1 .8-2"/>',
    },
    {
        title: "With Shilajit",
        text: "Mix 5g of honey with a glass of Organic Aprico Himalayan Shilajit for the classic pairing.",
        icon: '<path d="M13 2L4.5 13.5H11L9.5 22 18 10.5h-6.5L13 2z"/>',
    },
    {
        title: "Store Properly",
        text: "Cool, dry place away from direct sunlight — and always seal the lid tight after each spoonful.",
        icon: '<rect x="7" y="8" width="10" height="12" rx="2"/><path d="M9.5 8V6a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 6v2"/>',
    },
];
</script>
