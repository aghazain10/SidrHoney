// stores/cart.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
    const cartItems = ref<
        { id: string; name: string; price: number; quantity: number }[]
    >([]);

    function addToCart(
        product: { id: string; name: string; price: number },
        quantity = 1,
    ) {
        const existing = cartItems.value.find((i) => i.id === product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cartItems.value.push({ ...product, quantity });
        }
        saveCart();
    }

    function removeFromCart(productId: string) {
        cartItems.value = cartItems.value.filter((i) => i.id !== productId);
        saveCart();
    }

    function clearCart() {
        cartItems.value = [];
        saveCart();
    }

    const total = () =>
        cartItems.value.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
        );

    const itemCount = () =>
        cartItems.value.reduce((sum, item) => sum + item.quantity, 0);

    function saveCart() {
        if (typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cartItems.value));
        }
    }

    function loadCart() {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("cart");
            if (saved) {
                try {
                    cartItems.value = JSON.parse(saved);
                } catch {
                    cartItems.value = [];
                }
            }
        }
    }

    // load on first use (safe to call multiple times)
    loadCart();

    return {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        itemCount,
        saveCart,
        loadCart,
    };
});
