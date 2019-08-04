<template>
    <b-container id="productfeedesc">
     
        <b-row sm="12">
            <h4>費用說明</h4>
        </b-row>
        <b-row style="border-top: 2px solid #F7F5F1">
            <b-col class="borderStyle">
                <h5>費用包含</h5>
                <span v-html="productFeeDesc.inclusion"></span>
            </b-col>
            <b-col>
                <h5>費用不包含</h5>
                <span v-html="productFeeDesc.exclusion"></span>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: ['productFeeDesc'],
  
}
</script>

<style scoped>
    #productfeedesc{
        background-color:white;
        padding: 1.5rem;
        margin: 4rem auto;
    }

    #productfeedesc li{
        display: -webkit-box;
        font-family: 'FangPingRegular';
    }

    #productfeedesc h4{
       font-size:20px;
       letter-spacing: 3px;
       color:#103a5b; 
       padding-bottom: 1rem; 
    }

    #productfeedesc h5{
        columns: #3c3c3c;
        font-size:14px;
        padding-top:2rem;
    }

    #productfeedesc li{
        color: #3c3c3c;
        font-size:14px;
        line-height:24px;
    }

    .borderStyle{
        border-right: 2px solid rgb(247, 245, 241);
        padding-bottom: 1.5rem;
    }
</style>
