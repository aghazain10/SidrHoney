<template>
    <span style="display: none" aria-hidden="true"></span>
</template>

<script setup>
useHead({
    script: [
        {
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "Product",
                        "@id": "https://sdrhoney.com/#product",
                        name: "Pure Sidr Honey – Raw & Unprocessed from Karak, Pakistan",
                        image: [
                            "https://sdrhoney.com/honey-product-1.jpeg",
                            "https://sdrhoney.com/honey-product-2.jpeg",
                            "https://sdrhoney.com/honey-product-3.jpeg",
                        ],
                        description:
                            "Buy 100% pure raw Sidr (Beri) honey from the wild Sidr forests of Karak, Pakistan. Never heated, lab-tested, ISO & Halal certified.",
                        brand: {
                            "@type": "Brand",
                            name: "SDR Honey by Organic Aprico",
                        },
                        offers: [
                            {
                                "@type": "Offer",
                                url: "https://sdrhoney.com/#shop",
                                priceCurrency: "PKR",
                                price: "2500",
                                priceValidUntil: "2027-12-31",
                                itemCondition: "https://schema.org/NewCondition",
                                availability: "https://schema.org/InStock",
                                description: "450g pack",
                            },
                            {
                                "@type": "Offer",
                                url: "https://sdrhoney.com/#shop",
                                priceCurrency: "PKR",
                                price: "4800",
                                priceValidUntil: "2027-12-31",
                                itemCondition: "https://schema.org/NewCondition",
                                availability: "https://schema.org/InStock",
                                description: "450g x2 pack",
                            },
                            {
                                "@type": "Offer",
                                url: "https://sdrhoney.com/#shop",
                                priceCurrency: "PKR",
                                price: "7000",
                                priceValidUntil: "2027-12-31",
                                itemCondition: "https://schema.org/NewCondition",
                                availability: "https://schema.org/InStock",
                                description: "450g x3 pack",
                            },
                            {
                                "@type": "Offer",
                                url: "https://sdrhoney.com/#shop",
                                priceCurrency: "PKR",
                                price: "22000",
                                priceValidUntil: "2027-12-31",
                                itemCondition: "https://schema.org/NewCondition",
                                availability: "https://schema.org/InStock",
                                description: "5kg pack",
                            },
                            {
                                "@type": "Offer",
                                url: "https://sdrhoney.com/#shop",
                                priceCurrency: "PKR",
                                price: "45000",
                                priceValidUntil: "2027-12-31",
                                itemCondition: "https://schema.org/NewCondition",
                                availability: "https://schema.org/InStock",
                                description: "10kg pack",
                            },
                        ],
                    },

                    {
                        "@type": "Organization",
                        "@id": "https://sdrhoney.com/#organization",
                        name: "SDR Honey by Organic Aprico",
                        url: "https://sdrhoney.com",
                        logo: "https://sdrhoney.com/favicon.png",
                        sameAs: [
                            "https://instagram.com/sdrhoney",
                            "https://facebook.com/sdrhoney",
                        ],
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+92-331-1116915",
                            contactType: "customer service",
                            availableLanguage: ["English", "Urdu"],
                        },
                    },
                    {
                        "@type": "WebSite",
                        "@id": "https://sdrhoney.com/#website",
                        url: "https://sdrhoney.com",
                        name: "Sidr Honey Pakistan",
                        publisher: { "@id": "https://sdrhoney.com/#organization" },
                    },
                    {
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is Sidr Honey?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Sidr Honey is a naturally sourced honey collected by bees from the blossoms of Sidr trees. Our Premium Sidr Honey comes from the wild Sidr forests of Karak, Pakistan, and is also known as Beri Honey (بیری کا شہد) or Sidr Tree Honey.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is your Sidr Honey pure?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes. Our Pure Sidr Honey is raw, single origin, and free from artificial additives and preservatives. It is carefully harvested and handled to preserve its natural character.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is your Sidr Honey heated or processed?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Our Raw Sidr Honey is never intentionally heated or blended. We keep processing to a minimum to preserve its natural flavor, aroma, and texture.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What makes Sidr Honey different from regular honey?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Sidr Honey comes from the nectar of Sidr blossoms, giving it a distinctive floral aroma, rich sweetness, smooth texture, and unique natural character. Its flavor can vary naturally between harvests.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is your Sidr Honey lab tested?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes. Each annual harvest is independently tested for purity and authenticity. Organic Aprico also follows certified quality standards including ISO 9001, ISO 22000, GMP, HACCP, and Halal.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How can I order Sidr Honey?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can order through our website, WhatsApp at +92 331 1116915, or a direct call.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How can I check if honey is pure at home?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Look for a single ingredient (honey), a clear origin and harvest date, lab-testing or certification, and a natural aroma and texture. Pure honey often thickens in cold temperatures and may crystallise over time. Sidr honey from Karak is raw, single-origin and lab-tested for purity.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How to identify pure honey?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Pure honey has a consistent colour, a natural floral aroma and a thick, slow-flowing texture. Check the label for origin, harvest and certification, and buy from a trusted single-origin producer. SDR Honey is raw Sidr (Beri) honey from the wild forests of Karak, Pakistan — never heated, never blended, and independently lab tested.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Does pure honey crystallise?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes. Crystallisation is a natural characteristic of pure honey and can occur depending on its natural sugar composition, temperature and storage conditions. It does not mean the honey has gone bad. Sidr honey usually does not crystallise.",
                                },
                            },
                        ],
                    },
                ],
            }),
        },
    ],
});
</script>
