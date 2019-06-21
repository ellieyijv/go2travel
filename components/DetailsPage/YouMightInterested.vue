<template>
    <b-container id="youmightinterested"> 
        <h4>相關推薦</h4>
        <b-row>
            <b-col v-for="card in youmightinterestdlist" :key="card.id" cols="6" sm="4" md="6" lg="6" xl="4" class="cardLayout">
               <SpecialDealCard :card="card" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import SpecialDealCard from '../Homepage/SpecialDealCard'
export default {
    props:['youmightinterestdlist'],
    components: {SpecialDealCard}
}
</script>

<style scoped>
#youmightinterested{
    padding-bottom:3rem;
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
