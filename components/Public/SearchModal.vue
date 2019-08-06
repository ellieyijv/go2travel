<template>
    <div class="searchContainer">  
            <input  v-model="search" placeholder="search products" class="searchinput col-10"/>
        
            <i class="fas fa-search col-1 searchIcon"></i>
            
            <ul id="searchProductList" v-if="filteredList.length">
                <li v-for="item in filteredList" :key="item.id">
                    <a :href="'/'+item.state.slug +'/'+ item.product_code">{{ item.product_name }}</a>
                </li>
            </ul> 
      
    </div>                                                                                                                                                                                                                                                                                                   
</template>

<script>
import axios from 'axios'
const apiUrl = process.env.API_URL || 'http://localhost:80'
export default {
    data(){
        return{
            search: "",
            productList:[]
        }
    },

    computed: {
        filteredList(){
           
            if(this.search){
                axios.get(`${apiUrl}/api/products?term=${this.search}`)
                .then((res, reject)=>{
                    this.productList = res.data
                })
            }
         
            return this.productList;
        },

    },
}
</script>

<style scoped>
    .searchContainer{
        z-index:20;
        position:absolute;
        right:0;
        background-color: white;
        width:456px;
    }

    #searchProductList li{
        list-style: none;
    }

    #searchProductList li a{
        text-decoration: none !important;
        color:#3c3c3c !important;
    }

     #searchProductList li a:hover{
        color:blue !important;
     }

     .searchinput{
        border:none;
        border-bottom:2px solid #f7f5f1;
        height:45px;
     }

     .searchinput:focus, textarea{
         outline:none !important;
     }

     .searchIcon {
        color:black;
        position:absolute !important;
        right:0;
        margin-top:20px;
     }

     @media (max-width: 375px){
        .searchContainer{
              width:100%;
          }
          .searchIcon{
              right:15px;
          }
     }
</style>
