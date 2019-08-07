<template>
    <div class="container-fluid" id="globe">
            <div class="col-md-12 globeTitle" >
                <h4 style="font-size:18px">无忧出行</h4>
                <h5 style="font-size:14px">AROUND THE GLOBE</h5>
            </div>
            <div class="container globelist">
                <div class="row alignCenter">
                    <div v-for="globe in globeList" :key="globe.id" class="col"> 
                        <GlobeImg :globe="globe" style="text-align:center" />
                    </div>
                </div>
            </div>
    </div>
 
</template>

<script>
import GlobeImg from './GlobeImg'

export default {
    components:{GlobeImg},
    data(){
        return{
            globeList:[]
        }
    },
    created(){
        this.globeList=this.$store.getters.statesList
    },
    
}
</script>

<style scoped>
    #globe{
        background-color:#103A5B;
        color:white;
       
    }

    .globeTitle{
        text-align:center; 
        margin:70px 0;
        padding-top:50px;
    }
    .globeTitle h4{
        letter-spacing: 2px;
   
        font-size:18px;
    }
    .globeTitle h5{
        font-family: 'Playfair Display', serif;
        letter-spacing: 3px;
        line-height: 3px;
        font-size:14px;
     }
    .globelist{
        padding:0;
    }
    .alignCenter{
        padding-bottom:70px;
    }
    
    
</style>
