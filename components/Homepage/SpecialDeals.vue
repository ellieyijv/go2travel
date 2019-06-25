<template>
    <div class="container-fluid" id="specildeals">
        <div class="col-md-12 specialtitle" style="text-align:center; padding:50px 0">
            <h4>最新優惠</h4>
            <h5>SPECIAL DEALS</h5>
        </div>
        <div class="container" style="padding-bottom:70px;">
            <div class="row">
                <div v-for="card in cardList" :key="card.id" class="paddingStyle col-md-6 col-lg-6 col-xl-4 col-sm-4 col-6" style="margin-bottom:20px;"> 
                    <SpecialDealCard :card="card" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SpecialDealCard from '../Homepage/SpecialDealCard'
import axios from 'axios'
export default {
    components:{
		SpecialDealCard
    },

    methods:{
        goToDetails(id){
            this.$router.push(`/Products/${id}`)
        }
    },

   data(){
        return{
            cardList:[{
                id: 25407,
                img:"/images/special/aussydney.png",
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "原價 $3,889 最後機會 立馬下訂",
                price:"3447",
                days:"15天14夜",
                countryname: "Australia"
            },
            {
                id: 25408,
                img:'/images/special/ausclassic.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3447",
                days:"15天14夜",
                countryname: "Australia",
            },
            {
                id: 25409,
                img:'/images/special/aussydmel.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3447",
                days:"15天14夜",
                 countryname: "Australia"
            },
            {
                id: 4,
                img:'/images/special/aus.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3447",
                days:"15天14夜",
                countryname: "Australia"
            },
            {
                id: 5,
                img:'/images/special/auscans.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3447",
                days:"15天14夜",
                countryname: "Australia"
            },
            {
                id: 6,
                img:'/images/special/auscanssyd.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3447",
                days:"15天14夜",
                countryname: "Australia"
            },]
        }
    },

    // async asyncData(){
    //     let res =  await axios.get("/")
    //     return {cardList: res.data}
           
    // },
    
    
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
