<template>
    <div v-if="showCart" class="fixed inset-0 z-[100] flex">
        <!-- Overlay -->
        <div class="flex-1 bg-black bg-opacity-60" @click="closeCart"></div>

        <!-- Drawer -->
        <div class="w-full max-w-md bg-white shadow-2xl flex flex-col h-full">
            <!-- Header -->
            <div class="p-6 border-b flex items-center justify-between">
                <h2 class="text-2xl font-bold text-gray-900">Your Cart</h2>
                <button
                    @click="closeCart"
                    class="text-gray-600 hover:text-red-500"
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
                        class="flex justify-between items-start border-b pb-4"
                    >
                        <div>
                            <h3 class="font-semibold">{{ item.name }}</h3>
                            <p class="text-sm text-gray-600">
                                Qty: {{ item.quantity }}
                            </p>
                        </div>
                        <div class="text-right">
                            <p class="font-semibold">
                                Rs {{ item.price * item.quantity }}
                            </p>
                            <button
                                @click="cart.removeFromCart(item.id)"
                                class="text-red-500 text-sm mt-1 hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 text-gray-500">
                    Your cart is empty.
                </div>
            </div>

            <!-- Footer -->
            <div class="p-6 border-t mt-auto">
                <div class="flex justify-between text-xl font-semibold mb-6">
                    <span>Total</span>
                    <span>Rs {{ cart.total() }}</span>
                </div>

                <div class="flex gap-3">
                    <button
                        @click="cart.clearCart"
                        class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-300"
                    >
                        Clear Cart
                    </button>
                    <NuxtLink
                        to="/checkout"
                        @click="closeCart"
                        class="flex-1 bg-amber-500 text-white py-3 rounded-xl text-center hover:bg-amber-600 font-semibold"
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
