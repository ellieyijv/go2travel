<template>
    <b-container fluid id="footer">
        <b-container>
            <div class="d-flex justify-content-between">
                <section class="footerLogo">
                    <img src="/images/footerlogo.png"  alt="footer logo"/>
                </section>
                <section >
                    <b-nav class="links" style="font-size:14px">
                        <b-nav-item active to="/aboutus">關於我們</b-nav-item>
                        <b-nav-item to="/contactus">聯繫我們</b-nav-item>
                        <b-nav-item class="getridofline" >隱私政策</b-nav-item>
                    </b-nav>
                </section>
                <section>
                    <div class="social">
                    <i class="fab">&#xf39e;</i>
                    <i class="fab fa-weixin" @click="showORCode = !showORCode"></i>
                    <img v-if="showORCode" src="images/wechat.png" class="qrcode" alt="wechat qr"/>
                    </div>
                   
                </section>
            </div>
            <div class="text-center mt-3">
                  <p>Copyright 2019 @ Go4Fun Travel Services</p>
            </div>
        </b-container>
    </b-container>

</template>

<script>
export default {
    data(){
        return {
            showORCode: false,
        }
    }
}
</script>

<style scoped>
#footer{
    background-color: #103A5B;
    padding:25px;
    color:white;

}

.footerLogo{
    padding-right: 0.5rem;
}

.links{
    margin-right: 45px;
}
.links a{
    color: white;
    border-right:1px solid white;
    line-height: 5px;
    margin-top:10px;
}

.links li{
    margin:auto;
}
.getridofline a{
    border-right:none !important;
}

i.fab {
    font-size:1em;
    border-radius: 50%;
    background-color:white;
    color: #103A5B;
    line-height: 2em;
    width: 2em;
    height: 2em;
    text-align: center;
    display: inline-block;
    transition:0.5s;
    margin:5px;
}

.nav-link{
    padding:0.5rem 0.5rem !important;
}

@media (max-width: 500px) {
  .links a{
    border: none;
  }
  .links{   
    margin-right: 0;
    }
}

@media (min-width:930px){
    .social{
        position:relative;
    }
    .qrcode{
        position: absolute;
        left: 90px;
        top: -25px;
    }
}

@media (max-width:930px){
     .social{
        position:relative;
    }
    .qrcode{
        position: absolute;
        z-index: 15;
        bottom:30px;
        left:0
        
    }
}


/* @media (max-width: 575px) {
  #footer {
    display: none;
  }
} */



</style>
