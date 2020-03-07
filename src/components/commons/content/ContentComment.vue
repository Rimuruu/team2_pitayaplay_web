<template>
  <div class="content-comment">
    <div class="content-comment-header">{{ count() }} Commentaires</div>
    <div class="content-comment-container">
      <div class="content-comment-item" v-for="(item, index) in comments" v-bind:key="index">
        <Comment :index="item.index" :username="item.username" :text="item.text" :mail="index.email"/>
      </div>
      <div class="comment-content-form-add">
        <input type="text" placeholder="Ton username..." title="Username" v-model="formCommentUsername" />
        <input type="email" title="Adresse mail" placeholder="Ton adresse email..." v-model="formCommentMail"/>
        <textarea
          name="comment"
          id="add-comment-text"
          cols="30"
          rows="3"
          title="Commentaire"
          placeholder="Commente par ici ..."
          v-model="formCommentText"
        ></textarea>
        <a href="#" @click="send">Envoyer</a>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/commons/comment/Comment.vue";
import axios from "axios"
export default {
  name: "ContentComment",
  components: {
    Comment
  },

  data() {
    return {
      comments: [
       
      ],
      formCommentUsername: "",
      formCommentText: "",
      formCommentMail: "",
      errors:null,
    };
  },
  methods: {
    count() {
      return this.comments.length;
    },
    send(e) {
    
      if(this.formCommentMail.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) && 
        this.formCommentUsername.length >= 4 &&
        this.formCommentText != ""){
       
        axios.post('http://localhost:3000/game/'+this.$route.params.id+'/comment',{
          comment:this.formCommentText,
          email:this.formCommentMail,
          username:this.formCommentUsername,

        }).then(response => {
           this.comments.push(
             {
                index: this.count() + 1,
                username: response.data.username,
                 text: response.data.text,
                 mail: response.data.email
             })
             })
        .catch(e =>{this.errors.push(e);} )
      }
      else{
        alert("Vérifer que : \n1) Username doit contenir au minimum 4 caractères\n2) Le commentaire n'est pas vide\n3) L'adresse est valide");
      }
      this.resetField();
      e.preventDefault();
    },
    resetField() {
      this.formCommentUsername = "";
      this.formCommentText = "";
      this.formCommentMail = "";
    }
  },
   mounted(){
     axios
      .get('http://localhost:3000/game/'+this.$route.params.id+'/comment')
      .then(responses => {
        this.comments = responses.data;
        }).catch(e => {

     this.errors.push(e);
    });
   }
   
 

};
</script>

<style scoped>
.content-comment .content-comment-header {
  background-color: #40565e;
  color: white;

  padding: 10px;
  padding-left: 20px;

  font-size: 1.5em;
}

.content-comment .content-comment-container {
  padding: 40px;
}

.content-comment .content-comment-item {
  margin-top: 10px;
}

.content-comment .comment-content-form-add {
  margin-top: 40px;
  margin-bottom: 40px;
}

.content-comment .comment-content-form-add input {
  width: 20%;
  padding: 10px;
  padding-left: 20px;
  background-color: #cdd8dc;
  border-style: none;
  border: #9b9b9b solid 1px;
}

.content-comment .comment-content-form-add textarea {
  resize: none;
  width: 100%;

  margin-top: 10px;
  padding: 20px;

  box-sizing: border-box;

  background-color: #cdd8dc;
}

.content-comment .comment-content-form-add a{ 
    float: right;
    background-color: #167DAC;
    padding: 8px;
    margin-top: 10px;
}
</style>