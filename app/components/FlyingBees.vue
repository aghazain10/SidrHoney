<template>
    <!-- Decorative honey bees drifting through the section. Purely
         ornamental: pointer-events-none, aria-hidden. -->
    <div
        class="flying-bees pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
    >
        <div
            v-for="(bee, i) in bees"
            :key="i"
            class="bee absolute"
            :class="[`bee-path-${(i % pathCount) + 1}`, bee.hideOnMobile ? 'hidden sm:block' : '']"
            :style="{
                '--dur': bee.dur + 's',
                '--delay': bee.delay + 's',
                width: bee.size + 'px',
                height: bee.size * 0.72 + 'px',
                top: bee.top + '%',
                left: bee.left + '%',
            }"
        >
            <svg
                viewBox="0 0 72 52"
                class="bee-bob h-full w-full overflow-visible"
                :style="{ '--bob-dur': bee.bobDur + 's' }"
            >
                <defs>
                    <linearGradient :id="`beeGold-${uid}-${i}`" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stop-color="#F6D87A" />
                        <stop offset="0.5" stop-color="#E9BE5A" />
                        <stop offset="1" stop-color="#B4770E" />
                    </linearGradient>
                </defs>

                <!-- wings (flutter) -->
                <ellipse class="bee-wing bee-wing-l" cx="25" cy="13" rx="11.5" ry="6.2" fill="rgba(255,255,255,0.72)" stroke="#FBF3D9" stroke-opacity="0.6" stroke-width="0.8" transform="rotate(-16 25 13)" />
                <ellipse class="bee-wing bee-wing-r" cx="45" cy="12" rx="12.5" ry="6.8" fill="rgba(255,255,255,0.82)" stroke="#FBF3D9" stroke-opacity="0.6" stroke-width="0.8" transform="rotate(14 45 12)" />

                <!-- stinger -->
                <path d="M20 29.5 L9 32 L20 34.5 Z" fill="#241300" />

                <!-- body -->
                <ellipse :cx="34" :cy="30" rx="17.5" ry="11" :fill="`url(#beeGold-${uid}-${i})`" stroke="#241300" stroke-width="1.6" />
                <!-- stripes -->
                <path d="M26 20.4 C 24.5 27, 24.5 33, 26 39.6" stroke="#241300" stroke-width="4.6" fill="none" stroke-linecap="round" />
                <path d="M35 19 C 33.6 27, 33.6 33, 35 41" stroke="#241300" stroke-width="4.6" fill="none" stroke-linecap="round" />
                <path d="M43.5 20.6 C 42.3 27, 42.3 33, 43.5 39.4" stroke="#241300" stroke-width="4.2" fill="none" stroke-linecap="round" />

                <!-- head -->
                <circle cx="53" cy="28.6" r="7.6" fill="#1a1611" />
                <circle cx="55.6" cy="26.4" r="1.5" fill="#E9BE5A" opacity="0.9" />
                <!-- antennae -->
                <path d="M54.5 21.5 C 55.5 17.5, 58 15, 61 13.5" stroke="#241300" stroke-width="1.5" fill="none" stroke-linecap="round" />
                <path d="M57.5 22.6 C 60 19.5, 63 18.5, 66 18" stroke="#241300" stroke-width="1.5" fill="none" stroke-linecap="round" />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    count: { type: Number, default: 3 },
    startDelay: { type: Number, default: 0 },
    size: { type: Number, default: 46 },
});

const uid = Math.random().toString(36).slice(2, 8);
const pathCount = 3;

// Deterministic pseudo-random per index so SSR and client match
function rand(seed, salt) {
    const x = Math.sin(seed * 127.1 + salt * 311.7) * 43758.5453;
    return x - Math.floor(x);
}

const bees = computed(() =>
    Array.from({ length: props.count }, (_, i) => {
        const r = (salt) => rand(i + 1, salt);
        return {
            size: Math.round(props.size * (0.72 + r(1) * 0.55)),
            dur: Math.round((17 + r(2) * 15 + props.startDelay) * 10) / 10,
            delay: -Math.round(r(3) * 22 * 10) / 10,
            bobDur: Math.round((0.9 + r(4) * 0.7) * 100) / 100,
            top: Math.round(6 + r(5) * 66),
            left: Math.round(2 + r(6) * 80),
            hideOnMobile: i > 0,
        };
    }),
);
</script>

<style scoped>
/* Each path is a closed loop the bee travels (offset-distance 0% → 100%).
   Coordinates are in px; loops are wide enough to sweep a section. */
.bee {
    animation: bee-fly var(--dur, 26s) linear infinite;
    animation-delay: var(--delay, 0s);
    offset-rotate: auto;
    opacity: 0.95;
    will-change: offset-distance;
}
.bee-path-1 {
    offset-path: path("M-80,140 C 120,-30 320,300 560,90 C 760,-60 900,260 1150,60 C 1300,-20 1420,120 1560,40");
}
.bee-path-2 {
    offset-path: path("M1560,240 C 1330,60 1120,360 850,180 C 620,40 430,320 180,170 C 60,102 -40,150 -120,80");
}
.bee-path-3 {
    offset-path: path("M-100,300 C 200,120 380,420 640,230 C 830,90 1010,330 1240,150 C 1380,60 1500,210 1640,120");
}

.bee-bob {
    animation: bee-bob var(--bob-dur, 1.1s) ease-in-out infinite alternate;
}

.bee-wing {
    transform-box: fill-box;
    transform-origin: center bottom;
    animation: wing-flutter 0.24s ease-in-out infinite alternate;
}
.bee-wing-r {
    animation-delay: 0.12s;
}

@keyframes bee-fly {
    from { offset-distance: 0%; }
    to { offset-distance: 100%; }
}
@keyframes bee-bob {
    from { transform: translateY(0); }
    to { transform: translateY(-9px); }
}
@keyframes wing-flutter {
    from { transform: scaleY(1); }
    to { transform: scaleY(0.32); }
}

@media (prefers-reduced-motion: reduce) {
    .bee,
    .bee-bob,
    .bee-wing {
        animation: none !important;
    }
    .bee {
        display: none;
    }
}
</style>
