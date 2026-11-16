// Global cart drawer state — lets the navbar open the drawer without
// the drawer living inside the (fixed, backdrop-filtered) navbar element.
export function useCartDrawer() {
    const isOpen = useState("cart-drawer-open", () => false);
    const open = () => (isOpen.value = true);
    const close = () => (isOpen.value = false);
    const toggle = () => (isOpen.value = !isOpen.value);
    return { isOpen, open, close, toggle };
}
