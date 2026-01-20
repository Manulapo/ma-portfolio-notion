import { watch, type Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projects } from "../constants/projects";

export function useQueryParamProject(selectedProject: Ref<any>, modalOpen: Ref<boolean>) {
    const route = useRoute();
    const router = useRouter();

    const setQueryParamProject = (idx: number) => {
        if (idx >= 0) {
            const newQuery: Record<string, any> = { ...route.query, projects: String(idx + 1) }
            router.replace({ query: newQuery }).catch(() => { })
        }
    }

    const removeQueryParamProject = () => {
        const newQuery: Record<string, any> = { ...route.query }
        delete newQuery.projects
        router.replace({ query: newQuery }).catch(() => { })
    }

    watch(() => route.query.projects, (val) => {
        const v = Array.isArray(val) ? val[0] : val
        const n = parseInt(v || '')
        if (!isNaN(n)) {
            const idx = n - 1
            if (idx >= 0 && idx < projects.length) {
                selectedProject.value = projects[idx];
                modalOpen.value = true;
            }
        }
    }, { immediate: true });

    return {
        removeQueryParamProject,
        setQueryParamProject
    }
}