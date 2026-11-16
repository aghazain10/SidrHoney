// Restore the persisted cart on the client, after SSR payload hydration.
import { useCartStore } from "~/stores/cart";

export default defineNuxtPlugin(() => {
    const cart = useCartStore();
    cart.loadCart();
});
