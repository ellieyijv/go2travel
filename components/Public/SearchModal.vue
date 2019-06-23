<template>
    <div class="searchContainer">  
        <input  v-model="search" placeholder="search products"/> 
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
    }

    #searchProductList li{
        list-style: none;
    }
</style>
