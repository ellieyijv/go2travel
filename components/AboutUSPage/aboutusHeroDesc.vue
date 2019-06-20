<template>
    <b-container fluid id="aboutusMainDesc">
        <div class="col-md-12 text-center" >
            <h4 class="titleStyle">關於我們</h4>
            <h5 class="subtitleStyle">ABOUT US</h5>
            <p  class="descStyle" style="text-align:left;">
                创立于1999年，总部设在中国上海，员工超过30000人，目前公司已在北京、广州、深圳、成都、杭州、南京、厦门、重庆、青岛、武汉、三亚、南通等95个境内城市，新加坡、首尔、香港等22个境外城市设立分支机构，在中国南通、苏格兰爱丁堡设立服务联络中心。作为中国领先的综合性旅行服务公司，携程成功整合了高科技产业与传统旅行业，向超过3亿会员提供集无线应用、酒店预订、机票预订、旅游度假、商旅管理及旅游资讯在内的全方位旅行服务，被誉为互联网和传统旅游无缝结合的典范。
            </p>
        </div>
    </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
    #aboutusMainDesc{
        background-color: #103a5b;
        color:white;
        padding-top:1rem;
    }

    #aboutusMainDesc .descStyle{
        width:40%;
        margin: auto;
        font-size:14px;
        padding:4rem;
    }

    .titleStyle{

        font-size:20px;
        letter-spacing: 2px;
        padding-top:3rem;
    }
    .subtitleStyle{
        font-family: 'Playfair Display', serif;
        font-size:14px;
        letter-spacing: 5px;
    }

    @media (max-width: 1000px){
      #aboutusMainDesc .descStyle{
        width:80%;
        padding: 1rem 0;
    }
}

</style>
