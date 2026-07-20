<template>
    <section
        id="shop"
        class="bg-white py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
    >
        <!-- Product Image -->
        <ImageSlider
            :images="[
                { src: '/honey-product-1.jpeg', alt: 'Sidr Honey Jar' },
                {
                    src: '/honey-product-2.jpeg',
                    alt: 'Sidr Honey Jar Side View',
                },
                {
                    src: '/honey-product-3.jpeg',
                    alt: 'Sidr Honey Jar Front View',
                },
                { src: '/sdr-honey-banner.jpeg', alt: 'Sidr Honey Texture' },
            ]"
            :desktop-visible="1"
            :mobile-visible="1"
        />

        <!-- Product Details -->
        <div>
            <h2 class="text-3xl font-bold text-gray-900">Premium Sidr Honey</h2>
            <p class="text-yellow-500 text-xl mt-2">★★★★★</p>
            <p class="text-gray-600 mt-4">
                Rich, natural, and sustainably harvested honey straight from
                Sidr trees.
            </p>

            <!-- Quantity Selector -->
            <div class="mt-6">
                <p class="text-gray-700 font-medium mb-3">Select Quantity</p>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <button
                        v-for="option in options"
                        :key="option.label"
                        @click="selectOption(option)"
                        :class="[
                            'px-3 py-3 rounded-xl border text-center transition',
                            selectedOption.label === option.label
                                ? 'bg-amber-500 border-amber-500 text-white shadow'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-amber-50',
                        ]"
                    >
                        <span class="block font-semibold text-sm">
                            {{ option.label }}
                        </span>
                        <span
                            class="block text-xs mt-0.5"
                            :class="
                                selectedOption.label === option.label
                                    ? 'text-white/90'
                                    : 'text-gray-500'
                            "
                        >
                            {{
                                option.price
                                    ? `Rs. ${option.price.toLocaleString()}`
                                    : "Contact us"
                            }}
                        </span>
                    </button>
                </div>
            </div>

            <!-- Price -->
            <p class="mt-6 text-lg font-semibold text-gray-900">
                <template v-if="selectedOption.price">
                    Price: Rs. {{ selectedOption.price.toLocaleString() }}
                </template>
                <template v-else>
                    Custom pricing — send us your requirements
                </template>
            </p>

            <!-- Add to Cart -->
            <button
                @click="handleAddToCart"
                class="mt-6 bg-amber-500 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-600"
            >
                {{
                    selectedOption.price
                        ? "Add to Cart"
                        : "Request Custom Order"
                }}
            </button>
        </div>

        <!-- Custom Order Modal -->
        <div
            v-if="showModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
            <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Custom Order Request
                </h3>
                <form @submit.prevent="submitCustomOrder">
                    <label class="block mb-2 text-gray-700">Your Name</label>
                    <input
                        type="text"
                        v-model="customOrder.name"
                        class="w-full border rounded-lg px-4 py-2 mb-4"
                        required
                    />
                    <label class="block mb-2 text-gray-700">Your Email</label>
                    <input
                        type="email"
                        v-model="customOrder.email"
                        class="w-full border rounded-lg px-4 py-2 mb-4"
                        required
                    />

                    <label class="block mb-2 text-gray-700"
                        >Quantity (kg)</label
                    >
                    <input
                        type="number"
                        v-model.number="customOrder.quantity"
                        class="w-full border rounded-lg px-4 py-2 mb-4"
                        required
                    />

                    <label class="block mb-2 text-gray-700">Message</label>
                    <textarea
                        v-model="customOrder.message"
                        class="w-full border rounded-lg px-4 py-2 mb-4"
                    ></textarea>

                    <div class="flex justify-end gap-4">
                        <button
                            type="button"
                            @click="showModal = false"
                            class="px-4 py-2 border rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="px-4 py-2 bg-amber-500 text-white rounded-lg"
                        >
                            Send Query
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();
const showModal = ref(false);

const options = [
    { label: "450g", weight: 450, price: 2500 },
    { label: "450g x2", weight: 900, price: 4800 },
    { label: "450g x3", weight: 1350, price: 7000 },
    { label: "5kg", weight: 5000, price: 22000 },
    { label: "10kg", weight: 10000, price: 45000 },
    { label: "Custom Order", weight: "custom", price: null },
];

const selectedOption = ref(options[0]);

function selectOption(option) {
    if (option.weight === "custom") {
        showModal.value = true;
    } else {
        selectedOption.value = option;
    }
}

const { showToast } = useToast();

function handleAddToCart() {
    if (selectedOption.value.weight === "custom") {
        showModal.value = true;
        return;
    }
    const product = {
        id: `sidr-honey-${selectedOption.value.weight}g`,
        name: `Sidr Honey ${selectedOption.value.label}`,
        price: selectedOption.value.price,
    };
    cart.addToCart(product, 1);
    showToast(`${product.name} added to cart!`);
}

const customOrder = ref({ name: "", quantity: "", message: "", email: "" });
const config = useRuntimeConfig();

async function submitCustomOrder() {
    try {
        const response = await fetch(`${config.public.apiBase}/api/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: customOrder.value.name,
                quantity: customOrder.value.quantity,
                message: customOrder.value.message,
                email: customOrder.value.email,
            }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            alert("Your custom order has been submitted successfully!");
            showModal.value = false;
            customOrder.value = {
                name: "",
                quantity: "",
                message: "",
                email: "",
            };
        } else {
            alert(data.message || "Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error(error);
        alert("Error submitting order.");
    }
}
</script>
