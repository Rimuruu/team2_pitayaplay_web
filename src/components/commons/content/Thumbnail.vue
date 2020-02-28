<template>
  <div class="thumbnail">

  <div class="image" :title="title"> 
    <div class="note"><h2>10</h2></div>
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
    note:Number,
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

@media all and (min-width: 1024px) {
  .thumbnail{
    
    width: 300px;
    height: 200px;
 
}
.image {
        height: 200px;
        width: 300px;
    }
}


@media all and (max-width: 1024px){
  .thumbnail{
    
    width: 300px;
    height: 200px;
 
}
.image {
        height: 200px;
        width: 300px;
    }
}


@media all and (max-width: 768px) {
  .thumbnail{
    width: 400px;
    height: 200px;
 
}
.image {
        height: 200px;
        width: 400px;
        

    }
}

.note{
  background-color: aquamarine;
  height: 60px;
  width: 60px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
}



</style>