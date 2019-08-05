<template>
    <b-container fluid id="heroImgComp">
        <div class="heroImg" :style="{ backgroundImage: 'url(' + bannerImage + ')' }"/>
    </b-container>
</template>

<script>
export default {
    props: ["bannerImage"]
}
</script>

<style scoped>
    .heroImg{
        position: relative;
        background-repeat: no-repeat;
        padding-bottom: 410px;
        background-size: cover ;
        width:100%;
    }
    #heroImgComp{
        padding:0;
    }
</style>
