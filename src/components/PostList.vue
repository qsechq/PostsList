<template>
    <div v-if="posts.length">
        <h2>Список постов</h2>
        <ul>
            <transition-group name="posts-list">
                <PostItem @delete="$emit('delete', post)" :post="post" v-for="post in posts" :id="post.id"
                    :key="post.id"></PostItem>
            </transition-group>

        </ul>
    </div>
    <div v-else>
        <h2 class="post__null">Список постов пуст</h2>
    </div>
</template>

<script>
import PostItem from './PostItem.vue';


export default {
    components: {
        PostItem
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    data() {
        return {

        }
    },

}
</script>

<style scoped>
ul {
    list-style-type: none;
    overflow: hidden;
    position: relative;
}

.post__null {
    color: red;
}

h3 {
    margin: 20px 0;
}

.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 0.4s ease;
}
.posts-list-leave-active {
    position: absolute;
    transform: translateX(130px);
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.posts-list-move {
    transition: all 0.4s ease;
}
</style>