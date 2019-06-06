<template>
     <div v-if="isVisible" @click="backToTop">
        <i class="fas fa-arrow-circle-up goTop" aria-hidden="true"></i>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isVisible: false
        };
    },
    methods:{
        initToTopButton(){
            $(document).bind('scroll', function() {
                var backToTopButton = $('.goTop');
                if ($(document).scrollTop() > 550) {
                backToTopButton.addClass('isVisible');
                this.isVisible = true;
            } else {
                backToTopButton.removeClass('isVisible');
                this.isVisible = false;
                }
            }.bind(this));
        },
   
        backToTop(){
            $('html,body').stop().animate({
                scrollTop: 0
            }, 'slow', 'swing');
        }   
    },

    mounted(){
        this.$nextTick(function(){
        this.initToTopButton();
    });
  }
          
}
</script>

<style scoped>
.goTop {
 
    position: fixed;
    right: 15px;
    bottom: 15px;
    font-size:2em;
    border-radius: 50%;
    color: #337AB2;
    line-height: 2em;
   
    text-align: center;
    display: inline-block;
    transition:0.5s;
    margin:5px;
}

.isVisible {
 
  z-index: 4;
  transition: all .4s ease-in;
}
</style>
