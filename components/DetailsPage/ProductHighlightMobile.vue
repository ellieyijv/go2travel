<template>
    <div class="contaner-fluid" id="productHighlight_mobile">
        <b-row>
            <b-col sm="12">
                <h4>線路特色</h4>
            </b-col>
        </b-row>
     <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
       
    >
        <section v-for="(img, index) in spotsData" :key="index"> 
            <b-carousel-slide
                    :caption="img.name"
                    img-src="/images/productDetails/details.png"
                    >
            </b-carousel-slide>
        </section>

  </b-carousel>
</div>
</template>

<script>
export default {
     props:[ 'spotsData'],
}
</script>

<style scoped>

#productHighlight_mobile{
        background-color: white;
        padding: 1.5rem;
        margin: 4rem auto;
    }

 #productHighlight_mobile h4{
        font-size:20px;
        letter-spacing: 3px;
        color:#103a5b;  
        padding-bottom: 1rem;
    }
</style>
