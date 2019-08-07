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
