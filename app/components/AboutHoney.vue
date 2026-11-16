<template>
    <section id="about" class="relative bg-ink py-16 md:py-24 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <!-- Image side -->
            <div class="relative reveal">
                <div class="absolute -inset-6 rounded-[2.5rem]" style="background: radial-gradient(ellipse at center, rgba(212,160,23,0.13), transparent 65%);" aria-hidden="true"></div>
                <div class="relative overflow-hidden rounded-3xl gold-ring">
                    <NuxtImg
                        src="/honey-banner.jpeg"
                        alt="Raw Sidr honey drizzling from a wooden dipper"
                        class="w-full h-[420px] sm:h-[540px] object-cover"
                        width="1056"
                        height="1300"
                        sizes="(max-width: 768px) 100vw, 540px"
                        format="webp"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"></div>
                    <p class="absolute bottom-5 left-6 right-6 font-display italic text-gold-200/90 text-sm sm:text-base">
                        “Every jar carries the scent of a forest that blooms for only a few weeks a year.”
                    </p>
                </div>
                <!-- Floating stat chip -->
                <div class="absolute -right-3 sm:-right-6 top-8 rounded-2xl border border-gold-500/30 bg-black/70 backdrop-blur-md px-4 py-3 shadow-card-dark">
                    <p class="font-display text-2xl font-extrabold text-gold-gradient">100%</p>
                    <p class="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted font-bold">Raw &amp; Unheated</p>
                </div>
            </div>

            <!-- Content -->
            <div class="reveal" style="--reveal-delay: 140ms">
                <span class="kicker">About Our Honey</span>
                <h2 class="mt-4 font-display font-bold text-cream text-3xl sm:text-5xl tracking-tight leading-[1.08]">
                    From Karak's Wild Forests,<br /><span class="text-gold-gradient italic">To Your Table.</span>
                </h2>
                <p class="mt-5 text-muted leading-relaxed">
                    SDR Honey is sourced exclusively from the wild Sidr (Ziziphus spina-christi) forests of Karak, Pakistan — harvested during the brief Sidr flowering season, when our European honey bees gather nectar from blossoms that bloom nowhere else on earth quite like this.
                </p>

                <div class="mt-8 grid sm:grid-cols-2 gap-5">
                    <div v-for="item in highlights" :key="item.title" class="flex items-start gap-3">
                        <span class="shrink-0 mt-0.5 w-9 h-9 rounded-xl border border-gold-500/30 bg-gold-500/10 flex items-center justify-center">
                            <svg class="w-5 h-5 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" v-html="item.icon"></svg>
                        </span>
                        <span>
                            <h3 class="font-bold text-cream text-sm">{{ item.title }}</h3>
                            <p class="mt-1 text-xs text-muted leading-relaxed">{{ item.text }}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const highlights = [
    {
        title: "Single Authentic Origin",
        text: "Pure Sidr honey sourced directly from the wild Sidr forests of Karak, Pakistan.",
        icon: '<path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/>',
    },
    {
        title: "Premium Quality",
        text: "Hygienically packed in airtight glass to lock in freshness, aroma and texture.",
        icon: '<path d="M12 3l7 3v5c0 5-3 9.5-7 11-4-1.5-7-6-7-11V6l7-3z"/><path d="M9.5 12.2l1.8 1.8 3.4-3.8"/>',
    },
    {
        title: "Independently Lab Tested",
        text: "Every harvest verified for purity and authenticity before a single jar is sealed.",
        icon: '<path d="M9.5 3h5"/><path d="M10.5 3v6L5 18.5A2 2 0 0 0 6.9 21h10.2A2 2 0 0 0 19 18.5L13.5 9V3"/><path d="M7.5 14h9"/>',
    },
    {
        title: "Ethically Harvested",
        text: "Bee welfare first — harvested only after the honey has naturally ripened in the hive.",
        icon: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8"/>',
    },
];
</script>
