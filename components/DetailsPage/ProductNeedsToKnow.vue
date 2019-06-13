<template>
    <b-container id="productNeedsToKnow">
        <b-row>
            <b-col sm="12">
                <h4>Booking</h4>
            </b-col>
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
   }
</style>
