<template>
    <!-- This component only injects JSON‑LD into the head -->
</template>

<script setup>
useHead({
    script: [
        {
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                name: "Pure Sdr Honey – Raw & Unprocessed from Gilgit Baltistan",
                image: "https://sdrhoney.com/_ipx/f_webp&q_80&s_896x672/honey-product-1.jpeg",
                description:
                    "Buy 100% pure Sdr honey from Gilgit Baltistan. Raw, unprocessed, and naturally harvested. Rich in antioxidants – order now for health benefits.",
                brand: {
                    "@type": "Brand",
                    name: "SdrHoney by Organic Aprico",
                },
                offers: [
                    {
                        "@type": "Offer",
                        priceCurrency: "PKR",
                        price: "2500",
                        availability: "https://schema.org/InStock",
                        description: "450g pack",
                    },
                    {
                        "@type": "Offer",
                        priceCurrency: "PKR",
                        price: "4800",
                        availability: "https://schema.org/InStock",
                        description: "1kg pack",
                    },
                    {
                        "@type": "Offer",
                        priceCurrency: "PKR",
                        price: "22000",
                        availability: "https://schema.org/InStock",
                        description: "5kg pack",
                    },
                ],
            }),
        },
    ],
});
</script>
