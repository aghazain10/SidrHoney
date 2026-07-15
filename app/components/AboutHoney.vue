<template>
    <section id="about" class="bg-gray-50 py-16">
        <div
            class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
            <!-- Image -->
            <NuxtImg
                src="/honey-banner.jpeg"
                alt="About Sidr Honey"
                class="w-full h-96 object-cover rounded-lg shadow-md"
                width="896"
                height="672"
                format="webp"
                loading="lazy"
            />

            <!-- Content -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900">
                    About Our Honey
                </h2>
                <p class="mt-4 text-gray-600">
                    Harvested from the sacred Sidr trees of Gilgit-Baltistan,
                    our honey is sustainably collected and carefully tested to
                    ensure purity. Its rich taste and natural benefits make it
                    truly unique.
                </p>

                <!-- Highlights -->
                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/lab.png"
                            alt="Origin"
                            class="w-8 h-8"
                            width="32"
                            height="32"
                            format="webp"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="font-semibold text-gray-900">
                                Authentic Origin
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Directly sourced from Sidr trees in pristine
                                valleys.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/lab.png"
                            alt="Origin"
                            class="w-8 h-8"
                            width="32"
                            height="32"
                            format="webp"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="font-semibold text-gray-900">
                                Premium Quality
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Lab-tested for purity and certified for
                                authenticity.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/lab.png"
                            alt="Origin"
                            class="w-8 h-8"
                            width="32"
                            height="32"
                            format="webp"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="font-semibold text-gray-900">
                                Traditional Harvest
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Collected using eco-friendly, time-honored
                                methods.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/lab.png"
                            alt="Origin"
                            class="w-8 h-8"
                            width="32"
                            height="32"
                            format="webp"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="font-semibold text-gray-900">
                                Natural Benefits
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Boosts immunity, aids digestion, and provides
                                energy.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Call to Action -->
                <button
                    @click="$router.push('#shop')"
                    class="mt-8 bg-amber-500 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-600"
                >
                    Shop Now
                </button>
            </div>
        </div>
    </section>
</template>
