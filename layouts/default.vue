<template>
  <div>
    <AppHeader/>
		<AppNavBar />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import AppHeader from '../components/Public/AppHeader'
import AppNavBar from '../components/Public/AppNavBar'
import Footer from '../components/Public/Footer'
export default {
  components:{
    AppHeader,Footer, AppNavBar
  }
}
</script>

<style>
html, body{
  font-family: 'FangPing';
}
</style>
