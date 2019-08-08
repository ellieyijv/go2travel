<template>
    <div class="container-fluid" id="aboutUS">
        <div class="row" style="background-color:#F7F5F1">
            <div class="col-md-12 col-sm-12 col-lg-6 col-xl-5 ufb-banner-container" :style="{ backgroundImage: 'url(' + aboutusData.aboutusImg + ')'}">
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
                            <P >{{aboutusData.description}}</p>
                            <b-button class="mt-5 btn-lg buttonStyle" variant="outline-secondary" to="aboutus">查看更多</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:['aboutusData'],
    methods:{
        // goToAboutUs(){
        //     this.$router.push('/aboutus');
        // }
    }
}
</script>

<style scoped>
 @media (max-width: 991px){
    .contactUsText{
        margin: 0 auto;
        text-align: center;  
        margin-bottom:15px;
    }
    .buttonStyle{
        margin-bottom:3rem !important;
        margin-top:1rem !important;
    }
 }

.contactUsText{
    word-wrap: break-word; 
    width: 80%;
    padding-bottom: 20px;
}

 @media (min-width: 1400px){
    .contactUsText{
        width:50%;
    }
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

.contactUsText .btn{
    border-radius: 0;
   
}

.ufb-banner-container {
    /* background-image: url('/images/aboutus.png'); */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    padding-bottom:460px;  
}
 



.content-container{
    height:460px;
}



</style>
