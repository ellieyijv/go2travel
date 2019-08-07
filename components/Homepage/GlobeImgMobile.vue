<template>
    <nuxt-link :to="'/' + globe.slug">
    <div :globe="globe" class="parent">
   
        <img :src="globe.thumbnail" class="img-responsive child"/>
      
    </div>
      <p >{{globe.state}}</p>
</nuxt-link>
</template>

<script>
export default {
     props: ['globe']
}
</script>

<style>

</style>
