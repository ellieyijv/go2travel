<template>
    <div >
        <heroImgComp :bannerImage="bannerImage"/>
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
const apiUrl = process.env.API_URL || 'http://localhost:80'

export default {
   components:{heroImgComp, countryNavBarComp, productListComp},

   data(){
       return{
            orderByPriceasc: true,
            orderByDaysasc: true,
            countrycities: [],
            arrowDaysDirection: "fas fa-arrow-up",
            arrowPriceDirection: "fas fa-arrow-up",
            opacityValue: "0.6",
            opacityValue1: '0.6',
            isActive: false,
            productList: [],
            bannerImage: ''
       }
    },

    async asyncData({params}){
        let state_slug = params.slug;
        let res = await axios.get(`${apiUrl}/api/${state_slug}/cities`);
       
        return {countrycities: res.data}   
    },
    async fetch({store, params}) {
        let state_slug= params.slug
		store.commit('productSummary/emptyStateProductsList');
        const {data} = await axios.get(`${apiUrl}/api/${state_slug}/products`);
        if(!data) return cb('Can not find the product');
       
        data.forEach(item => { 
			item.card_image = JSON.parse(item.card_image)[0]
            store.commit('productSummary/addStateProducts', {
                id: item.id,
				product_name: item.product_name,
				sales_price: item.sales_price,
				price: item.price,
				duration: item.duration,
                card_image: `${apiUrl}/storage/${item.card_image}`,
                product_code: item.product_code,
                state_id: item.state_id,
            })
        })
    },
   created(){ 
        this.productList = this.$store.getters['productSummary/stateProductsList'];   
   },
   mounted(){
        this.countrycities.unshift({id:'' ,name: '显示全部', slug: 'showall'})
        const statesList =[]
        axios.get(`${apiUrl}/api/states`)
                .then((res, reject)=>{
                    statesList = res.data
                    let slug = this.$route.params.slug;
                    this.bannerImage = statesList.find((item)=>{
                        return item.slug == slug
                    }).banner_image
                })
    },

       
  
   methods:{   
        sortedProductList(){        
            this.orderByPriceasc = !this.orderByPriceasc;
            this.opacityValue = '1';
            this.opacityValue1 = '0.6'
            this.$store.commit('productSummary/sortedProductListByPrice', {
                orderByPriceasc: this.orderByPriceasc,      
             })
            this.arrowPriceDirection = this.$store.getters['productSummary/stateArrowPriceDirection'];
            this.productList = this.$store.getters['productSummary/currentProductList'];
        },

   
        sortedByDaysProductList(){
            this.orderByDaysasc = !this.orderByDaysasc;
            this.opacityValue1= '1',
		    this. opacityValue="0.6",
            this.$store.commit('productSummary/sortProductsByDays', {
                orderByDaysasc: this.orderByDaysasc,    
             })
            this.arrowDaysDirection = this.$store.getters['productSummary/stateArrowDaysDirection'];
            this.productList = this.$store.getters['productSummary/currentProductList'];
        },


        sortedByCities(cityId){ 
            this.$store.commit('productSummary/emptyCurrentProductsList'); 
            this.opacityValue= "0.6"
            this.opacityValue1= '0.6'         
                if(!cityId){   
                    this.productList = this.$store.getters['productSummary/stateProductsList'];
                }else{
                    axios.get(`${apiUrl}/api/state/${cityId}/products`)
                        .then((res)=>{
                            const mappedData =  res.data.map((item)=>{
                                item.card_image = JSON.parse(item.card_image)[0]
                                item.card_image= `${apiUrl}/storage/${item.card_image}`
                                this.$store.commit('productSummary/addCurrentProducts', item);
                                return item;
                            })
                            this.productList = mappedData;
                        })
                        .catch((error)=>{
                            console.log(error)
                        }); 
                     
                }
    
            return this.productList
       }   
   },


   computed:{
       producListNum(){
            return this.productList.length;
       }, 
     
   }

}
</script>

<style>

</style>
