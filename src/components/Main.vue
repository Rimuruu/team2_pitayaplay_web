<template>
  <div class="main">
    <div>
        <MainTitle/>
        <MainBanner/>
        <MainMA/>
        <MainArticle/>
         <MainCommentaire/>
     </div>
  </div>
</template>

<script>
import MainTitle from "@/commons/content/MainTitle.vue"
import MainBanner from "@/commons/content/MainBanner.vue"
import MainMA from "@/commons/content/MainMA.vue"
import MainArticle from "@/commons/content/MainArticle.vue"
import MainCommentaire from "@/commons/content/MainCommentaire.vue"
export default {
  name: "Main",
  components: {
      MainTitle,
      MainBanner,
      MainMA,
      MainArticle,
      MainCommentaire,
  }
};
</script>

<style scoped>
.main {
  background-color:greenyellow;
  padding: 0%;
  margin: 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 17%;
  


}

</style>