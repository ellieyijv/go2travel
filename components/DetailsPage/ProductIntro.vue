<template>
    <b-container id="productIntro">
        <b-row>
            <b-col cols="12">
                <h4>產品概要</h4>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                
                服务语言：
                <span class="content">中文</span>

            </b-col>
            <b-col>接送服务： <span class="content">只接不送</span></b-col>
            <b-col>餐食安排： <span class="content">不含餐食</span></b-col>
        </b-row>
        
        <b-row>
            <b-col>游玩时长： <span class="content">一日</span></b-col>
            <b-col>退改政策： <span class="content">可退改</span></b-col>
            <b-col>行程凭证： <span class="content">电子票免打印</span></b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
    #productIntro{
        background-color:white;
         padding: 1.5rem;
    }

    #productIntro  .col{
        border: 1px solid #F7F5F1;
        color:#3C3C3C;
        font-size:14px;
        padding-top:1rem;
        padding-bottom:1rem;
    }

    #productIntro h4{
        color: #103a5b;
        font-size:20px;
        letter-spacing: 3px;
        padding-bottom: 1rem;
    }

    #productIntro .content{
       color:#7f7f7f;
    }
</style>
