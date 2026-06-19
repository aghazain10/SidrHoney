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
            <img src="/gmp.png" alt="GMP Certified" class="w-24 h-24 mx-auto" />
            <img
                src="/gmp.png"
                alt="HACCP Certified"
                class="w-24 h-24 mx-auto"
            />
            <img
                src="/gmp.png"
                alt="Halal Certified"
                class="w-24 h-24 mx-auto"
            />
            <img src="/gmp.png" alt="ISO Certified" class="w-24 h-24 mx-auto" />
            <!-- Add more badges -->
        </div>

        <!-- Certificates Carousel -->
        <div class="relative mt-12 max-w-6xl mx-auto px-6">
            <div class="flex overflow-x-hidden">
                <div
                    v-for="(cert, index) in visibleCerts"
                    :key="index"
                    class="min-w-[300px] md:min-w-[350px] lg:min-w-[380px] bg-gray-50 rounded-lg shadow p-4 mx-2 flex-shrink-0 cursor-pointer"
                    @click="openModal(cert)"
                >
                    <img
                        :src="cert.image"
                        :alt="cert.title"
                        class="w-full h-56 object-contain rounded-md"
                    />
                    <h3 class="text-center mt-4 font-semibold text-gray-900">
                        {{ cert.title }}
                    </h3>
                </div>
            </div>

            <!-- Navigation Arrows -->
            <button
                @click="prevSlide"
                class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-500 text-white p-2 rounded-full shadow hover:bg-amber-600"
            >
                ‹
            </button>
            <button
                @click="nextSlide"
                class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-500 text-white p-2 rounded-full shadow hover:bg-amber-600"
            >
                ›
            </button>
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
                <!-- Close Button -->
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

                <!-- Enlarged Certificate -->
                <img
                    :src="selectedCert.image"
                    :alt="selectedCert.title"
                    class="w-full max-h-[80vh] object-contain rounded-md mx-auto"
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
    { title: "GMP Certificate", image: "/certificates.png" },
    { title: "HACCP Certificate", image: "/certificates.png" },
    { title: "Halal Certificate", image: "/certificates.png" },
    { title: "ISO Certificate", image: "/certificates.png" },
    // Add more certificates
]);

const currentIndex = ref(0);
const visibleCerts = ref(
    certificates.value.slice(currentIndex.value, currentIndex.value + 3),
);

function updateVisibleCerts() {
    visibleCerts.value = certificates.value.slice(
        currentIndex.value,
        currentIndex.value + 3,
    );
}

function nextSlide() {
    if (currentIndex.value < certificates.value.length - 3) {
        currentIndex.value++;
        updateVisibleCerts();
    }
}

function prevSlide() {
    if (currentIndex.value > 0) {
        currentIndex.value--;
        updateVisibleCerts();
    }
}

const showModal = ref(false);
const selectedCert = ref({});

function openModal(cert) {
    selectedCert.value = cert;
    showModal.value = true;
}
</script>
