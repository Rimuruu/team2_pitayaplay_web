<template>
  <div id="app">
    <router-link :to="{name: 'home'}">Home </router-link>
    <router-link :to="{name: 'article', params: {id: 1}}">Article 1 </router-link>
    <router-link :to="{name: 'article', params: {id: 2}}">Article 2 </router-link>
    <router-view/>
  </div>  
  
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
</style>
