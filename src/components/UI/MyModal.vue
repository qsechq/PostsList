<template>
    <div id="modal" class="modal" v-if="show" @click="hideModal"> 
        <div @click.stop class="modal__content">
            <slot></slot>
        </div>
    </div>
</template>
    
<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
    name: 'my-modal',
    mixins:[toggleMixin]

}
</script>
    
<style>
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.modal__content{
    border:2px solid teal;
    background:#fff;
    width: 500px;
    border-radius: 12px;
    align-items: flex-start;
    padding: 20px 20px;
}
</style>