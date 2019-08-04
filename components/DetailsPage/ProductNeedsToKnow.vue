<template>
    <b-container id="productNeedsToKnow">
        <b-row>
            <b-col sm="12">
                <h4>條款規則</h4>
            </b-col>
        </b-row>
        <b-row style="border-top: 2px solid #F7F5F1; padding-top:2rem;">
            <b-col sm="12">
                <span v-html="needsToKnow"></span>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: ['needsToKnow'],

}
</script>

<style scoped>
   #productNeedsToKnow{
        background-color: white;
        padding:1.5rem;
        margin: 4rem auto;
   }

   #productNeedsToKnow li{
        display: -webkit-box;
        color: #3c3c3c;
        font-size:14px;
        line-height:24px;
        font-family:'FangPingRegular';
          
   }

    #productNeedsToKnow h4{
       font-size:20px;
       letter-spacing: 3px;
       color:#103a5b; 
       padding-bottom: 1rem; 
    }

  

</style>
