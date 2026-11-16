<template>
    <!-- Overlay -->
    <Transition name="cart-overlay">
        <div
            v-if="showCart"
            class="fixed inset-0 z-[100] bg-black/75"
            @click="closeCart"
        ></div>
    </Transition>

    <!-- Drawer (transform-only transition — composited, no repaint lag) -->
    <Transition name="cart-drawer">
        <aside
            v-if="showCart"
            class="fixed z-[101] right-0 top-0 h-full w-full max-w-md bg-[#14100b] border-l border-gold-500/20 shadow-card-dark flex flex-col text-cream"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
        >
            <!-- Header -->
            <div class="p-6 border-b border-gold-500/15 flex items-center justify-between">
                <h2 class="font-display text-2xl font-bold text-cream">Your <span class="text-gold-gradient">Cart</span></h2>
                <button
                    @click="closeCart"
                    class="p-2 rounded-full text-muted hover:text-gold-300 hover:bg-gold-500/10 transition"
                    aria-label="Close cart"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"><path d="M6 18L18 6M6 6l12 12"/></svg>
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
                            <h3 class="font-semibold text-cream">{{ item.name }}</h3>
                            <p class="text-sm text-muted">
                                Qty: {{ item.quantity }}
                            </p>
                        </div>
                        <div class="text-right">
                            <p class="font-semibold text-gold-300">
                                Rs {{ (item.price * item.quantity).toLocaleString() }}
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

                <div v-else class="text-center py-12 text-muted">
                    <p class="font-display text-xl text-cream/70">Your cart is empty.</p>
                    <p class="text-xs mt-2">Add a jar of liquid gold — your body will thank you.</p>
                </div>
            </div>

            <!-- Footer -->
            <div class="p-6 border-t border-gold-500/15 mt-auto">
                <div class="flex justify-between text-xl font-extrabold mb-6 text-cream">
                    <span>Total</span>
                    <span class="text-gold-gradient">Rs {{ cart.total().toLocaleString() }}</span>
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
        </aside>
    </Transition>
</template>

<script setup>
import { watch, onUnmounted } from "vue";
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();
const { isOpen: showCart, close: closeCart } = useCartDrawer();

// Lock body scroll while the drawer is open (prevents scroll jank)
watch(showCart, (open) => {
    if (import.meta.client) {
        document.body.style.overflow = open ? "hidden" : "";
    }
});

// Escape key closes the drawer
function onKeydown(e) {
    if (e.key === "Escape") closeCart();
}
if (import.meta.client) {
    window.addEventListener("keydown", onKeydown);
}

onUnmounted(() => {
    if (import.meta.client) {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeydown);
    }
});
</script>

<style scoped>
.cart-overlay-enter-active,
.cart-overlay-leave-active {
    transition: opacity 0.28s ease;
}
.cart-overlay-enter-from,
.cart-overlay-leave-to {
    opacity: 0;
}

.cart-drawer-enter-active,
.cart-drawer-leave-active {
    transition: transform 0.34s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
}
.cart-drawer-enter-from,
.cart-drawer-leave-to {
    transform: translateX(100%);
}
</style>
