<template>
    <!-- Luxury pour scene: a wooden honey dipper lifted with thick golden
         honey, a ribbon of honey drizzling down into a glass jar, a wild
         honeycomb chunk beside it, and bees circling. Pure SVG — crisp at
         any size. -->
    <div class="relative w-full h-full">
        <svg viewBox="0 0 480 560" class="w-full h-full" role="img"
             aria-label="Wooden honey dipper drizzling thick golden Sidr honey into a glass jar, with honeycomb and honey bees">
            <defs>
                <!-- honey liquid -->
                <linearGradient id="honeyFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#F2CB63" />
                    <stop offset="0.25" stop-color="#DFA92C" />
                    <stop offset="0.55" stop-color="#B87A0F" />
                    <stop offset="0.85" stop-color="#7A4E05" />
                    <stop offset="1" stop-color="#4A2E02" />
                </linearGradient>
                <!-- the drizzling ribbon -->
                <linearGradient id="ribbon" x1="178" y1="265" x2="250" y2="400" gradientUnits="userSpaceOnUse">
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
                <!-- wooden dipper -->
                <linearGradient id="wood" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stop-color="#5A3A1C" />
                    <stop offset="0.28" stop-color="#8A5A2E" />
                    <stop offset="0.5" stop-color="#A9713C" />
                    <stop offset="0.74" stop-color="#7C4F26" />
                    <stop offset="1" stop-color="#4A2E14" />
                </linearGradient>
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
                <!-- glass jar -->
                <linearGradient id="glassJar" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stop-color="#241a10" />
                    <stop offset="0.22" stop-color="#3d2f1d" />
                    <stop offset="0.42" stop-color="#1a120a" />
                    <stop offset="0.75" stop-color="#33261a" />
                    <stop offset="1" stop-color="#140d07" />
                </linearGradient>
                <clipPath id="jarClip">
                    <path d="M196 402 L194 468 C194 506 216 524 250 524 C284 524 306 506 306 468 L304 402 Z" />
                </clipPath>
                <clipPath id="combClip">
                    <path d="M52 132 L96 108 L142 126 L150 176 L116 210 L64 202 L44 168 Z" />
                </clipPath>
            </defs>

            <!-- ════════ Ground ════════ -->
            <ellipse cx="250" cy="516" rx="215" ry="24" fill="#0f0b07" />
            <ellipse cx="250" cy="510" rx="215" ry="20" fill="#1b1510" stroke="#e9be5a" stroke-opacity="0.14" />

            <!-- ════════ Honeycomb chunk (floating, top-left) ════════ -->
            <g class="comb-float">
                <path d="M52 132 L96 108 L142 126 L150 176 L116 210 L64 202 L44 168 Z"
                      fill="#241708" stroke="#e9be5a" stroke-opacity="0.4" stroke-width="2" />
                <g stroke="#0d0803" stroke-width="2.6" stroke-linejoin="round">
                    <path d="M68 140 L86 131 L104 140 L104 158 L86 167 L68 158 Z" fill="url(#cellA)" />
                    <path d="M108 136 L124 128 L140 136 L140 152 L124 160 L108 152 Z" fill="url(#cellB)" />
                    <path d="M86 170 L102 162 L118 170 L118 186 L102 194 L86 186 Z" fill="url(#cellB)" />
                    <path d="M58 168 L70 161 L82 168 L82 182 L70 189 L58 182 Z" fill="url(#cellA)" />
                </g>
                <!-- glossy honey film on the comb -->
                <g clip-path="url(#combClip)" opacity="0.5">
                    <ellipse cx="96" cy="146" rx="52" ry="26" fill="#F6D87A" opacity="0.35" />
                </g>
                <!-- drip leaving the comb -->
                <circle class="comb-drop comb-drop-1" cx="96" cy="206" r="5" fill="#E9BE5A" />
            </g>

            <!-- ════════ Wooden honey dipper (held above the jar) ════════ -->
            <g transform="rotate(-6 178 200)">
                <!-- handle -->
                <rect x="171" y="26" width="14" height="152" rx="7" fill="url(#wood)" />
                <rect x="174.5" y="30" width="3.4" height="144" rx="1.7" fill="#C98F55" opacity="0.45" />
                <!-- handle top knob -->
                <circle cx="178" cy="26" r="11" fill="url(#wood)" stroke="#3A2410" stroke-width="1.5" />
                <!-- grooved head -->
                <g stroke="#3A2410" stroke-opacity="0.6" stroke-width="1.4">
                    <ellipse cx="178" cy="188" rx="38" ry="15" fill="url(#wood)" />
                    <ellipse cx="178" cy="210" rx="44" ry="17" fill="url(#wood)" />
                    <ellipse cx="178" cy="233" rx="47" ry="18" fill="url(#wood)" />
                    <ellipse cx="178" cy="254" rx="41" ry="16" fill="url(#wood)" />
                </g>
                <!-- thick honey coating the dipper head -->
                <g>
                    <path d="M138 224 C150 238 172 244 178 244 C184 244 206 238 218 224 C222 236 208 250 178 250 C148 250 134 236 138 224 Z"
                          fill="#E9BE5A" opacity="0.95" />
                    <path d="M144 244 C150 254 166 260 178 260 C190 260 206 254 212 244 C210 256 196 266 178 266 C160 266 146 256 144 244 Z"
                          fill="#D4A017" />
                    <ellipse cx="178" cy="252" rx="26" ry="7" fill="#FBE98A" opacity="0.55" />
                </g>
                <!-- honey sheen down the handle -->
                <rect x="169" y="60" width="4" height="110" rx="2" fill="#E9BE5A" opacity="0.5" />
            </g>

            <!-- ════════ The drizzle ribbon ════════ -->
            <!-- continuous faint body so the stream never looks broken -->
            <path class="ribbon"
                  d="M176 266 C 176 300, 196 318, 222 342 C 246 364, 252 380, 250 398"
                  fill="none" stroke="#D4A017" stroke-width="14" stroke-linecap="round" stroke-opacity="0.45" />
            <path class="ribbon flow-1"
                  d="M176 266 C 176 300, 196 318, 222 342 C 246 364, 252 380, 250 398"
                  fill="none" stroke="url(#ribbon)" stroke-width="16" stroke-linecap="round" />
            <path class="ribbon flow-2"
                  d="M176 266 C 176 300, 196 318, 222 342 C 246 364, 252 380, 250 398"
                  fill="none" stroke="#FBE98A" stroke-width="4.5" stroke-linecap="round" stroke-opacity="0.7" />

            <!-- droplets pinching off the dipper head -->
            <circle class="pinch-drop pinch-drop-1" cx="176" cy="272" r="5.5" fill="#F6D87A" />
            <circle class="pinch-drop pinch-drop-2" cx="184" cy="276" r="4" fill="#E9BE5A" />

            <!-- ════════ Glass jar catching the honey ════════ -->
            <!-- landing pool glow at the jar mouth -->
            <ellipse cx="250" cy="398" rx="52" ry="12" fill="url(#poolGlow)" />
            <ellipse class="ripple ripple-1" cx="250" cy="398" rx="34" ry="7" fill="none" stroke="#FBE98A" stroke-width="1.6" stroke-opacity="0.7" />
            <ellipse class="ripple ripple-2" cx="250" cy="398" rx="18" ry="4" fill="none" stroke="#FBE98A" stroke-width="1.2" stroke-opacity="0.8" />

            <path d="M196 402 L194 468 C194 506 216 524 250 524 C284 524 306 506 306 468 L304 402 Z"
                  fill="url(#glassJar)" stroke="#e9be5a" stroke-opacity="0.4" stroke-width="2" />
            <!-- honey inside the jar -->
            <g clip-path="url(#jarClip)">
                <rect x="188" y="416" width="126" height="112" fill="url(#honeyFill)" />
                <rect x="188" y="416" width="126" height="4" fill="#FBE98A" opacity="0.85" />
                <path class="jar-wave" d="M190 424 C 214 416, 236 430, 258 423 C 272 418, 288 425, 312 421 L312 440 L188 440 Z"
                      fill="#FBE98A" opacity="0.35" />
            </g>
            <!-- jar rim + glass highlights -->
            <rect x="190" y="394" width="120" height="10" rx="4" fill="#B4770E" stroke="#F6D87A" stroke-opacity="0.6" />
            <path d="M206 420 C 202 450 202 480 208 508" stroke="#ffffff" stroke-opacity="0.2" stroke-width="6" fill="none" stroke-linecap="round" />
            <path d="M290 428 C 293 458 292 484 286 506" stroke="#ffffff" stroke-opacity="0.11" stroke-width="3.5" fill="none" stroke-linecap="round" />

            <!-- ════════ Sparkles ════════ -->
            <g class="sparkle sparkle-1" fill="#FBF3D9"><path d="M300 130 l2.4 6 6 2.4 -6 2.4 -2.4 6 -2.4 -6 -6 -2.4 6 -2.4 Z" /></g>
            <g class="sparkle sparkle-2" fill="#F6D87A"><path d="M340 260 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" /></g>
            <g class="sparkle sparkle-3" fill="#E9BE5A"><path d="M130 320 l1.8 4.4 4.4 1.8 -4.4 1.8 -1.8 4.4 -1.8 -4.4 -4.4 -1.8 4.4 -1.8 Z" /></g>
        </svg>

        <!-- Animated bees flying around the dipper, comb & jar -->
        <FlyingBees :count="3" :size="44" class="z-10" />
    </div>
