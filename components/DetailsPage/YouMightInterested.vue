<template>
    <b-container id="youmightinterested"> 
        <h4>相關推薦</h4>
        <b-row>
            <b-col v-for="card in recommendProducts" :key="card.id" cols="6" sm="4" md="6" lg="6" xl="4" class="cardLayout">
               <ProductCard :card="card" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import ProductCard from '../Public/ProductCard'
export default {
    props:['recommendProducts'],
    components: {ProductCard}
}
</script>

<style scoped>
#youmightinterested{
    padding-bottom:3rem;
    background-color:#f7f5f1;
}
#youmightinterested h4{
    text-align: center;
    padding-bottom:3rem;
    color: #103A5B;
}

#youmightinterested .cardLayout{
    margin-bottom: 2rem;
}   
</style>
