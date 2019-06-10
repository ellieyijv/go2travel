<template>
    <b-container id="productHighlight">
        <b-row>
            <b-col sm="12">
                <h4>Special Route</h4>
            </b-col>
        </b-row>
        <b-row >
            <b-col v-for="(img, index) in details.productImgs" :key="index" sm="3">
                <img :src="img.url" />
                <p>{{img.imgdes}}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
   props:[ 'details'],
}
</script>

<style scoped>
    #productHighlight{
        background-color: white;
         padding: 1.5rem;
    }

    #productHighlight .col-sm-3{
        text-align: center;
    }
</style>
