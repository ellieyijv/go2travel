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
const apiUrl = process.env.API_URL || 'http://localhost:8000'

export default {
	data(){
		return{
			cardList: ''
		}
	},
		
	
	async fetch({store}) {
		store.commit('specialDeals/emptyList')
        const {data} = await axios.get(`${apiUrl}/api/specialdeals`).catch((error => {  
            console.log(error)
        }))
       
        data.forEach(item => { 
              console.log(item.product);
			// item.product.cardImage = `${apiUrl}${product.image.url}`
            store.commit('specialDeals/add', {
                id: item.product.id,
                ...item.product
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
