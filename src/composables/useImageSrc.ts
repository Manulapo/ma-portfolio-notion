import { computed, unref } from 'vue'
import type { Ref } from 'vue'

export function useImageSrc(image: string | Ref<string>) {
    return computed(() => {
        const img = unref(image) || ''
        if (!img) return ''
        if (/^https?:\/\//.test(img)) return img
        // If path is absolute (starts with '/'), prefix with Vite's base URL
        if (img.startsWith('/')) {
            const base = (import.meta.env.BASE_URL ?? '/') as string
            return `${base}${img.replace(/^\//, '')}`
        }
        try {
            return new URL(img, import.meta.url).href
        } catch {
            return img
        }
    })
}
