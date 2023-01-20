<template>
    <li class="post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="btns">
            <my-button @click="$router.push(`/posts/${ post.id }`)" class="btn">Открыть</my-button>
            <my-button @click.prevent="$emit('delete', post)" class="btn">Удалить</my-button>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
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
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 5px;
}

.btns{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn{
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
}

.btn:nth-child(2){
    margin-bottom: 0;
}
</style>