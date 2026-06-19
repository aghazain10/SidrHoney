// app/composables/useCart.ts
import { ref, computed, onMounted } from "vue";

// ✅ Singleton state lives outside the function
const cartItems = ref<any[]>([]);

function addToCart(product: any, quantity: number) {
    const existing = cartItems.value.find((item) => item.id === product.id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cartItems.value.push({ ...product, quantity });
    }
    saveCart();
}

function removeFromCart(productId: string) {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId);
    saveCart();
}

function clearCart() {
    cartItems.value = [];
    saveCart();
}

const total = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
);

function saveCart() {
    if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(cartItems.value));
    }
}

function loadCart() {
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem("cart");
        if (saved) cartItems.value = JSON.parse(saved);
    }
}

onMounted(() => {
    loadCart();
});

// ✅ Always return the same refs
export function useCart() {
    return { cartItems, addToCart, removeFromCart, clearCart, total };
}
