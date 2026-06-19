<template>
    <div v-if="showCart" class="fixed inset-0 z-50 flex">
        <!-- Overlay -->
        <div class="w-1/5 bg-black bg-opacity-50" @click="closeCart"></div>

        <!-- Drawer -->
        <div class="w-4/5 bg-white shadow-lg p-6 relative flex flex-col">
            <button
                @click="closeCart"
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

            <h2 class="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>

            <!-- Cart Items -->
            <div
                v-if="cart.cartItems.length"
                class="flex-1 overflow-y-auto space-y-4"
            >
                <div
                    v-for="item in cart.cartItems"
                    :key="item.id"
                    class="flex justify-between items-center border-b pb-2"
                >
                    <div>
                        <h3 class="font-semibold text-gray-800">
                            {{ item.name }}
                        </h3>
                        <p class="text-sm text-gray-600">
                            Qty: {{ item.quantity }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="font-semibold text-gray-900">
                            Rs {{ item.price * item.quantity }}
                        </p>
                        <button
                            @click="cart.removeFromCart(item.id)"
                            class="text-red-500 hover:text-red-700"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>

            <!-- Empty Cart -->
            <div
                v-else
                class="flex-1 flex items-center justify-center text-gray-600"
            >
                Your cart is empty.
            </div>

            <!-- Footer -->
            <div class="mt-6 border-t pt-4">
                <p class="text-lg font-semibold text-gray-900">
                    Total: Rs {{ cart.total() }}
                </p>
                <div class="flex space-x-4 mt-4">
                    <button
                        @click="cart.clearCart"
                        class="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                    >
                        Clear Cart
                    </button>
                    <button
                        class="bg-amber-500 text-white px-6 py-2 rounded hover:bg-amber-600"
                    >
                        Checkout
                    </button>
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
