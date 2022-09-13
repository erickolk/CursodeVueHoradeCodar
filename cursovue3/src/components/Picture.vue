<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
    export default {
        name: 'Picture',
        data () {
            return {
                avatar: '/img/avatar.png',
                descricao: 'Erick Souza'
            }
        }
    }
</script>

<style>
    img{
        width: 300px;
    }
</style>