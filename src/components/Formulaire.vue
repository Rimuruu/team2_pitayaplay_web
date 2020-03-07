<template>
  <div class="main">
    <div class="container">
      <div class="formulaire">
        <h2>Titre de l'article </h2>
        <input type="url" title="url" placeholder="Titre de l'article" v-model="formTitre"/>
        <h2>Auteur</h2>
        <input type="url" title="url" placeholder="Auteur" v-model="formAuteur"/>
        <h2>Nom du jeu </h2>
        <input type="url" title="url" placeholder="Nom du jeu" v-model="formJeu"/>
        <h2>Catégorie du jeu </h2>
        <select v-model="formCategorie" id="categorie">
  <option value="RPG" selected>RPG</option> 
  <option value="FPS" >FPS</option>
  <option value="MMO">MMO</option>
   <option value="RTS">RTS</option>
</select>
<h2>Url l'image du jeu </h2>
<input type="url" title="url" placeholder="Url de l'image" v-model="formUrl"/>
        <h2>Texte </h2>
          <textarea v-model="formText"
           cols="60"
          rows="20"
          ></textarea>
           <input type="range" min="0" max="10" value="5"
                 class="slider" id="sliderRange" v-model="formNote"> 
            <div>Note : {{formNote}}</div>
            <a href="#" @click="send" >Envoyé</a>
            <div  > {{res.data}}  </div>
      </div>
  

   
    </div>
  </div>

</template>

<script>

import axios from "axios"
export default {
  name: "Formulaire",
  components: {
  
  },
  data() {
    return {
      formTitre:"",
      formJeu:"",
      formUrl:"",
      formText:"",
      formAuteur:"",
      formCategorie:"RPG",
      formNote:5,
      res:"",
      erros:null,
    }
  },
  methods: {
    send(e){
       axios.post('http://localhost:3000/game/',{
          titre:this.formTitre,
          jeu: this.formJeu,
          image:this.formUrl,
          auteur:this.formAuteur,
          text:this.formText,
          note:this.formNote,
          category:this.formCategorie,
        }).then(response => {
          this.res = response
       })
        .catch(e =>{this.errors.push(e);} )
        this.resetField();
        e.preventDefault();
    },
     resetField() {
      this.formTitre = "";
      this.formJeu = "";
      this.formUrl = "";
      this.formText = "";
      this.formAuteur = "";
      this.formCategorie = "RPG";
      this.formNote=5;
    }
  },
    mounted () {
      

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
  background-color: green;
  display: flex;
  justify-content: center;

  width: 1280px;
  padding: 40px;
}

.formulaire {
   display: flex;
   flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 10px;
}

.formulaire a {
  float: right;
    background-color: #167DAC;
    padding: 8px;
    margin-top: 10px;
}
</style>