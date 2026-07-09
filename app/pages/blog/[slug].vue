<template>
    <div class="max-w-3xl mx-auto px-6 py-16">
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
            <NuxtLink to="/" class="text-amber-600 font-medium hover:underline">
                &larr; Back to home
            </NuxtLink>
        </div>

        <!-- Post -->
        <article v-else>
            <NuxtLink
                to="/#blog"
                class="text-amber-600 font-medium hover:underline mb-6 inline-block"
            >
                &larr; Back to blog
            </NuxtLink>

            <img
                v-if="post.image_url"
                :src="post.image_url"
                :alt="post.title"
                class="w-full h-72 object-cover rounded-lg mb-6"
            />

            <h1 class="text-3xl font-bold text-gray-900 mb-2">
                {{ post.title }}
            </h1>

            <p class="text-gray-500 text-sm mb-8">
                {{ formattedDate }}
            </p>

            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="prose max-w-none" v-html="post.content"></div>
        </article>
    </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();

const { data, pending, error } = await useFetch(
    `${config.public.apiBase}/api/blogs/${route.params.slug}`,
);

const post = computed(() => data.value?.data ?? null);

const formattedDate = computed(() => {
    if (!post.value?.published_at) return "";
    return new Date(post.value.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
});

useHead(() => ({
    title: post.value ? `${post.value.title} — Sidr Honey` : "Blog",
}));
</script>
