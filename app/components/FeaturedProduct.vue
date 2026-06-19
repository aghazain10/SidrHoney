<template>
    <section
        id="shop"
        class="bg-white py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
    >
        <!-- Product Image -->
        <img
            src="/shilajit.jpg"
            alt="Sidr Honey Jar"
            class="w-full h-96 object-cover rounded-lg shadow-md"
        />

        <!-- Product Details -->
        <div>
            <h2 class="text-3xl font-bold text-gray-900">Premium Sidr Honey</h2>
            <p class="text-yellow-500 text-xl mt-2">★★★★★</p>
            <p class="text-gray-600 mt-4">
                Rich, natural, and sustainably harvested honey straight from
                Sidr trees.
            </p>

            <!-- Quantity Selector (Inline Buttons) -->
            <div class="mt-6">
                <p class="text-gray-700 font-medium mb-2">Select Quantity</p>
                <div class="flex gap-4">
                    <button
                        v-for="option in quantities"
                        :key="option.value"
                        @click="selectQuantity(option.value)"
                        :class="[
                            'px-4 py-2 rounded-lg border',
                            selectedQuantity === option.value
                                ? 'bg-amber-500 text-white border-amber-500'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-amber-50',
                        ]"
                    >
                        {{ option.label }}
                    </button>
                </div>
            </div>

            <!-- Price -->
            <p class="mt-4 text-lg font-semibold text-gray-900">
                Price: Rs. {{ price }}
            </p>

            <!-- Add to Cart -->
            <button
                class="mt-6 bg-amber-500 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-600"
            >
                Add to Cart
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

                    <label class="block mb-2 text-gray-700"
                        >Quantity (kg)</label
                    >
                    <input
                        type="number"
                        v-model="customOrder.quantity"
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
import { ref, computed } from "vue";

const selectedQuantity = ref(1000);
const showModal = ref(false);

const quantities = [
    { label: "1kg", value: 1000 },
    { label: "5kg", value: 5000 },
    { label: "10kg", value: 10000 },
    { label: "Custom Order", value: "custom" },
];

const price = computed(() => {
    if (selectedQuantity.value === 1000) return 4800;
    if (selectedQuantity.value === 5000) return 22000;
    if (selectedQuantity.value === 10000) return 42000;
    return "—";
});

function selectQuantity(value) {
    if (value === "custom") {
        showModal.value = true;
    } else {
        selectedQuantity.value = value;
    }
}

const customOrder = ref({
    name: "",
    quantity: "",
    message: "",
});

function submitCustomOrder() {
    alert(
        `Custom order submitted:\nName: ${customOrder.value.name}\nQuantity: ${customOrder.value.quantity}kg\nMessage: ${customOrder.value.message}`,
    );
    showModal.value = false;
    customOrder.value = { name: "", quantity: "", message: "" };
}
</script>
