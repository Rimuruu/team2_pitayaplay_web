<template>
  <div class="mainnew">
    <div class="container" >
       <router-link v-for="(item, index) in article"  v-bind:key="index" :to="{name: 'article',params: {id: item.number}}">
    <Thumbnail  v-bind:key="index" v-bind:title="item.title"  
    v-bind:style="{
              backgroundImage: 'url('+require('../assets/'+item.image+'.jpg')+')',
              backgroundPosition: 'center',
              backgroundSize: 'contain'
              
              
              }"/> </router-link>
    
    </div>
  </div>
</template>

<script>
import Thumbnail from "@/components/commons/content/Thumbnail.vue";

export default {
  name: "MainNew",
  components: {
      Thumbnail,
  },
  data(){
    return {
      article: [
        {
          title: "Article 1",
          image:"image_article",
          number: 1,
        },
        {
          title: "Article 2",
          image:"2",
          number: 2,
        },
        {
          title: "Article 3",
          image:"2",
          number: 3,
        },
        {
          title: "Article 4",
          image:"image_article",
          number: 4,
        },
        {
          title: "Article 5",
          image:"image_article",
          number: 5,
        },
        {
          title: "Article 6",
          image:"image_article",
          number: 6,
        },
        {
          title: "Article 7",
          image:"image_article",
          number: 7,
        },
        {
          title: "Article 8",
          image:"image_article",
          number: 8,
        },
        {
          title: "Article 9",
          image:"image_article",
          number: 9,
        },



      ]
    }

  }
}
</script>

<style scoped>




.mainnew {
    display: flex;
    justify-content: center;




}

.mainnew .container {
  background-color: green;

  padding: 25px;
  display: grid;
  grid-gap: 25px;  

  
}
@media all and (min-width: 1280px) {
  .container{
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      

  }
}


@media all and (max-width: 1280px) {
  .container{
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-gap: 50px 50px;

  }
}






</style>