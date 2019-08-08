<template>
    <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        controls 
    >
    <div class="carousel-inner">
        <section v-for="image in carouselData" :key="image.id"> 
            <div class="carousel-item active imagebox" :style="{ backgroundImage: 'url(' + image + ')'}">
               
            </div>
        </section>
    </div>
  </b-carousel>
</template>

<script>

export default {
    props: ['carouselData']
}
</script>

<style scoped>
.imagebox {
    position: relative;
    background-repeat: no-repeat;
    height:400px;
    background-size: cover ;
}

@media (max-width: 1000px){
    .imagebox{
        background-position: right -250px center;
    }
}
</style>
