<template>
    <div >
       <!-- {{$route.params.countryname}} -->
        <heroImgComp />
        <countryNavBarComp  :countrycities = "countrycities" 
                            :productNum = "producListNum"  
                            :arrowDaysDirection = "arrowDaysDirection"
                            :arrowPriceDirection = "arrowPriceDirection"
                            :opacityValue = "opacityValue"
                            :opacityValue1 = "opacityValue1"
                            :isActive = "isActive"
                            @priceByOrder="sortedProductList"
                            @daysByOrder ="sortedByDaysProductList"
                            @filterProductByCity ="sortedByCities"/>
        <productListComp  :productList = "productList" />
 
    </div>
</template>

<script>
import heroImgComp from "../../components/countryProductsPage/heroImgComp";
import countryNavBarComp from "../../components/countryProductsPage/countryNavBarComp";
import productListComp from "../../components/countryProductsPage/productListComp";
export default {
   components:{heroImgComp, countryNavBarComp, productListComp},

   data(){
       return{
             orderByPriceasc: true,
             orderByDaysasc: true,
             countrycities: [
            {
                'id': 1,
                'name': 'showall'
            },
            {
                'id':2,
                'name': 'Brisban' 
            },
              {
                'id':3,
                'name': 'Melbourn' 
            },
              {
                'id':4,
                'name': 'Gold Coast' 
            },
              {
                'id':5,
                'name': 'Perth' 
            },
              {
                'id':6,
                'name': 'Kaensi' 
            },
              {
                'id':7,
                'name': 'Sydney' 
            }],

            productList:[{
                id: 25407,
                img:"/images/special/aussydney.png",
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "原價 $3,889 最後機會 立馬下訂",
                price:"3447",
                days:"5天4夜",
                countryname: "Australia",
                cities: 'Sydney'
            },
            {
                id: 25408,
                img:'/images/special/ausclassic.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"1447",
                days:"10天9夜",
                countryname: "Australia",
                cities: 'Brisban'
            },
            {
                id: 25409,
                img:'/images/special/aussydmel.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3347",
                days:"11天10夜",
                countryname: "Australia",
                cities: 'Perth'
            },
            {
                id: 4,
                img:'/images/special/aus.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3147",
                days:"12天11夜",
                countryname: "Australia",
                cities: 'Brisban'
            },
            {
                id: 5,
                img:'/images/special/auscans.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3247",
                days:"15天14夜",
                countryname: "Australia",
                cities: 'Kaensi'
            },
            {
                id: 6,
                img:'/images/special/auscanssyd.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3347",
                days:"8天7夜",
                countryname: "Australia",
                cities: 'Gold Coast'
            },
            {
                id: 7,
                img:'/images/special/auscanssyd.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3347",
                days:"15天14夜",
                countryname: "Australia",
                cities: 'Melbourn'
            },
                 {
                id: 8,
                img:'/images/special/auscans.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3247",
                days:"15天14夜",
                countryname: "Australia",
                cities: 'Melbourn'
            },
            {
                id: 9,
                img:'/images/special/auscanssyd.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3347",
                days:"8天7夜",
                countryname: "Australia",
                cities: 'Kaensi'
            },
            {
                id: 10,
                img:'/images/special/auscanssyd.png',
                title:"澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                subtitle: "最後機會 立馬下訂",
                price:"3347",
                days:"15天14夜",
                countryname: "Australia",
                cities: 'Kaensi'
            },
            ],
            arrowDaysDirection: "fas fa-arrow-up",
            arrowPriceDirection: "fas fa-arrow-up",
            opacityValue: "0.6",
            opacityValue1: '0.6',
            clone: [],
            isActive: false
       }
   },
   created(){
       
       this.clone = JSON.parse(JSON.stringify(this.productList));
   },
   methods:{
     
        compare(a, b){
            let numbera = this.getTheStringNum(a.days);
            console.log('a' + numbera);
            let numberb = this.getTheStringNum(b.days);
            console.log('b' +numberb);
            if(numbera < numberb)
                return -1;
            if(numbera > numberb)
                return 1;
            return 0;
        },
        sortedProductList(){
                 
            this.orderByPriceasc = !this.orderByPriceasc;
            this.opacityValue = '1';
            this.opacityValue1 = '0.6'
            if(this.orderByPriceasc){
                this.productList.sort((a, b)=> a.price - b.price);
                this.arrowPriceDirection = "fas fa-arrow-up"
            }else{
                this.productList.sort((b,a)=>a.price - b.price);
                this.arrowPriceDirection = "fas fa-arrow-down"
            }

        },

        getTheStringNum(string){
            return string.match(/\d+/g).map(Number)[0];
        },

        sortedByDaysProductList(){
            this.orderByDaysasc = !this.orderByDaysasc;
            this.opacityValue1 = '1';
            this.opacityValue = "0.6";
            if(this.orderByDaysasc){
                this.productList.sort((a, b) =>this.compare(a, b));
                this.arrowDaysDirection = "fas fa-arrow-up"
            }else{
                this.productList.sort((b, a)=> this.compare(a, b));
                this.arrowDaysDirection = "fas fa-arrow-down"
            }
        },


        sortedByCities(cityName){
            const list = this.clone.filter((el)=>{ 
                if(cityName == "showall"){

                    return this.clone;
                }else{
                    return el.cities == cityName
                }
                
           })
           this.productList = list;
       }
       
   },

//    created(){
//         this.productList.sort((a, b)=> a.price - b.price);
//    },
   computed:{
       producListNum(){
           return this.productList.length;
       },     
   }

       // //city name should fetch from server according to the country name
    // asyncdata(context){
    //     //get the citynames, simulate the server side fetch data
    // },
          // created(){
        //     let country = this.$route.params.countryname;
            
        // }
}
</script>

<style>

</style>
