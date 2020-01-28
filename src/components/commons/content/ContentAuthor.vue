<template>
  <div class="comment-author">
      Par {{author}} le {{date}}
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
      author: String,
      date: Date
  }
};
</script>

<style scoped>
    .comment {
        background-color: white;
        padding: 20px
    }

    .comment .comment-header {
        margin-bottom: 20px;
    }

    .comment .comment-header > .username {
        color: #40565e;
        font-weight: bold;
    }
    
    .comment-author{
        background-color:antiquewhite;
        padding: 40px;
        display: flex;
        flex-direction: row-reverse;
    }
</style>