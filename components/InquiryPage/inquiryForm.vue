<template>
     <b-container fluid>
        <b-container style="padding-top:3rem;" >
            <b-row>
                <b-col sm="6" class="leftSection">
                    <h4>澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城</h4>
                    <p style="padding-top:15px;">獨家提供史蒂芬港中文精品小團 | 產品編號 : 25407</p>
                </b-col>
                <b-col sm="2">
                </b-col>
                <b-col sm="4">
                    <div class="rightSection">
                        <h4>$3,447<span style="font-size:14px; font-family:'FangPing'">/人起</span></h4>
                        <p>優惠：原價$1,899/成人 $1,299/兒童</p>
                        <p>出行後點評可返 $20</p>    
                    </div>
                </b-col>
            </b-row>

            <b-row>
               
                <b-col>
                <b-form class="inquiryform">
                    <b-col cols="12" class="formtitlestyle">
                        <h4>咨詢報價</h4>
                    </b-col> 
                    <div class="formcontent"> 
                    <b-row >
                        <b-col md="4" v-for="item in formRowOne" :key="item.id">
                            <inquiryFormElement :item="item" />
                        </b-col>
                    </b-row>

                     <b-row >
                        <b-col md="4" v-for="item in formRowTwo" :key="item.id">
                            <inquiryFormElement :item="item" />
                        </b-col>
                    </b-row>

                    <b-row >
                        <b-col md="4" v-for="item in formRowThree" :key="item.id">
                            <inquiryFormElement :item="item" />
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                              <b-form-group 
                                    label="備註"
                                    lable-for="textarea"
                                >
                                     <b-form-textarea
                                        id="textarea"
                                    
                                        rows="4"       
                                        ></b-form-textarea>
                                </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-button type="submit" variant="primary" class="formBtn">提交</b-button>
                    </b-row>
                    </div>
                </b-form>
                </b-col>
            </b-row>
        </b-container>

    </b-container>
</template>

<script>
import inquiryFormElement from './inquiryFormElement'
export default {
    components: {inquiryFormElement},
    data(){
        return{
            formRowOne:[{
                id: 'surname',
                label: '姓*',
                type: "text"
            },
            {
                id: 'firstname',
                label: "名*",
                type: "text"
            },
            {
                id: 'email',
                label: "電郵*",
                type:"email"
            }],
            
            formRowTwo:[{
                id: 'phone',
                label: '電話*',
                type: "text"
            },
            {
                id: 'startDate',
                label: "出發日期*",
                type: "text"
            },
            {
                id: 'startCity',
                label: "出發城市*",
                type:"email"
            }],

             formRowThree:[{
                id: 'visitorNo',
                label: '旅客人數*',
                type: "text"
            },
            {
                id: 'sex',
                label: "性別*",
                type: "text"
            },
            {
                id: 'birth',
                label: "出生日期*",
                type:"email"
            }],

        }
    }
}
</script>

<style scoped>

.leftSection h4{
    font-size:32px;
    color:#103a5b;
}

.leftSection p{
    color: #666;
    font-size: 14px;
}

.rightSection h4{
    font-size:36px;
    font-weight:bolder;
    padding-bottom: 10px;
}

.rightSection p{
    font-size: 14px;
    color: #7f7f7f;
    line-height:5px;
    
}

.inquiryform{
 
    background-color:#fff;
    margin:3rem 0;
}

.inquiryform h4{
    color:#103a5b;
    font-size:20px;
    letter-spacing: 2px;
    font-weight: bold;
}

.inquiryform .col-form-label{
    font-size:13px !important;
    color:#3c3c3c !important;
}

.inquiryform .formtitlestyle{
    padding-left:0px; 
    padding-bottom:15px;
    border-bottom: 2px solid #f7f5f1;
    padding:2rem;
}

.inquiryform .formcontent{
    padding:2rem;
}

.inquiryform .formBtn{
    margin-top:2rem;
    margin-left:1rem;
    padding:0.5rem 3rem;
    background-color: #103a5b;
}
</style>
