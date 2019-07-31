<template>
	<div id="homepagestyle">
		
		<Carousel />
		<SpecialDeals />
		<PopularTours />
		<Globe />
		<AboutUS />
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
const apiUrl = process.env.API_URL || 'http://localhost:80'

export default {
	data(){
		return{
			cardList: ''
		}
	},
		
	
	async fetch({store}) {
		//get special deals data
		store.commit('productSummary/emptyList');
        const {data} = await axios.get(`${apiUrl}/api/specialdeals`).catch((error => {  
            console.log(error)
        }))
    
        data.forEach(item => { 
			item.product.card_image = JSON.parse(item.product.card_image)[0]
            store.commit('productSummary/add', {
                id: item.product.id,
				name: item.product.product_name,
				sales_price: item.product.sales_price,
				price: item.product.price,
				duration: item.product.duration,
				image: `${apiUrl}/storage/${item.product.card_image}`,
            })
		})
		
		//get popular tours data
		store.commit('productSummary/emptyPopularToursList');
        const popular_data = await axios.get(`${apiUrl}/api/populartours`).catch((error => {  
            console.log(error)
        }))
	
        popular_data.data.forEach(item => { 
			item.product.card_image = JSON.parse(item.product.card_image)[0]
            store.commit('productSummary/addPopularTours', {
                id: item.product.id,
				name: item.product.product_name,
				sales_price: item.product.sales_price,
				price: item.product.price,
				duration: item.product.duration,
				image: `${apiUrl}/storage/${item.product.card_image}`,
            })
		})
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
