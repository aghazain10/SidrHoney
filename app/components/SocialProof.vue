<template>
    <section id="reviews" class="relative bg-ink py-16 md:py-24 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center reveal">
                <span class="kicker">Loved Nationwide</span>
                <h2 class="mt-4 font-display font-bold text-cream text-3xl sm:text-5xl tracking-tight">
                    The Verdict From <span class="text-gold-gradient italic">Real Tables</span>
                </h2>
            </div>

            <!-- Stats bar -->
            <div class="reveal mt-10 mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gold-500/10 rounded-2xl border border-line bg-white/[0.02] overflow-hidden">
                <div v-for="stat in stats" :key="stat.label" class="px-4 py-6 text-center">
                    <p class="font-display text-2xl sm:text-4xl font-extrabold text-gold-gradient">{{ stat.value }}</p>
                    <p class="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-muted font-bold leading-tight">{{ stat.label }}</p>
                </div>
            </div>
        </div>

        <!-- Review marquee -->
        <div class="relative mt-12 py-2" style="mask-image: linear-gradient(90deg, transparent, black 6%, black 94%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, black 6%, black 94%, transparent);">
            <div class="marquee flex gap-5">
                <article
                    v-for="(review, i) in [...reviews, ...reviews]"
                    :key="i"
                    class="w-[320px] sm:w-[380px] shrink-0 rounded-2xl border border-line bg-card p-6"
                    :aria-hidden="i >= reviews.length ? 'true' : undefined"
                >
                    <div class="flex items-center gap-1 text-gold-400">
                        <svg v-for="s in 5" :key="s" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z"/></svg>
                    </div>
                    <p class="mt-4 text-cream/85 leading-relaxed text-sm">“{{ review.text }}”</p>
                    <div class="mt-5 flex items-center gap-3 border-t border-line pt-4">
                        <span class="w-11 h-11 rounded-full flex items-center justify-center text-xs font-extrabold text-[#241300]" :style="{ background: review.hue }">{{ review.initials }}</span>
                        <div>
                            <p class="font-bold text-cream text-sm">{{ review.name }}</p>
                            <p class="text-[11px] text-muted">Verified buyer · {{ review.city }}</p>
                        </div>
                        <svg class="w-5 h-5 ml-auto text-gold-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.5 5C7 7 5.5 9.3 5.5 12.6 5.5 15.5 7.4 18 10.3 18c2.5 0 4.2-1.7 4.2-4 0-2.1-1.5-3.7-3.7-3.7-.4 0-.9.1-1.2.3.4-1.7 1.9-3.6 3.7-4.6L9.5 5zm9 0C16 7 14.5 9.3 14.5 12.6c0 2.9 1.9 5.4 4.8 5.4 2.5 0 4.2-1.7 4.2-4 0-2.1-1.5-3.7-3.7-3.7-.4 0-.9.1-1.2.3.4-1.7 1.9-3.6 3.7-4.6L18.5 5z"/></svg>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
const stats = [
    { value: "4.9/5", label: "Average Rating" },
    { value: "2,300+", label: "Jars Delivered" },
    { value: "1,800+", label: "Happy Reviews" },
    { value: "14-Day", label: "Return Policy" },
];

const reviews = [
    { name: "Ali Khan", city: "Lahore", initials: "AK", hue: "linear-gradient(140deg,#F6D87A,#D4A017)", text: "Best honey I've ever tasted! The flavor is rich and authentic. Delivery was quick and packaging was excellent." },
    { name: "Sara Ahmed", city: "Karachi", initials: "SA", hue: "linear-gradient(140deg,#F6E3AC,#B4770E)", text: "I was amazed by the purity of this honey. It's raw, natural, and tastes incredible. Highly recommended!" },
    { name: "Ahmed Raza", city: "Islamabad", initials: "AR", hue: "linear-gradient(140deg,#E9BE5A,#8A5A00)", text: "Pure Sidr honey with a unique taste. I've tried many brands, but this one stands out. Will order again!" },
    { name: "Zainab Malik", city: "Rawalpindi", initials: "ZM", hue: "linear-gradient(140deg,#FBF3D9,#D4A017)", text: "The aroma when you open the jar is unbelievable. Genuine Karak Sidr — my whole family has switched." },
    { name: "Usman Tariq", city: "Faisalabad", initials: "UT", hue: "linear-gradient(140deg,#F6D87A,#B4770E)", text: "Ordering for the third time. Consistent quality every single batch. Worth every rupee." },
    { name: "Hina Farooq", city: "Peshawar", initials: "HF", hue: "linear-gradient(140deg,#E9BE5A,#D4A017)", text: "Gifting these jars this Eid — the packaging feels truly premium. Lab-tested purity is a big plus." },
];
</script>
