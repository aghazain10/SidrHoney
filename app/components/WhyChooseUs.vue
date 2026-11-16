<template>
    <section id="whyus" class="relative bg-onyx py-16 md:py-24 border-y border-line overflow-hidden">
        <div class="pointer-events-none absolute right-[-12rem] top-[-8rem] w-[36rem] h-[36rem] rounded-full" style="background: radial-gradient(circle, rgba(212,160,23,0.1), transparent 60%);"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
            <!-- Sticky intro -->
            <div class="lg:col-span-4">
                <div class="lg:sticky lg:top-32 reveal">
                    <span class="kicker">Why SDR</span>
                    <h2 class="mt-4 font-display font-bold text-cream text-3xl sm:text-5xl tracking-tight leading-[1.08]">
                        Why Families <span class="text-gold-gradient italic">Choose<br />This Jar</span>
                    </h2>
                    <p class="mt-4 text-muted leading-relaxed">
                        At SDR Honey by Organic Aprico, every jar represents authentic Pakistani Sidr honey — careful harvesting, uncompromising quality, and nothing hidden in the ingredient list (there are no ingredients, other than honey).
                    </p>
                    <div class="mt-6 inline-flex items-center gap-3 rounded-2xl border border-gold-500/25 bg-gold-500/5 px-5 py-3">
                        <svg class="w-6 h-6 text-gold-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-5"/><circle cx="12" cy="12" r="9.2"/></svg>
                        <p class="text-xs text-cream/85 leading-snug"><span class="text-gold-300 font-extrabold">Zero</span> preservatives, additives, blenders or thickeners — <span class="font-semibold">ever.</span></p>
                    </div>
                </div>
            </div>

            <!-- Reasons list -->
            <div class="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                <div
                    v-for="(item, i) in reasons"
                    :key="item.title"
                    class="reveal group relative rounded-2xl border border-line bg-white/[0.02] p-6 transition-all duration-500 hover:border-gold-500/35 hover:bg-gold-500/[0.04]"
                    :style="{ '--reveal-delay': `${i * 70}ms` }"
                >
                    <span class="absolute top-4 right-5 font-display text-4xl font-extrabold text-white/[0.05] group-hover:text-gold-500/15 transition-colors duration-500">{{ String(i + 1).padStart(2, '0') }}</span>
                    <svg class="w-7 h-7 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" v-html="item.icon"></svg>
                    <h3 class="mt-3 font-display font-bold text-lg text-cream">{{ item.title }}</h3>
                    <p class="mt-1.5 text-sm text-muted leading-relaxed">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const reasons = [
    {
        title: "100% Pure & Unprocessed",
        text: "No preservatives, artificial additives, blenders or thickeners — the natural taste, aroma and texture, intact.",
        icon: '<path d="M12 3l7 3v5c0 5-3 9.5-7 11-4-1.5-7-6-7-11V6l7-3z"/><path d="M9.5 12.2l1.8 1.8 3.4-3.8"/>',
    },
    {
        title: "Floral Character",
        text: "Harvested from blooming Sidr blossoms — rich sweetness, delicate floral notes and a distinctive natural character.",
        icon: '<circle cx="12" cy="9" r="2.6"/><path d="M12 2.5c1.5 1.6 1.5 3.4 0 5-1.5-1.6-1.5-3.4 0-5zM18.5 6.5c.2 2-1 3.6-2.6 4.4-.6-1.9.5-3.9 2.6-4.4zM5.5 6.5c2.1.5 3.2 2.5 2.6 4.4-1.6-.8-2.8-2.4-2.6-4.4zM12 21.5v-8"/>',
    },
    {
        title: "Single Origin",
        text: "Exclusively from the wild Sidr forests of Karak, Pakistan — a unique botanical and geographical origin.",
        icon: '<path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
    },
    {
        title: "Ethical Harvesting",
        text: "Our European honey bees naturally forage Sidr blossoms while we harvest respectfully, following their natural colony cycle.",
        icon: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8"/>',
    },
    {
        title: "Lab Tested for Purity",
        text: "Every annual harvest is independently tested — backed by ISO 9001, ISO 22000, GMP, HACCP and Halal certifications.",
        icon: '<path d="M9.5 3h5"/><path d="M10.5 3v6L5 18.5A2 2 0 0 0 6.9 21h10.2A2 2 0 0 0 19 18.5L13.5 9V3"/><path d="M7.5 14h9"/>',
    },
    {
        title: "Carefully Packed",
        text: "Hygienically packed in airtight premium glass jars to preserve freshness, aroma and distinctive taste.",
        icon: '<rect x="7" y="8" width="10" height="12" rx="2"/><path d="M9.5 8V6a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 6v2"/>',
    },
    {
        title: "Fast, Safe Delivery",
        text: "Every order is carefully packed and delivered quickly across Pakistan — backed by a 14-day return policy.",
        icon: '<path d="M3 7h11v10H3zM14 10h4l3 3v4h-7"/><circle cx="7" cy="17" r="1.6"/><circle cx="17.5" cy="17" r="1.6"/>',
    },
];
</script>
