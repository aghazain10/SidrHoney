<template>
    <div class="min-h-screen bg-white text-neutral-900">
        <NuxtPage />
        <Transition name="fade">
            <div
                v-if="message"
                class="fixed bottom-24 md:bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg z-[60]"
            >
                {{ message }}
            </div>
        </Transition>
    </div>
</template>

<script setup>
const { message } = useToast();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
