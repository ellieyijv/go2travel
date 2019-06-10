<template>
    <b-container fluid>
        <b-container :card="card" :details = "details" id="detailsNavSection">
            <b-row>
                <b-col sm="6">
                    <b-nav>
                        <b-nav-item >Homepage ></b-nav-item>
                        <b-nav-item>Section ></b-nav-item>
                        <b-nav-item active disabled>{{card.title}}</b-nav-item>
                    </b-nav>
                    <h4>{{card.title}}</h4>
                    <p>{{details.productDesc}} | 產品編號 : {{details.productID}}</p>
                </b-col>
                <b-col sm="2">
                </b-col>
                <b-col sm="4">
                    <div id="rightSection">
                        <h4>{{card.price}}<span>/人起</span></h4>
                        <p>{{details.productSpecialPrice}}</p>
                        <p>{{details.productRebate}}</p>
                        <b-btn block>聯系我們</b-btn>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="6">
                <b-nav class="sectionNav justify-content-between">
                        <b-nav-item active>Product Intro</b-nav-item>
                        <b-nav-item>Details</b-nav-item>
                        <b-nav-item>Price</b-nav-item>
                        <b-nav-item>Price</b-nav-item>
                        <b-nav-item>Price</b-nav-item>
                    </b-nav>
                </b-col>
            </b-row>
        </b-container>
    </b-container>

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

    .nav-link{
        color:#3c3c3c;
        font-size:14px;
        padding: 0.5rem 0;
    }
    .disabled{
        color:rgba(0, 0, 0, 0.5);
    }

    #detailsNavSection h4{
        margin-top:2.5rem;
    }

    .sectionNav .nav-link{
        margin-top:3rem;
    }

    #rightSection p{
        font-size:14px;
        color:rgba(0, 0, 0, 0.5);
        line-height: 0.5;
        
    }

    #rightSection h4{
        padding-bottom:1rem;
    }

    #rightSection button{
        background-color:#103a5b;
        margin-top:1.5rem;
    }
  
</style>
