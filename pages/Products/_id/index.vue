<template>
   <div>
        <DetailsCarousel />
        <DetailsNavSection :card="card" :details="details"/>
        <div class="backgroundstyle">
           <ProductIntro />
        </div>
        <div class="backgroundstyle">
           <ProductHighlight :details="details"/>
       </div>
        <div class="backgroundstyle">
           <FeeDesc :productFeeDesc="details.productFeeDesc"/>
       </div>
       <div class="backgroundstyle">
           <productDaysPlan :daysplan="details.productDaysPlan" />
       </div>
        <div class="backgroundstyle">
           <ProductNeedsToKnow :needstoknow="details.needstoknow" />
       </div>
       <div class="backgroundstyle">
           <YouMightInterested :youmightinterestdlist="youmightinterestdlist"/>
       </div>
   </div>
</template>

<script>
import DetailsCarousel from '../../../components/DetailsPage/DetailsCarousel';
import DetailsNavSection from '../../../components/DetailsPage/DetailsNavSection';
import ProductIntro from '../../../components/DetailsPage/ProductIntro';
import ProductHighlight from '../../../components/DetailsPage/ProductHighlight';
import FeeDesc from '../../../components/DetailsPage/FeeDesc';
import productDaysPlan from '../../../components/DetailsPage/ProductDaysPlan';
import ProductNeedsToKnow from '../../../components/DetailsPage/ProductNeedsToKnow';
import YouMightInterested from '../../../components/DetailsPage/YouMightInterested';
export default {
    components: { DetailsCarousel, DetailsNavSection, ProductIntro, ProductHighlight, FeeDesc, productDaysPlan, ProductNeedsToKnow, YouMightInterested},
    data(){
        return{
            card: {},
            details: {},
            youmightinterestdlist: [],
            productSummary: [
                    {
                        'id': '25407',
                        'img':"/images/special/aussydney.png",
                        'title':"1澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                        'subtitle': "原價 $3,889 最後機會 立馬下訂",
                        'price':"$3,447",
                        'days':"15天14夜"
                    },
                    {
                        'id': '25408',
                        'img':"/images/special/aussydney.png",
                        'title':"2澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                        'subtitle': "原價 $3,889 最後機會 立馬下訂",
                        'price':"$3,447",
                        'days':"15天14夜"
                    },
                    {
                        'id': '25409',
                        'img':"/images/special/ausclassic.png",
                        'title':"3澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                        'subtitle': "原價 $3,889 最後機會 立馬下訂",
                        'price':"$3,447",
                        'days':"15天14夜"
                    },
                    {
                        'id': '4',
                        'img':"/images/special/aussydmel.png",
                        'title':"4澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                        'subtitle': "原價 $3,889 最後機會 立馬下訂",
                        'price':"$3,447",
                        'days':"15天14夜"
                    },
                    {
                        'id': '5',
                        'img':"/images/special/aus.png",
                        'title':"5澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                        'subtitle': "原價 $3,889 最後機會 立馬下訂",
                        'price':"$3,447",
                        'days':"15天14夜"
                    },
                    {
                        'id': '6',
                        'img':"/images/special/aussydney.png",
                        'title':"6澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                        'subtitle': "原價 $3,889 最後機會 立馬下訂",
                        'price':"$3,447",
                        'days':"15天14夜"
                    }],
            productDetails: [
                 {
                    'productID': '25407',
                    'productDesc': '獨家提供史蒂芬港中文精品小團',
                    'productSpecialPrice': '優惠：原價$1,899/成人 $1,299/兒童',
                    'productRebate': '出行後點評可返 $20',
                    'productImgs': [{'url':'/images/popular/popular1.png', 'imgdes':'pppppppppppppp'}, 
                                     {'url':'/images/popular/popular2.png', 'imgdes':'pppppppppppppp'},
                                     {'url':'/images/popular/popular3.png', 'imgdes':'pppppppppppppp'},
                                     {'url':'/images/popular/popular4.png', 'imgdes':'pppppppppppppp'}],
                    'productFeeDesc':{'contains': '1)afds 2)adfs 3)gerag 4)asdf 5)asfd',
                                       'notContain': '1)dsaf 2)adsfs'},
                    'productDaysPlan': [{'day':'thefirstday', 'content':'ddddddddddddddddd'},
                                        {'day':'thesecondday', 'content':'ddddddddddddddddd'},
                                        {'day':'thethirdday', 'content':'ddddddddddddddddd'},],
                    'needstoknow': '1)fda 2)afd 3)fdag 4)afsd',
                },
                {
                    'productID': '25408',
                    'productDesc': '獨家提供史蒂芬港中文精品小團',
                    'productSpecialPrice': '優惠：原價$1,899/成人 $1,299/兒童',
                    'productRebate': '出行後點評可返 $20',
                    'productImgs':[{'url':'/images/popular/popular1.png', 'imgdes':'pppppppppppppp'}, 
                                     {'url':'/images/popular/popular2.png', 'imgdes':'pppppppppppppp'},
                                     {'url':'/images/popular/popular3.png', 'imgdes':'pppppppppppppp'},
                                     {'url':'/images/popular/popular4.png', 'imgdes':'pppppppppppppp'}],    
                            
                    'productFeeDesc':{'contains': '1)afds 2)adfs 3)gerag 4)asdf 5)asfd', 'notContain': '1)dsaf 2)adsf'},
                    'productDaysPlan': [{'day':'thefirstday', 'content':'ddddddddddddddddd'},
                                        {'day':'thesecondday', 'content':'ddddddddddddddddd'},
                                        {'day':'thethirdday', 'content':'ddddddddddddddddd'},],
                     'needstoknow': '1)fda 2)afd 3)fdag 4)afsd',
                }],
              
        
        }
    },

   
    created(){
        let id = this.$route.params.id
        this.card = this.productSummary.find(x => x.id === id)
        this.details = this.productDetails.find(x=>x.productID === id)
        this.youmightinterestdlist = this.productSummary.slice(1,4);
    }
    

}
</script>

<style scoped>
    .backgroundstyle{
        background-color:black;
        padding-top: 4rem;
    }
</style>
