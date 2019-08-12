<template>
   <div class="container-fluid backgroundColor">
       <inquiryForm :productData="productData"/>
   </div>
</template>

<script>
import inquiryForm from "../../../components/InquiryPage/inquiryForm"
import axios from 'axios'
const apiUrl = process.env.API_URL || 'http://localhost:80'
export default {
    components:{inquiryForm},
    data(){
        return{
            productData: {},
         
        }
    },
    async asyncData({ params, redirect}) {
        try {
            let product_code = params.code;
            let {data} = await axios.get(`${apiUrl}/api/${product_code}/withDetails`);
            const tmp = {
                product_code: data.product_code,
                product_name: data.product_name,
                sales_price : data.sales_price,
                price : data.price, 
                product_description: data.product_description,
                price_description: data.price_description
            }
            return {productData: tmp}; 
            
        } catch (error) {
            console.log(error);
        }
         
    },
  
}
</script>

<style scoped>
.backgroundColor{
    background-color: #f7f5f1;
}

</style>
