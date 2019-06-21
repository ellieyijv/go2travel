<template>
	<div>
    <AppHeader/>
	<AppNavBar />
    <nuxt />
    <FixedFooter />
  </div>
</template>

<script>
import AppHeader from '../components/Public/AppHeader'
import AppNavBar from '../components/Public/AppNavBar'
import FixedFooter from '../components/Public/FixedFooter'
export default {
  components:{
    AppHeader,FixedFooter, AppNavBar
  }
}
</script>

<style scoped>
html, body{
  	font-family: 'FangPingMedium';
  	text-decoration: none;
	height: 100%;
}

h1, h2, h3,h4,h5{
   font-family: 'FangPingMedium';
}

</style>
