import { ref, onMounted } from 'vue'

export function useTheme() {
    const isDark = ref(false)

    function applyClass(dark: boolean) {
        if (dark) document.documentElement.classList.add('theme-dark')
        else document.documentElement.classList.remove('theme-dark')
    }

    function setTheme(dark: boolean) {
        isDark.value = dark
        try {
            applyClass(dark)
            localStorage.setItem('theme', dark ? 'dark' : 'light')
        } catch (e) {
            // ignore
        }
    }

    function toggleTheme() {
        setTheme(!isDark.value)
    }

    onMounted(() => {
        try {
            const saved = localStorage.getItem('theme')
            if (saved === 'dark') {
                isDark.value = true
                applyClass(true)
                return
            }
            if (saved === 'light') {
                isDark.value = false
                applyClass(false)
                return
            }
            // fallback to system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                isDark.value = true
                applyClass(true)
            }
        } catch (e) {
            // ignore
        }
    })

    return { isDark, setTheme, toggleTheme }
}
