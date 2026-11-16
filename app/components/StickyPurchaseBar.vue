<template>
    <div
        v-if="!isCartOpen"
        class="fixed bottom-0 left-0 right-0 bg-[#12100b]/95 backdrop-blur-xl border-t border-gold-500/20 p-3 z-40 md:hidden"
    >
        <div class="flex items-center justify-between max-w-2xl mx-auto gap-3">
            <!-- Price -->
            <div class="min-w-[100px]">
                <span class="text-[9px] uppercase tracking-[0.2em] text-muted font-bold">Price</span>
                <div class="text-lg font-extrabold text-gold-300">
                    <template v-if="selectedSize.price">
                        Rs. {{ selectedSize.price.toLocaleString() }}
                    </template>
                    <template v-else>Contact us</template>
                </div>
            </div>

            <!-- Size Selector -->
            <div class="flex-1">
                <label for="size-select" class="sr-only">Select size</label>
                <select
                    id="size-select"
                    v-model="selectedSize"
                    class="w-full border border-gold-500/25 rounded-xl px-3 py-3 text-sm font-semibold bg-white/[0.04] text-cream focus:outline-none focus:border-gold-500/60"
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
                    class="bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 hover:from-gold-200 hover:to-gold-600 text-[#241300] px-5 py-3 rounded-xl font-extrabold transition whitespace-nowrap shadow-gold-sm"
                >
                    {{ selectedSize.price ? "Add" : "Inquire" }}
                </button>
                <button
                    @click="contactWhatsApp"
                    class="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-semibold transition"
                    aria-label="Order via WhatsApp"
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
