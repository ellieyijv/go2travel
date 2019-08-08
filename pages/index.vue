<template>
	<div id="homepagestyle">
		
		<Carousel :carousel="carousel"/>
		<SpecialDeals />
		<PopularTours />
		<Globe />
		<AboutUS :aboutusData="aboutusData"/>
		<Footer />
	    <!-- <BackToTop /> -->
	</div>
</template>


<script>
import Carousel from '../components/Homepage/Carousel.vue'
import SpecialDeals from '../components/Homepage/SpecialDeals'
import PopularTours from '../components/Homepage/PopularTours'
import Globe from '../components/Homepage/Globe'
import AboutUS from '../components/Homepage/AboutUS'
import BackToTop from '../components/Public/BackToTop'

import axios from 'axios'
const apiUrl = process.env.API_URL 

export default {
	head: {
		title: 'Home page 🚀',
		meta: [
		{ hid: 'description', name: 'description', content: 'go4fun 旅游 悉尼 澳大利亚' }
			],
	},

	data(){
		return{
			cardList: '',
			aboutusData: '',
			carousel: {}
		}
	},
	
	async asyncData() {
		try {
			let {data} = await axios.get(`${apiUrl}/api/aboutus`);
			let carouselData = await axios.get(`${apiUrl}/api/getHeroBannerProducts`);
			let carousel = carouselData.data.records.map((item)=>{
			item.flyer = JSON.parse(item.flyer)[0]
			return {	
				 		id: item.id,
			 			product_name: item.product_name,
						sales_price: item.sales_price,
						price: item.price,
						duration: `${item.duration}天${item.duration-1}夜`,
						product_code: item.product_code,
						state_id: item.state_id,	
						flyer: `${apiUrl}/storage/${item.flyer}`,
						state_slug: item.state.slug
			}
		})
		
        data.aboutusImg = `${apiUrl}/storage/${data.aboutusImg.replace(/\\/g,'/') }`
		return {aboutusData: data,
				carousel: carousel}  
			
		} catch (error) {
			error({ statusCode: 404, message: 'Post not found' });
		}
	
    },
	
	async fetch({store, redirect}) {
		//get special deals data
		store.commit('productSummary/emptyList');
		try {
			const {data} = await axios.get(`${apiUrl}/api/specialdeals`)
        	data.forEach(item => { 
			item.product.card_image = JSON.parse(item.product.card_image)[0]
            store.commit('productSummary/add', {
                id: item.product.id,
				product_name: item.product.product_name,
				sales_price: item.product.sales_price,
				price: item.product.price,
				duration: item.product.duration,
				card_image: `${apiUrl}/storage/${item.product.card_image}`,
				product_code: item.product.product_code,
				state_id: item.product.state_id,
				state_slug:item.product.state.slug
            })
		})
		} catch (error) {
			redirect(301, '/error')
		}
      
		
		//get popular tours data
		store.commit('productSummary/emptyPopularToursList');
		try {
			const popular_data = await axios.get(`${apiUrl}/api/populartours`)
        	popular_data.data.forEach(item => { 
			item.product.card_image = JSON.parse(item.product.card_image)[0]
            store.commit('productSummary/addPopularTours', {
                id: item.product.id,
				product_name: item.product.product_name,
				sales_price: item.product.sales_price,
				price: item.product.price,
				duration: item.product.duration,
				card_image: `${apiUrl}/storage/${item.product.card_image}`,
				product_code: item.product.product_code,
				state_id: item.product.state_id,
				state_slug:item.product.state.slug
				
            })
		})
		} catch (error) {
			redirect(301, '/error')
		}
       
	},

	components:{
		Carousel,  SpecialDeals, PopularTours, Globe, AboutUS, BackToTop
	},


	  
};
</script>

<style scoped>
#homepagestyle{
	font-family: 'FangPingMedium';
}


.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

</style>
