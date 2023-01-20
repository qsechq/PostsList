<template>
    <ul class="pagination__list">
        <PaginationItem @click="changeCurrentPage(pageNumber)"  @changePageNumber="$emit('changePageNumber', pageNumber)" :pageNumber="pageNumber"  class="pagination__item" v-for="pageNumber in pageNumbers"
            :key="pageNumber" :class="{ 'pagination__item--current': currentPageNum === pageNumber }"></PaginationItem>
    </ul>
</template>

<script>
import PaginationItem from '@/components/PaginationItem.vue';

export default {
    components: {
        PaginationItem
    },
    props: {
        pageNumbers: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            currentPageNum: 1,
        }
    },
    methods: {
        changeCurrentPage(pageNumber) {
            this.currentPageNum = pageNumber;
        }
    }
}
</script>

<style scoped>

.pagination__list {
    display: flex;
    margin-top: 15px;
}


</style>