<template>
   
    <b-container fluid id="navBar">
        <b-container >
        <b-navbar toggleable="sm">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand href="/">
             <img src="/images/logo.png" alt="logo">
        </b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
            
          <b-navbar-nav class="mx-4">
            <nuxt-link to="/asian">亞洲</nuxt-link>
          </b-navbar-nav >
            <b-navbar-nav class="mx-4">
            <nuxt-link to="/american">美洲</nuxt-link>
          </b-navbar-nav>
            <b-navbar-nav class="mx-4">
            <nuxt-link to="/africa">非洲</nuxt-link>
          </b-navbar-nav>
            <b-navbar-nav class="mx-4">
            <nuxt-link to="/australia">澳大利亞</nuxt-link>
          </b-navbar-nav>
            <b-navbar-nav class="mx-4">
            <nuxt-link to="/europe">歐洲</nuxt-link>
          </b-navbar-nav>
                
          <b-navbar-nav class="ml-auto">
              <i class="fas fa-search" style="color:black"></i>
          </b-navbar-nav>
           
        </b-collapse>
      </b-navbar>
    </b-container>
    </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
    #navBar{
        height:auto;
        padding:0;
        margin-right:0;
    }

    .navbar-nav a{
      color:#103a5b;
    }
    
    @media (max-width: 575px){
      .ml-auto{
        margin-left:1.5rem !important;
        margin-top:0.5rem;
      }
    }

    @media (min-width: 576px){
      .ml-auto{
        margin:-1.5rem;
      }
    }
     
</style>
