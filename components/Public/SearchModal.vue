<template>
    <div class="searchContainer">  
        <input type="text" v-model="search" placeholder="search blogs" />   
    </div>
</template>

<script>
export default {
    data(){
        return{
            search: ""
        }
    }
}
</script>

<style scoped>
    .searchContainer{
        z-index:20;
        position:absolute;
        margin-right:0;
    }
</style>
