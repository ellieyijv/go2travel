<template>
    <div class="container-fluid" id="specildeals">
        <div class="col-md-12 specialtitle" style="text-align:center; padding:50px 0">
            <h4>最新優惠</h4>
            <h5>SPECIAL DEALS</h5>
        </div>
        <div class="container" style="padding-bottom:70px;">
            <div class="row">
                <div v-for="card in cardList" :key="card.id" class="paddingStyle col-md-6 col-lg-6 col-xl-4 col-sm-4 col-6" style="margin-bottom:20px;"> 
                    <ProductCard :card="card"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '../Public/ProductCard'


export default {
    components:{
		ProductCard
    },

   data(){
        return{
            query: '', 
                
        }
    },
    
    computed: {
       cardList(){
           return this.$store.getters['productSummary/list']
       } 
    },  
}

 
</script>

<style scoped>
#specildeals{
    background-color: #f7f5f1;
    color: #103A5B;

}

.specialtitle h4{
    font-size:18px;
    letter-spacing: 2px;
  
}
.specialtitle h5{
   
    font-size:14px;
    letter-spacing: 3px;
    font-family: 'Playfair Display', serif;
    line-height: 3px;
}



.paddingStyle{
      padding-left:0px !important;
      padding-right: 0px !important;
    }

</style>
