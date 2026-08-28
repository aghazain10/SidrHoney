<template>
    <div class="bg-white font-sans">
        <Navbar />

        <div class="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <!-- Loading -->
        <div v-if="pending" class="text-center text-gray-500">
            Loading post...
        </div>

        <!-- Not found / error -->
        <div v-else-if="error || !post" class="text-center">
            <h1 class="text-2xl font-bold text-gray-900 mb-2">
                Post not found
            </h1>
            <p class="text-gray-600 mb-6">
                This blog post doesn't exist or may have been removed.
            </p>
            <NuxtLink to="/" class="text-amber-700 font-medium hover:underline">
                &larr; Back to home
            </NuxtLink>
        </div>

        <!-- Post -->
        <article v-else>
            <NuxtLink
                to="/#blog"
                class="text-amber-700 font-medium hover:underline mb-6 inline-block"
            >
                &larr; Back to blog
            </NuxtLink>

            <img
                v-if="post.image_url"
                :src="post.image_url"
                :alt="post.title"
                class="w-full h-72 object-cover rounded-lg mb-6"
                loading="lazy"
                decoding="async"
                width="768"
                height="288"
            />

            <h1 class="text-3xl font-bold text-gray-900 mb-2">
                {{ post.title }}
            </h1>

            <p class="text-gray-500 text-sm mb-8">
                {{ formattedDate }}
            </p>

            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="prose max-w-none" v-html="post.content"></div>

            <!-- Related posts (same content cluster) -->
            <section v-if="related.length" class="mt-16">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                    Related Articles
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div
                        v-for="item in related"
                        :key="item.id"
                        class="bg-gray-50 rounded-lg shadow p-5"
                    >
                        <img
                            :src="item.image_url || '/blog.jpg'"
                            :alt="item.title"
                            class="w-full h-32 object-cover rounded-md mb-3"
                            loading="lazy"
                            decoding="async"
                            width="400"
                            height="128"
                        />
                        <h3 class="font-semibold text-gray-900 text-base leading-snug">
                            {{ item.title }}
                        </h3>
                        <NuxtLink
                            :to="`/blog/${item.slug}`"
                            class="mt-3 inline-block text-amber-700 font-medium hover:underline"
                        >
                            Read More
                        </NuxtLink>
                    </div>
                </div>
            </section>
        </article>
    </div>

    <Footer />
</div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

const route = useRoute();
const config = useRuntimeConfig();
const siteUrl = "https://sdrhoney.com";

const { data, pending, error } = await useFetch(
    `${config.public.apiBase}/api/blogs/${route.params.slug}`,
);

const post = computed(() => data.value?.data ?? null);

// All blogs used to find same-cluster "Related" posts.
const { data: allBlogs } = await useFetch(
    `${config.public.apiBase}/api/blogs`,
    { query: { per_page: 100 } },
);

const related = computed(() => {
    if (!post.value) return [];
    const list = allBlogs.value?.data?.data ?? [];
    return list
        .filter(
            (b) =>
                b.slug !== post.value.slug &&
                b.category === post.value.category,
        )
        .slice(0, 3);
});

const formattedDate = computed(() => {
    if (!post.value?.published_at) return "";
    return new Date(post.value.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
});

const publishedDate = computed(() => post.value?.published_at ?? "");
const modifiedDate = computed(
    () => post.value?.updated_at ?? post.value?.published_at ?? "",
);
const postImage = computed(
    () => post.value?.image_url ?? `${siteUrl}/honey-product-1.jpeg`,
);
const canonical = computed(() => `${siteUrl}/blog/${route.params.slug}`);

useHead(() => {
    if (!post.value) return {};

    return {
        title: `${post.value.title} — Sidr Honey`,
        meta: [
            {
                name: "description",
                content:
                    post.value.excerpt ||
                    "Blog posts about Sidr Honey, health benefits, and more.",
            },
            { name: "robots", content: "index, follow, max-image-preview:large" },
            { property: "og:type", content: "article" },
            { property: "og:title", content: `${post.value.title} — Sidr Honey` },
            {
                property: "og:description",
                content: post.value.excerpt || "",
            },
            { property: "og:url", content: canonical.value },
            { property: "og:image", content: postImage.value },
            {
                property: "article:published_time",
                content: publishedDate.value,
            },
            {
                property: "article:modified_time",
                content: modifiedDate.value,
            },
            { property: "article:section", content: post.value.category },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: `${post.value.title} — Sidr Honey` },
            { name: "twitter:description", content: post.value.excerpt || "" },
            { name: "twitter:image", content: postImage.value },
        ],
        link: [{ rel: "canonical", href: canonical.value }],
        script: [
            {
                type: "application/ld+json",
                children: JSON.stringify([
                    {
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": canonical.value,
                        },
                        headline: post.value.title,
                        description: post.value.excerpt || "",
                        image: [postImage.value],
                        datePublished: publishedDate.value,
                        dateModified: modifiedDate.value,
                        author: {
                            "@type": "Organization",
                            name: "Sdr Honey by Organic Aprico",
                            url: siteUrl,
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Sdr Honey by Organic Aprico",
                            logo: {
                                "@type": "ImageObject",
                                url: `${siteUrl}/favicon.png`,
                            },
                        },
                        keywords:
                            "Sidr honey, Beri honey, Pakistani honey, raw honey, Karak",
                    },
                    {
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
                                item: `${siteUrl}/#blog`,
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: post.value.title,
                                item: canonical.value,
                            },
                        ],
                    },
                ]),
            },
        ],
    };
});
</script>
