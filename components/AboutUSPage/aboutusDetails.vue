<template>
    <b-container fluid id="aboutusDetailsComp">
          <b-row style=" direction: rtl;">
               <b-col md="6" xl="6" class="backimg">   
                </b-col>
                <b-col md="6" lg="6" class="containerStyle">
                    <div class="contentStyle">
                        <h5>{{aboutusData.first_title}}</h5>
                        <p>{{aboutusData.first_description}}</p> 
                    </div>
                </b-col>
            </b-row>
             <b-row >
                 <b-col md="6" xl="6" class="backimg">   
                </b-col>
                <b-col md="6" lg="6" xl="6" class="containerStyle">
                    <div class="contentStyle">
                        <h5>{{aboutusData.second_title}}</h5>
                        <p>{{aboutusData.second_description}}</p> 
                    </div>
                </b-col>
               
            </b-row>
             <b-row style=" direction: rtl;">
                <b-col  md="6" xl="6" class="backimg">   
                </b-col>
                <b-col md="6" lg="6" xl="6" class="containerStyle">
                    <div class="contentStyle">
                        <h5>{{aboutusData.third_title}}</h5>
                        <p>{{aboutusData.third_description}}</p> 
                    </div>
                </b-col>
           
            </b-row>
    </b-container>
</template>

<script>
export default {
    props:['aboutusData']
}
</script>

<style scoped>
#aboutusDetailsComp{
    padding:0;
   
}

.backimg{
    background-image: url('/images/about/aboutus1.png');
    background-repeat: no-repeat;
    padding-bottom:587px;
    background-position: center;
    background-size: cover;
}

.contentStyle{
    color:#897B72;
    width:40%;
    margin:auto;
   
}

.contentStyle h5{
    font-size: 18px;
    padding-top:3rem;
}

.contentStyle p{
    font-size:14px;
    padding-top:2.5rem;
}

.containerStyle{
    display:flex;
    background-color: #f7f5f1;
}

  @media (max-width: 1000px){
    .contentStyle{
        width:70%;
        }
 
   .backimg{
    padding-bottom:350px;
    }
  .contentStyle p{
    padding-top:1rem;
    padding-bottom:3rem;
}
 }
</style>
