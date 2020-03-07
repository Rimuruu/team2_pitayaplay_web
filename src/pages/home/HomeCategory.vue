<template>
    <div class="home">
        
    <MainCategory/>
       
    </div>
</template>

<script>

    import MainCategory from "@/components/MainCategory.vue"


    export default {
        name: "HomeCategory",
        components: {
          
            MainCategory,
    
        }
    }
</script>

<style scoped>
    .home {
        background-color: #3B3F48;
        width: 100%;
    }
</style>