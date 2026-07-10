<template>
    <div class="relative">
        <div class="overflow-hidden">
            <div
                class="flex transition-transform duration-300 ease-in-out"
                :style="{
                    transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                }"
            >
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="flex-shrink-0 px-2 box-border"
                    :style="{ width: `${100 / visibleCount}%` }"
                >
                    <slot :image="image" :index="index">
                        <!-- default rendering if no slot is provided -->
                        <img
                            :src="image.src"
                            :alt="image.alt || ''"
                            :class="imageClass"
                        />
                    </slot>
                </div>
            </div>
        </div>

        <button
            v-if="images.length > visibleCount"
            @click="prev"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow text-gray-700 z-10"
            aria-label="Previous image"
        >
            ‹
        </button>
        <button
            v-if="images.length > visibleCount"
            @click="next"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow text-gray-700 z-10"
            aria-label="Next image"
        >
            ›
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    images: { type: Array, required: true },
    desktopVisible: { type: Number, default: 1 },
    mobileVisible: { type: Number, default: 1 },
    imageClass: {
        type: String,
        default: "w-full h-96 object-cover rounded-lg shadow-md",
    },
});

const currentIndex = ref(0);
const visibleCount = ref(props.desktopVisible);

function updateVisibleCount() {
    const isMobile = window.innerWidth < 768;
    visibleCount.value = isMobile ? props.mobileVisible : props.desktopVisible;
    currentIndex.value = 0;
}

onMounted(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
});
onUnmounted(() => {
    window.removeEventListener("resize", updateVisibleCount);
});

function maxIndex() {
    return Math.max(0, props.images.length - visibleCount.value);
}

function next() {
    currentIndex.value =
        currentIndex.value >= maxIndex() ? 0 : currentIndex.value + 1;
}
function prev() {
    currentIndex.value =
        currentIndex.value <= 0 ? maxIndex() : currentIndex.value - 1;
}
</script>
