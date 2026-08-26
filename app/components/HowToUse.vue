<template>
    <section id="how-to-use" class="bg-gray-50 py-16">
        <div class="max-w-4xl mx-auto px-6">
            <h2 class="text-3xl font-bold text-center text-gray-900">
                How to Use Sidr Honey
            </h2>
            <p class="mt-2 text-center text-gray-600">
                Simple ways to enjoy nature's goodness every day
            </p>

            <div class="mt-12 grid sm:grid-cols-2 gap-6">
                <div
                    v-for="(tip, index) in tips"
                    :key="index"
                    class="flex items-start gap-4 bg-white rounded-lg shadow p-5"
                >
                    <div
                        class="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg"
                    >
                        {{ index + 1 }}
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-1.5">
                        {{ tip }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const tips = [
    "Enjoy a spoonful of Sidr Honey directly.",
    "Add it to warm tea, milk, water, or herbal tea for natural sweetness and flavor.",
    "For added benefits, mix 5g of honey with a glass of Organic Aprico Himalayan Shilajit.",
    "Store in a cool, dry place away from direct sunlight.",
];
</script>
