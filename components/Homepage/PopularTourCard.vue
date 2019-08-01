<template> 
    <div class="hovereffect" :tour="tour" >
        <img class="img-responsive" :src="tour.card_image" alt="">
        
        <div class="bottomtitle">
            <p >{{ tour.product_name }}</p>  
        </div>
        <div class="slider" >
            <div style="padding:5%">
                <p class="tourDays">{{duration}}</p>
                <p class="tourTitle">{{tour.product_name}}</p>
                <p class="tourPrice">{{tour.sales_price}}<span>/人起</span></p>
            </div>
            
        </div>
    </div>

</template>

<script>
export default {
    props: ['tour'],
    data(){
        return{
            hover: false, 
            duration: `${this.tour.duration}天${this.tour.duration-1}夜`,  
        }
    },
    
      
}
</script>

<style scoped>

.hovereffect{
    position:relative;
    width: 255px;
    height: 180px;
    margin: auto; 
}
.hovereffect img{
    width:100%;
}

.bottomtitle{
    position: absolute;
    bottom: 0;
    left:0;
    width: 100%;
    height: 50%;  
    transition: all 2s ease-in;
    background-image:linear-gradient(180deg,hsla(0,0%,100%,0),rgba(1,1,1,1));
}
.bottomtitle p{
    bottom:0;
    position:absolute;
    left:15px;
    top:40%;
    right:10px;
    font-size:16px; 
    color:white
}

.hovereffect .slider {
    overflow-y: hidden;
    position: absolute;
    background:linear-gradient(180deg,hsla(0,0%,100%,0),rgba(1,1,1,1));;
    bottom:0;
    left:0;
    height:0%;
    color:white;
    transition: all .5s ease-out
}

.hovereffect:hover .slider {

    transition-property: all;
	transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    overflow-y: hidden;
    height: 100%; 
}

.hovereffect:hover .bottomtitle {
    display: none;
}

.slider .tourDays{
    font-size:14px;
}
.slider .tourTitle{
    font-size:16px;
}
.slider .tourPrice{
    font-family: 'SemiBold';
    font-size:20px;
    padding-top:15px;
}

.slider .tourPrice span{
    color:#7EB6E2;
    font-size:12px;
}

@media only screen and (max-width: 768px) {
    .hovereffect{
        position:relative;
        width: 170px;
        height: 120px;
        margin: auto;
    }
    
    .bottomtitle p{
        font-size:12px; 
        color:white
    }

    .slider .tourPrice{
  
        font-size:12px;
        padding-top:6px;
    }

    .slider .tourPrice span{
     
        font-size:10px;
    }

    .slider .tourTitle{
        font-size:12px;
    }

    .slider .tourDays{
        font-size:10px;
    }

 

}

</style>
