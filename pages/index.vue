<template>
	<div>
		
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

export default {
	asyncData() {
		return new Promise(resolve => {
			setTimeout(function() {
				resolve({ show: true });
			}, 1000);
		});
	},

	components:{
		Carousel,  SpecialDeals, PopularTours, Globe, AboutUS, BackToTop
	},


	  
};
</script>

<style scoped>

.container-fluid {
	padding-left:0 !important;
	padding-right:0 !important;
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
