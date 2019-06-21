<template>

  <b-container fluid id="header">
    <b-container class="contactStyle">
    <b-row align-h="between">
      <b-col cols="6" sm="10" >
        <span>致電 020 7637 7760 </span><span class="addborder"> 電郵 go4funtravel@hotmail.com </span>
      </b-col>
      <b-col cols="2" ><nuxt-link to="/contactus"><p class="addborder">聯系我們</p></nuxt-link></b-col>
    </b-row>
    </b-container>
  </b-container>

</template>

<script>
import { BContainer, BNavbar } from "bootstrap-vue";

export default {};
</script>

<style  scoped>
#header {
  background-color: #103a5b;
  height: 31px;
  color: white;
}

.contactStyle{
  font-size:12px;
 
  line-height: 31px;
}
.contactStyle span{
 border-left: 1px solid white; 
  padding:10px 15px; 
}
.addborder{
    border-right:1px solid white;
    border-left: 1px solid white;
    text-align: center;
    color:white;
   
}

@media (max-width: 575px) {
  #header {
    display: none;
  }
}

.navbar-text{
  font-size:16px;
  color:#103A5B;
  letter-spacing: 2px;
 
}


</style>
