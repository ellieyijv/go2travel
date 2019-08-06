<template>
    <div>
        <aboutusHeroimgComp :herobannerImg="aboutusData.herobannerImg"/>
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
    head: {
		title: 'About US PAGE',
		meta: [
		{ hid: 'description', name: 'description', content: '联系我们,' }
			],
	},

    data(){
        return{
            aboutusData:{}
        }
    },
    async asyncData() {
        let {data} = await axios.get(`${apiUrl}/api/aboutus`);
        if(!data) return cb('Can not find the product');
        data.herobannerImg = JSON.parse(data.herobannerImg);
        const herobannerImg = data.herobannerImg.map((item)=>{
            item = `${apiUrl}/storage/${item}`
            return item;
        })
        data.herobannerImg = herobannerImg;

        data.aboutusImg = `${apiUrl}/storage/${data.aboutusImg.replace(/\\/g,'/') }`
        data.first_img_url = `${apiUrl}/storage/${data.first_img_url.replace(/\\/g,'/')  }`
        data.second_img_url = `${apiUrl}/storage/${data.second_img_url.replace(/\\/g,'/')  }`
        data.third_img_url = `${apiUrl}/storage/${data.third_img_url.replace(/\\/g,'/')  }`
        return {aboutusData: data}  
    },

}
</script>

<style scoped>

</style>
