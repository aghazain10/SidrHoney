<template>
    <section
        id="shop"
        class="relative bg-onyx py-16 md:py-24 overflow-hidden"
    >
        <!-- Ambient glow -->
        <div class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[40rem] rounded-full"
             style="background: radial-gradient(ellipse, rgba(212,160,23,0.08) 0%, transparent 60%);"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section heading -->
            <div class="text-center mb-12 reveal">
                <span class="kicker">The Collection</span>
                <h2 class="mt-4 font-display font-bold text-cream text-3xl sm:text-5xl tracking-tight">
                    One Jar. <span class="text-gold-gradient italic">Nothing Else.</span>
                </h2>
                <p class="mt-3 text-muted max-w-xl mx-auto">Single-origin Karak Sidr honey, hygienically sealed in premium glass. Choose your size — every jar ships within 24 hours.</p>
            </div>

            <div class="card-dark grid lg:grid-cols-2 overflow-hidden">
                <!-- ── Gallery ── -->
                <div class="relative border-b lg:border-b-0 lg:border-r border-line p-6 sm:p-8 flex items-stretch bg-[#171310]">
                    <div class="absolute top-5 left-5 z-10 inline-flex items-center gap-2 rounded-full bg-gold-500 text-[#241300] text-[10px] font-extrabold uppercase tracking-[0.18em] px-3 py-1.5 shadow-gold-sm">
                        <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z"/></svg>
                        Best Seller
                    </div>
                    <ImageSlider
                        :images="[
                            { src: '/honey-product-1.jpeg', alt: 'SDR Honey jar and gift box — front view' },
                            { src: '/honey-product-2.jpeg', alt: 'SDR Honey jar — side view' },
                            { src: '/honey-product-3.jpeg', alt: 'SDR Honey jar — detail view' },
                            { src: '/sdr-honey-banner.jpeg', alt: 'SDR Honey — pure Sidr honey texture' },
                        ]"
                        :desktop-visible="1"
                        :mobile-visible="1"
                        :img-width="1056"
                        :img-height="1300"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 520px"
                        image-class="w-full h-full object-cover rounded-xl border border-gold-500/15"
                        class="w-full h-full min-h-[380px] sm:min-h-[480px]"
                    />
                </div>

                <!-- ── Purchase panel ── -->
                <div class="p-6 sm:p-10 flex flex-col">
                    <div class="flex items-start justify-between gap-4">
                        <div>
                            <h3 class="font-display text-2xl sm:text-3xl font-bold text-cream leading-snug">
                                Premium Sidr Honey
                                <span class="block text-lg sm:text-xl text-gold-400 font-sans font-semibold mt-1">بیری کا شہد · Beri ka Shehad</span>
                            </h3>
                        </div>
                        <div class="text-right shrink-0">
                            <p class="text-[10px] uppercase tracking-[0.2em] text-muted font-bold">Rating</p>
                            <div class="flex items-center gap-1 text-gold-400">
                                <svg v-for="s in 5" :key="s" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z"/></svg>
                            </div>
                            <p class="text-[11px] text-muted mt-0.5">4.9 · 1,800+ reviews</p>
                        </div>
                    </div>

                    <p class="mt-5 text-sm text-muted leading-relaxed">
                        Known as Beri Honey (بیری کا شہد) or Sidr Tree Honey — a deep, naturally sweet character with a delicate aroma. Kept close to its natural state: never heated, blended, thickened, or altered. Sealed fresh from the Karak forests to your table.
                    </p>

                    <!-- Quantity options -->
                    <p class="mt-6 text-[11px] uppercase tracking-[0.25em] text-gold-400 font-extrabold">Select Size</p>
                    <div class="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                        <button
                            v-for="option in options"
                            :key="option.label"
                            @click="selectOption(option)"
                            :aria-pressed="selectedOption.label === option.label"
                            :class="[
                                'relative rounded-2xl border px-2 py-3 text-center transition-all duration-300',
                                selectedOption.label === option.label
                                    ? 'border-gold-500 bg-gold-500/10 shadow-gold-sm -translate-y-0.5'
                                    : 'border-line bg-white/[0.02] hover:border-gold-500/35 hover:bg-gold-500/5',
                            ]"
                        >
                            <span v-if="option.tag" class="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-500 text-[#241300] text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5">{{ option.tag }}</span>
                            <span class="block font-extrabold text-sm sm:text-base text-cream">{{ option.label }}</span>
                            <span class="block text-[10px] sm:text-[11px] mt-1 font-semibold" :class="selectedOption.label === option.label ? 'text-gold-300' : 'text-muted'">
                                {{ option.price ? `Rs. ${option.price.toLocaleString()}` : "Custom" }}
                            </span>
                            <span v-if="option.save" class="block text-[9px] font-bold text-emerald-400/90 mt-0.5">Save Rs. {{ option.save.toLocaleString() }}</span>
                        </button>
                    </div>

                    <!-- Price -->
                    <div class="mt-6 flex items-end gap-3 border-t border-line pt-5">
                        <p class="font-display text-4xl sm:text-5xl font-extrabold text-cream">
                            <template v-if="selectedOption.price">Rs. {{ selectedOption.price.toLocaleString() }}</template>
                            <template v-else>Custom</template>
                        </p>
                        <p class="text-xs text-muted pb-1.5 leading-tight">
                            <template v-if="selectedOption.price">Incl. all taxes<br />Free delivery</template>
                            <template v-else>Tailored bulk pricing<br />on request</template>
                        </p>
                    </div>

                    <!-- CTAs -->
                    <div class="mt-5 grid sm:grid-cols-5 gap-3">
                        <button
                            @click="handleAddToCart"
                            class="btn-gold sm:col-span-3 justify-center text-sm sm:text-base"
                        >
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9.5" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/></svg>
                            {{ selectedOption.price ? "Add to Cart" : "Request Custom Order" }}
                        </button>
                        <a
                            href="https://wa.me/923311116915?text=I%27d%20like%20to%20order%20Premium%20Sidr%20Honey"
                            target="_blank"
                            rel="noopener"
                            class="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] font-bold text-sm px-4 py-4 hover:bg-[#25D366]/20 transition"
                        >
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.83 14.12c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.13-4.9-4.32-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z"/></svg>
                            Buy Now
                        </a>
                    </div>

                    <!-- Assurances -->
                    <div class="mt-6 grid grid-cols-3 gap-2 text-center">
                        <div v-for="item in assurances" :key="item.label" class="rounded-xl border border-line bg-white/[0.02] px-2 py-3">
                            <svg class="w-5 h-5 mx-auto text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" v-html="item.icon"></svg>
                            <p class="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-cream/75 leading-tight">{{ item.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ── Custom Order Modal ── -->
        <div
            v-if="showModal"
            class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="custom-order-title"
            @click.self="showModal = false"
        >
            <div class="card-dark w-full max-w-md p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
                <h3 id="custom-order-title" class="font-display text-2xl font-bold text-cream">Custom <span class="text-gold-gradient">Order</span></h3>
                <p class="text-xs text-muted mt-1">Bulk &amp; corporate gifting — we reply within the hour.</p>
                <form @submit.prevent="submitCustomOrder" class="mt-5 space-y-4">
                    <div>
                        <label for="custom-name" class="field-label">Your Name</label>
                        <input id="custom-name" type="text" v-model="customOrder.name" class="field-input" required />
                    </div>
                    <div>
                        <label for="custom-email" class="field-label">Your Email</label>
                        <input id="custom-email" type="email" v-model="customOrder.email" class="field-input" required />
                    </div>
                    <div>
                        <label for="custom-quantity" class="field-label">Quantity (kg)</label>
                        <input id="custom-quantity" type="number" min="1" v-model.number="customOrder.quantity" class="field-input" required />
                    </div>
                    <div>
                        <label for="custom-message" class="field-label">Message</label>
                        <textarea id="custom-message" v-model="customOrder.message" rows="3" class="field-input"></textarea>
                    </div>
                    <div class="flex justify-end gap-3 pt-1">
                        <button type="button" @click="showModal = false" class="rounded-full border border-line px-5 py-2.5 text-sm font-bold text-muted hover:text-cream hover:border-gold-500/40 transition">Cancel</button>
                        <button type="submit" class="btn-gold !px-6 !py-2.5 text-sm">Send Query</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.field-label {
    @apply block text-[10px] uppercase tracking-[0.2em] font-extrabold text-gold-400/90 mb-1.5;
}
.field-input {
    @apply w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-cream placeholder-muted/60 outline-none transition;
}
.field-input:focus {
    border-color: rgba(233, 190, 90, 0.5);
    box-shadow: 0 0 0 3px rgba(212, 160, 23, 0.12);
}
</style>

<script setup>
import { ref } from "vue";
import { useCartStore } from "~/stores/cart";
import ImageSlider from "~/components/ImageSlider.vue";

const cart = useCartStore();
const showModal = ref(false);

const options = [
    { label: "450g", weight: 450, price: 2500, tag: null, save: null },
    { label: "450g ×2", weight: 900, price: 4800, tag: null, save: 200 },
    { label: "450g ×3", weight: 1350, price: 7000, tag: "Best Value", save: 500 },
    { label: "5kg", weight: 5000, price: 22000, tag: null, save: 3000 },
    { label: "10kg", weight: 10000, price: 45000, tag: null, save: 5000 },
    { label: "Custom", weight: "custom", price: null, tag: null, save: null },
];

const assurances = [
    { label: "Free Delivery Over Rs. 5,000", icon: '<path d="M3 7h11v10H3zM14 10h4l3 3v4h-7"/><circle cx="7" cy="17" r="1.6"/><circle cx="17.5" cy="17" r="1.6"/>' },
    { label: "14-Day Easy Returns", icon: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>' },
    { label: "Sealed & Tamper-Proof", icon: '<path d="M12 22c5-3.5 7-8 7-12l-7-4-7 4c0 4 2 8.5 7 12z"/><path d="M9.5 12.5l2 2 3.5-4"/>' },
];

const selectedOption = ref(options[0]);

function selectOption(option) {
    if (option.weight === "custom") {
        showModal.value = true;
    } else {
        selectedOption.value = option;
    }
}

const { showToast } = useToast();

function handleAddToCart() {
    if (selectedOption.value.weight === "custom") {
        showModal.value = true;
        return;
    }
    const product = {
        id: `sidr-honey-${selectedOption.value.weight}g`,
        name: `Sidr Honey ${selectedOption.value.label}`,
        price: selectedOption.value.price,
    };
    cart.addToCart(product, 1);
    showToast(`${product.name} added to cart!`);
}

const customOrder = ref({ name: "", quantity: "", message: "", email: "" });
const config = useRuntimeConfig();

async function submitCustomOrder() {
    try {
        const response = await fetch(`${config.public.apiBase}/api/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: customOrder.value.name,
                quantity: customOrder.value.quantity,
                message: customOrder.value.message,
                email: customOrder.value.email,
            }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            alert("Your custom order has been submitted successfully!");
            showModal.value = false;
            customOrder.value = { name: "", quantity: "", message: "", email: "" };
        } else {
            alert(data.message || "Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error(error);
        alert("Error submitting order.");
    }
}
</script>
