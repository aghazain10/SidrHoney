<template>
    <section id="faq" class="relative bg-onyx py-16 md:py-24 border-t border-line">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
            <div class="text-center reveal">
                <span class="kicker">Before You Ask</span>
                <h2 class="mt-4 font-display font-bold text-cream text-3xl sm:text-5xl tracking-tight">
                    Frequently Asked <span class="text-gold-gradient italic">Questions</span>
                </h2>
            </div>

            <div class="reveal mt-12 space-y-3">
                <details
                    v-for="(faq, index) in faqs"
                    :key="index"
                    class="faq-item group rounded-2xl border border-line bg-white/[0.02] open:border-gold-500/30 open:bg-gold-500/[0.03] transition-colors duration-300"
                >
                    <summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-cream/90 text-sm sm:text-base select-none [&::-webkit-details-marker]:hidden">
                        <span>{{ faq.question }}</span>
                        <span class="shrink-0 flex w-8 h-8 items-center justify-center rounded-full border border-gold-500/30 text-gold-400 transition-transform duration-300 group-open:rotate-45">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
                        </span>
                    </summary>
                    <div class="px-6 pb-5 -mt-1">
                        <p class="text-sm text-muted leading-relaxed border-t border-line pt-4">{{ faq.answer }}</p>
                    </div>
                </details>
            </div>
        </div>
    </section>
</template>

<script setup>
const faqs = [
    {
        question: "What is Sidr Honey?",
        answer: "Sidr Honey is a naturally sourced honey collected by bees from the blossoms of Sidr trees. Our Premium Sidr Honey comes from the wild Sidr forests of Karak, Pakistan, and is also known as Beri Honey (بیری کا شہد) or Sidr Tree Honey.",
    },
    {
        question: "Where does your Sidr Honey come from?",
        answer: "Organic Aprico SDR Honey is harvested from the wild Sidr forests of Karak, Pakistan, during the natural Sidr flowering season.",
    },
    {
        question: "Is Organic Aprico SDR Honey pure?",
        answer: "Yes. Our Pure Sidr Honey is raw, single origin, and free from artificial additives and preservatives. It is carefully harvested and handled to preserve its natural character.",
    },
    {
        question: "Is your Sidr Honey heated or processed?",
        answer: "Our Raw Sidr Honey is never intentionally heated or blended. We keep processing to a minimum to preserve its natural flavor, aroma, and texture.",
    },
    {
        question: "What does Beri ka Shehad mean?",
        answer: "Beri ka Shehad (بیری کا شہد) is the Urdu name commonly used for Sidr Honey in Pakistan. It refers to honey collected from the blossoms of the Beri or Sidr tree.",
    },
    {
        question: "What makes Sidr Honey different from regular honey?",
        answer: "Sidr Honey comes from the nectar of Sidr blossoms, giving it a distinctive floral aroma, rich sweetness, smooth texture, and unique natural character. Its flavor can vary naturally between harvests.",
    },
    {
        question: "Is your Sidr Honey single origin?",
        answer: "Yes. Our honey is sourced from the wild Sidr forests of Karak during the Sidr flowering season, giving it a defined botanical and geographical origin.",
    },
    {
        question: "Is your Sidr Honey lab tested?",
        answer: "Yes. Each annual harvest is independently tested for purity and authenticity. Organic Aprico also follows certified quality standards including ISO 9001, ISO 22000, GMP, HACCP, and Halal.",
    },
    {
        question: "How is your Sidr Honey harvested?",
        answer: "Honey bees naturally collect nectar from blooming Sidr flowers. We harvest the honey only after it has naturally ripened inside the hive and follow responsible beekeeping practices designed to protect bee welfare and their habitat.",
    },
    {
        question: "How is Sidr Honey packaged?",
        answer: "Our honey is hygienically packed in airtight glass jars to help preserve its natural freshness, aroma, flavor, and quality.",
    },
    {
        question: "What are the benefits of Sidr Honey?",
        answer: "Sidr Honey naturally contains carbohydrates and antioxidant compounds. It can be enjoyed as part of a balanced diet and may provide a natural source of energy and help soothe the throat.",
    },
    {
        question: "Can Sidr Honey support digestion and gut health?",
        answer: "Honey contains naturally occurring compounds that are being studied for their relationship with digestive and gut health. However, Sidr Honey should be enjoyed as part of a balanced diet rather than considered a treatment for digestive conditions.",
    },
    {
        question: "Can I take Sidr Honey before bedtime?",
        answer: "A small amount of honey in a warm drink can be a soothing part of an evening routine. Individual responses may vary, and honey is still a source of naturally occurring sugars.",
    },
    {
        question: "How should I store Sidr Honey?",
        answer: "Store your honey in a cool, dry place away from direct sunlight. Keep the jar tightly closed when not in use. Natural honey may crystallise over time, which is a normal process and does not necessarily indicate spoilage.",
    },
    {
        question: "Can honey crystallise?",
        answer: "Yes. Crystallisation is a natural characteristic of pure honey and can occur depending on its natural sugar composition, temperature, and storage conditions. It does not mean the honey has gone bad. Sidr Honey usually does not crystallise.",
    },
    {
        question: "Who should not consume honey?",
        answer: "Honey should not be given to infants under 12 months of age. Anyone with a known honey or bee related allergy should also avoid it. People managing blood sugar should consider honey as a source of sugar and consume it according to their dietary needs.",
    },
    {
        question: "How can I order Organic Aprico SDR Honey?",
        answer: "You can order Organic Aprico Premium Sdr Honey through our website, whatsapp, or a direct call.",
    },
    {
        question: "Can babies consume Sidr Honey?",
        answer: "No. Honey should never be given to babies under 12 months of age due to the risk of infant botulism.",
    },
    {
        question: "What is the best brand of Sidr Honey?",
        answer: "SDR Honey by Organic Aprico is our premium choice for authentic Pakistani Sidr Honey. Sourced from the wild Sidr forests of Karak, our honey is raw, single origin, carefully harvested, and lab tested for purity and authenticity. Every jar reflects our commitment to quality, responsible beekeeping, and the natural character of genuine Sidr Honey.",
    },
];
</script>
