<template>
    <div>
        <h2>Создание поста</h2>
        <my-input placeholder="Поиск" v-model="searchQuery"></my-input>
        <div class="app__btns">
            <my-button class="btn--modal" @click.prevent="showModal">Создать пост</my-button>
            <my-select v-model="selectedSort" :options="sortedOptions"></my-select>
        </div>
        <my-modal v-model:show="modalVisible">
            <post-form @create="createPost"></post-form>
        </my-modal>
        <PostList v-if="isLoading === false" @delete="deletePost" :posts="sortedAndSearchedPosts"></PostList>
        <div v-else class="loader">
            <div></div>
            <div></div>
        </div>
        <!-- <pagination-list @changePageNumber="changePage" :pageNumbers="this.totalPages"></pagination-list> -->
        <div v-intersection="loadMorePosts" class="observer"></div>
    </div>

</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import PaginationList from '@/components/PaginationList.vue';
import axios from 'axios';

export default {
    components: {
        PostForm, PostList, PaginationList
    },
    data() {
        return {
            posts: [],
            modalVisible: false,
            isLoading: true,
            selectedSort: '',
            searchQuery: '',
            limit: 10,
            page: 1,
            totalPages: 0,
            sortedOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По описанию' },
                { value: 'id', name: 'По id' },
            ],
        }
    },
    methods: {
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
        async fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.posts = response.data;
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
            } catch (e) {
                alert('error');
            } finally {
                this.isLoading = false;
            }
        },
        async loadMorePosts() {
        try {
            this.page +=1;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: this.page,
                    _limit: this.limit
                }
            });
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
            this.posts = [...this.posts, ...response.data];
        } catch (e) {
            alert('error');
        }
    },
    },
    mounted() {
        this.fetchPosts();

    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort] > post2[this.selectedSort] ? 1 : -1)
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
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

.observer{
    height: 30px;
    background: green;

}
</style>