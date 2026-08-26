<template>
    <section id="benefits" class="bg-gray-50 py-16">
        <h2 class="text-3xl font-bold text-center text-gray-900">
            Simple Reasons to Enjoy Sidr Honey
        </h2>
        <p class="mt-2 text-center text-gray-600">
            Nature's gift for wellness and vitality
        </p>

        <div
            class="mt-12 grid grid-cols-2 gap-6 justify-items-center max-w-md mx-auto md:max-w-none md:grid-cols-4 md:max-w-5xl"
        >
            <!-- Benefit 1 -->
            <div class="honeycomb">
                <div
                    class="hex bg-white shadow-lg p-6 flex flex-col items-center"
                >
                    <NuxtImg
                        src="/immune.png"
                        alt="A Natural Choice for Everyday Life"
                        class="w-12 h-12 mb-3"
                        width="48"
                        height="48"
                        format="webp"
                        loading="lazy"
                    />
                    <h3 class="font-semibold text-lg text-amber-700">
                        A Natural Choice for Everyday Life
                    </h3>
                    <p class="text-gray-600 text-sm text-center mt-2">
                        Raw honey is a simple way to add a natural ingredient to
                        your daily routine. With minimal processing, it retains
                        qualities that make honey naturally valued food.
                    </p>
                </div>
            </div>

            <!-- Benefit 2 -->
            <div class="honeycomb">
                <div
                    class="hex bg-white shadow-lg p-6 flex flex-col items-center"
                >
                    <NuxtImg
                        src="/antibacterial.png"
                        alt="Naturally Contains Antioxidants"
                        class="w-12 h-12 mb-3"
                        width="48"
                        height="48"
                        format="webp"
                        loading="lazy"
                    />
                    <h3 class="font-semibold text-lg text-amber-700">
                        Naturally Contains Antioxidants
                    </h3>
                    <p class="text-gray-600 text-sm text-center mt-2">
                        Honey contains naturally occurring antioxidant
                        compounds, including phenolic compounds. These are part
                        of the natural composition of honey.
                    </p>
                </div>
            </div>

            <!-- Benefit 3 (mobile: centered single card, desktop: normal) -->
            <div
                class="honeycomb col-span-2 justify-self-center md:col-span-1 md:justify-self-auto"
            >
                <div
                    class="hex bg-white shadow-lg p-6 flex flex-col items-center"
                >
                    <NuxtImg
                        src="/athlete.png"
                        alt="Natural Energy from Honey"
                        class="w-12 h-12 mb-3"
                        width="48"
                        height="48"
                        format="webp"
                        loading="lazy"
                    />
                    <h3 class="font-semibold text-lg text-amber-700">
                        Natural Energy from Honey
                    </h3>
                    <p class="text-gray-600 text-sm text-center mt-2">
                        Wild Forest Sidr Honey from Karak, Pakistan contains
                        naturally occurring sugars that provide carbohydrates,
                        which the body uses as a source of energy.
                    </p>
                </div>
            </div>

            <!-- Benefit 4 -->
            <div class="honeycomb">
                <div
                    class="hex bg-white shadow-lg p-6 flex flex-col items-center"
                >
                    <NuxtImg
                        src="/digestion.png"
                        alt="A Simple Way to Add Sweetness"
                        class="w-12 h-12 mb-3"
                        width="48"
                        height="48"
                        format="webp"
                        loading="lazy"
                    />
                    <h3 class="font-semibold text-lg text-amber-700">
                        A Simple Way to Add Sweetness
                    </h3>
                    <p class="text-gray-600 text-sm text-center mt-2">
                        Sidr Honey can be enjoyed in many everyday ways. Add it
                        to a warm drink, spread it on toast, or drizzle a little
                        over your favourite foods.
                    </p>
                </div>
            </div>

            <!-- Benefit 5 (desktop: starts at col 2 for centering) -->
            <div class="honeycomb md:col-start-2">
                <div
                    class="hex bg-white shadow-lg p-6 flex flex-col items-center"
                >
                    <NuxtImg
                        src="/sleep.png"
                        alt="A Warm and Comforting Tradition"
                        class="w-12 h-12 mb-3"
                        width="48"
                        height="48"
                        format="webp"
                        loading="lazy"
                    />
                    <h3 class="font-semibold text-lg text-amber-700">
                        A Warm and Comforting Tradition
                    </h3>
                    <p class="text-gray-600 text-sm text-center mt-2">
                        A spoonful of Sidr Honey in a warm drink can become a
                        pleasant part of your daily routine. It is a simple
                        tradition that has been enjoyed in homes for
                        generations.
                    </p>
                </div>
            </div>

            <!-- Benefit 6 (mobile: centered single card, desktop: col 3) -->
            <div
                class="honeycomb col-span-2 justify-self-center md:col-span-1 md:col-start-3"
            >
                <div
                    class="hex bg-white shadow-lg p-6 flex flex-col items-center"
                >
                    <NuxtImg
                        src="/immune.png"
                        alt="A Touch of Natural Indulgence"
                        class="w-12 h-12 mb-3"
                        width="48"
                        height="48"
                        format="webp"
                        loading="lazy"
                    />
                    <h3 class="font-semibold text-lg text-amber-700">
                        A Touch of Natural Indulgence
                    </h3>
                    <p class="text-gray-600 text-sm text-center mt-2">
                        Pure Sidr Honey offers a naturally sweet and enjoyable
                        experience without additives. Its rich taste makes it a
                        simple way to bring something special to your everyday
                        meals.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.honeycomb {
    width: 100%;
    max-width: 240px;
}
.hex {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
</style>
