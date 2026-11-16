<template>
    <div class="min-h-screen bg-ink text-cream">
        <ProductSchema />
        <NuxtPage />
        <CartDrawer />

        <Transition name="fade">
            <div
                v-if="message"
                class="fixed bottom-24 md:bottom-6 left-1/2 -translate-x-1/2 bg-gold-500 text-[#241300] text-sm font-extrabold px-6 py-3 rounded-full shadow-gold-sm z-[60]"
            >
                {{ message }}
            </div>
        </Transition>
    </div>
</template>

<script setup>
import CartDrawer from "~/components/CartDrawer.vue";

const { message } = useToast();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translate(-50%, 12px);
}
</style>
