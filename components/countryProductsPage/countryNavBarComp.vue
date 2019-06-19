<template>
<div>
    <b-container fluid id="countryNavBarComp" class="p-4">
        <b-container class="countrynavbar">
            <b-row>
                <b-col cols="auto" class="mr-auto p-2">
                    <h5>{{$route.params.countryname}}</h5>
                </b-col>
              
                <b-col cols="auto" >
                    <b-nav class="justify-content-end">
                        <b-nav-item active>共{{productNum}}個商品</b-nav-item>
                        <b-nav-item @click="$emit('priceByOrder')" :style="{opacity:opacityValue}">價格
                            <i :class="arrowPriceDirection"></i>
                        </b-nav-item>
                        <b-nav-item @click="$emit('daysByOrder')" :style="{opacity:opacityValue1}">天數
                            <i :class="arrowDaysDirection"></i>
                        </b-nav-item>
                        <b-nav-item @click="switchFilter()">籂選
                            <i :class="filtericon"></i>
                        </b-nav-item>
                    </b-nav>
                </b-col>
            </b-row>  
        </b-container>
    </b-container>
    <b-container v-if="filter == true" fluid style="background-color:white" class="cityNav">
        <b-container>
            <b-row >
                <b-col sm="12">
                    Please choose your destination
                </b-col>
                <b-col cols="6" sm="4" md="3" lg="2" v-for="city in countrycities" :key="city.id">
                    <button class="justify-content-between">
                    {{city.name}}
                    </button>
                </b-col>
        </b-row>
        </b-container>
    </b-container>
</div>
</template>

<script>
export default {
    props: ['countrycities', 'productNum', 'arrowPriceDirection', 'arrowDaysDirection', 'opacityValue', 'opacityValue1'],

    data(){
        return{
            filter: false,
            sortprice: true,
            filtericon: 'fas fa-sliders-h',
            open: false,
          
        }
    },

    methods:{
        switchFilter(){
            this.filter = !this.filter;
            this.open = !this.open;
            if(this.open){
                this.filtericon = "fas fa-times setColour"
            }else{
                this.filtericon = "fas fa-sliders-h"
            }
        },
   
    },
    created(){

    }
}
</script>

<style scoped>
    #countryNavBarComp{
        background-color: #103a5b;
        padding:0;
        /* margin-bottom: 2rem; */
        color:white;
    }

    #countryNavBarComp li a{
        color:white;
    }
    .cityNav{
        margin-bottom: 40px;
    }
    .cityNav .nav-item{
        margin:auto; 
    }

    .cityNav button{
        margin-top: 20px;
        width:140px;
        border:none;
        border-radius: 0;
        background-color: #E5E5E5;
        color:#3c3c3c;
        padding:8px;
    }
   
    .cityNav button.active  {
        background-color:#C2A579;
        color:white;
    }

    .cityNav .nav-link{
        color:white;
    }
    
    .countrynavbar h5{
            margin-left: 0.5rem;
        }
  
    @media (max-width: 589px){
        .countrynavbar h5{
            margin-left: 1.5rem;
        }
    }
</style>
