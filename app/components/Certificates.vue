<template>
    <section id="certificates" class="relative bg-onyx py-16 md:py-24 border-t border-line overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center reveal">
                <span class="kicker">Certified Purity</span>
                <h2 class="mt-4 font-display font-bold text-cream text-3xl sm:text-5xl tracking-tight">
                    Sealed by <span class="text-gold-gradient italic">Authorities</span>
                </h2>
                <p class="mt-3 text-muted max-w-md mx-auto">Independently tested and certified — every harvest, every batch, no exceptions.</p>
            </div>

            <!-- Badge row -->
            <div class="reveal mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                <div v-for="badge in badges" :key="badge.alt" class="group flex flex-col items-center gap-2">
                    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-gold-500/25 bg-gold-500/5 flex items-center justify-center p-3 transition-all duration-500 group-hover:border-gold-500/60 group-hover:shadow-gold-sm group-hover:-translate-y-1">
                        <NuxtImg
                            :src="badge.src"
                            :alt="badge.alt"
                            class="w-full h-full object-contain"
                            width="96"
                            height="96"
                            format="webp"
                            loading="lazy"
                        />
                    </div>
                    <p class="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em] text-muted group-hover:text-gold-300 transition-colors">{{ badge.label }}</p>
                </div>
            </div>

            <!-- Certificate carousel -->
            <div class="reveal mt-14">
                <ImageSlider
                    :images="certificates"
                    :desktop-visible="3"
                    :mobile-visible="1"
                >
                    <template #default="{ image }">
                        <button
                            class="group w-full h-full rounded-2xl border border-line bg-card p-4 text-left transition-all duration-500 hover:border-gold-500/35 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                            @click="openModal(image)"
                            :aria-label="`View ${image.title}`"
                        >
                            <div class="rounded-xl overflow-hidden bg-[#f8f6f0] h-44 sm:h-52 flex items-center justify-center">
                                <NuxtImg
                                    :src="image.src"
                                    :alt="image.title"
                                    class="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                    width="600"
                                    height="400"
                                    sizes="(max-width: 768px) 90vw, 320px"
                                    format="webp"
                                    loading="lazy"
                                />
                            </div>
                            <div class="mt-4 flex items-center justify-between gap-2">
                                <h3 class="font-bold text-sm text-cream/90">{{ image.title }}</h3>
                                <span class="text-[10px] font-extrabold uppercase tracking-widest text-gold-500 group-hover:text-gold-300 transition-colors whitespace-nowrap">View →</span>
                            </div>
                        </button>
                    </template>
                </ImageSlider>
            </div>
        </div>

        <!-- Modal -->
        <div
            v-if="showModal"
            class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            @click.self="showModal = false"
            role="dialog"
            aria-modal="true"
        >
            <div class="card-dark max-w-3xl w-full p-5 sm:p-7 relative">
                <button
                    @click="showModal = false"
                    class="absolute top-4 right-4 p-2 rounded-full text-muted hover:text-gold-300 hover:bg-gold-500/10 transition"
                    aria-label="Close"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"><path d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
                <div class="rounded-xl bg-[#f8f6f0] overflow-hidden">
                    <NuxtImg
                        :src="selectedCert.src"
                        :alt="selectedCert.title"
                        class="w-full max-h-[70vh] object-contain mx-auto"
                        width="800"
                        height="600"
                        format="webp"
                        loading="lazy"
                    />
                </div>
                <h3 class="mt-4 text-center font-display font-bold text-lg text-cream">{{ selectedCert.title }}</h3>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import ImageSlider from "~/components/ImageSlider.vue";

const badges = [
    { src: "/GMP.png", alt: "GMP Certified", label: "GMP" },
    { src: "/HACCP.png", alt: "HACCP Certified", label: "HACCP" },
    { src: "/Halal_100.png", alt: "100% Halal Certified", label: "Halal" },
    { src: "/ISO_9001.png", alt: "ISO 9001 Certified", label: "ISO 9001" },
    { src: "/ISO_22000.png", alt: "ISO 22000 Certified", label: "ISO 22000" },
    { src: "/pcsir.png", alt: "PCSIR Tested", label: "PCSIR" },
];

const certificates = ref([
    { title: "GMP Certificate", src: "/gmp-certificate.jpg" },
    { title: "HACCP Certificate", src: "/haccp-certificate.jpg" },
    { title: "Halal Certificate", src: "/halal-certificate.jpg" },
]);

const showModal = ref(false);
const selectedCert = ref({});

function openModal(cert) {
    selectedCert.value = cert;
    showModal.value = true;
}
</script>
