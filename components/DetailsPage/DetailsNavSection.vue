<template>
<div>
    <b-container fluid>
        <b-container :card="card" :details = "details" id="detailsNavSection">
            <b-row>
                <b-col sm="6">
                    <b-nav>
                        <b-nav-item to="/" class="navClickStyle">首頁 ></b-nav-item>
                        <b-nav-item :to="'/'+card.countryname +'/'" class="navClickStyle">澳洲 ></b-nav-item>
                        <b-nav-item active disabled>{{card.title}}</b-nav-item>
                    </b-nav>
                    <h4>{{card.title}}</h4>
                    <p style="padding-top:15px;">{{details.productDesc}} | 產品編號 : {{details.productID}}</p>
                </b-col>
                <b-col sm="2">
                </b-col>
                <b-col sm="4">
                    <div id="rightSection">
                        <h4>${{card.price}}<span style="font-size:14px; font-family:'FangPing'">/人起</span></h4>
                        <p>{{details.productSpecialPrice}}</p>
                        <p>{{details.productRebate}}</p>
                        <b-btn block>聯系我們</b-btn>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
    <b-container fluid style="border:1px solid #EFEFEF; margin-top:30px;">
        <b-container>
            <b-row>
                <b-col sm="6">
                <b-nav class="tabnav justify-content-between ">
                        <b-nav-item active class="productItem" style="">產品介紹</b-nav-item>
                        <b-nav-item>行程安排</b-nav-item>
                        <b-nav-item>費用說明</b-nav-item>
                        <b-nav-item>條款規則</b-nav-item>
                        <b-nav-item>客戶評論</b-nav-item>
                    </b-nav>
                </b-col>
                <b-col sm="6">
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</div>
</template>

<script>
export default {
    props:['card', 'details'],
    created(){}
        
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
  
        margin-top:10px;
    }
   
    .sectionNav .nav-link{
        margin-top:3rem;
       
    }

    .productItem{
        border-left:1px solid #EFEFEF;
        padding-left:0.5rem
    }
    .productItem .active{
        color:#103a5b;
     
    }
    #rightSection p{
        font-size:14px;
        color:#7f7f7f;
        line-height: 0.5;
        
    }

    #rightSection h4{
        padding-bottom:1rem;
        color:#103a5b;
        letter-spacing: 1px;
        font-size:36px;
        font-weight: bolder;
    }

    #rightSection button{
        background-color:#103a5b;
        margin-top:1.5rem;
    }
    
    .tabnav .nav-item{
        padding-top:1rem;
        padding-bottom:1rem;
        border-right:1px solid #EFEFEF;
        padding-right:1.8rem;
    }
</style>
