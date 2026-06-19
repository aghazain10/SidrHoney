<template>
    <div class="bg-white font-sans">
        <!-- Navbar -->
        <Navbar />

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

        <!-- About Honey -->
        <AboutHoney />

        <!-- FAQ -->
        <FAQ />

        <!-- Sticky Purchase Bar (Mobile) -->
        <StickyPurchaseBar />

        <!-- Blog Section -->
        <BlogSection />

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import HeroSection from "~/components/HeroSection.vue";
import FeaturedProduct from "~/components/FeaturedProduct.vue";
import HealthBenefits from "~/components/HealthBenefits.vue";
import WhyChooseUs from "~/components/WhyChooseUs.vue";
import SocialProof from "~/components/SocialProof.vue";
import AboutHoney from "~/components/AboutHoney.vue";
import FAQ from "~/components/FAQ.vue";
import StickyPurchaseBar from "~/components/StickyPurchaseBar.vue";
import BlogSection from "~/components/BlogSection.vue";
import Footer from "~/components/Footer.vue";
</script>
