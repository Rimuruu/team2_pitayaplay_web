<template>
  <div class="content-article">
     <div v-html="text"></div>
  </div>
</template>

<script>
export default {
  name: "ContentArticle",
  props: {
      text: String
  }
};
</script>

<style scoped>
    .content-article {
        padding : 40px;
    }
</style>