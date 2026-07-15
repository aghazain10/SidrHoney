<template>
    <nav class="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div
            class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center"
        >
            <!-- Logo -->
            <h1 class="text-xl font-bold text-amber-600">
                <span class="font-aspire">Sdr</span>
                <span> Honey</span>
            </h1>

            <!-- Desktop Menu -->
            <ul class="hidden md:flex space-x-6 text-gray-700 font-medium">
                <li>
                    <a href="#shop" class="hover:text-amber-600">Shop Honey</a>
                </li>
                <li>
                    <a href="#whyus" class="hover:text-amber-600">Why Us</a>
                </li>
                <li>
                    <a href="#reviews" class="hover:text-amber-600">Reviews</a>
                </li>
                <li>
                    <a href="#about" class="hover:text-amber-600">About Us</a>
                </li>
                <li><a href="#faq" class="hover:text-amber-600">FAQs</a></li>
            </ul>

            <!-- Right Side: Cart + Hamburger -->
            <div class="flex items-center space-x-4">
                <!-- Cart Icon -->
                <div class="relative cursor-pointer" @click="openCart">
                    <svg
                        class="w-7 h-7 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <span
                        v-if="cart.itemCount()"
                        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2"
                    >
                        {{ cart.itemCount() }}
                    </span>
                </div>

                <!-- Mobile Hamburger -->
                <button
                    @click="showMenu = true"
                    class="md:hidden text-gray-700 focus:outline-none"
                >
                    <svg
                        class="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Drawer -->
        <div v-if="showMenu" class="fixed inset-0 z-50 flex">
            <div
                class="w-1/5 bg-black bg-opacity-50"
                @click="showMenu = false"
            ></div>
            <div class="w-4/5 bg-white shadow-lg p-6 relative">
                <button
                    @click="showMenu = false"
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

                <ul class="space-y-6 text-gray-700 font-medium mt-10">
                    <li>
                        <a
                            href="#shop"
                            @click="showMenu = false"
                            class="block hover:text-amber-600"
                            >Shop Honey</a
                        >
                    </li>
                    <li>
                        <a
                            href="#whyus"
                            @click="showMenu = false"
                            class="block hover:text-amber-600"
                            >Why Us</a
                        >
                    </li>
                    <li>
                        <a
                            href="#reviews"
                            @click="showMenu = false"
                            class="block hover:text-amber-600"
                            >Reviews</a
                        >
                    </li>
                    <li>
                        <a
                            href="#about"
                            @click="showMenu = false"
                            class="block hover:text-amber-600"
                            >About Us</a
                        >
                    </li>
                    <li>
                        <a
                            href="#faq"
                            @click="showMenu = false"
                            class="block hover:text-amber-600"
                            >FAQs</a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <!-- Cart Drawer component (mounted here) -->
        <CartDrawer ref="cartDrawer" />
    </nav>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "~/stores/cart";
import CartDrawer from "~/components/CartDrawer.vue";

const showMenu = ref(false);
const cart = useCartStore();

const cartDrawer = ref(null);

function openCart() {
    // open the drawer exposed method
    if (cartDrawer.value && typeof cartDrawer.value.openCart === "function") {
        cartDrawer.value.openCart();
    }
}
</script>
