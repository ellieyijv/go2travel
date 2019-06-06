<template>
   
    <b-container fluid id="navBar">
        <b-container >
        <b-navbar toggleable="sm">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">
             <img src="/images/logo.png" alt="logo">
        </b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
            
          <b-navbar-nav class="mx-4">
            <b-nav-text>亞洲</b-nav-text>
          </b-navbar-nav >
            <b-navbar-nav class="mx-4">
            <b-nav-text>美洲</b-nav-text>
          </b-navbar-nav>
            <b-navbar-nav class="mx-4">
            <b-nav-text>非洲</b-nav-text>
          </b-navbar-nav>
            <b-navbar-nav class="mx-4">
            <b-nav-text>澳大利亞</b-nav-text>
          </b-navbar-nav>
            <b-navbar-nav class="mx-4">
            <b-nav-text>歐洲</b-nav-text>
          </b-navbar-nav>
                
          <b-navbar-nav class="ml-auto m-n4" >
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
     
</style>
