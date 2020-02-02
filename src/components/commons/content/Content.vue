<template>
  <div class="content">
    <div class="separator">
      <div class="separator-border"></div>
    </div>
    
    <ContentHeader :title="title" :img="img" />
    <ContentAuthor :author="author" :date="date"/>
    <ContentArticle v-bind:text="text" />
    <ContentComment />
  </div>
</template>

<script>
import ContentHeader from "@/components/commons/content/ContentHeader.vue";
import ContentAuthor from "@/components/commons/content/ContentAuthor.vue";
import ContentArticle from "@/components/commons/content/ContentArticle.vue";
import ContentComment from "@/components/commons/content/ContentComment.vue";

export default {
  name: "Content",
  components: {
    ContentArticle,
    ContentHeader,
    ContentComment,
    ContentAuthor
  },
  props: {
    text: String,
    title: String,
    author: String,
    date: Date,
    img: String
  }
  

};
</script>

<style scoped>
.content .separator {
  width: 100%;
  box-sizing: border-box;
  padding-left: 80px;
  padding-right: 80px;
}

.content .separator .separator-border {
  border-top: black solid 1px;
}
</style>