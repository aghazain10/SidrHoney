<template>
    <div v-if="showCart" class="fixed inset-0 z-[100] flex">
        <!-- Overlay -->
        <div class="flex-1 bg-black/70 backdrop-blur-sm" @click="closeCart"></div>

        <!-- Drawer -->
        <div class="w-full max-w-md bg-[#14100b] border-l border-gold-500/20 shadow-card-dark flex flex-col h-full text-cream">
            <!-- Header -->
            <div class="p-6 border-b border-gold-500/15 flex items-center justify-between">
                <h2 class="font-display text-2xl font-bold text-cream">Your <span class="text-gold-gradient">Cart</span></h2>
                <button
                    @click="closeCart"
                    class="p-2 text-muted hover:text-gold-300 transition"
                    aria-label="Close cart"
                >
                    ✕
                </button>
            </div>

            <!-- Cart Items -->
            <div class="flex-1 overflow-y-auto p-6 space-y-6">
                <div v-if="cart.cartItems.length" class="space-y-6">
                    <div
                        v-for="item in cart.cartItems"
                        :key="item.id"
                        class="flex justify-between items-start border-b border-gold-500/15 pb-4"
                    >
                        <div>
                            <h3 class="font-semibold">{{ item.name }}</h3>
                            <p class="text-sm text-muted">
                                Qty: {{ item.quantity }}
                            </p>
                        </div>
                        <div class="text-right">
                            <p class="font-semibold text-gold-300">
                                Rs {{ item.price * item.quantity }}
                            </p>
                            <button
                                @click="cart.removeFromCart(item.id)"
                                class="text-[11px] uppercase tracking-widest text-red-400/80 mt-1.5 hover:text-red-300 transition"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 text-muted"><p class="font-display text-xl text-cream/70">Your cart is empty.</p><p class="text-xs mt-2">Add a jar of liquid gold — your body will thank you.</p></div>
            </div>

            <!-- Footer -->
            <div class="p-6 border-t border-gold-500/15 mt-auto">
                <div class="flex justify-between text-xl font-extrabold mb-6 text-cream">
                    <span>Total</span>
                    <span>Rs {{ cart.total() }}</span>
                </div>

                <div class="flex gap-3">
                    <button
                        @click="cart.clearCart"
                        class="flex-1 border border-line text-muted hover:text-cream hover:border-gold-500/40 py-3 rounded-xl transition font-semibold"
                    >
                        Clear Cart
                    </button>
                    <NuxtLink
                        to="/checkout"
                        @click="closeCart"
                        class="flex-1 text-center text-[#241300] font-extrabold py-3 rounded-xl transition hover:-translate-y-0.5 bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-gold-sm"
                    >
                        Checkout
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();
const showCart = ref(false);

function openCart() {
    showCart.value = true;
}

function closeCart() {
    showCart.value = false;
}

defineExpose({ openCart, closeCart, showCart });
</script>
