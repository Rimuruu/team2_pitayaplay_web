<template>
    <div class="header">

        <HeadLogo/> 
      
        <HeadMenu/>


    </div>
</template>

<script>
import HeadLogo from "@/components/commons/content/HeadLogo.vue"
import HeadMenu from "@/components/commons/content/HeadMenu.vue"

export default {
    name: "Header",
    components:{
        HeadLogo,
        HeadMenu,
    }
}
</script>

<style scoped>

.header{
    height: 150px;;
    display: flex;

    
}

</style>