export const useCart = () => {
    const cart = useState("cart", () => [] as any[]);

    const addItem = (item: any) => {
        cart.value.push({
            ...item,
            id: Date.now(), // simple unique id
            quantity: 1,
        });
        // Optional: Show toast
        console.log("Added to cart:", item);
    };

    const removeItem = (id: number) => {
        cart.value = cart.value.filter((item) => item.id !== id);
    };

    return {
        cart: readonly(cart),
        addItem,
        removeItem,
        itemCount: computed(() => cart.value.length),
    };
};
