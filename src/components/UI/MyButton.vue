<template>
    <button class="btn"><slot>
        
    </slot></button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style >
.btn {
    background: none;
    padding: 7px 10px;
    border-radius: 5px;
    color: #000;
    font-weight: bold;
    border: 1px solid teal;
    cursor: pointer;
    align-self: flex-end;
}
</style>