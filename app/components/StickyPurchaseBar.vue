<template>
    <div
        v-if="!isCartOpen"
        class="fixed bottom-0 left-0 right-0 bg-white shadow-2xl p-4 border-t md:hidden z-40 transition-all duration-300"
    >
        <div class="flex items-center justify-between max-w-2xl mx-auto gap-3">
            <!-- Price -->
            <div class="min-w-[100px]">
                <span class="text-xs text-gray-500">Price</span>
                <div class="text-xl font-bold text-gray-900">
                    <template v-if="selectedSize.price">
                        Rs. {{ selectedSize.price.toLocaleString() }}
                    </template>
                    <template v-else>Contact us</template>
                </div>
            </div>

            <!-- Size Selector -->
            <div class="flex-1">
                <select
                    v-model="selectedSize"
                    class="w-full border border-gray-300 rounded-xl px-3 py-3 text-sm font-medium focus:outline-none focus:border-amber-500"
                >
                    <option
                        v-for="option in sizeOptions"
                        :key="option.label"
                        :value="option"
                    >
                        {{ option.label }} —
                        {{
                            option.price
                                ? `Rs. ${option.price.toLocaleString()}`
                                : "Custom"
                        }}
                    </option>
                </select>
            </div>

            <!-- Buttons -->
            <div class="flex gap-2">
                <button
                    @click="addToCart"
                    class="bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-xl font-semibold transition whitespace-nowrap"
                >
                    {{ selectedSize.price ? "Add" : "Inquire" }}
                </button>
                <button
                    @click="contactWhatsApp"
                    class="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-semibold transition"
                >
                    📞
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "~/stores/cart";

const { showToast } = useToast();
const cartStore = useCartStore();

const sizeOptions = [
    { label: "450g", weight: 450, price: 2500 },
    { label: "450g x2", weight: 900, price: 4800 },
    { label: "450g x3", weight: 1350, price: 7000 },
    { label: "5kg", weight: 5000, price: 22000 },
    { label: "10kg", weight: 10000, price: 45000 },
    { label: "Custom Order", weight: "custom", price: null },
];

const selectedSize = ref(sizeOptions[0]);

const props = defineProps({
    isCartOpen: { type: Boolean, default: false },
});

function addToCart() {
    if (selectedSize.value.weight === "custom") {
        contactWhatsApp();
        return;
    }
    const product = {
        id: `sidr-honey-${selectedSize.value.weight}g`,
        name: `Sidr Honey ${selectedSize.value.label}`,
        price: selectedSize.value.price,
        weight: selectedSize.value.weight,
    };

    cartStore.addToCart(product, 1);
    showToast(`${product.name} added to cart!`);
}

function contactWhatsApp() {
    const phone = "923311116915";
    const message = encodeURIComponent(
        `Interested in ${selectedSize.value.label} Sidr Honey`,
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
</script>
