<template>
    <!-- Hand-drawn luxury scene: SDR-style honey bottle spurting honey
         onto wild honeycomb. Pure SVG — crisp at any size, zero credits. -->
    <div class="relative w-full h-full">
        <svg viewBox="0 0 480 560" class="w-full h-full" role="img"
             aria-label="Premium Sidr honey bottle spurting golden honey onto a fresh honeycomb, with honey bees flying around">
            <defs>
                <!-- honey liquid -->
                <linearGradient id="honeyFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#EFC75F" />
                    <stop offset="0.22" stop-color="#DFA92C" />
                    <stop offset="0.55" stop-color="#B87A0F" />
                    <stop offset="0.85" stop-color="#7A4E05" />
                    <stop offset="1" stop-color="#4A2E02" />
                </linearGradient>
                <linearGradient id="honeyStream" x1="150" y1="95" x2="330" y2="360" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FBE98A" />
                    <stop offset="0.35" stop-color="#E9BE5A" />
                    <stop offset="0.75" stop-color="#D4A017" />
                    <stop offset="1" stop-color="#B4770E" />
                </linearGradient>
                <radialGradient id="poolGlow" cx="0.5" cy="0.42" r="0.55">
                    <stop offset="0" stop-color="#FBE98A" />
                    <stop offset="0.35" stop-color="#E9BE5A" />
                    <stop offset="0.75" stop-color="#B4770E" stop-opacity="0.9" />
                    <stop offset="1" stop-color="#5C3D00" stop-opacity="0" />
                </radialGradient>
                <radialGradient id="cellA" cx="0.4" cy="0.35" r="0.75">
                    <stop offset="0" stop-color="#F2CB63" />
                    <stop offset="0.55" stop-color="#C98F16" />
                    <stop offset="1" stop-color="#573500" />
                </radialGradient>
                <radialGradient id="cellB" cx="0.4" cy="0.35" r="0.75">
                    <stop offset="0" stop-color="#E9BE5A" />
                    <stop offset="0.6" stop-color="#B4770E" />
                    <stop offset="1" stop-color="#553500" />
                </radialGradient>
                <radialGradient id="cellDark" cx="0.42" cy="0.36" r="0.8">
                    <stop offset="0" stop-color="#8A5A00" />
                    <stop offset="1" stop-color="#33200a" />
                </radialGradient>
                <!-- glass -->
                <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stop-color="#241a10" />
                    <stop offset="0.22" stop-color="#3d2f1d" />
                    <stop offset="0.42" stop-color="#1a120a" />
                    <stop offset="0.75" stop-color="#33261a" />
                    <stop offset="1" stop-color="#140d07" />
                </linearGradient>
                <linearGradient id="cap" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stop-color="#0c0a08" />
                    <stop offset="0.3" stop-color="#2e2a26" />
                    <stop offset="0.5" stop-color="#3f3a33" />
                    <stop offset="0.72" stop-color="#201c18" />
                    <stop offset="1" stop-color="#080706" />
                </linearGradient>
                <clipPath id="bottleClip">
                    <path d="M118 132 C112 170 96 190 96 240 L96 372 C96 416 132 436 150 436 C168 436 204 416 204 372 L204 240 C204 190 188 170 182 132 Z" />
                </clipPath>
            </defs>

            <!-- ════════ Ground slab ════════ -->
            <ellipse cx="235" cy="492" rx="225" ry="26" fill="#0f0b07" />
            <ellipse cx="235" cy="486" rx="225" ry="22" fill="#1b1510" stroke="#e9be5a" stroke-opacity="0.14" />

            <!-- ════════ Honeycomb slab ════════ -->
            <g transform="translate(238,236)">
                <!-- slab body -->
                <path d="M18 34 L96 0 L196 26 L212 128 L150 208 L34 200 L-8 110 Z"
                      fill="#241708" stroke="#e9be5a" stroke-opacity="0.35" stroke-width="2" />
                <!-- hex cells -->
                <g stroke="#0d0803" stroke-width="3" stroke-linejoin="round">
                    <path d="M52 52 L76 38 L100 52 L100 80 L76 94 L52 80 Z" fill="url(#cellA)" />
                    <path d="M112 44 L136 30 L160 44 L160 72 L136 86 L112 72 Z" fill="url(#cellB)" />
                    <path d="M84 100 L108 86 L132 100 L132 128 L108 142 L84 128 Z" fill="url(#cellA)" />
                    <path d="M146 84 L168 72 L190 84 L190 110 L168 122 L146 110 Z" fill="url(#cellDark)" />
                    <path d="M28 92 L50 79 L72 92 L72 118 L50 131 L28 118 Z" fill="url(#cellB)" />
                    <path d="M18 138 L40 125 L62 138 L62 164 L40 177 L18 164 Z" fill="url(#cellDark)" />
                    <path d="M74 146 L96 133 L118 146 L118 172 L96 185 L74 172 Z" fill="url(#cellB)" />
                    <path d="M130 132 L152 119 L174 132 L174 158 L152 171 L130 158 Z" fill="url(#cellA)" />
                </g>
                <!-- glistening top pool where the stream lands -->
                <ellipse cx="122" cy="34" rx="74" ry="16" fill="url(#poolGlow)" />
                <ellipse class="ripple ripple-1" cx="122" cy="32" rx="46" ry="9" fill="none" stroke="#FBE98A" stroke-width="1.6" stroke-opacity="0.7" />
                <ellipse class="ripple ripple-2" cx="122" cy="32" rx="24" ry="5" fill="none" stroke="#FBE98A" stroke-width="1.2" stroke-opacity="0.8" />
                <!-- honey drips down the comb face -->
                <path class="comb-drip comb-drip-1" d="M76 96 L76 150" stroke="#E9BE5A" stroke-width="7" stroke-linecap="round" fill="none" />
                <circle class="comb-drip comb-drip-1" cx="76" cy="152" r="4.6" fill="#E9BE5A" />
                <path class="comb-drip comb-drip-2" d="M136 128 L136 178" stroke="#D4A017" stroke-width="6" stroke-linecap="round" fill="none" />
                <circle class="comb-drip comb-drip-2" cx="136" cy="180" r="4" fill="#D4A017" />
            </g>

            <!-- ════════ Bottle (leaning, mouth faces the comb) ════════ -->
            <g transform="translate(6,-6) rotate(-9 150 250)">
                <!-- back glass silhouette -->
                <path d="M118 132 C112 170 96 190 96 240 L96 372 C96 416 132 436 150 436 C168 436 204 416 204 372 L204 240 C204 190 188 170 182 132 Z"
                      fill="url(#glass)" stroke="#e9be5a" stroke-opacity="0.4" stroke-width="2" />
                <!-- honey inside -->
                <g clip-path="url(#bottleClip)">
                    <rect x="90" y="212" width="120" height="240" fill="url(#honeyFill)" />
                    <!-- honey surface line -->
                    <rect x="90" y="212" width="120" height="5" fill="#FBE98A" opacity="0.85" />
                    <!-- inner wave shimmer -->
                    <path class="surface-wave" d="M92 219 C 118 210, 138 228, 160 219 C 176 213, 190 222, 210 218 L210 236 L90 236 Z"
                          fill="#FBE98A" opacity="0.35" />
                </g>
                <!-- glass highlights -->
                <path d="M112 160 C106 200 104 300 110 396" stroke="#ffffff" stroke-opacity="0.22" stroke-width="6" fill="none" stroke-linecap="round" />
                <path d="M188 170 C192 210 193 300 188 380" stroke="#ffffff" stroke-opacity="0.12" stroke-width="3.5" fill="none" stroke-linecap="round" />
                <!-- neck ring -->
                <rect x="112" y="128" width="76" height="10" rx="4" fill="#B4770E" stroke="#F6D87A" stroke-opacity="0.6" />
                <!-- cap with ridges -->
                <rect x="110" y="84" width="80" height="46" rx="9" fill="url(#cap)" stroke="#e9be5a" stroke-opacity="0.45" stroke-width="1.5" />
                <g stroke="#f5ede0" stroke-opacity="0.14" stroke-width="3.4">
                    <path d="M124 88 L124 126" /><path d="M136 88 L136 126" /><path d="M148 88 L148 126" /><path d="M160 88 L160 126" /><path d="M172 88 L172 126" />
                </g>
                <rect x="110" y="122" width="80" height="4" fill="#D4A017" opacity="0.85" />
            </g>

            <!-- ════════ The spurt (animated flowing dashes) ════════ -->
            <path class="stream flow-1"
                  d="M196 96 C 236 92, 268 128, 280 176 C 291 224, 300 258, 330 268"
                  fill="none" stroke="url(#honeyStream)" stroke-width="17" stroke-linecap="round" />
            <path class="stream flow-2"
                  d="M196 96 C 236 92, 268 128, 280 176 C 291 224, 300 258, 330 268"
                  fill="none" stroke="#FBE98A" stroke-width="4" stroke-linecap="round" stroke-opacity="0.7" />

            <!-- falling droplet at the lip -->
            <circle class="lip-drop" cx="200" cy="112" r="6" fill="#F6D87A" />

            <!-- sparkles -->
            <g class="sparkle sparkle-1" fill="#FBF3D9"><path d="M320 120 l2.4 6 6 2.4 -6 2.4 -2.4 6 -2.4 -6 -6 -2.4 6 -2.4 Z" /></g>
            <g class="sparkle sparkle-2" fill="#F6D87A"><path d="M398 250 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" /></g>
            <g class="sparkle sparkle-3" fill="#E9BE5A"><path d="M238 340 l1.8 4.4 4.4 1.8 -4.4 1.8 -1.8 4.4 -1.8 -4.4 -4.4 -1.8 4.4 -1.8 Z" /></g>

            <!-- ground honey pool overflow -->
            <ellipse cx="330" cy="478" rx="60" ry="10" fill="url(#poolGlow)" opacity="0.75" />
        </svg>

        <!-- Animated bees flying around the bottle & comb -->
        <FlyingBees :count="3" :size="44" class="z-10" />
    </div>
