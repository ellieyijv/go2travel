<template>
<nuxt-link :to="'/'+ state_slug + '/'+ card.product_code" style="text-decoration:none">
    <b-card :card="card" class="cardStyle">
        <div class="parent">
            <div class="child img-top" :style="{ backgroundImage: 'url(' + card.card_image + ')' }"  ></div>
        </div>
        <b-card-text class="special-title">{{card.product_name}}</b-card-text>
        <b-card-text class="special-subtitle">原價${{card.price}} 最後機會 立馬下訂</b-card-text>  
        <div class="container-fluid">
            <div class="row">
                <b-card-text class="col special-price col-12 col-sm-12 col-md-4">${{numberWithCommas(card.sales_price)}} /人起</b-card-text>    
                <div class="special-days col" >{{duration}}</div>
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
    data(){
        return{
            duration: `${this.card.duration}天${this.card.duration-1}夜`,
            state_slug: ''
        }
    },
    methods:{
        numberWithCommas(x) {
            x=Math.floor(x);
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
         
        }, 
    },

    created(){
        const statesList = this.$store.getters.statesList;
        this.state_slug = statesList.find((item)=>{
            return item.id == this.card.state_id
        }).slug
    }
  
}
</script>

<style scoped>
.cardStyle{
    width:350px;
    height:386px;
    margin:auto;
    border-radius: 0;
}

.card-body{
    padding:0;
}

.special-title{
    width:306px;
    height:52px;
    font-size:18px;
    color:#103A5B;
    font-family: "FangPingMedium";
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
    font-family: "FangPingMedium";
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
   overflow: hidden;
}

.child {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: all .5s;
    padding-top: 210px;
}

.cardStyle:hover .child,
.parent:focus .child
{
  transform: scale(1.2);
  display:block;
}

@media only screen and (max-width: 768px) {
    .cardStyle{
        width:170px;
        height:236px;
        margin:auto;
        border-radius: 0;
}

    .img-top{
        height:102px;
    }

    .special-title{
        width:170px;
        font-size:12px;
        height:32px;
     
    }
    .child {
        padding-top: 102px;
    }  
    
    .special-subtitle{
   
        font-size:10px;
        padding-top:0;
        margin-bottom:0;
    
    }
    .special-days{
        font-size:12px;
        text-align: center;
        height:32px;
        
    }

    .special-price{
    
        padding-left:8px !important;
        font-size:14px;
        padding:0;
  
    }

    .special-more{

        font-size:12px;
         height:32px;
}

}
</style>
