<template>
    <footer class="relative bg-[#0e0c08] text-cream border-t border-gold-500/15">
        <!-- Top golden hairline -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px" style="background: linear-gradient(90deg, transparent, #d4a017 30%, #f6d87a 50%, #d4a017 70%, transparent);"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/5">
                <!-- Brand -->
                <div class="lg:col-span-4">
                    <NuxtLink to="/" class="inline-flex items-center gap-3">
                        <img src="/sdhoney.png" alt="SDR Honey logo" class="h-14 w-14 object-contain" width="56" height="56" />
                        <span>
                            <span class="block font-display font-bold text-2xl text-cream">SDR <span class="text-gold-gradient">HONEY</span></span>
                            <span class="block text-[9px] uppercase tracking-[0.3em] text-muted mt-0.5">Organic Aprico · Karak</span>
                        </span>
                    </NuxtLink>
                    <p class="mt-5 text-sm text-muted leading-relaxed max-w-sm">
                        Authentic single-origin Sidr honey from the wild forests of Karak, Pakistan — raw, unheated and lab-tested, backed by ISO 9001, ISO 22000, GMP, HACCP and Halal certifications.
                    </p>
                    <div class="flex gap-3 mt-6">
                        <a
                            v-for="social in socials"
                            :key="social.label"
                            :href="social.href"
                            target="_blank"
                            rel="noopener"
                            class="w-10 h-10 flex items-center justify-center rounded-full border border-gold-500/25 bg-gold-500/5 text-gold-400 hover:bg-gold-500 hover:text-[#241300] hover:border-gold-500 transition-all duration-300"
                            :aria-label="social.label"
                        >
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path :d="social.path" /></svg>
                        </a>
                    </div>
                </div>

                <!-- Quick links -->
                <div class="lg:col-span-2">
                    <h4 class="text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold-400">Explore</h4>
                    <ul class="mt-4 space-y-2.5 text-sm text-muted">
                        <li v-for="link in quickLinks" :key="link.to"><a :href="link.to" class="hover:text-gold-300 transition">{{ link.label }}</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div class="lg:col-span-3">
                    <h4 class="text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold-400">Get in Touch</h4>
                    <ul class="mt-4 space-y-3 text-sm text-muted">
                        <li><a href="mailto:info@organicaprico.com" class="hover:text-gold-300 transition">info@organicaprico.com</a></li>
                        <li><a href="https://wa.me/923311116915" class="hover:text-gold-300 transition">+92 331 1116915</a></li>
                        <li class="text-xs leading-relaxed text-muted/80">Wild Sidr Forests, Karak<br />Khyber Pakhtunkhwa, Pakistan</li>
                    </ul>
                    <div class="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted/70">
                        <svg class="w-4 h-4 text-gold-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5-3.5 7-8 7-12l-7-4-7 4c0 4 2 8.5 7 12z"/></svg>
                        ISO 9001 · GMP · HACCP · Halal
                    </div>
                </div>

                <!-- Newsletter -->
                <div class="lg:col-span-3">
                    <h4 class="text-[11px] font-extrabold uppercase tracking-[0.28em] text-gold-400">The Hive Letter</h4>
                    <p class="mt-4 text-xs text-muted leading-relaxed">Harvest reports, honey wisdom and subscriber-only offers — once a month, never more.</p>
                    <form class="mt-4 flex rounded-full overflow-hidden border border-gold-500/25 focus-within:border-gold-500/60 transition-colors" @submit.prevent="subscribe">
                        <label class="sr-only" for="newsletter-email">Email address</label>
                        <input
                            id="newsletter-email"
                            v-model="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            class="w-full bg-white/[0.03] px-5 py-3.5 text-sm text-cream placeholder-muted/60 outline-none"
                        />
                        <button type="submit" class="shrink-0 px-5 bg-gold-500 text-[#241300] font-extrabold text-sm hover:bg-gold-400 transition-colors" aria-label="Subscribe">
                            →
                        </button>
                    </form>
                    <p v-if="subscribed" class="mt-2 text-xs font-bold text-gold-300">Welcome to the hive! Watch your inbox.</p>
                </div>
            </div>

            <!-- Bottom bar -->
            <div class="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-muted/70">
                <p>© 2026 Sdr Honey by Organic Aprico. All rights reserved.</p>
                <p class="tracking-wide">Handcrafted with care in the wild forests of <span class="text-gold-500">Karak, Pakistan</span>.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from "vue";

const { showToast } = useToast();
const email = ref("");
const subscribed = ref(false);

function subscribe() {
    subscribed.value = true;
    showToast("Welcome to The Hive Letter!");
    email.value = "";
}

const quickLinks = [
    { to: "/#shop", label: "Shop Honey" },
    { to: "/#whyus", label: "Why Us" },
    { to: "/#reviews", label: "Reviews" },
    { to: "/#about", label: "Our Story" },
    { to: "/#faq", label: "FAQs" },
    { to: "/blog", label: "Journal" },
];

const socials = [
    { label: "Instagram", href: "https://instagram.com/sdrhoney", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" },
    { label: "Facebook", href: "https://facebook.com/sdrhoney", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" },
    { label: "WhatsApp", href: "https://wa.me/923311116915", path: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.83 14.12c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.13-4.9-4.32-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" },
];
</script>
