<template>
    <section class="bg-white text-center pt-12">
        <NuxtImg
            src="/banner.jpeg"
            alt="Sidr Honey"
            class="object-cover rounded-lg shadow-md w-full"
            width="800"
            height="350"
            sizes="(max-width: 768px) 100vw, 720px"
            format="webp"
            loading="eager"
            fetchpriority="high"
        />
        <h1 class="text-3xl font-bold mt-6 text-gray-900">
            100% Pure Sidr Honey. Straight from the Hive.
        </h1>
        <p class="text-lg text-gray-600 mt-2">
            A Rare Expression of Nature.<br />
            Pakistan's premium raw, single-origin Sidr honey, harvested from the
            wild Sidr forests of Karak.<br />
            Never heated, never blended, never artificially processed.
        </p>
        <div class="mt-6 flex justify-center gap-4">
            <a
                href="#shop"
                class="bg-amber-700 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-800"
            >
                Shop Now
            </a>
            <a
                href="https://wa.me/923311116915"
                class="border border-amber-700 text-amber-700 px-6 py-3 rounded-lg hover:bg-amber-50"
            >
                WhatsApp Order
            </a>
        </div>
    </section>
</template>
