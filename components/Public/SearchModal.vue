<template>
    <div class="searchContainer">  
            <input  v-model="search" placeholder="search products" class="searchinput col-10"/>
        
            <i class="fas fa-search col-1 searchIcon"></i>
        
            <ul id="searchProductList" v-if="filteredList.length">
                <li v-for="item in filteredList" :key="item.id">
                    <a :href="'/'+item.countryname +'/'+ item.id">{{ item.title }}</a>
                </li>
            </ul> 
      
    </div>                                                                                                                                                                                                                                                                                                   
</template>

<script>
class Product {
    constructor(id,title,countryname) {
        this.id = id; 
        this.title = title;
        this.countryname = countryname;
    }
}
export default {
    data(){
        return{
            search: "",
            productList:[
                new Product(
                    '25407',
                    "澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                    "Australia"
                ),
                new Product(
                    '25408',
                    "2澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                    "Australia"
                ),
                new Product(
                    '25409',
                    "3澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                    "Australia"
                ),
                new Product(
                    '25410',
                    "4澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                    "Australia"
                ),
                new Product(
                    '25411',
                    "5澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                    "Australia"
                ),
                new Product(
                    '25412',
                    "6澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                    "Australia"
                ),
                new Product(
                    '25413',
                    "7澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城",
                    "Australia"
                ),
                new Product(
                    '25414',
                    "8澳大利亚墨尔本+凯恩斯",
                    "Australia"
                ),
                new Product(
                    '25415',
                    "9澳大利亚墨尔本+凯恩斯+悉尼自由行",
                    "Australia"
                ),     
            ]
        }
    },
    computed: {
        filteredList(){
            let filtered = " ";
            if(this.search){
                filtered = this.productList.filter(product => 
                     product.title.toLowerCase().includes(this.search.toLowerCase())
                )
            }
            return filtered;
        }
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
</style>
