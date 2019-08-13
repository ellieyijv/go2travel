<template>
    <b-container fluid style= "background-color: #f7f5f1; padding:0;">
    <b-container class="overflow-auto" id="productListComp">  
            <b-row  id="products">
                    <b-col  cols="6" sm="6" md="6" lg="6" xl="4" v-for="card in currentItems" :key="card.id" class="cardlist">
                        <div >
                            <ProductCard :card = "card" />
                        </div>
                    </b-col>
            </b-row>
            <b-row cols="12" class="text-center">
            <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="products"
                    limit="6"
                    hide-goto-end-buttons
                    >    
            </b-pagination>
            </b-row>
                
            </b-container>
    </b-container>
</template>

<script>
import ProductCard from "../../components/Public/ProductCard";
export default {
props: ['productList'],
    components:{ProductCard},
    
    data(){
        return{
            perPage: 9,
            currentPage:1,
            product: []
            
        }
    },
 
     computed: {
      rows() {
        return this.productList.length
      },
      currentItems(){
          let startItem = (this.currentPage-1)*this.perPage;
          let endItem = startItem + this.perPage
          return this.productList.slice(startItem, endItem )
      }
    }
}
</script>

<style>
#productListComp{
    padding-top:5rem;
}
#productListComp .cardlist {
    margin-bottom: 3rem;
    padding-left: 0;
    padding-right: 0;
}

 #productListComp ul{
     margin:auto;
     margin-bottom:5rem;
 }

 #productListComp li{
     padding-left:1rem;
 }

 #productListComp .page-link{
    border: none !important;
    background-color:transparent;
    color:#3c3c3c;
}

#productListComp .page-item.active .page-link {
    border-radius: 100% !important;
    background-color: #013a5b !important;
    color:white;
}

</style>

