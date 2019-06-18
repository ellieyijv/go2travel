<template>
<nuxt-link :to="'/' + globe.countryname">
    <div :globe="globe" >
        <img :src="globe.img" class="img-responsive"/>
        <p >{{globe.title}}</p>
    </div>
</nuxt-link>
</template>

<script>
export default {
    props: ['globe']
}
</script>

<style scoped>

p{
     font-size:14px;
     margin-top:10px; 
     color:white
}
@media only screen and (max-width: 767px) {
    img{
        height:52px;
        width: auto;
    }

    p{
        font-size:10px;
    }

    div{
        width:52px;
    }
  
}
</style>
