<template>
  <div class="mainnew">
    <div class="container" >
     
       <router-link v-for="(item, index) in sortedItems()"  v-bind:key="index" :to="{name: 'game',params: {id: item.id}}">
    <Thumbnail  v-bind:key="index" v-bind:title="item.title"  v-bind:note="parseInt(item.note)"
       v-bind:style="{
              backgroundImage: 'url('+item.image+')',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'repeat-y',
              
              
              }"
 /> </router-link>
    
    </div>
    <div class="container-categorie">
       <router-link v-for="(item, index) in category"  v-bind:key="index" :to="{name: 'category',params: {id: item.id}}"> <div class ="categorie">{{item.category}}</div></router-link>
    </div>
  </div>
</template>

<script>
import Thumbnail from "@/components/commons/content/Thumbnail.vue";
import axios from 'axios';
export default {
  name: "MainNew",
  components: {
      Thumbnail,
  },
  data(){
    return {
      game: [],
      category: null,
      errors: null,
     
    }

  },
  methods: {
  sortedItems() {
    return this.game.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
  },


},
  mounted () {
 
    axios
      .get('http://localhost:3000/category/')
      .then(response => {
        this.category = response.data;
        }).catch(e => {

     this.errors.push(e);
    });
     axios
      .get('http://localhost:3000/category/'+this.$route.params.id)
      .then(response => {
        this.game = response.data;
        }).catch(e => {
     this.errors.push(e);
    }) 
  },
  updated(){
      axios
      .get('http://localhost:3000/category/'+this.$route.params.id)
      .then(response => {
        this.game = response.data;
        }).catch(e => {
     this.errors.push(e);
    }) 
  }
}
</script>

<style scoped>




.mainnew {
    display: flex;
    justify-content: center;




}

.categorie{
  color: black;
}

.container-categorie{
  background-color: aquamarine;
}

.mainnew .container {
  background-color: green;

  padding: 25px;
  display: grid;
  grid-gap: 25px;  

  
}
@media all and (min-width: 1024px) {
  .container{
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      

  }
}


@media all and (max-width: 1024px) {
  .container{
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      

  }
}


@media all and (max-width: 768px) {
  .container{
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-gap: 50px 50px;

  }
}

.categorie{
  background-color: azure;
  margin-top: 10px;
  width: 200px;
  display: flex;
  justify-content: center;
}
</style>