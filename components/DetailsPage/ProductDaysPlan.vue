<template>
    <b-container id="productDaysPlans">
        <b-row>
            <b-col sm="12"><h4>trip suggestion</h4></b-col>
            
            <b-col sm="12" v-for="(item, index) in daysplan" :key="index">
                <h5>{{item.day}}</h5>
                <p>{{item.content}}</p>
            </b-col>
            
        </b-row>
       
    </b-container>
</template>

<script>
export default {
    props: ['daysplan'],
}
</script>

<style scoped>
    #productDaysPlans{
        background-color: white;
        padding:1.5rem;
    }
</style>
