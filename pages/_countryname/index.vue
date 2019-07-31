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
import axios from 'axios';
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

            productList:[],
            arrowDaysDirection: "fas fa-arrow-up",
            arrowPriceDirection: "fas fa-arrow-up",
            opacityValue: "0.6",
            opacityValue1: '0.6',
            clone: [],
            isActive: false
       }
    },

    async fetch({store, params}) {
        console.log(params);
		store.commit('productSummary/emptyStateProductsList');
        const {data} = await axios.get(`${apiUrl}/api/${state_id}/products/page=${page_id}`).catch((error => {  
            console.log(error)
        }))
    
        data.forEach(item => { 
			item.product.card_image = JSON.parse(item.product.card_image)[0]
            store.commit('productSummary/add', {
                id: item.product.id,
				name: item.product.product_name,
				sales_price: item.product.sales_price,
				price: item.product.price,
				duration: item.product.duration,
				image: `${apiUrl}/storage/${item.product.card_image}`,
            })
        })
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
