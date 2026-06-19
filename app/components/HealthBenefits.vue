<template>
    <section id="benefits" class="bg-gray-50 py-16">
        <h2 class="text-3xl font-bold text-center text-gray-900">
            Health Benefits of Sidr Honey
        </h2>
        <p class="mt-2 text-center text-gray-600">
            Nature’s gift for wellness and vitality
        </p>

        <div class="mt-12 flex flex-wrap justify-center gap-6">
            <!-- Benefit 1 -->
            <div class="honeycomb">
                <div
                    class="hex bg-white shadow-lg p-6 flex flex-col items-center"
                >
                    <img
                        src="/immune.png"
                        alt="Boosts Immunity"
                        class="w-12 h-12 mb-3"
                    />
                    <h3 class="font-semibold text-lg text-amber-600">
                        Boosts Immunity
                    </h3>
                    <p class="text-gray-600 text-sm text-center mt-2">
                        Rich in antioxidants and enzymes that strengthen your
                        immune system.
                    </p>
                </div>
            </div>

            <!-- Benefit 2 -->
            <div class="honeycomb">
                <div
                    class="hex bg-white shadow-lg p-6 flex flex-col items-center"
                >
                    <img
                        src="/digestion.png"
                        alt="Aids Digestion"
                        class="w-12 h-12 mb-3"
                    />
                    <h3 class="font-semibold text-lg text-amber-600">
                        Aids Digestion
                    </h3>
                    <p class="text-gray-600 text-sm text-center mt-2">
                        Helps soothe the stomach, supports gut health, and
                        improves absorption.
                    </p>
                </div>
            </div>

            <!-- Benefit 3 -->
            <div class="honeycomb">
                <div
                    class="hex bg-white shadow-lg p-6 flex flex-col items-center"
                >
                    <img
                        src="/athlete.png"
                        alt="Natural Energy"
                        class="w-12 h-12 mb-3"
                    />
                    <h3 class="font-semibold text-lg text-amber-600">
                        Natural Energy
                    </h3>
                    <p class="text-gray-600 text-sm text-center mt-2">
                        Provides a quick, healthy energy boost — perfect for
                        daily vitality.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.honeycomb {
    width: 200px;
    height: 230px;
    clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
}
.hex {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
</style>
