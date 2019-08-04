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

.parent {
   /* width: 100%; */
	border-radius:100%; 
	height: 150px; 
	margin: 0 auto;
    width:154px;
    overflow:hidden;
   
}

.child {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: all .5s;
   
}

.parent:hover .child,
.parent:focus .child
{
  transform: scale(1.2);
  display:block;
}

</style>
