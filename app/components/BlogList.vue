<template>
    <div class="bg-white font-sans">
        <Navbar />

        <div class="bg-gray-50 pt-24 pb-16">
        <div class="max-w-6xl mx-auto px-6">
            <!-- Page header -->
            <header class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-900">
                    The Sdr Honey Blog
                </h1>
                <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
                    Tips, benefits, purity guides and buying advice for pure Sidr
                    (Beri) honey from the wild forests of Karak, Pakistan.
                </p>
            </header>

            <!-- Loading -->
            <div v-if="pending" class="text-center text-gray-500 py-20">
                Loading posts...
            </div>

            <!-- Error -->
            <div v-else-if="error" class="text-center text-red-500 py-20">
                Couldn't load blog posts right now.
            </div>

            <!-- Empty -->
            <div v-else-if="!posts.length" class="text-center text-gray-500 py-20">
                No blog posts yet. Check back soon!
            </div>

            <!-- Posts grid -->
            <div
                v-else
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <article
                    v-for="post in posts"
                    :key="post.id"
                    class="bg-white rounded-lg shadow hover:shadow-md transition flex flex-col"
                >
                    <img
                        :src="post.image_url || '/blog.jpg'"
                        :alt="post.title"
                        class="w-full aspect-[16/7] object-cover rounded-t-lg"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="176"
                    />
                    <div class="p-6 flex flex-col flex-1">
                        <h2 class="font-semibold text-lg text-gray-900 leading-snug">
                            <NuxtLink
                                :to="`/blog/${post.slug}`"
                                class="hover:text-amber-700"
                            >
                                {{ post.title }}
                            </NuxtLink>
                        </h2>
                        <p class="text-gray-600 text-sm mt-3 flex-1">
                            {{ post.excerpt }}
                        </p>
                        <NuxtLink
                            :to="`/blog/${post.slug}`"
                            class="mt-4 inline-block text-amber-700 font-medium hover:underline"
                        >
                            Read More
                        </NuxtLink>
                    </div>
                </article>
            </div>

            <!-- Pagination -->
            <nav
                v-if="paginator && paginator.last_page > 1"
                class="mt-12 flex justify-center items-center gap-2 flex-wrap"
                aria-label="Pagination"
            >
                <button
                    :disabled="paginator.current_page <= 1"
                    class="px-4 py-2 rounded border text-sm"
                    :class="
                        paginator.current_page <= 1
                            ? 'text-gray-300 border-gray-200 cursor-not-allowed'
                            : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                    "
                    @click="go(paginator.current_page - 1)"
                >
                    Previous
                </button>

                <button
                    v-for="p in pages"
                    :key="p"
                    class="px-4 py-2 rounded border text-sm"
                    :class="
                        p === paginator.current_page
                            ? 'bg-amber-700 text-white border-amber-700'
                            : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                    "
                    @click="go(p)"
                >
                    {{ p }}
                </button>

                <button
                    :disabled="paginator.current_page >= paginator.last_page"
                    class="px-4 py-2 rounded border text-sm"
                    :class="
                        paginator.current_page >= paginator.last_page
                            ? 'text-gray-300 border-gray-200 cursor-not-allowed'
                            : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                    "
                    @click="go(paginator.current_page + 1)"
                >
                    Next
                </button>
            </nav>
        </div>
    </div>

    <Footer />
</div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const siteUrl = "https://sdrhoney.com";

const page = computed(() => Math.max(1, Number(route.query.page) || 1));

const { data, pending, error } = await useFetch(
    `${config.public.apiBase}/api/blogs`,
    {
        query: { limit: 10, page },
    },
);

const posts = computed(() => data.value?.data?.data ?? []);
const paginator = computed(() => data.value?.data ?? null);
const pages = computed(() =>
    paginator.value
        ? Array.from({ length: paginator.value.last_page }, (_, i) => i + 1)
        : [],
);

function go(p) {
    const q = { ...route.query };
    if (p <= 1) delete q.page;
    else q.page = String(p);
    router.push({ query: q });
}

useHead(() => {
    const isPaginated = page.value > 1;
    const canonical = `${siteUrl}/blog`;

    return {
        title: "Blog — Sidr Honey | Tips, Benefits & Buying Guides",
        meta: [
            {
                name: "description",
                content:
                    "Read the Sdr Honey blog for Sidr (Beri) honey benefits, purity guides, storage tips and buying advice — pure honey from the wild forests of Karak, Pakistan.",
            },
            {
                name: "robots",
                content: isPaginated ? "noindex, follow" : "index, follow",
            },
            { property: "og:title", content: "Blog — Sdr Honey" },
            {
                property: "og:description",
                content:
                    "Sidr (Beri) honey benefits, purity guides and buying advice from the wild forests of Karak, Pakistan.",
            },
            { property: "og:type", content: "website" },
            { property: "og:url", content: canonical },
        ],
        link: [{ rel: "canonical", href: canonical }],
        script: [
            {
                type: "application/ld+json",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        {
                            "@type": "ListItem",
                            position: 1,
                            name: "Home",
                            item: siteUrl,
                        },
                        {
                            "@type": "ListItem",
                            position: 2,
                            name: "Blog",
                            item: `${siteUrl}/blog`,
                        },
                    ],
                }),
            },
        ],
    };
});
</script>
