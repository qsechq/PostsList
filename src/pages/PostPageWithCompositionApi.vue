<template>
    <div>
        <h2>Создание поста</h2>
        <my-input placeholder="Поиск" v-model="searchQuery"></my-input>
        <div class="app__btns">
            <!-- <my-button class="btn--modal">Создать пост</my-button> -->
            <my-select v-model="selectedSort" :options="sortedOptions"></my-select>
        </div>
        <!-- <my-modal v-model:show="modalVisible">
            <post-form @create="createPost"></post-form>
        </my-modal> -->
        <PostList v-if="isLoading === false"  :posts="sortedAndSearchedPosts"></PostList>
        <div v-else class="loader">
            <div></div>
            <div></div>
        </div>

    </div>

</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import PaginationList from '@/components/PaginationList.vue';
import { usePosts } from '@/hooks/usePosts.js'
import { useSortedPosts } from '@/hooks/useSortedPosts.js'
import { useSortedAndSearchedPosts } from '@/hooks/useSortedAndSearchedPosts.js'
import {ref} from 'vue';
import axios from 'axios';

export default {
    components: {
        PostForm, PostList, PaginationList
    },
    data() {
        return {
            modalVisible: false,
            sortedOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По описанию' },
                { value: 'id', name: 'По id' },
            ],
        }
    },
    methods: {
     
    },
    setup(props){
        const { posts, totalPages, isLoading } = usePosts(10)
        const {selectedSort, sortedPosts} = useSortedPosts(posts)
        const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)

        return {
            posts, 
            totalPages, 
            isLoading,
            selectedSort, 
            sortedPosts,
            searchQuery, 
            sortedAndSearchedPosts
        }
    }
}
</script>

<style scoped>



.btn--modal {
    margin: 15px 0;
}

select{
    margin: 10px 0;
}

.loader {
    position: relative;
    width: 64px;
    height: 64px;
}

.loader div {
    position: absolute;
    border: 4px solid teal;
    border-radius: 50%;
    animation: loader 1s ease-out infinite;
}

.loader div:nth-child(2) {
    animation-delay: -0.5s;
}

.app__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


@keyframes loader {
    0% {
        top: 32px;
        left: 32px;
        width: 0;
        height: 0;
        opacity: 1;
    }

    100% {
        top: 0;
        left: 0;
        width: 64px;
        height: 64px;
        opacity: 0;
    }
}

.observer{
    height: 30px;
    background: green;

}
</style>