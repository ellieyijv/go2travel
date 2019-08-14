<template>
    <div class="container" id="error">
       <h4 style="margin:auto auto">{{error.statusCode}} {{error.message}}</h4>
       
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: null
        }
    }
}
</script>

<style scoped>
#error{
    height: 75vh;
    display: flex;
}
</style>
