<template>
<<<<<<< HEAD
  <section>
    <div v-if="$device.isDesktop">
      <div>
        <AppHeader />
        <AppNavBar />
        <nuxt />
        <Footer />
      </div>
    </div>
    <div v-else-if="$device.isTablet">
        <div>
     
        <nuxt />
      
      </div>
    </div>
    <div v-else>
       <div>
     
        <nuxt />
      
      </div>
    </div>
  </section>
</template>
<script>
import AppHeader from "../components/Public/AppHeader";
import AppNavBar from "../components/Public/AppNavBar";
import Footer from "../components/Public/Footer";
export default {
  components: {
    AppHeader,
    Footer,
    AppNavBar
  }
};
=======
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
>>>>>>> v1
</script>

<style>
html,
body {
  font-family: "FangPingMedium";
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "FangPingMedium";
}
</style>
