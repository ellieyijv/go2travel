<template>
    <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators 
    >
    <div class="carousel-inner">
        <section v-for="card in herobannerImg" :key="card.index"> 
            <div class="carousel-item active imagebox" :style="{ backgroundImage: 'url(' + card + ')'}">
               <img src="/images/about/herobannertext.png" class="centeredTitle"/>
            </div>
        </section>
    </div>
  </b-carousel>
</template>

<script>
export default {
    props: ['herobannerImg'],
    data(){
       return{
       }
    }
}
</script>

<style scoped>
.imagebox {
    position: relative;
    background-repeat: no-repeat;
    height:610px;
    background-size: cover ;
}

 .centeredTitle{
        text-align: center;
        position: absolute;
        top: 45%;
        left: 40%;    
        width:20%;
    }
   
@media (max-width: 1000px){
    .imagebox{
    
        height:400px;
    }
}
</style>
