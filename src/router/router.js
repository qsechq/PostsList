import Main from '@/pages/Main.vue';
import PostPage from '@/pages/PostPage.vue'
import About from '@/pages/About.vue'
import PostPageWithPagination from '@/pages/PostPageWithPagination.vue'
import PostsIdPage from '@/pages/PostsIdPage.vue'
import PostPageWithVuex from '@/pages/PostPageWithVuex.vue'
import PostPageWithCompositionApi from '@/pages/PostPageWithCompositionApi.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts-with-pagination',
        component: PostPageWithPagination
    },
    {
        path: '/posts/:id',
        component: PostsIdPage
    },
    {
        path: '/posts-with-vuex',
        component: PostPageWithVuex
    },
    {
        path: '/post-page-with-composition-api',
        component: PostPageWithCompositionApi
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;