<template>
    <div class="container-fluid" id="aboutUS">
        <div class="row" style="background-color:#F7F5F1">
            <div class="col-md-5 col-sm-12 col-lg-12 col-xl-5 ufb-banner-container" >
                <!-- <img src="/images/aboutus.png" style="width:100%"/> -->
            </div>
            <div class="col-md-7 content-container" >
                <div class="row" style="margin-top:50px; color:#897B72">
                    <div class="col-md-3" style="text-align:center">
                        <h4 class="titleStyle">關於我們</h4>
                        <h5 class="subtitleStyle">ABOUT US</h5>
                    </div>
                    <div class="col-md-9" >
                        <div class="contactUsText">
                            <P style="font-size:14px;">南半球的热情在这里绽放，时尚、优雅、活力、传奇，伴随着慵懒的海湾，狂欢！火车一般是从墨尔本南十字火车站出发，从墨尔本到吉朗。其中从墨尔本到吉朗是火车线，周一至周五高峰时期十几分钟一趟，周六、周日基本每个小时都有一趟。</p>
                            <b-button class="mt-5 btn-lg" variant="outline-secondary" @click="goToAboutUs">查看更多</b-button>
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
        goToAboutUs(){
            this.$router.push('/aboutus');
        }
    }
}
</script>

<style scoped>

.contactUsText{
    word-wrap: break-word; 
    width: 60%;
    padding-bottom: 20px;
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

.imgSection{
    background-image: url('/images/aboutus.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: block;
    position: relative;
    width: auto;
    height:100%; 
    background-size: 100%;
}


.ufb-banner-container {
    background-image: url('/images/aboutus.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    padding-bottom:460px;  
}
 

@media (min-width: 768px) and (max-width: 1200px){
  .col-md-5{
      flex:0 0 50%;
      width:50%;
  }

  .col-md-7{
      flex: 0 0 50%;
      width:50%;
  }

  .col-md-3{
      margin:auto;
      text-align: center;
  }

  .col-md-9{
      flex:0 0 90%;
      max-width: 90% !important;
      margin:auto;
  }
 
}

@media (max-width: 1200px) {
     .contactUsText{
        margin:auto;
        margin-top:1.5rem;
  }
}

.content-container{
    height:460px;
}
</style>
