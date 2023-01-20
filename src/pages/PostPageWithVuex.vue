<template>
    <div>
        <h2>Создание поста</h2>
        <my-input placeholder="Поиск" :model-value="searchQuery" @update:model-value="setSearchQuery"></my-input>
        <div class="app__btns">
            <my-button class="btn--modal" @click.prevent="showModal">Создать пост</my-button>
            <div class="div">
                <div>Сортировка:</div>
                <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortedOptions"></my-select>
            </div>
        </div>
        <my-modal v-model:show="modalVisible">
            <post-form @create="createPost"></post-form>
        </my-modal>
        <PostList :posts="sortedAndSearchedPosts" v-if="isLoading === false" @delete="deletePost"></PostList>
        <div v-else class="loader">
            <div></div>
            <div></div>
        </div>

        <div v-intersection="loadMorePosts" class="observer"></div>
    </div>

</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import PaginationList from '@/components/PaginationList.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import axios from 'axios';

export default {
    components: {
        PostForm, PostList, PaginationList
    },
    data() {
        return {
            modalVisible: false,


        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            fetchPosts: 'post/fetchPosts',
            loadMorePosts: 'post/loadMorePosts',
        }),


        createPost(post) {
            this.posts.push(post);
            this.modalVisible = false;
        },
        deletePost(post) {
            // this.posts.splice(post);
            this.posts = this.posts.filter(p => p.id !== post.id)

        },
        showModal() {
            this.modalVisible = true;
        },
        // changePage(pageNumber) {
        //     this.page =  pageNumber;
        // },


    },
    mounted() {
        this.fetchPosts();
        

    },
    computed: {

        ...mapState({
            posts: state => state.post.posts,
            isLoading: state => state.post.isLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            limit: state => state.post.limit,
            page: state => state.post.page,
            totalPages: state => state.post.totalPages,
            sortedOptions: state => state.post.sortedOptions
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
    },
    watch: {
        // page(){
        //     this.fetchPosts();  
        // }
    }
}
</script>

<style scoped>
.btn--modal {
    margin: 15px 0;
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

.observer {
    height: 30px;
    background: green;

}
</style>