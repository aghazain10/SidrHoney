// Adds .is-visible to any .reveal element when it enters the viewport.
export function useReveal() {
    if (import.meta.client) {
        onMounted(() => {
            const els = document.querySelectorAll(".reveal");
            if (!("IntersectionObserver" in window)) {
                els.forEach((el) => el.classList.add("is-visible"));
                return;
            }
            const io = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("is-visible");
                            io.unobserve(entry.target);
                        }
                    }
                },
                { threshold: 0.08, rootMargin: "0px 0px 120px 0px" },
            );
            els.forEach((el) => io.observe(el));
            // Safety net: never leave content invisible
            window.setTimeout(
                () => els.forEach((el) => el.classList.add("is-visible")),
                1600,
            );
        });
    }
}
