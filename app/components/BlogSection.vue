<template>
    <section id="blog" class="relative bg-ink py-16 md:py-24 border-t border-line">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 reveal">
                <div>
                    <span class="kicker">The Journal</span>
                    <h2 class="mt-4 font-display font-bold text-cream text-3xl sm:text-5xl tracking-tight">
                        Notes From <span class="text-gold-gradient italic">The Hive</span>
                    </h2>
                </div>
                <NuxtLink to="/blog" class="btn-outline !px-6 !py-3 text-xs self-start sm:self-auto">Read All Articles →</NuxtLink>
            </div>

            <!-- Loading state -->
            <div v-if="pending" class="mt-12 grid md:grid-cols-3 gap-5">
                <div v-for="n in 3" :key="n" class="rounded-2xl border border-line bg-card h-80 animate-pulse"></div>
            </div>

            <!-- Error state -->
            <div v-else-if="error" class="mt-12 text-center text-muted">
                Couldn't load the journal right now — please check back soon.
            </div>

            <!-- Empty state -->
            <div v-else-if="!posts.length" class="mt-12 text-center text-muted">
                No articles yet. The bees are busy — check back soon.
            </div>

            <!-- Posts -->
            <div v-else class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
                <NuxtLink
                    v-for="post in posts"
                    :key="post.id"
                    :to="`/blog/${post.slug}`"
                    class="group reveal rounded-2xl border border-line bg-card overflow-hidden transition-all duration-500 hover:border-gold-500/35 hover:-translate-y-1.5 hover:shadow-card-dark"
                >
                    <div class="relative overflow-hidden h-44 sm:h-48">
                        <img
                            :src="post.image_url || '/blog.jpg'"
                            :alt="post.title"
                            class="w-full h-full object-cover transition-transform duration-[1.2s] cubic-bezier(0.22,1,0.36,1) group-hover:scale-110"
                            loading="lazy"
                            decoding="async"
                            width="400"
                            height="192"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-display font-bold text-lg text-cream leading-snug group-hover:text-gold-200 transition-colors duration-300">
                            {{ post.title }}
                        </h3>
                        <p class="text-muted text-sm mt-2 line-clamp-2 leading-relaxed">{{ post.excerpt }}</p>
                        <span class="mt-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-400 group-hover:text-gold-300 transition-colors">
                            Read Article
                            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
                        </span>
                    </div>
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
