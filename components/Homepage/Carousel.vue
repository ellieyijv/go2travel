<template>
     <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-height="400"
  >

    <div class="carousel-inner">
            <section v-for="card in cardList" :key="card.id"> 
            <div class="carousel-item active imagebox" :style="{ backgroundImage: 'url(' + card.img + ')'}">
                <a href="#hola">
                    <div class="imagebox-desc">
                        <div class="container mb-1" style="padding-top:160px;">
                            <p>{{card.days}}</p>
                            <h5>{{card.title}}</h5>
                            <h4 style="padding-top:25px;">{{card.price}} <span style="font-size:14px; color:#337AB2;">/人起</span></h4>

                        </div>
                    </div>
                </a>
            </div>
    </section>
            
  <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/carousel.png"
      ></b-carousel-slide> -->
      
            <!-- <div class="carousel-item active imagebox ">
                <a href="#hola">
                    <img src="/images/carousel.png" class="img-fluid w-100" style="max-height:401px;">
                    <div class="imagebox-desc">
                        <div class="container mb-1" style="padding-top:200px;">
                            <p>15天14夜</p>
                            <h5>澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城</h5>
                            <h4 style="padding-top:20px;">$1899 <span style="font-size:14px; color:#337AB2;">/人起</span></h4>
                        </div>
                    </div>
                </a>
            </div> -->

            <!-- <div class="carousel-item">
                <a href="#hola">
                    <img src="/images/carousel.png" class="img-fluid w-100" style="height:401px;">
                    <div class="imagebox-desc">
                        <div class="container mb-1" style="padding-top:200px;">
                            <p>15天14夜</p>
                            <h5>澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城</h5>
                            <h4>$1899</h4>
                        </div>
                    </div>
                </a>
            </div>

            <div class="carousel-item">
               <a href="#hola">
                    <img src="/images/carousel.png" class="img-fluid w-100" style="height:401px;">
                    <div class="imagebox-desc">
                        <div class="container mb-1" style="padding-top:200px;">
                            <p>15天14夜</p>
                            <h5>澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城</h5>
                            <h4>$1899</h4>
                        </div>
                    </div>
                </a>
            </div>        -->
    </div>
  </b-carousel>
</template>

<script>
export default {
    data(){
        return{
            cardList:[{
                id: 1,
                img:"/images/carousel.png",
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "原價 $3,889 最後機會 立馬下訂",
                price:"$1,889 /人起",
                days:"15天14夜"
            },
            {
                id: 2,
                img:'/images/carousel.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"$3,447 /人起",
                days:"15天14夜"
            },
            {
                id: 3,
                img:'/images/carousel.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"$2,000 /人起",
                days:"15天14夜"
            },
        ]
        }
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
