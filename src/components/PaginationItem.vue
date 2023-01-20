<template>
    <li @click="$emit('changePageNumber', pageNumber)" class="pagination__item" >{{ this.pageNumber }}</li>

</template>

<script>
export default {
    props: {
        pageNumber: {
            type: Number,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.pagination__item {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    margin-right: 15px;
    cursor: pointer;
}

.pagination__item:last-child{
    margin-right: 0;
}

.pagination__item--current {
    border: 2px solid teal;
}
</style>