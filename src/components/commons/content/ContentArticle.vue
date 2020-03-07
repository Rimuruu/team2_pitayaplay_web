<template>
  <div class="content-article">
     <div v-html="text"></div>
      <div class="content-article-end">
        <h2>
            {{note}} | {{jeu}} | {{categorie}}
        </h2>
  </div>
  </div>
 
</template>

<script>
export default {
  name: "ContentArticle",
  props: {
      text: String,
      note:  Number,
      jeu: String,
      categorie:String,
  }
};
</script>

<style scoped>
    .content-article {
        padding : 40px;
    }

    .content-article-end {
        text-align: center;
        font-size: 30px;
    }
</style>