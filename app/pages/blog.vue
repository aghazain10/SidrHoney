<template>
    <BlogList v-if="!route.params.slug" />
    <NuxtPage v-else />
</template>

<script setup>
import { useRoute } from "vue-router";
import BlogList from "~/components/BlogList.vue";

const route = useRoute();
</script>
