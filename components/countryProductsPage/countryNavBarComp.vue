<template>
<div>
    <b-container fluid id="countryNavBarComp" class="p-4">
        <b-container class="countrynavbar">
            <b-row>
                <b-col cols="auto" class="mr-auto p-1">
                    <h5>{{$route.params.countryname}}</h5>
                </b-col>
              
                <b-col cols="auto" sm="p-1">
                    <b-nav class="justify-content-end">
                        <b-nav-item active>共{{productNum}}個商品</b-nav-item>
                        <b-nav-item @click="$emit('priceByOrder')">價格
                            <i :class="arrowPriceDirection"></i>
                        </b-nav-item>
                        <b-nav-item @click="$emit('daysByOrder')">天數
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
            <b-col sm="2"  v-for="city in countrycities" :key="city.id">
                <b-nav class="justify-content-between"  >
                    <b-nav-item active>{{city.name}}</b-nav-item>
                </b-nav>
            </b-col>
        </b-row>
        </b-container>
    </b-container>
</div>
</template>

<script>
export default {
    props: ['countrycities', 'productNum', 'arrowPriceDirection', 'arrowDaysDirection'],
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

    .cityNav ul{
        margin-top: 20px;
        background-color:#C2A579;    
    }

    .cityNav .nav-link{
        color:white;
    }
    
 
</style>
