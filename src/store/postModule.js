import axios from 'axios';
export const postModule = {
    state: function () {
        return {
            posts: [],
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
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort] > post2[state.selectedSort] ? 1 : -1)
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        },

    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setIsLoading(state, bool) {
            state.isLoading = bool;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },

        setPage(state, page) {
            state.page = page;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },

    },
    actions: {
        async fetchPosts({ state, commit }) {
            try {
                commit('setIsLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', response.data)
                commit('setIsLoading', false)
            } catch (e) {
                alert('error');
                console.log(e)
            } finally {
                commit('setIsLoading', false)
            }
        },

        async loadMorePosts({ state, commit }) {
            try {
                commit('setPage', state.page + 1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', [...state.posts, ...response.data]);

            } catch (e) {
                alert('error');
                console.log(e)
            }
        },
        // deletePost(state, commit) {
        //     commit('setPosts', state.posts = state.posts.filter(p => p.id !== post.id))

        // },
    },
    namespaced: true
}