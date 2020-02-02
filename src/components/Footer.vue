<template>
    <div class="footer">
    <div id="footer1">
        <h2>Me connaitre</h2>
        <a href="https://github.com/Rimuruu">CV</a>
        <a href="https://rimuruu.github.io/">Portofolio</a>


    </div>
    <div id="footer2">
        <h2>Nous contacter</h2>
        <a>Email</a>
        <a>Flux RSS</a>
        <a>Newsletter</a>
    
    </div>
    <div id="footer3">
        <h2>Assistance</h2>
        <a>Mention legal </a>
        <a>Support</a>
        <a>Charte de confidentialité</a>
    </div>

    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    .footer {
        display: flex;
        align-items: center;
        justify-content: space-evenly; 

        width: 100%;
        height: 300px;
        background-color: #2C2C2C;

        color: beige;
    }

    #footer1,#footer2,#footer3{
          background-color:purple;
          display: flex;
          flex-direction: column;
          width: 150px;
          height: 150px;
          padding: 10px;
    }
</style>
