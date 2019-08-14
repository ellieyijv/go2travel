<template>
    <nuxt-link :to="'/' + globe.slug">
        <span class="img-responsive">
            <div :globe="globe" class="parent">
                <img :src="globe.thumbnail" :alt="globe.state"/>
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
    width:2.8rem;
    height:90%;
    border-radius: 50%;
}

.parent{
    
    height:3rem;
}
</style>
