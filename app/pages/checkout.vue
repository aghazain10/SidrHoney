<template>
    <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-3xl font-bold mb-6">Checkout</h1>

        <!-- Success Summary - Highest Priority -->
        <div
            v-if="orderSuccess"
            class="bg-green-50 border border-green-200 rounded-xl p-8"
        >
            <div class="text-center mb-8">
                <div class="text-6xl mb-4">✅</div>
                <h2 class="text-3xl font-bold text-green-700">
                    Order Placed Successfully!
                </h2>
                <p class="text-green-600 mt-1">Order ID: #{{ orderData.id }}</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-semibold text-lg mb-4 border-b pb-2">
                        Customer Information
                    </h3>
                    <div class="space-y-3">
                        <div><strong>Name:</strong> {{ orderData.name }}</div>
                        <div><strong>Email:</strong> {{ orderData.email }}</div>
                        <div><strong>Phone:</strong> {{ orderData.phone }}</div>
                        <div>
                            <strong>Address:</strong> {{ orderData.address }}
                        </div>
                        <div>
                            <strong>Payment Method:</strong>
                            {{
                                orderData.payment_method === "cod"
                                    ? "Cash on Delivery"
                                    : "Bank Transfer"
                            }}
                        </div>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-semibold text-lg mb-4 border-b pb-2">
                        Order Items
                    </h3>
                    <div class="space-y-4">
                        <div
                            v-for="item in orderData.items"
                            :key="item.id"
                            class="flex justify-between items-center border-b pb-3 last:border-0"
                        >
                            <div>
                                <p class="font-medium">{{ item.name }}</p>
                                <p class="text-sm text-gray-500">
                                    Qty: {{ item.quantity }} × Rs
                                    {{ item.price }}
                                </p>
                            </div>
                            <p class="font-semibold">
                                Rs {{ item.price * item.quantity }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <div class="space-y-2 text-lg">
                    <div class="flex justify-between">
                        <span>Subtotal</span>
                        <span>Rs {{ orderData.subtotal }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Delivery Charges</span>
                        <span>Rs {{ orderData.delivery_charges }}</span>
                    </div>
                    <div
                        class="flex justify-between font-bold text-xl pt-4 border-t"
                    >
                        <span>Total Amount</span>
                        <span>Rs {{ orderData.total }}</span>
                    </div>
                </div>
            </div>

            <button
                @click="goToShop"
                class="mt-8 w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-xl font-semibold text-lg transition"
            >
                Continue Shopping
            </button>
        </div>

        <!-- Empty Cart -->
        <div v-else-if="isCartEmpty" class="text-center py-16">
            <div class="text-6xl mb-6">🛒</div>
            <h2 class="text-2xl font-semibold mb-3">Your Cart is Empty</h2>
            <p class="text-gray-600 mb-8">
                Looks like you haven't added any items yet.
            </p>
            <button
                @click="goToShop"
                class="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition"
            >
                Continue Shopping
            </button>
        </div>

        <!-- Error Message -->
        <div
            v-else-if="errorMessage"
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
        >
            {{ errorMessage }}
        </div>

        <!-- Checkout Form -->
        <form v-else @submit.prevent="submitOrder" class="space-y-5">
            <!-- Your form fields here... (unchanged) -->
            <div>
                <label class="block font-medium mb-1">Full Name</label>
                <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
                />
            </div>

            <div>
                <label class="block font-medium mb-1">Email Address</label>
                <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
                />
            </div>

            <div>
                <label class="block font-medium mb-1">Phone Number</label>
                <input
                    v-model="form.phone"
                    type="tel"
                    required
                    class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
                />
            </div>

            <div>
                <label class="block font-medium mb-1">Delivery Address</label>
                <textarea
                    v-model="form.address"
                    required
                    rows="3"
                    class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
                ></textarea>
            </div>

            <div>
                <label class="block font-medium mb-1">Payment Method</label>
                <select
                    v-model="form.payment_method"
                    required
                    class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
                >
                    <option value="cod">Cash on Delivery</option>
                    <option value="bank">Bank Transfer</option>
                </select>
            </div>

            <button
                type="submit"
                :disabled="loading"
                class="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-xl font-semibold text-lg transition disabled:opacity-70"
            >
                {{ loading ? "Processing Order..." : `Place Order` }}
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCart } from "~/composables/useCart";
import axios from "axios";

const cart = useCart();

const form = ref({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment_method: "cod",
});

const orderSuccess = ref(false);
const orderData = ref(null);
const errorMessage = ref("");
const loading = ref(false);

const isCartEmpty = computed(() => cart.cartItems.value.length === 0);

async function submitOrder() {
    errorMessage.value = "";
    loading.value = true;

    try {
        const payload = {
            ...form.value,
            items: cart.cartItems.value.map((item) => ({
                product_id: item.id || null,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
            })),
        };

        const res = await axios.post(
            "http://127.0.0.1:8000/api/orders",
            payload,
        );

        if (res.data.success) {
            orderData.value = res.data.order;
            orderSuccess.value = true;
            cart.clearCart();
        }
    } catch (error) {
        const response = error.response?.data;
        if (response?.errors) {
            errorMessage.value =
                Object.values(response.errors).flat()[0] ||
                "Please check your information.";
        } else {
            errorMessage.value =
                response?.message || "Something went wrong. Please try again.";
        }
    } finally {
        loading.value = false;
    }
}

function goToShop() {
    window.location.href = "/"; // Change this to your shop page route if needed
}
</script>
