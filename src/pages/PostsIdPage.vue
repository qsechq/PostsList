<template>
    <div class="detail">
        <h1 class="detail__title">Это страница поста с ID = {{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data (){
        return {

        }
    },
    methods: {

    },
    mounted(){
    }
}
</script>

<style scoped>

</style>