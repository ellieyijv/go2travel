<template>
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
          <AppNavBar />
          <nuxt />
          <Footer />
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
