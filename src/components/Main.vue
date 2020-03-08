<template>
  <div class="main">
    <div class="container">
    
      <Content :title="this.article.title" :text="this.article.text" :author="this.article.auteur" :date="new Date(this.article.date)" :img="this.article.image" :note="parseInt(this.article.note)" :jeu="this.article.jeu" :categorie="this.article.category" />

   
    </div>
  </div>
</template>

<script>
import Content from "@/components/commons/content/Content.vue";
import axios from "axios"
export default {
  name: "Main",
  components: {
    Content
  },
  data() {
    return {
      article:{
        title:"",
        auteur:"",
        text:"",
        date:new Date(),
        img:"",
        note:0,
        jeu:"",
        categorie:"",
    
      },
      errors:null,
      
    }
  },
    mounted () {
       axios
      .get('http://localhost:3001/game/'+(this.$route.params.id))
      .then(response => {
        this.article= response.data;
        }).catch(e => {

     this.errors.push(e);
    });
    

    },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;

  width: 100%;
}

.main .container {
  background-color: #d8d8d8;

  width: 1280px;
  padding-top: 78px;
}
</style>