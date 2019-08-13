<template>
     <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-height="400"
  >
   
    <div class="carousel-inner">
            <section v-for="card in carousel" :key="card.id"> 
                <nuxt-link :to="'/'+ card.product_slug + '/'+ card.product_code" style="text-decoration:none">
                    <div class="carousel-item active imagebox" :style="{ backgroundImage: 'url(' + card.hero_banner_image + ')'}">
                        
                            <div class="imagebox-desc">
                                <div class="container mb-1" style="padding-top:160px;">
                                
                                    <h5>{{card.title}}</h5>
                                    <h4 style="padding-top:25px;">{{numberWithCommas(card.sales_price)}} <span style="font-size:14px; color:#337AB2;">/人起</span></h4>
                                </div>
                            </div>
                         
                    </div>
              </nuxt-link>
            </section>      
    </div>
    
  </b-carousel>
</template>

<script>
export default {
    props: ['carousel'],
    methods: {
        numberWithCommas(x) {
            x=Math.floor(x);
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }, 
    }
  
}
</script>

<style scoped>
.imagebox {
    position: relative;
    
    background-repeat: no-repeat;
    height:400px;
    background-size: cover ;
}
.imagebox .imagebox-desc {
    background-image: linear-gradient(180deg,rgba(51,122,1178,0.2),rgba(16,58,91,1));
    max-width:455px;
    height:100%;
    color: white;
    font-size: 1.2em;
    left: 0px;
    padding: 0px 40px;
    position: absolute;
    transition: 0.5s padding;
    top:0;  
}
@media (max-width: 1000px){
    .imagebox{
        background-position: right -250px center;
    }
}
.imagebox-desc p{
    font-size: 16px
}
.imagebox-desc h5{
    font-size:20px;
}
.imagebox-desc H4{
    font-size:24px;
   
}
</style>
