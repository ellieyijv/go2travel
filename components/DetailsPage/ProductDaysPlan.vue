<template>
    <b-container id="productDaysPlans">
        <b-row>
            <b-col sm="12"><h4>行程推荐</h4></b-col>
        </b-row>
        <b-row style="border-top: 2px solid #F7F5F1">
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

    #productDaysPlans h4{
        font-size:20px;
        letter-spacing: 3px;
        color:#103a5b; 
        padding-bottom: 1rem; 
    }


    
    #productDaysPlans h5{
        color: #C2A579;
        font-size:14px;
        padding-top:2rem;
        padding-bottom:2rem;
    }

    #productDaysPlans p{
          color: #3c3c3c;
          font-size:14px;
          line-height:24px;
          font-family: 'FangPingRegular';
    }
</style>
