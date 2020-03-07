<template>
    <div class="home">
        
    <Formulaire/>
       
    </div>
</template>

<script>

    import Formulaire from "@/components/Formulaire.vue"


    export default {
        name: "HomeFormulaire",
        components: {
          
            Formulaire,
    
        }
    }
</script>

<style scoped>
    .home {
        background-color: #3B3F48;
        width: 100%;
    }
</style>