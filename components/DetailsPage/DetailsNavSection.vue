<template>
<div>
    <b-container fluid>
        <b-container  :navBarData = "navBarData" id="detailsNavSection">
            <b-row>
                <b-col sm="6">
                    <b-nav>
                        <b-nav-item to="/" class="navClickStyle">首頁 ></b-nav-item>
                        <b-nav-item :to="'/'+navBarData.state.slug" class="navClickStyle">{{navBarData.state.state}} ></b-nav-item>
                        <b-nav-item active disabled>{{navBarData.product_name}}</b-nav-item>
                    </b-nav>
                    <h4>{{navBarData.product_name}}</h4>
                    <p style="padding-top:15px;">{{navBarData.product_description}} | 產品編號 : {{navBarData.product_code}}</p>
                </b-col>
                <b-col sm="2">
                </b-col>
                <b-col sm="4">
                    <div id="rightSection">
                        <h4>${{numberWithCommas(navBarData.sales_price)}}<span style="font-size:14px; font-family:'FangPing'">/人起</span></h4>
                        <!-- <p>優惠：原價{{navBarData.price}}</p> -->
                        <p>{{navBarData.price_description}}</p>
                        <b-btn class="contactBtn" block :to="'/'+ navBarData.state.slug +'/' + navBarData.product_code+'/inquiry'">聯系我們</b-btn>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
    <b-container fluid style="border:1px solid #EFEFEF; margin-top:30px;">
        <b-container>
            <b-row>
                <b-col sm="12" md="12" lg="8" xl="6" style="border-left: 1px solid #EFEFEF;" >
                <b-nav class="tabnav justify-content-between">
                        <b-nav-item active>產品介紹</b-nav-item>
                        <b-nav-item href="#productDaysPlans">行程安排</b-nav-item>
                        <b-nav-item href="#productfeedesc">費用說明</b-nav-item>
                        <b-nav-item href="#productNeedsToKnow">條款規則</b-nav-item>
                        <b-nav-item href="#youmightinterested">相關推薦</b-nav-item>
                    </b-nav>
                </b-col>
                <b-col sm="0" md="6">
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</div>
</template>

<script>
export default {
    props:['navBarData'],
    methods:{
        numberWithCommas(x) {
            x=Math.floor(x);
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }, 
    },
        
}
</script>

<style scoped>
    #detailsNavSection{
      margin-top:4rem;
    }
    .navClickStyle{
        font-family: 'FangPingMedium';
    }
    .nav-link{
        color: #7f7f7f;
        font-size:14px;
        padding: 0.5rem 0;
    
    }
    .disabled{
        color:rgba(0, 0, 0, 0.5);
    }

    #detailsNavSection h4{
        margin-top:2.5rem;
        font-size:32px;
        line-height: 45px;
        color:#103a5b;

    }

    #detailsNavSection p{
        color:#666666;
        font-size:14px;
    }
   
    .sectionNav .nav-link{
        margin-top:3rem;
       
    }
    .nav-link.active{
        color:#103a5b;
    }
    #rightSection p{
        font-size:14px;
        color:#7f7f7f;  
     
    }

    #rightSection h4{
        color:#103a5b;
        letter-spacing: 1px;
        font-size:36px;
        font-weight: bolder;
    }

    #rightSection .contactBtn{
        background-color:#103a5b;
        margin-top:2.5rem;
    }
    
    .tabnav .nav-item{
        padding-top:1rem;
        padding-bottom:1rem;
        border-right:1px solid #EFEFEF;
        padding-right:1.8rem;
    }

    @media (max-width: 576px){
        .tabnav .nav-item{
            padding-right:1.3rem;
        }
    }
 
   
</style>
