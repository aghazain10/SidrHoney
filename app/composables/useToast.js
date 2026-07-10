import { ref } from "vue";

const message = ref("");
let timeoutId = null;

export function useToast() {
    function showToast(text, duration = 2500) {
        message.value = text;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            message.value = "";
        }, duration);
    }

    return { message, showToast };
}
