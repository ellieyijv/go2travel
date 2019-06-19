<template>
     <b-container fluid>
        <b-container>
            <b-row>
                <b-col sm="6">
                    <h4>澳大利亚墨尔本+凯恩斯+悉尼自由行 经典东海岸每城</h4>
                    <p style="padding-top:15px;">獨家提供史蒂芬港中文精品小團 | 產品編號 : 25407</p>
                </b-col>
                <b-col sm="2">
                </b-col>
                <b-col sm="4">
                    <div id="rightSection">
                        <h4>$3,447<span style="font-size:14px; font-family:'FangPing'">/人起</span></h4>
                        <p>優惠：原價$1,899/成人 $1,299/兒童</p>
                        <p>出行後點評可返 $20</p>    
                    </div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12">
                    <h4>咨詢報價</h4>
                </b-col>       
                <b-col>
                <b-form>
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
                                        v-model="text"
                                        rows="4"       
                                        ></b-form-textarea>
                                </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-button type="submit" variant="primary">提交</b-button>
                    </b-row>
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

<style>

</style>
