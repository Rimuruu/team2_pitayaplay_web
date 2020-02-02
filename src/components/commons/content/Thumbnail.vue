<template>
  <div class="thumbnail">

  <div class="image" :title="title"> 
      </div>
   <h2 class="title">
        {{title}}
    </h2>
   
        </div>

</template>

<script>


export default {
  name: "Thumbnail",
  props: {
    title: String,
    image:String,
  }
}
</script>

<style scoped>





   

    .title{
        background-color: orange;
        margin: 0px;
        padding: 0px;
        text-align: center; 

    }

    .image{

        background-position: center;
        background-size: cover; 
    }

    .thumbnail{
      display: flex;
      flex-direction: column;
    }

@media all and (min-width: 1280px) {
  .thumbnail{
    
    width: 300px;
    height: 200px;
 
}
.image {
        height: 200px;
        width: 300px;
    }
}


@media all and (max-width: 1280px) {
  .thumbnail{
    width: 600px;
    height: 400px;
 
}
.image {
        height: 400px;
        width: 600px;
    }
}




</style>