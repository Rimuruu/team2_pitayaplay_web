<template>
    <div class="head-logo">
    <router-link :to="{name: 'home'}"> LOGO</router-link>


    </div>
</template>

<script>
export default {
    name: "HeadLogo"
    
}
</script>

<style scoped>
.head-logo{
    background-color: grey;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: aliceblue;
}


</style>