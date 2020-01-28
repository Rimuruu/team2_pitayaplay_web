<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>  
  
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  name: 'app',
  components: {
      Header
  }
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app a {
  color: #E7E6E6;
  text-decoration: none;
}

#app a:hover {
  color: rgb(160, 160, 160);
}
</style>
