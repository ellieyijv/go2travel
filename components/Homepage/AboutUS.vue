<template>
    <div class="container-fluid" id="aboutUS">
        <div class="row" style="background-color:#F7F5F1">
            <div class="col-md-12 col-sm-12 col-lg-6 col-xl-5 ufb-banner-container" >
                <!-- <img src="/images/aboutus.png" style="width:100%"/> -->
            </div>
            <div class="col-md-12  col-sm-12 col-lg-6  col-xl-7 content-container" >
                <div class="row textSection" >
                    <div class="col-lg-3 col-md-12" style="text-align: center;">
                        <h4 class="titleStyle">關於我們</h4>
                        <h5 class="subtitleStyle">ABOUT US</h5>
                    </div>
                    <div class="col-lg-9 col-md-12" >
                        <div class="contactUsText">
                            <P >南半球的热情在这里绽放，时尚、优雅、活力、传奇，伴随着慵懒的海湾，狂欢！火车一般是从墨尔本南十字火车站出发，从墨尔本到吉朗。其中从墨尔本到吉朗是火车线，周一至周五高峰时期十几分钟一趟，周六、周日基本每个小时都有一趟。</p>
                            <b-button class="mt-5 btn-lg" variant="outline-secondary" to="aboutus">查看更多</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods:{
        // goToAboutUs(){
        //     this.$router.push('/aboutus');
        // }
    }
}
</script>

<style scoped>

 @media screen (min-width: 890px) and (max-width:1300px){
    .contactUsText{
        width:80%;
    }
 } 
.contactUsText{
    word-wrap: break-word; 
    width: 50%;
    padding-bottom: 20px;
}

.contactUsText p{
    font-size:14px;
}

.btn-outline-secondary{
    color:#897B72;
    border-color:#897B72;
}

.btn-outline-secondary:hover{
    color:white;
    background-color:#897B72;
}

.btn-lg{
    padding:0.5rem 3rem;
    font-size:16px;
}

.textSection{
    margin-top:50px; 
    color:#897B72;
    
}
.titleStyle{

    font-size:18px;
    letter-spacing: 2px;
}
.subtitleStyle{
    font-family: 'Playfair Display', serif;
    font-size:14px;
    letter-spacing: 3px;
}

.contactUsText button{
    border-radius: 0;
   
}

.ufb-banner-container {
    background-image: url('/images/aboutus.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    padding-bottom:460px;  
}
 
 @media (max-width: 991px){
    .contactUsText{
        margin: 30px auto;
        text-align: center;    
    }
 }



.content-container{
    height:460px;
}

/* 
@media (max-width: 575px) {
  #aboutUS {
    display: none;
  }
} */

</style>