</template>

<script setup>
import FlyingBees from "~/components/FlyingBees.vue";
</script>

<style scoped>
/* Continuous honey flow — dashes race along the spurt path */
.flow-1 {
    stroke-dasharray: 46 22;
    animation: flow 1.1s linear infinite;
}
.flow-2 {
    stroke-dasharray: 14 54;
    animation: flow 1.1s linear infinite;
    animation-delay: -0.35s;
}
@keyframes flow {
    from { stroke-dashoffset: 0; }
    to { stroke-dashoffset: -68; }
}

/* Ripples on the pool */
.ripple {
    transform-box: fill-box;
    transform-origin: center;
    animation: ripple 2.6s ease-out infinite;
}
.ripple-2 { animation-delay: 1.3s; }
@keyframes ripple {
    0% { transform: scale(0.55); opacity: 0.9; }
    80%, 100% { transform: scale(1.35); opacity: 0; }
}

/* Comb drips grow and fall */
.comb-drip-1 { animation: drip-grow 2.4s ease-in infinite; }
.comb-drip-2 { animation: drip-grow 3.1s ease-in infinite; animation-delay: 1.2s; }
@keyframes drip-grow {
    0%, 30% { opacity: 0.35; }
    55% { opacity: 1; }
    100% { opacity: 0.55; }
}

