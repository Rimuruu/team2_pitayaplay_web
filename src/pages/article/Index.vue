<template>
    <div class="article">
        <Header/>
        <Main/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import Main from "@/components/Main.vue"
    import Footer from "@/components/Footer.vue"

    export default {
        name: "HomeIndex",
        components: {
            Header,
            Main,
            Footer
        }
    }
</script>

<style scoped>
    .home {
        background-color: #3B3F48;
        width: 100%;
    }
</style>
