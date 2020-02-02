<template>
  <div class="mainnew">
    <div class="container" >
       <router-link v-for="(item, index) in sortedItems()"  v-bind:key="index" :to="{name: 'article',params: {id: item.number}}">
    <Thumbnail  v-bind:key="index" v-bind:title="item.title"  
    v-bind:style="{
              backgroundImage: 'url('+require('../assets/'+item.image+'.jpg')+')',
              backgroundPosition: 'center',
              backgroundSize: 'contain'
              
              
              }" /> </router-link>
    
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
          title: "Avocadi ou Avocado ?",
          image:"1",
          number: 1,
          date: new Date('December 17, 2000 03:24:00'),
        },
        {
          title: "Article 2",
          image:"2",
          number: 2,
           date: new Date('January 14, 2016 03:24:00'),
        },
        {
          title: "Article 3",
          image:"3",
          number: 3,
           date: new Date('Febuary 17, 2014 03:24:00'),
        },
        {
          title: "Article 4",
          image:"4",
          number: 4,
           date: new Date('June 17, 2017 03:24:00'),
        },
        {
          title: "Article 5",
          image:"5",
          number: 5,
           date: new Date('August 17, 2019 03:24:00'),
        },
        {
          title: "Article 6",
          image:"6",
          number: 6,
           date: new Date('December 17, 2008 03:24:00'),
        },
        {
          title: "Article 7",
          image:"7",
          number: 7,
           date: new Date('December 15, 2011 03:24:00'),
        },
        {
          title: "Article 8",
          image:"8",
          number: 8,
           date: new Date('December 21, 2009 03:24:00'),
        },
       



      ],
     
    }

  },
  methods: {
  sortedItems() {
    return this.article.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
  },

},
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