</template>

<script setup>
import FlyingBees from "~/components/FlyingBees.vue";
</script>

<style scoped>
/* Continuous honey flow — dashes race down the drizzle ribbon */
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

/* Ripples where the ribbon lands in the jar */
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

/* Droplets pinching off the dipper head, falling into the stream */
.pinch-drop-1 { animation: pinch 1.7s ease-in infinite; }
.pinch-drop-2 { animation: pinch 2.3s ease-in infinite; animation-delay: 0.8s; }
@keyframes pinch {
    0% { transform: translate(0, 0) scale(0.7); opacity: 0; }
    14% { opacity: 1; }
    52% { transform: translate(8px, 46px) scale(1); opacity: 1; }
    72% { transform: translate(20px, 92px) scale(0.9); opacity: 0.85; }
    86%, 100% { transform: translate(30px, 118px) scale(0.4); opacity: 0; }
}

/* Honey drop leaving the comb chunk */
.comb-drop-1 { animation: comb-drop 3s ease-in infinite; }
@keyframes comb-drop {
    0%, 30% { transform: translateY(0) scale(0.7); opacity: 0; }
    45% { opacity: 1; }
    100% { transform: translateY(70px) scale(0.5); opacity: 0; }
}

/* Comb chunk gently floating */
.comb-float {
    transform-box: fill-box;
    transform-origin: center;
    animation: comb-float 5.5s ease-in-out infinite alternate;
}
@keyframes comb-float {
    from { transform: translateY(0) rotate(0deg); }
    to { transform: translateY(-10px) rotate(-1.6deg); }
}

/* Surface shimmer on the honey inside the jar */
.jar-wave {
    animation: wave-shift 3.4s ease-in-out infinite alternate;
}
@keyframes wave-shift {
    from { transform: translateX(-6px); }
    to { transform: translateX(7px); }
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
    .flow-1, .flow-2, .ripple, .pinch-drop-1, .pinch-drop-2,
    .comb-drop-1, .comb-float, .jar-wave, .sparkle {
        animation: none !important;
    }
}
</style>
