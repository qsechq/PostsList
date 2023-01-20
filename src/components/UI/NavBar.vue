<template>  
    <nav class="navbar">
        <ul class="navbar__list">
            <li class="navbar__item">
                <my-button @click="$router.push('/posts')">На страницу с постами</my-button>
            </li>
            <li class="navbar__item">
                <my-button @click="$router.push('/about')">На страницу о сайте</my-button>
            </li>
            <li class="navbar__item">
                <my-button @click="$router.push('/')">Мейн страница</my-button>
            </li>
            <!-- <li class="navbar__item">
                <my-button @click="$router.push('/posts-with-pagination')">На страницу с постами с пагинацией</my-button>
            </li> -->
            <li class="navbar__item">
                <my-button @click="$router.push('/posts-with-vuex')">На страницу с постами с Vuex</my-button>
            </li>
            <li class="navbar__item">
                <my-button @click="$router.push('/post-page-with-composition-api')">На страницу с постами с composition api</my-button>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default{
        
    }
</script>

<style scoped>
    .navbar{
        background: grey;
        box-shadow: 2px 2px 4px gray;
        padding: 15px 15px;
    }

    .navbar__list{
        display: flex;
        align-items: center;
    }

    .navbar__item{
       margin-right: 15px;
    }

    .navbar__item button{

        color: #fff;
    }

    .navbar__item:last-child{
        margin-right: 0;
    }
</style>