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
                    'productImgs': [{'url':'/images/popular/popular1.png', 'imgdes':'葡萄酒莊品嚐美酒'}, 
                                     {'url':'/images/popular/popular2.png', 'imgdes':'巴羅莎'},
                                     {'url':'/images/popular/popular3.png', 'imgdes':'莱特将军瞭望台'},
                                     {'url':'/images/popular/popular4.png', 'imgdes':'戴倫堡魔方'}],
                    'productFeeDesc':{'contains': '1)交通：5-12座舒適用車 2)服務：市區酒店接，中文司導服務 3)司導：司導餐補費用，過路費，車輛燃油費、小費 4)配套：兒童座椅/嬰兒籃/車載WiFi 5)門票：觀海豚船票，海岸沙漠滑沙體驗 6)可選：爬蟲動物園、午餐等項目，具體以套餐包含為準',
                                       'notContain': '1)门票：自选门票 2)旅行保险(建议购买旅行保险)'},
                    'productDaysPlan': [{'day':'第1天', 'content':'乘機前往阿德萊德，接機后參加下午1点开始阿德莱德市区游览：从有阿德莱德后厨房之称的中央市场出发，途经唐人街、维多利亚广场、威廉国王大街，前往参观南澳著名的意大利琥珀柠檬酒品酒室并品酒，沿著名的人文艺术街道北大街、都市自然风光带托伦斯河岸景区以及澳大利亚最早的蓝道步行购物街，一路欣赏阿德莱德市景。参观圣彼得大教堂，并以建城之父威廉•莱特上校命名的莱特将军瞭望台留影。下午5:00pm结束观光，送回酒店休息。'},
                                        {'day':'第2天', 'content':'飯店集合後先前往洛夫蒂觀景台，這裡可眺望阿德萊德市全景。接著前往德國村汗多夫主街探幽尋寶，並在當地老字型大小德國餐廳享用德國香腸豬手特色餐（自費，成人$35/兒童$25），更可自費品嘗源自德國的傳統啤酒。午後前往著名葡萄酒產區麥拿倫谷，主街上由蒸汽火車改建而成的堅果專營店“杏仁火車”（Almond train）可令人重溫懷舊時光。拜訪精品五星酒莊“黛倫堡魔方”（入場自費：大小同價A$10）中，可全方位領略葡萄酒的“夢幻”魅力；更可升級“精選佳釀品鑒”（自費：成人A$24，魔方入場費已含），品評酒莊典藏臻品，深入瞭解澳大利亞葡萄酒。下午5:15pm左右送抵市區指定飯店。**可升級至袋鼠島一日遊，每人需補差價成人$220，小童$160**'},
                                        {'day':'第3天', 'content':'飯店集合後，前往峽谷野生動物園（自費：成人A$20/兒童A$15）喂袋鼠，並親手抱考拉留影。之後參觀有著神奇回音體驗的芭蘿莎水庫回音牆（Whispering Wall，*34度以上高溫天氣不開放）。中午在當地享用澳大利亞岩石燒烤特色餐（自費：成人A$35/兒童A$25）。下午參觀建築恢弘，藝術氛圍濃郁的芭蘿莎古堡（Barossa Chateau），客人可在此品酒並參觀骨董收藏（自費：成人A$10），春夏季可欣賞到姹紫嫣紅，萬株玫瑰齊盛開的美景。之後前往全球唯一每年出產百年波特酒（單一年份）的沙普酒莊（Seppeltsfiled），欣賞歷史悠久的建築群，並可參加旗艦波特酒品評（自費：A$20）。下午5:30左右送阿德萊德機場結束行程。'},],
                    'needstoknow': '1.游玩开始时间，72小时内，不做退改 2.游玩开始时间，72小时外，可做无损退改 3.如遇不可抗自然灾害客观因素，造成无法成行，提供相关官方凭据，无损取消 4.其他存在主客观特殊原因，请与平台协调处理',
                },
                {
                    'productID': '25408',
                    'productDesc': '獨家提供史蒂芬港中文精品小團',
                    'productSpecialPrice': '優惠：原價$1,899/成人 $1,299/兒童',
                    'productRebate': '出行後點評可返 $20',
                    'productImgs':[{'url':'/images/popular/popular1.png', 'imgdes':'葡萄酒莊品嚐美酒'}, 
                                     {'url':'/images/popular/popular2.png', 'imgdes':'巴羅莎'},
                                     {'url':'/images/popular/popular3.png', 'imgdes':'莱特将军瞭望台'},
                                     {'url':'/images/popular/popular4.png', 'imgdes':'戴倫堡魔方'}],    
                            
                    'productFeeDesc':{'contains': '1)afds 2)adfs 3)gerag 4)asdf 5)asfd', 'notContain': '1)dsaf 2)adsf'},
                    'productDaysPlan': [{'day':'thefirstday', 'content':'葡萄酒莊品嚐美酒'},
                                        {'day':'thesecondday', 'content':'巴羅莎'},
                                        {'day':'thethirdday', 'content':'莱特将军瞭望台'},],
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
        background-color:#f7f5f1;
        padding-top: 4rem;
    }
</style>
