<template>
    <div class="header">
       <HeadLogo/>
        <HeadMenu/>


    </div>
</template>

<script>
import HeadLogo from "@/commons/content/HeadLogo"
import HeadMenu from "@/commons/content/HeadMenu.vue"
export default {
    name: "Header",
    components:{
        HeadLogo,
        HeadMenu
    }
}
</script>

<style scoped>

.header{
    height: 150px;;
    display: flex;

    
}

</style>