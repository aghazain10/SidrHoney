<template>
    <div class="relative min-h-screen bg-ink text-cream overflow-hidden">
        <!-- Ambient glow -->
        <div
            class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[50rem] h-[34rem] rounded-full"
            style="background: radial-gradient(ellipse, rgba(212,160,23,0.1), transparent 65%);"
            aria-hidden="true"
        ></div>

        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16">
            <!-- Top bar -->
            <div class="flex items-center justify-between">
                <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-gold-300 transition">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></svg>
                    Back to Shop
                </NuxtLink>
                <div class="flex items-center gap-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-muted">
                    <svg class="w-4 h-4 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
                    Secure Checkout
                </div>
            </div>

            <h1 class="mt-6 font-display font-bold text-4xl sm:text-5xl tracking-tight text-cream">
                Checkout <span class="text-gold-gradient italic">— Almost Yours.</span>
            </h1>

            <!-- ══════════ Success Summary ══════════ -->
            <div
                v-if="orderSuccess"
                class="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-6 sm:p-10"
            >
                <div class="text-center">
                    <div class="mx-auto flex w-20 h-20 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/40">
                        <svg class="w-9 h-9 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <h2 class="mt-5 font-display text-3xl sm:text-4xl font-bold text-cream">
                        Order Placed <span class="text-gold-gradient italic">Successfully!</span>
                    </h2>
                    <p class="mt-1.5 text-gold-400 font-bold">Order ID: #{{ orderData.id }}</p>
                </div>

                <div class="mt-8 grid md:grid-cols-2 gap-5">
                    <!-- Customer info -->
                    <div class="rounded-2xl border border-line bg-card p-6">
                        <h3 class="font-display text-lg font-bold text-cream border-b border-line pb-3">
                            Customer <span class="text-gold-400">Information</span>
                        </h3>
                        <dl class="mt-4 space-y-3 text-sm">
                            <div class="flex flex-col sm:flex-row sm:gap-3"><dt class="text-muted sm:w-32 shrink-0">Name</dt><dd class="text-cream font-semibold">{{ orderData.name }}</dd></div>
                            <div class="flex flex-col sm:flex-row sm:gap-3"><dt class="text-muted sm:w-32 shrink-0">Email</dt><dd class="text-cream font-semibold break-all">{{ orderData.email }}</dd></div>
                            <div class="flex flex-col sm:flex-row sm:gap-3"><dt class="text-muted sm:w-32 shrink-0">Phone</dt><dd class="text-cream font-semibold">{{ orderData.phone }}</dd></div>
                            <div class="flex flex-col sm:flex-row sm:gap-3"><dt class="text-muted sm:w-32 shrink-0">Address</dt><dd class="text-cream font-semibold">{{ orderData.address }}</dd></div>
                            <div class="flex flex-col sm:flex-row sm:gap-3"><dt class="text-muted sm:w-32 shrink-0">Payment</dt><dd class="text-cream font-semibold">{{ orderData.payment_method === "cod" ? "Cash on Delivery" : "Bank Transfer" }}</dd></div>
                        </dl>
                    </div>

                    <!-- Items -->
                    <div class="rounded-2xl border border-line bg-card p-6">
                        <h3 class="font-display text-lg font-bold text-cream border-b border-line pb-3">
                            Order <span class="text-gold-400">Items</span>
                        </h3>
                        <div class="mt-4 space-y-4">
                            <div
                                v-for="item in orderData.items"
                                :key="item.id"
                                class="flex justify-between items-center gap-4 border-b border-line pb-4 last:border-0 last:pb-0"
                            >
                                <div>
                                    <p class="font-bold text-cream">{{ item.name }}</p>
                                    <p class="text-xs text-muted mt-0.5">Qty: {{ item.quantity }} × Rs {{ item.price }}</p>
                                </div>
                                <p class="font-extrabold text-gold-300 whitespace-nowrap">Rs {{ (item.price * item.quantity).toLocaleString() }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Totals -->
                <div class="mt-5 rounded-2xl border border-line bg-card p-6">
                    <div class="space-y-2.5 text-base">
                        <div class="flex justify-between"><span class="text-muted">Subtotal</span><span class="text-cream font-semibold">Rs {{ Number(orderData.subtotal).toLocaleString() }}</span></div>
                        <div class="flex justify-between"><span class="text-muted">Delivery Charges</span><span class="text-cream font-semibold">Rs {{ Number(orderData.delivery_charges).toLocaleString() }}</span></div>
                        <div class="flex justify-between font-display font-extrabold text-xl sm:text-2xl pt-4 border-t border-line"><span class="text-cream">Total Amount</span><span class="text-gold-gradient">Rs {{ Number(orderData.total).toLocaleString() }}</span></div>
                    </div>
                </div>

                <button @click="goToShop" class="btn-gold mt-7 w-full justify-center text-base">
                    Continue Shopping
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
                </button>
            </div>

            <!-- ══════════ Empty Cart ══════════ -->
            <div v-else-if="isCartEmpty" class="mt-10 rounded-2xl border border-line bg-card py-16 px-6 text-center">
                <svg class="w-14 h-14 mx-auto text-gold-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5.2 3.5A1 1 0 0 0 4.3 2.7H2.5"/><circle cx="9.5" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/></svg>
                <h2 class="mt-5 font-display text-2xl font-bold text-cream">Your Cart is <span class="text-gold-gradient italic">Empty</span></h2>
                <p class="mt-2 text-muted">Looks like you haven't added any items yet.</p>
                <button @click="goToShop" class="btn-gold mt-7 !px-8 text-base">Continue Shopping</button>
            </div>

            <!-- ══════════ Error ══════════ -->
            <div
                v-else-if="errorMessage"
                class="mt-8 rounded-xl border border-red-500/40 bg-red-500/10 text-red-300 px-5 py-4 text-sm font-semibold"
                role="alert"
            >
                {{ errorMessage }}
            </div>

            <!-- ══════════ Checkout Form ══════════ -->
            <form v-else @submit.prevent="submitOrder" class="mt-8 grid lg:grid-cols-5 gap-6">
                <!-- Form fields -->
                <div class="lg:col-span-3 rounded-2xl border border-line bg-card p-6 sm:p-7 space-y-5">
                    <h2 class="font-display text-xl font-bold text-cream border-b border-line pb-4">
                        Delivery <span class="text-gold-400">Details</span>
                    </h2>

                    <div>
                        <label for="checkout-name" class="field-label">Full Name</label>
                        <input id="checkout-name" v-model="form.name" type="text" required autocomplete="name" placeholder="Zain Rizvee" class="field-input" />
                    </div>

                    <div>
                        <label for="checkout-email" class="field-label">Email Address</label>
                        <input id="checkout-email" v-model="form.email" type="email" required autocomplete="email" placeholder="you@example.com" class="field-input" />
                    </div>

                    <div>
                        <label for="checkout-phone" class="field-label">Phone Number</label>
                        <input id="checkout-phone" v-model="form.phone" type="tel" required autocomplete="tel" placeholder="0346 0000000" class="field-input" />
                    </div>

                    <div>
                        <label for="checkout-address" class="field-label">Delivery Address</label>
                        <textarea id="checkout-address" v-model="form.address" required rows="3" placeholder="House / street / area / city" class="field-input"></textarea>
                    </div>

                    <div>
                        <label for="checkout-payment" class="field-label">Payment Method</label>
                        <select id="checkout-payment" v-model="form.payment_method" required class="field-input">
                            <option value="cod">Cash on Delivery</option>
                            <option value="bank">Bank Transfer</option>
                        </select>
                    </div>
                </div>

                <!-- Order summary -->
                <aside class="lg:col-span-2">
                    <div class="rounded-2xl border border-gold-500/25 bg-gradient-to-b from-gold-500/[0.07] to-transparent p-6 sm:p-7 lg:sticky lg:top-8">
                        <h2 class="font-display text-xl font-bold text-cream border-b border-line pb-4">
                            Your <span class="text-gold-400">Order</span>
                        </h2>
                        <ul class="mt-4 space-y-3 max-h-64 overflow-y-auto pr-1">
                            <li v-for="item in cart.cartItems.value" :key="item.id" class="flex items-center justify-between gap-3 text-sm">
                                <span class="text-cream/90 font-semibold leading-snug">{{ item.name }} <span class="text-muted">× {{ item.quantity }}</span></span>
                                <span class="text-gold-300 font-bold whitespace-nowrap">Rs {{ (item.price * item.quantity).toLocaleString() }}</span>
                            </li>
                        </ul>
                        <div class="mt-5 space-y-2 border-t border-line pt-4 text-sm">
                            <div class="flex justify-between"><span class="text-muted">Subtotal</span><span class="text-cream font-semibold">Rs {{ subtotal.toLocaleString() }}</span></div>
                            <div class="flex justify-between"><span class="text-muted">Delivery</span><span class="text-cream font-semibold">Rs {{ deliveryCharges.toLocaleString() }}</span></div>
                            <div class="flex justify-between font-display font-extrabold text-lg pt-3 border-t border-line"><span class="text-cream">Total</span><span class="text-gold-gradient">Rs {{ (subtotal + deliveryCharges).toLocaleString() }}</span></div>
                        </div>

                        <button
                            type="submit"
                            :disabled="loading"
                            class="btn-gold mt-6 w-full justify-center text-base disabled:opacity-60 disabled:pointer-events-none"
                        >
                            {{ loading ? "Processing Order..." : "Place Order" }}
                            <svg v-if="!loading" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M6 11l6-6 6 6"/></svg>
                        </button>
                        <p class="mt-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted">
                            <svg class="w-4 h-4 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
                            100% Secure · Cash on Delivery Available
                        </p>
                    </div>
                </aside>
            </form>
        </div>
    </div>
</template>

<style scoped>
.field-label {
    @apply block text-[10px] uppercase tracking-[0.22em] font-extrabold text-gold-400/90 mb-1.5;
}
.field-input {
    @apply w-full rounded-xl border border-line bg-white/[0.04] px-4 py-3.5 text-sm text-cream outline-none transition placeholder-muted/60;
}
.field-input:focus {
    border-color: rgba(233, 190, 90, 0.5);
    box-shadow: 0 0 0 3px rgba(212, 160, 23, 0.12);
}
select.field-input option {
    background-color: #1a1611;
    color: #f5ede0;
}
</style>

<script setup>
import { ref, computed } from "vue";
import { useCart } from "~/composables/useCart";

const cart = useCart();

const form = ref({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment_method: "cod",
});

const orderSuccess = ref(false);
const orderData = ref(null);
const errorMessage = ref("");
const loading = ref(false);
const config = useRuntimeConfig();

const isCartEmpty = computed(() => cart.cartItems.value.length === 0);

// Matches the backend's flat delivery fee (see OrderController)
const subtotal = computed(() =>
    cart.cartItems.value.reduce((sum, i) => sum + i.price * i.quantity, 0),
);
const deliveryCharges = computed(() => 250);

useHead({
    title: "Checkout – Sidr Honey",
    meta: [{ name: "robots", content: "noindex, nofollow" }],
});

async function submitOrder() {
    errorMessage.value = "";
    loading.value = true;

    try {
        const payload = {
            ...form.value,
            items: cart.cartItems.value.map((item) => ({
                product_id: item.id || null,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
            })),
        };

        const res = await fetch(`${config.public.apiBase}/api/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (res.ok && data.success) {
            orderData.value = data.order;
            orderSuccess.value = true;
            cart.clearCart();
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            if (data.errors) {
                errorMessage.value =
                    Object.values(data.errors).flat()[0] ||
                    "Please check your information.";
            } else {
                errorMessage.value =
                    data.message || "Something went wrong. Please try again.";
            }
        }
    } catch (error) {
        errorMessage.value = "Something went wrong. Please try again.";
    } finally {
        loading.value = false;
    }
}

function goToShop() {
    navigateTo("/");
}
</script>
