<template>
    <b-container fluid id="aboutusMainDesc">
        <div class="col-md-12 text-center" >
            <h4 class="titleStyle">關於我們</h4>
            <h5 class="subtitleStyle">ABOUT US</h5>
            <p  class="descStyle" style="text-align:left;">
                {{description}}
            </p>
        </div>
    </b-container>
</template>

<script>
export default {
    props:['description']
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

    @media (max-width: 1400px){
      #aboutusMainDesc .descStyle{
        width:80%;
        padding: 1rem 0;
        padding-bottom:4rem;
    }
}

</style>
