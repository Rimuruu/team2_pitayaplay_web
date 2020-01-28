<template>
    <div class="content-header">
        <div class="content-header-title">
            <h1>
               {{ title }}
            </h1>
        </div>
        <div class="content-header-image">
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentHeader",
    props: {
        title: String
    }
}
</script>

<style scoped>
    .content-header {
        width: 100%;
    }

    .content-header .content-header-title {
        text-align: center;
        font-size: 30px;
    }

    .content-header .content-header-image {
        background-image: url("~@/assets/image_article.jpg");
        background-position: center;
        padding-top: 600px;
    }
</style>
