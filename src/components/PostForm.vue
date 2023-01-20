<template>
    <form>
        <h4>Создание поста</h4>
        <my-input v-focus v-model="post.title" placeholder="Название"/>
        <my-input v-model="post.body" placeholder="Описание"/>
        <my-button @click.prevent="createPost" class="btn">Добавить</my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: '',
            };
        },
    }
}
</script>

<style scoped>
form {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}

.btn{
    margin-top: 15px;
}
</style>