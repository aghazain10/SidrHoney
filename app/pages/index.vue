<template>
    <main class="bg-white font-sans">
        <!-- Hero Section -->
        <HeroSection />

        <!-- Featured Product -->
        <FeaturedProduct />

        <!-- Health Benefits -->
        <HealthBenefits />

        <!-- Why Choose Us -->
        <WhyChooseUs />

        <!-- Social Proof -->
        <SocialProof />

        <!-- Certificates -->
        <Certificates />

        <!-- About Honey -->
        <AboutHoney />

        <!-- Our Story -->
        <OurStory />

        <!-- How to Use -->
        <HowToUse />

        <!-- FAQ -->
        <FAQ />

        <!-- Sticky Purchase Bar (Mobile) -->
        <StickyPurchaseBar />

        <!-- Blog Section -->
        <BlogSection />
    </main>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import HeroSection from "~/components/HeroSection.vue";
import FeaturedProduct from "~/components/FeaturedProduct.vue";
import HealthBenefits from "~/components/HealthBenefits.vue";
import WhyChooseUs from "~/components/WhyChooseUs.vue";
import SocialProof from "~/components/SocialProof.vue";
import Certificates from "~/components/Certificates.vue";
import AboutHoney from "~/components/AboutHoney.vue";
import OurStory from "~/components/OurStory.vue";
import HowToUse from "~/components/HowToUse.vue";
import FAQ from "~/components/FAQ.vue";
import StickyPurchaseBar from "~/components/StickyPurchaseBar.vue";
import BlogSection from "~/components/BlogSection.vue";

useHead({
    title: "Buy Pure Sidr (Beri) Honey Online in Pakistan | Sdr Honey — Wild Forests of Karak",
    meta: [
        {
            name: "description",
            content:
                "Buy 100% pure raw Sidr (Beri) Honey from the wild forests of Karak, Pakistan. Never heated, lab-tested, ISO & Halal certified. Order across Pakistan via WhatsApp today.",
        },
    ],
});
</script>
