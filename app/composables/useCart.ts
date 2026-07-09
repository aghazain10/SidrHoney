// app/composables/useCart.ts
import { ref, computed } from "vue";

const cartItems = ref<any[]>([]);

function saveCart() {
    if (import.meta.client) {
        localStorage.setItem("cart", JSON.stringify(cartItems.value));
    }
}

function loadCart() {
    if (import.meta.client) {
        const saved = localStorage.getItem("cart");
        if (saved) cartItems.value = JSON.parse(saved);
    }
}

// ✅ Hydrate immediately when composable is imported
if (import.meta.client) {
    loadCart();
}

export function useCart() {
    const addToCart = (product: any, quantity: number) => {
        const existing = cartItems.value.find((item) => item.id === product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cartItems.value.push({ ...product, quantity });
        }
        saveCart();
    };

    const removeFromCart = (productId: string) => {
        cartItems.value = cartItems.value.filter(
            (item) => item.id !== productId,
        );
        saveCart();
    };

    const clearCart = () => {
        cartItems.value = [];
        saveCart();
    };

    const total = computed(() =>
        cartItems.value.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
        ),
    );

    return { cartItems, addToCart, removeFromCart, clearCart, total };
}
