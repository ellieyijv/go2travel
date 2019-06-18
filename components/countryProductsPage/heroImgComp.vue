<template>
    <b-container fluid id="heroImgComp">
        <div class="heroImg" />
    </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
    .heroImg{
        background-image: url('/images/carousel2.png');
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
