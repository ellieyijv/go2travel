<template>
    <b-container fluid style= "background-color: #E5E5E5; padding:0;">
    <b-container class="overflow-auto" id="productListComp">  
            <b-row  id="products">
                    <b-col  cols="6" sm="6" md="6" lg="6" xl="4" v-for="card in currentItems" :key="card.id" class="cardlist">
                        <div >
                            <SpecialDealCard :card = "card" />
                        </div>
                    </b-col>
            </b-row>
            
            <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="products"
                    limit="6"
                    hide-goto-end-buttons
                    >
                    
            </b-pagination>
                
            </b-container>
    </b-container>
</template>

<script>
import SpecialDealCard from "../../components/Homepage/SpecialDealCard";
export default {
props: ['productList'],
    components:{SpecialDealCard},
    
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

<style scoped>
#productListComp{
    padding-top:5rem;
}
#productListComp .cardlist {
    margin-bottom: 3rem;
    padding-left: 0;
    padding-right: 0;
}


 .page-link{
    border: none !important;
}

.page-item.active .page-link {
    border-radius: 50% !important;
    background-color: #013a5b !important;
}

</style>

