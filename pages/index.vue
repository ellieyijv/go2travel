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

import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)
export default {
	data(){
		return{
			cardList: ''
		}
	}
		
	,
	async fetch({store}) {
		store.commit('specialDeals/emptyList')
        const response = await strapi.request('post', '/graphql', {
        data: {
            query: `query {
                specialdeals {
                    id
                    title
                    subtitle
                    price
                    days
                    country_name
                    image{
                        url
                    }
                }
            }
            `
        }
    }).catch((error => {
            console.log(error)
        }))
        response.data.specialdeals.forEach(product => { 
			product.image.url = `${apiUrl}${product.image.url}`
            store.commit('specialDeals/add', {
                id: product.id,
                ...product
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
