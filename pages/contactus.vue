<template>
    <b-container fluid>
        <b-container>
            <b-row>
                <b-col md="8">
                    <b-form>
                        <b-row>
                            <h4>聯系我們</h4>
                        </b-row>
                        <b-row>
                            <b-col md="6">
                                <b-form-group 
                                    label="姓名*"
                                    lable-for="name"
                                >
                                    <b-form-input
                                        id="name"
                                        required
                                    ></b-form-input>
                                </b-form-group>   
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="6">
                                <b-form-group 
                                    label="電郵*"
                                    lable-for="email"
                                >
                                    <b-form-input
                                        id="email"
                                        required
                                        type="email"
                                    ></b-form-input>
                                </b-form-group>  
                            </b-col> 
                            <b-col md="6">
                                <b-form-group 
                                    label="電話*"
                                    lable-for="phone"
                                >
                                    <b-form-input
                                        id="phone"
                                        required
                                        type="number"
                                    ></b-form-input>
                                </b-form-group>  
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group 
                                    label="請留下你的信息"
                                    lable-for="textarea"
                                >
                                    <b-form-textarea
                                        id="textarea"
                                        v-model="text"
                                        rows="3"       
                                    ></b-form-textarea>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                             <b-button type="submit" variant="primary">提交</b-button>
                        </b-row>
                    </b-form>
                </b-col>
                <b-col md="4">
                    <b-form>
                        <h4>公司信息</h4>
                        <div>
                            <h5>咨詢熱線</h5>
                            <p>02 9586 3881</p>
                        </div>
                        <div>
                            <h5>緊急電話</h5>
                            <p>0410 717 880</p>
                        </div>
                        <div>
                            <h5>電郵地址</h5>
                            <p>info_go4funtravel@hotmail.com</p>
                        </div>
                        <div>
                            <h5>店鋪地址</h5>
                            <p>Shop 5B, 107-109 Forest Rd, Hurstville, 2220</p>
                        </div>
                        <div>
                            <h5>工作時間</h5>
                            <p>週一到週五  9:30am - 5:30pm</p>
                            <p>週六  9:30am - 4:00pm</p>
                            <p>週日 休息</p>
                        </div>
                    </b-form>

                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
