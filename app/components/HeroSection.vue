<template>
    <section
        class="relative min-h-[100svh] flex flex-col justify-center overflow-hidden honeycomb-bg bg-ink grain"
    >
        <!-- Ambient glows -->
        <div class="pointer-events-none absolute -top-32 right-[-10%] w-[46rem] h-[46rem] rounded-full pulse-glow"
             style="background: radial-gradient(circle, rgba(212,160,23,0.22) 0%, rgba(212,160,23,0.06) 42%, transparent 70%);"></div>
        <div class="pointer-events-none absolute bottom-[-20%] left-[-15%] w-[40rem] h-[40rem] rounded-full"
             style="background: radial-gradient(circle, rgba(180,119,14,0.14) 0%, transparent 65%);"></div>

        <!-- Honey ooze dripping from the top edge -->
        <svg
            class="absolute top-[88px] md:top-[96px] left-0 w-full pointer-events-none"
            viewBox="0 0 1440 64"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="ooze" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#B4770E" />
                    <stop offset="0.45" stop-color="#D4A017" />
                    <stop offset="1" stop-color="#F6D87A" />
                </linearGradient>
            </defs>
            <path
                fill="url(#ooze)"
                opacity="0.92"
                d="M0 0 H1440 V10
                   C1380 10 1362 34 1300 34 C1245 34 1236 12 1170 12 C1100 12 1085 46 1010 46 C940 46 930 14 860 14 C795 14 780 28 720 28 C655 28 640 10 570 10 C505 10 490 52 415 52 C345 52 330 16 260 16 C195 16 175 38 110 38 C60 38 40 18 0 18 Z"
            />
        </svg>

        <!-- Falling honey drops -->
        <div class="absolute top-[110px] left-0 w-full h-72 pointer-events-none hidden md:block" aria-hidden="true">
            <svg class="absolute left-[57%] w-6 h-64 overflow-visible" viewBox="0 0 24 260">
                <path class="drip drip-1" d="M12 0c3.4 6.2 5 11 5 15.4A5 5 0 0 1 12 20.4a5 5 0 0 1-5-5C7 11 8.6 6.2 12 0z" fill="url(#dropGrad)"/>
                <path class="drip drip-3" d="M12 0c3.4 6.2 5 11 5 15.4A5 5 0 0 1 12 20.4a5 5 0 0 1-5-5C7 11 8.6 6.2 12 0z" fill="url(#dropGrad)"/>
                <defs>
                    <linearGradient id="dropGrad" x1="12" y1="0" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F6D87A"/><stop offset="1" stop-color="#B4770E"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg class="absolute left-[71%] w-5 h-64 overflow-visible" viewBox="0 0 24 260">
                <path class="drip drip-2" d="M12 0c3.4 6.2 5 11 5 15.4A5 5 0 0 1 12 20.4a5 5 0 0 1-5-5C7 11 8.6 6.2 12 0z" fill="url(#dropGrad2)"/>
                <defs>
                    <linearGradient id="dropGrad2" x1="12" y1="0" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F6D87A"/><stop offset="1" stop-color="#8A5A00"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg class="absolute left-[86%] w-4 h-64 overflow-visible" viewBox="0 0 24 260">
                <path class="drip drip-3" style="animation-delay: 1.7s" d="M12 0c3.4 6.2 5 11 5 15.4A5 5 0 0 1 12 20.4a5 5 0 0 1-5-5C7 11 8.6 6.2 12 0z" fill="url(#dropGrad3)"/>
                <defs>
                    <linearGradient id="dropGrad3" x1="12" y1="0" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBF3D9"/><stop offset="1" stop-color="#D4A017"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 md:pt-36 pb-20 lg:pb-16 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <!-- ══════════ COPY ══════════ -->
            <div class="lg:col-span-6 text-center lg:text-left">
                <!-- Badge -->
                <div class="hero-rise inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 backdrop-blur-sm pl-1.5 pr-4 py-1.5" style="--rise-delay: 80ms">
                    <span class="flex w-6 h-6 items-center justify-center rounded-full bg-gold-500/15">
                        <svg class="w-3.5 h-3.5 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </span>
                    <span class="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-gold-300">Lab-Tested · ISO 9001 &amp; Halal Certified</span>
                </div>

                <h1
                    class="hero-rise mt-6 font-display font-extrabold text-cream leading-[1.02] text-[2.6rem] sm:text-6xl xl:text-[4.35rem] tracking-tight"
                    style="--rise-delay: 180ms"
                >
                    Liquid Gold,<br />
                    <span class="text-gold-gradient italic">Straight from<br class="hidden sm:block" /> the Wild.</span>
                </h1>

                <p
                    class="hero-rise mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
                    style="--rise-delay: 280ms"
                >
                    100% raw, single-origin Sidr honey from the untouched forests of
                    Karak — <span class="text-cream/90 font-semibold">never heated, never blended,</span>
                    never adulterated. Just nature, sealed in glass.
                </p>

                <!-- CTAs -->
                <div class="hero-rise mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4" style="--rise-delay: 380ms">
                    <a href="#shop" class="btn-gold text-sm sm:text-base w-full sm:w-auto justify-center group">
                        Taste the Purity — Rs. 2,500
                        <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
                    </a>
                    <a href="https://wa.me/923311116915" target="_blank" rel="noopener" class="btn-outline text-sm sm:text-base w-full sm:w-auto justify-center">
                        <svg class="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.83 14.12c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.13-4.9-4.32-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z"/></svg>
                        WhatsApp Order
                    </a>
                </div>

                <!-- Trust row -->
                <div class="hero-rise mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6" style="--rise-delay: 480ms">
                    <div class="flex items-center gap-3">
                        <div class="flex -space-x-2.5">
                            <span v-for="(initials, i) in avatars" :key="i"
                                  class="w-9 h-9 rounded-full border-2 border-ink flex items-center justify-center text-[10px] font-extrabold text-[#241300]"
                                  :style="{ background: avatarHues[i] }">{{ initials }}</span>
                        </div>
                        <div class="text-left">
                            <div class="flex items-center gap-1.5">
                                <div class="flex text-gold-400">
                                    <svg v-for="s in 5" :key="s" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z"/></svg>
                                </div>
                                <span class="text-xs font-extrabold text-cream">4.9/5</span>
                            </div>
                            <p class="text-[11px] text-muted">2,300+ jars delivered</p>
                        </div>
                    </div>
                    <span class="hidden sm:block h-8 w-px bg-gold-500/15"></span>
                    <p class="text-[11px] uppercase tracking-[0.2em] text-muted font-bold">Raw · Single Origin<br class="hidden sm:block" /> <span class="text-gold-400">Est. Karak</span></p>
                </div>
            </div>

            <!-- ══════════ PRODUCT VISUAL ══════════ -->
            <div class="lg:col-span-6 relative flex justify-center">
                <div class="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px]">
                    <!-- Halo behind jar -->
                    <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                        <div class="w-[115%] aspect-square rounded-full" style="background: radial-gradient(circle, rgba(212,160,23,0.3) 0%, rgba(212,160,23,0.07) 45%, transparent 70%); filter: blur(6px);"></div>
                    </div>

                    <!-- Arch-framed product photo -->
                    <div class="hero-rise relative" style="--rise-delay: 250ms">
                    <div class="relative floaty">
                        <div class="relative overflow-hidden rounded-t-[999px] rounded-b-[2rem] gold-ring">
                            <img
                                src="/honey-product-1.jpeg"
                                alt="SDR Honey — premium raw Sidr honey jar with its box, harvested from the wild forests of Karak"
                                class="w-full aspect-[4/5.4] object-cover object-[50%_38%]"
                                width="1056"
                                height="1300"
                                fetchpriority="high"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10"></div>
                            <!-- Inner label chip -->
                            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/55 backdrop-blur-md border border-gold-500/30 px-4 py-1.5 whitespace-nowrap">
                                <span class="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
                                <span class="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-gold-200">Premium Sidr · 450g</span>
                            </div>
                        </div>

                        <!-- Rotating seal -->
                        <div class="absolute -top-6 -right-3 sm:-right-8 w-24 sm:w-32 lg:w-36">
                            <div class="relative">
                                <svg viewBox="0 0 120 120" class="spin-slow w-full drop-shadow-[0_0_18px_rgba(212,160,23,0.45)]" aria-hidden="true">
                                    <defs>
                                        <path id="sealCircle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                                    </defs>
                                    <circle cx="60" cy="60" r="59" fill="#14100b" stroke="#D4A017" stroke-width="1.6" stroke-opacity="0.9"/>
                                    <circle cx="60" cy="60" r="30" fill="none" stroke="#D4A017" stroke-width="1" stroke-opacity="0.5" stroke-dasharray="3 4"/>
                                    <text font-size="10.2" letter-spacing="2.35" fill="#E9BE5A" font-family="Manrope, sans-serif" font-weight="800">
                                        <textPath href="#sealCircle">100% RAW &amp; PURE • SINGLE ORIGIN • KARAK PAKISTAN •&#160;</textPath>
                                    </text>
                                </svg>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <svg class="w-6 h-6 sm:w-8 sm:h-8 text-gold-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8 8 6 11.6 6 14.5A6 6 0 0 0 18 14.5C18 11.6 16 8 12 2z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <!-- Floating chips -->
                    <div class="hero-rise absolute left-[-4%] sm:left-[-8%] top-[22%]" style="--rise-delay: 420ms">
                        <div class="floaty-slow flex items-center gap-2 rounded-2xl bg-black/60 backdrop-blur-md border border-gold-500/25 px-3 py-2 shadow-card-dark">
                            <svg class="w-4 h-4 text-gold-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5-3.5 7-8 7-12l-7-4-7 4c0 4 2 8.5 7 12z"/></svg>
                            <span class="text-[10px] sm:text-[11px] font-bold text-cream/90 leading-tight">Never Heated<br /><span class="text-gold-300">Raw &amp; Alive</span></span>
                        </div>
                    </div>
                    <div class="hero-rise absolute right-[-2%] sm:right-[-6%] bottom-[26%]" style="--rise-delay: 520ms">
                        <div class="floaty flex items-center gap-2 rounded-2xl bg-black/60 backdrop-blur-md border border-gold-500/25 px-3 py-2 shadow-card-dark" style="animation-delay: 1.6s;">
                            <svg class="w-4 h-4 text-gold-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-5"/><circle cx="12" cy="12" r="9"/></svg>
                            <span class="text-[10px] sm:text-[11px] font-bold text-cream/90 leading-tight">Lab Verified<br /><span class="text-gold-300">Every Harvest</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll cue -->
        <a href="#shop" class="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted hover:text-gold-300 transition" aria-label="Scroll to shop">
            <span class="text-[10px] uppercase tracking-[0.32em] font-bold">Discover</span>
            <span class="relative w-px h-10 bg-gold-500/20 overflow-hidden">
                <span class="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-[scroll-line_1.8s_ease-in-out_infinite]"></span>
            </span>
        </a>
    </section>
</template>

<script setup>
const avatars = ["AK", "SA", "AR", "ZM"];
const avatarHues = [
    "linear-gradient(140deg,#F6D87A,#D4A017)",
    "linear-gradient(140deg,#F6E3AC,#B4770E)",
    "linear-gradient(140deg,#E9BE5A,#8A5A00)",
    "linear-gradient(140deg,#FBF3D9,#D4A017)",
];
</script>

<style scoped>
@keyframes scroll-line {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(280%); }
}
</style>
