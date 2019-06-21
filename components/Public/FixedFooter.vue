<template>
    <b-container fluid id="fixedfooter">
        <b-container>
            <div class="d-flex justify-content-between">
                <section class="footerLogo">
                    <img src="/images/footerlogo.png" />
                </section>
                <section >
                    <b-nav class="links" style="font-size:14px">
                        <b-nav-item active to="/aboutus">關於我們</b-nav-item>
                        <b-nav-item to="/contactus">聯繫我們</b-nav-item>
                        <b-nav-item class="getridofline" >隱私政策</b-nav-item>
                    </b-nav>
                </section>
                <section class="p-2" >
                    <div class="social">
                    <i class="fab">&#xf39e;</i>
                    <i class="fab fa-weixin"></i>
                    </div>
                </section>
            </div>
        </b-container>
    </b-container>

</template>

<script>
export default {

}
</script>

<style scoped>
#fixedfooter{
    background-color: #103A5B;
    padding:25px;
    color:white;
	position: fixed;
	bottom:0;
}

#fixedfooter .footerLogo{
        padding-right: 0.5rem;
}

#fixedfooter .links a{
    color: white;
    border-right:1px solid white;
    line-height:5px;
    margin-top:10px;
}

#fixedfooter .getridofline a{
    border-right:none !important;
}

#fixedfooter i.fab {
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

#fixedfooter .nav-link{
    padding:0.5rem 0.5rem !important;
}

@media (max-width: 521px) {
  #fixedfooter .links a{
    border: none;
  }
}

/* @media (max-width: 575px) {
  #footer {
    display: none;
  }
} */



</style>
