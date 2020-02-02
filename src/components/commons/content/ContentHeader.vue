<template>
    <div class="content-header">
        <div class="content-header-title">
            <h1>
               {{ title }}
              
            </h1>
        </div>
        <div class="content-header-image" :style="{
              backgroundImage: 'url('+require('../../../assets/'+img+'.jpg')+')',
              backgroundPosition: 'center',
       
              
              
              }"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentHeader",
    props: {
        title: String,
        img: String
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

        background-position: center;
          background-size: cover; 
        padding-top: 600px;
    }
</style>
