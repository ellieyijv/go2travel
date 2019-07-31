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
import axios from 'axios'
const apiUrl = process.env.API_URL || 'http://localhost:80'

export default {
  components:{
    AppHeader,Footer, AppNavBar
  },
 
    
}
</script>

<style>
html, body{
  font-family: 'FangPingMedium';
  text-decoration: none;
}

h1, h2, h3,h4,h5{
   font-family: 'FangPingMedium';
}


</style>
