<template>
    <div class="home">
        
    <MainNew/>
       
    </div>
</template>

<script>

    import MainNew from "@/components/MainNew.vue"


    export default {
        name: "HomeNew",
        components: {
          
            MainNew,
    
        }
    }
</script>

<style scoped>
    .home {
        background-color: #3B3F48;
        width: 100%;
    }
</style>