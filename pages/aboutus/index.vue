<template>
    <div>
        <aboutusHeroimgComp />
        <aboutusHeroDesc :description="aboutusData.description"/>
        <aboutusDetails :aboutusData="aboutusData"/>
    </div>
</template>

<script>
import aboutusHeroimgComp from '../../components/AboutUSPage/aboutusHeroImgComp';
import aboutusHeroDesc from "../../components/AboutUSPage/aboutusHeroDesc";
import aboutusDetails from "../../components/AboutUSPage/aboutusDetails";
import axios from 'axios';
const apiUrl = process.env.API_URL || 'http://localhost:80'
export default {
    components:{aboutusHeroimgComp, aboutusHeroDesc, aboutusDetails},
    data(){
        return{
            aboutusData:{}
        }
    },
    async asyncData() {
        let {data} = await axios.get(`${apiUrl}/api/aboutus`);
        return {aboutusData: data[0]}  
    },

    mounted(){
        console.log(this.aboutusData);
    }
}
</script>

<style scoped>

</style>
