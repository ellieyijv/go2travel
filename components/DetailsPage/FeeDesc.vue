<template>
    <b-container id="productfeedesc">
     
        <b-row sm="12">
            <h4>feiyongshuoming</h4>
        </b-row>
        <b-row>
            <b-col>
                <h5>Product Contains</h5>
                <li v-for="(item,index) in productFeeDescContainsArr" :key="index">
                    {{item}}
                </li>
            </b-col>
            <b-col>
                <h5>Product Not Contain</h5>
                  <li v-for="(item,index) in productFeeDescNotContainArr" :key="index">
                    {{item}}
                </li>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: ['productFeeDesc'],
    data(){
        return{
            productFeeDescContainsArr: [],
            productFeeDescNotContainArr: []
        }
    },
    created(){
       
        this.productFeeDescContainsArr = this.productFeeDesc.contains.split(' ');
        this.productFeeDescNotContainArr = this.productFeeDesc.notContain.split(' ');
    }
}
</script>

<style scoped>
    #productfeedesc{
        background-color:white;
        padding: 1.5rem;
    }

    #productfeedesc li{
        display: -webkit-box;
    }
</style>
