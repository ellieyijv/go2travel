<template>
    <b-container id="productNeedsToKnow">
        <b-row>
            <b-col sm="12">
                <h4>预订须知</h4>
            </b-col>
        </b-row>
        <b-row style="border-top: 2px solid #F7F5F1; padding-top:2rem;">
            <b-col sm="12">
                <li v-for="(item,index) in needstoknowArr" :key="index">
                    {{item}}
                </li>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: ['needstoknow'],
    data(){
        return{
            needstoknowArr: []
        }
    },
    created(){
        this.needstoknowArr = this.needstoknow.split(' ');
    }
}
</script>

<style scoped>
   #productNeedsToKnow{
       background-color: white;
       padding:1.5rem;
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
