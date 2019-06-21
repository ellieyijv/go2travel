<template>
    <b-container id="productHighlight">
        <b-row>
            <b-col sm="12">
                <h4>線路特色</h4>
            </b-col>
        </b-row>
        <b-row style="border-top: 2px solid #F7F5F1" >
            <b-col v-for="(img, index) in details.productImgs" :key="index" sm="6" lg="4" xl="3" class="hilightlistStyle">
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

    #productHighlight .hilightlistStyle{
      color: #7f7f7f;
      font-size:14px;
      padding-top: 2rem;
    }

    #productHighlight h4{
        font-size:20px;
       letter-spacing: 3px;
       color:#103a5b;  
        padding-bottom: 1rem;
    }

    #productHighlight .hilightlistStyle{
        text-align: center;
    }


</style>
