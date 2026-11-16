<template>
    <nav
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        :class="scrolled ? 'glass-nav shadow-[0_10px_40px_rgba(0,0,0,0.4)]' : 'bg-transparent border-b border-transparent'"
    >
        <!-- Announcement ticker -->
        <div class="overflow-hidden border-b border-gold-500/10 bg-[#0e0c08]/90">
            <div class="ticker flex items-center gap-10 py-1.5 whitespace-nowrap text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-300/80">
                <span v-for="(item, i) in tickerItems" :key="i" class="flex items-center gap-3">
                    <svg class="w-3 h-3 text-gold-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z"/>
                    </svg>
                    {{ item }}
                </span>
                <span v-for="(item, i) in tickerItems" :key="'dup-' + i" class="flex items-center gap-3" aria-hidden="true">
                    <svg class="w-3 h-3 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z"/>
                    </svg>
                    {{ item }}
                </span>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-[72px] flex justify-between items-center gap-4">
            <!-- Logo -->
            <NuxtLink to="/" class="flex items-center gap-3 shrink-0 group">
                <img
                    src="/sdhoney.png"
                    alt="SDR Honey logo"
                    class="h-11 w-11 md:h-12 md:w-12 object-contain drop-shadow-[0_0_12px_rgba(212,160,23,0.35)] transition-transform duration-500 group-hover:rotate-6"
                    width="48"
                    height="48"
                />
                <span class="leading-tight">
                    <span class="block font-display font-bold text-lg md:text-xl text-cream tracking-wide">SDR <span class="text-gold-gradient">HONEY</span></span>
                    <span class="hidden sm:block text-[9px] uppercase tracking-[0.3em] text-muted">Wild Forest · Karak</span>
                </span>
            </NuxtLink>

            <!-- Desktop Menu -->
            <ul class="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-wide text-cream/80">
                <li><NuxtLink to="/#shop" class="nav-link">Shop Honey</NuxtLink></li>
                <li><NuxtLink to="/#whyus" class="nav-link">Why Us</NuxtLink></li>
                <li><NuxtLink to="/#reviews" class="nav-link">Reviews</NuxtLink></li>
                <li><NuxtLink to="/#about" class="nav-link">Our Story</NuxtLink></li>
                <li><NuxtLink to="/blog" class="nav-link">Journal</NuxtLink></li>
            </ul>

            <!-- Right side -->
            <div class="flex items-center gap-2 sm:gap-4">
                <a
                    href="#shop"
                    class="hidden md:inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#241300] rounded-full px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5"
                    style="background: linear-gradient(160deg,#fbe98a,#d4a017 60%,#a86e14); box-shadow: 0 6px 20px rgba(212,160,23,0.35);"
                >
                    Order Now
                </a>

                <!-- Cart -->
                <button
                    class="relative cursor-pointer p-2 rounded-full text-cream/85 hover:text-gold-300 hover:bg-gold-500/10 transition"
                    aria-label="Open cart"
                    @click="openCart"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 6h15l-1.5 9h-12z"/>
                        <path d="M6 6L5.2 3.5A1 1 0 0 0 4.3 2.7H2.5"/>
                        <circle cx="9.5" cy="19.5" r="1.4"/>
                        <circle cx="17" cy="19.5" r="1.4"/>
                    </svg>
                    <span
                        v-if="cart.itemCount()"
                        class="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1 flex items-center justify-center bg-gold-500 text-[#241300] text-[10px] font-extrabold rounded-full"
                    >
                        {{ cart.itemCount() }}
                    </span>
                </button>

                <!-- Hamburger -->
                <button
                    @click="showMenu = true"
                    class="lg:hidden p-2 text-cream/85 hover:text-gold-300 transition"
                    aria-label="Open menu"
                >
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" stroke-linecap="round">
                        <path d="M4 7h16M4 12h16M4 17h10" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Drawer -->
        <Transition name="drawer">
            <div v-if="showMenu" class="fixed inset-0 z-50 flex">
                <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="showMenu = false"></div>
                <div class="relative ml-auto w-[82%] max-w-sm h-full bg-[#14100b] border-l border-gold-500/15 p-6 flex flex-col">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="/sdhoney.png" alt="SDR Honey" class="h-10 w-10 object-contain" />
                            <span class="font-display font-bold text-gold-400">SDR HONEY</span>
                        </div>
                        <button @click="showMenu = false" class="p-2 text-muted hover:text-gold-300" aria-label="Close menu">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"><path d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>
                    </div>

                    <ul class="mt-10 space-y-1 text-cream/85">
                        <li v-for="link in drawerLinks" :key="link.to">
                            <NuxtLink
                                :to="link.to"
                                class="flex items-center justify-between py-4 px-4 rounded-xl text-lg font-semibold border border-transparent hover:border-gold-500/20 hover:bg-gold-500/5 hover:text-gold-300 transition"
                                @click="showMenu = false"
                            >
                                {{ link.label }}
                                <span class="text-gold-500">→</span>
                            </NuxtLink>
                        </li>
                    </ul>

                    <a
                        href="https://wa.me/923311116915"
                        class="btn-gold mt-auto justify-center text-sm"
                        target="_blank"
                        rel="noopener"
                    >
                        Order via WhatsApp
                    </a>
                </div>
            </div>
        </Transition>

        <!-- Cart Drawer -->
        <CartDrawer ref="cartDrawer" />
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useCartStore } from "~/stores/cart";
import CartDrawer from "~/components/CartDrawer.vue";

const showMenu = ref(false);
const scrolled = ref(false);
const cart = useCartStore();
const cartDrawer = ref(null);

const tickerItems = [
    "Free delivery over Rs. 5,000",
    "100% Raw & Unheated",
    "ISO 9001 · ISO 22000 · GMP · HACCP · Halal",
    "14-day easy returns",
    "Single-origin · Wild Forests of Karak",
];

const drawerLinks = [
    { to: "/#shop", label: "Shop Honey" },
    { to: "/#whyus", label: "Why Us" },
    { to: "/#reviews", label: "Reviews" },
    { to: "/#about", label: "Our Story" },
    { to: "/#faq", label: "FAQs" },
    { to: "/blog", label: "Journal" },
];

function onScroll() {
    scrolled.value = window.scrollY > 60;
}

onMounted(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));

function openCart() {
    if (cartDrawer.value && typeof cartDrawer.value.openCart === "function") {
        cartDrawer.value.openCart();
    }
}
</script>

<style scoped>
.nav-link {
    position: relative;
    padding: 0.25rem 0;
    transition: color 0.3s;
}
.nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: linear-gradient(90deg, #f6d87a, #b4770e);
    transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.nav-link:hover {
    color: #f6d87a;
}
.nav-link:hover::after {
    width: 100%;
}
</style>

<style>
.drawer-enter-active,
.drawer-leave-active {
    transition: opacity 0.35s ease;
}
.drawer-enter-from,
.drawer-leave-to {
    opacity: 0;
}
</style>
