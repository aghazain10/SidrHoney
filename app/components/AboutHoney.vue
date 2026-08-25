<template>
    <section id="about" class="bg-gray-50 py-16">
        <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <!-- Image -->
            <div class="flex items-stretch">
                <NuxtImg
                    src="/honey-banner.jpeg"
                    alt="About Sidr Honey"
                    class="w-full h-full object-cover rounded-lg shadow-md"
                    width="1056"
                    height="1600"
                    format="webp"
                    loading="lazy"
                />
            </div>

            <!-- Content -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900">
                    About Our Honey
                </h2>
                <p class="mt-4 text-gray-600">
                    From Karak's wild Sidr forests in Pakistan, we offer 100% pure Sidr honey, naturally harvested and carefully packed.
                </p>

                <!-- Highlights -->
                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/lab.png"
                            alt="Single Authentic Origin"
                            class="w-8 h-8"
                            width="32"
                            height="32"
                            format="webp"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="font-semibold text-gray-900">
                                Single Authentic Origin
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Pure Sidr honey sourced directly from the wild Sidr forests of Karak, Pakistan.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/gmp.png"
                            alt="Premium Quality"
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
                                Our Sidr honey is quality-tested, with production supported by ISO, GMP, HACCP, and Halal certifications.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/harvest.png"
                            alt="Traditional Harvest"
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
                                We harvest honey only after natural ripening inside the hive, preserving its authentic taste and quality.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/sleep.png"
                            alt="Natural Ripening"
                            class="w-8 h-8"
                            width="32"
                            height="32"
                            format="webp"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="font-semibold text-gray-900">
                                Natural Ripening
                            </h3>
                            <p class="text-gray-600 text-sm">
                                We allow bees to naturally ripen honey inside the comb before careful harvesting.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/antibacterial.png"
                            alt="No Heat. No Shortcuts."
                            class="w-8 h-8"
                            width="32"
                            height="32"
                            format="webp"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="font-semibold text-gray-900">
                                No Heat. No Shortcuts.
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Our raw honey is gently strained natural wax particles, never heated, blended, with no additives or thickeners.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/immune.png"
                            alt="European Honey Bees"
                            class="w-8 h-8"
                            width="32"
                            height="32"
                            format="webp"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="font-semibold text-gray-900">
                                European Honey Bees
                            </h3>
                            <p class="text-gray-600 text-sm">
                                We use only healthy European honey bees, known for producing delicious, flavorful Sidr honey.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/organic.png"
                            alt="Responsible Beekeeping"
                            class="w-8 h-8"
                            width="32"
                            height="32"
                            format="webp"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="font-semibold text-gray-900">
                                Responsible Beekeeping
                            </h3>
                            <p class="text-gray-600 text-sm">
                                We prioritize healthy bees, clean hives, ethical harvesting, and protection of the surrounding ecosystem.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <NuxtImg
                            src="/shipping.png"
                            alt="Freshly Packed"
                            class="w-8 h-8"
                            width="32"
                            height="32"
                            format="webp"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="font-semibold text-gray-900">
                                Freshly Packed
                            </h3>
                            <p class="text-gray-600 text-sm">
                                Fresh Sidr honey is packed in airtight glass jars to preserve its natural flavor and aroma.
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