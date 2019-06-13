<template>
    <b-container id="youmightinterested"> 
        <h4>xiangguantuijian</h4>
        <b-row>
            <b-col v-for="card in youmightinterestdlist" :key="card.id" sm="3" md="4">
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

#youmightinterested .col-sm-4{
    margin-bottom: 2rem;
}   
</style>
