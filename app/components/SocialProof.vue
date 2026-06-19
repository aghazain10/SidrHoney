<template>
    <section id="reviews" class="bg-gray-50 py-16">
        <h2 class="text-3xl font-bold text-center text-gray-900">
            What Our Customers Say
        </h2>
        <p class="mt-2 text-center text-gray-600">
            Trusted by hundreds of happy customers
        </p>

        <!-- Overall Rating -->
        <div class="mt-6 text-center">
            <p class="text-yellow-500 text-2xl">★★★★★</p>
            <p class="text-gray-700 mt-2">
                Average Rating: 4.9/5 (500+ reviews)
            </p>
        </div>

        <!-- Reviews Grid -->
        <div
            class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
        >
            <!-- Review Card -->
            <div class="bg-white shadow-lg rounded-lg p-6 text-left">
                <div class="flex items-center gap-4">
                    <img
                        src="/user.png"
                        alt="Customer"
                        class="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 class="font-semibold text-gray-900">Ali Khan</h3>
                        <p class="text-yellow-500">★★★★★</p>
                    </div>
                </div>
                <p class="mt-4 text-gray-600">
                    “Best honey I’ve ever tasted! The flavor is rich and
                    authentic. Delivery was quick and packaging was excellent.”
                </p>
            </div>

            <div class="bg-white shadow-lg rounded-lg p-6 text-left">
                <div class="flex items-center gap-4">
                    <img
                        src="/user.png"
                        alt="Customer"
                        class="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 class="font-semibold text-gray-900">Sara Ahmed</h3>
                        <p class="text-yellow-500">★★★★★</p>
                    </div>
                </div>
                <p class="mt-4 text-gray-600">
                    “I was amazed by the purity of this honey. It’s raw,
                    natural, and tastes incredible. Highly recommended!”
                </p>
            </div>

            <div class="bg-white shadow-lg rounded-lg p-6 text-left">
                <div class="flex items-center gap-4">
                    <img
                        src="/user.png"
                        alt="Customer"
                        class="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 class="font-semibold text-gray-900">Ahmed Raza</h3>
                        <p class="text-yellow-500">★★★★★</p>
                    </div>
                </div>
                <p class="mt-4 text-gray-600">
                    “Pure Sidr honey with a unique taste. I’ve tried many
                    brands, but this one stands out. Will order again!”
                </p>
            </div>
        </div>
    </section>
</template>
