<template>
    <div class="article">
        <Header/>
        <Main/>
        <Footer/>
    </div>
</template>

<script>

    import Main from "@/components/Main.vue"
    

    export default {
        name: "HomeIndex",
        components: {
           
            Main,
        
        }
    }
</script>

<style scoped>
    .home {
        background-color: #3B3F48;
        width: 100%;
    }
</style>
