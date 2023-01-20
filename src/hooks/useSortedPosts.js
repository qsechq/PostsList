import { ref, onMounted, computed } from 'vue';

export function useSortedPosts(posts) {
    const selectedSort = ref('')
    const sortedPosts = computed(() => {
        return [...posts.value].sort((post1, post2) => post1[selectedSort.value] > post2[selectedSort.value] ? 1 : -1)
    })

    return {
        selectedSort, sortedPosts
    }

}