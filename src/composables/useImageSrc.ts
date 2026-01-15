import { computed, unref } from 'vue'
import type { Ref } from 'vue'

export function useImageSrc(image: string | Ref<string>) {
    return computed(() => {
        const img = unref(image) || ''
        if (!img) return ''
        if (/^https?:\/\//.test(img) || img.startsWith('/')) return img
        try {
            return new URL(img, import.meta.url).href
        } catch {
            return img
        }
    })
}
