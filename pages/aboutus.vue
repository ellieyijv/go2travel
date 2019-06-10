<template>
 <div>
        <AppHeader/>
	    <AppNavBar />
        <aboutCarouselComp />
        <Footer />
 </div>
</template>

<script>
import AppHeader from '../components/Public/AppHeader'
import AppNavBar from '../components/Public/AppNavBar'
import aboutCarouselComp from '../components/AboutUSPage/aboutCarouselComp'
import Footer from '../components/Public/Footer'
export default {
    components:{
        AppHeader,AppNavBar,Footer, aboutCarouselComp
    }
 
}
</script>

<style scoped>

</style>
