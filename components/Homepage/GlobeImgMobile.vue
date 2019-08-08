<template>
    <nuxt-link :to="'/' + globe.slug">
        <span class="img-responsive">
            <div :globe="globe" >
                <img :src="globe.thumbnail" />
            </div>
            <p >{{globe.state}}</p>
        </span>
    </nuxt-link>
</template>

<script>
export default {
     props: ['globe'],
    
}
</script>

<style scoped>
p{
    font-size:10px;
    margin-top:5px;
    color:white
}

.img-responsive img{
   width:100%;
}
</style>
