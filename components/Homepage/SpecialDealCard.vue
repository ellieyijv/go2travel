<template>
<nuxt-link :to="'/products/' + card.id">
    <b-card :card="card" class="cardStyle">
        <div class="parent">
            <div class="child img-top" :style="{ backgroundImage: 'url(' + card.img + ')' }"  ></div>
        </div>
        <b-card-text class="special-title">{{card.title}}</b-card-text>
        <b-card-text class="special-subtitle">{{card.subtitle}}</b-card-text>  
        <div class="container-fluid">
            <div class="row">
                <b-card-text class="col special-price">{{card.price}}</b-card-text>
                <div class="special-days col" >15天14夜</div>
                <b-button class="special-more col btn-lg">查看更多</b-button> 
            </div>
        </div>
    </b-card>  
</nuxt-link>
</template>

<script>
import { BCard } from 'bootstrap-vue'
export default {
    props:['card'],
  
}
</script>

<style scoped>
.cardStyle{
    width:350px;
    height:386px;
    margin:auto;
}

.card img{
    height:210px;
}


.card-body{
    padding:0;
}

.special-title{
    width:306px;
    height:52px;
    font-size:18px;
    color:#103A5B;
    
    padding:10px;
}

.special-subtitle{
    color:#AFAFAF;
    font-size:14px;
    padding:10px;
}

.special-price{
    line-height:27px;
    color:#103A5B;
    margin:auto;
    padding-left:8px !important;
    font-size:14px;
    padding:11px;
}

.special-days{
    background-color:#C2A579;
    color:#FFFFFF;
    border:none;
    border-radius: 0;
    font-size:14px;
    text-align: center;
    padding-top:4%;
}

.special-more{
    background-color: #103A5B;
    color:white;
    border:none;
    border-radius: 0;
    font-size:14px;
}

.parent {
   width: 100%;
   height:210px;
   overflow: hidden;
}

.child {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: all .5s;
}

.parent:hover .child,
.parent:focus .child
{
  transform: scale(1.2);
  display:block;
}
</style>