/* Surface shimmer on the honey inside the bottle */
.surface-wave {
    animation: wave-shift 3.4s ease-in-out infinite alternate;
}
@keyframes wave-shift {
    from { transform: translateX(-6px); }
    to { transform: translateX(7px); }
}

/* Droplet at the lip falls periodically */
.lip-drop {
    animation: lip-drop 2.2s ease-in infinite;
}
@keyframes lip-drop {
    0% { transform: translate(0, 0) scale(1); opacity: 0; }
    12% { opacity: 1; }
    34% { transform: translate(14px, 34px) scale(0.92); opacity: 1; }
    40% { transform: translate(18px, 46px) scale(1.6, 0.4); opacity: 0.9; }
    46%, 100% { opacity: 0; transform: translate(18px, 46px) scale(1.6, 0.4); }
}

/* Sparkles twinkle */
.sparkle {
    transform-box: fill-box;
    transform-origin: center;
    animation: twinkle 2.8s ease-in-out infinite;
}
.sparkle-2 { animation-delay: 0.9s; }
.sparkle-3 { animation-delay: 1.7s; }
@keyframes twinkle {
    0%, 100% { opacity: 0.15; transform: scale(0.7) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.15) rotate(25deg); }
}

@media (prefers-reduced-motion: reduce) {
    .flow-1, .flow-2, .ripple, .comb-drip-1, .comb-drip-2, .surface-wave, .lip-drop, .sparkle {
        animation: none !important;
    }
}
</style>
