<template>
    <div
        v-if="!isCartOpen"
        class="fixed bottom-0 left-0 right-0 bg-white shadow-2xl p-4 border-t md:hidden z-40 transition-all duration-300"
    >
        <div class="flex items-center justify-between max-w-2xl mx-auto gap-3">
            <!-- Price -->
            <div class="min-w-[90px]">
                <span class="text-xs text-gray-500">Price</span>
                <div class="text-2xl font-bold text-gray-900">
                    Rs. {{ selectedPrice }}
                </div>
            </div>

            <!-- Size Selector -->
            <div class="flex-1">
                <select
                    v-model="selectedSize"
                    class="w-full border border-gray-300 rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:border-amber-500"
                >
                    <option
                        v-for="option in sizeOptions"
                        :key="option.weight"
                        :value="option"
                    >
                        {{ option.label }} — Rs. {{ option.price }}
                    </option>
                </select>
            </div>

            <!-- Buttons -->
            <div class="flex gap-2">
                <button
                    @click="addToCart"
                    class="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                    Add to Cart
                </button>
                <button
                    @click="contactWhatsApp"
                    class="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition"
                >
                    📞
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useCartStore } from "~/stores/cart";
const { showToast } = useToast();
const cartStore = useCartStore();

const sizeOptions = [
    { weight: 450, label: "450g", price: 2500 },
    { weight: 1000, label: "1kg", price: 4800 },
    { weight: 5000, label: "5kg", price: 22000 },
];

const selectedSize = ref(sizeOptions[0]);
const selectedPrice = computed(() => selectedSize.value.price);

const props = defineProps({
    isCartOpen: { type: Boolean, default: false },
});

function addToCart() {
    const product = {
        id: `sidr-honey-${selectedSize.value.weight}kg`,
        name: `Sidr Honey ${selectedSize.value.label}`,
        price: selectedSize.value.price,
        weight: selectedSize.value.weight,
    };

    cartStore.addToCart(product, 1);
    showToast(`${product.name} added to cart!`);
}

function contactWhatsApp() {
    const phone = "923311116915"; // Change to your number
    const message = encodeURIComponent(
        `Interested in ${selectedSize.value.label} Sidr Honey`,
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
</script>
