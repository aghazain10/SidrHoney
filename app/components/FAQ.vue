<template>
    <section id="faq" class="bg-white py-12">
        <h2 class="text-2xl font-bold text-center text-gray-900">
            Frequently Asked Questions
        </h2>
        <div class="mt-8 max-w-xl mx-auto space-y-4">
            <details
                v-for="(faq, index) in faqs"
                :key="index"
                class="bg-gray-50 p-4 rounded-lg shadow"
            >
                <summary class="font-semibold cursor-pointer">
                    {{ faq.question }}
                </summary>
                <p class="mt-2 text-gray-600">
                    {{ faq.answer }}
                </p>
            </details>
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
