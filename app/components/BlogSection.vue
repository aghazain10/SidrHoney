<template>
    <section id="blog" class="bg-white py-16">
        <h2 class="text-3xl font-bold text-center text-gray-900">
            From Our Blog
        </h2>
        <p class="mt-2 text-center text-gray-600">
            Tips, recipes, and stories about honey
        </p>

        <!-- Loading state -->
        <div v-if="pending" class="mt-10 text-center text-gray-500">
            Loading posts...
        </div>

        <!-- Error state -->
        <div v-else-if="error" class="mt-10 text-center text-red-500">
            Couldn't load blog posts right now.
        </div>

        <!-- Empty state -->
        <div v-else-if="!posts.length" class="mt-10 text-center text-gray-500">
            No blog posts yet. Check back soon!
        </div>

        <!-- Posts -->
        <div
            v-else
            class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
        >
            <div
                v-for="post in posts"
                :key="post.id"
                class="bg-gray-50 rounded-lg shadow p-6"
            >
                <img
                    :src="post.image_url || '/blog.jpg'"
                    :alt="post.title"
                    class="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 class="font-semibold text-lg text-gray-900">
                    {{ post.title }}
                </h3>
                <p class="text-gray-600 text-sm mt-2">
                    {{ post.excerpt }}
                </p>
                <NuxtLink
                    :to="`/blog/${post.slug}`"
                    class="mt-4 inline-block text-amber-600 font-medium hover:underline"
                >
                    Read More
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
const config = useRuntimeConfig();

const { data, pending, error } = await useFetch(
    `${config.public.apiBase}/api/blogs`,
    {
        query: { limit: 3 },
    },
);

// Laravel's paginate() wraps results in a `data` key inside `data.data`
const posts = computed(() => data.value?.data?.data ?? []);
</script>
