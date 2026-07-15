<template>
    <section id="certificates" class="bg-white py-16">
        <h2 class="text-3xl font-bold text-center text-gray-900">
            Our Certifications
        </h2>
        <p class="mt-2 text-center text-gray-600">
            Trusted and recognized worldwide
        </p>

        <!-- Badges Grid -->
        <div
            class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6"
        >
            <NuxtImg
                src="/gmp.png"
                alt="GMP Certified"
                class="w-24 h-24 mx-auto"
                width="96"
                height="96"
                format="webp"
                loading="lazy"
            />
            <NuxtImg
                src="/iso.png"
                alt="ISO Certified"
                class="w-24 h-24 mx-auto"
                width="96"
                height="96"
                format="webp"
                loading="lazy"
            />
            <NuxtImg
                src="/haccp.png"
                alt="HACCP Certified"
                class="w-24 h-24 mx-auto"
                width="96"
                height="96"
                format="webp"
                loading="lazy"
            />
            <NuxtImg
                src="/halal.png"
                alt="Halal Certified"
                class="w-24 h-24 mx-auto"
                width="96"
                height="96"
                format="webp"
                loading="lazy"
            />
        </div>

        <!-- Certificates Carousel (using shared ImageSlider) -->
        <div class="mt-12 max-w-6xl mx-auto px-6">
            <ImageSlider
                :images="certificates"
                :desktop-visible="3"
                :mobile-visible="1"
            >
                <template #default="{ image }">
                    <div
                        class="bg-gray-50 rounded-lg shadow p-4 cursor-pointer h-full"
                        @click="openModal(image)"
                    >
                        <NuxtImg
                            :src="image.src"
                            :alt="image.title"
                            class="w-full h-56 object-contain rounded-md"
                            width="600"
                            height="400"
                            sizes="(max-width: 768px) 100vw, 400px"
                            format="webp"
                            loading="lazy"
                        />
                        <h3
                            class="text-center mt-4 font-semibold text-gray-900"
                        >
                            {{ image.title }}
                        </h3>
                    </div>
                </template>
            </ImageSlider>
        </div>

        <!-- Modal -->
        <div
            v-if="showModal"
            class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            @click.self="showModal = false"
        >
            <div
                class="bg-white rounded-lg shadow-lg max-w-3xl w-full relative p-6"
            >
                <button
                    @click="showModal = false"
                    class="absolute top-4 right-4 text-gray-700 hover:text-amber-600"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <NuxtImg
                    :src="selectedCert.src"
                    :alt="selectedCert.title"
                    class="w-full max-h-[80vh] object-contain rounded-md mx-auto"
                    width="800"
                    height="600"
                    format="webp"
                    loading="lazy"
                />
                <h3 class="mt-4 text-center font-semibold text-gray-900">
                    {{ selectedCert.title }}
                </h3>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

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
