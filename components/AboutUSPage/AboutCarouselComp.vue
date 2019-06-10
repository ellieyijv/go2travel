<template>
  <div class="ufb-banner-container" data-purpose="ufb-banner">
        <div class="content-container">
        <!-- <div class="title">
        Udemy for Business
        </div>
        <div class="text">
        <p>
        Did you know your company can get you unlimited access to Udemy's top 3,000+ business &amp; technical courses?
        </p>
        <p>
        Employees at Apple, eBay, Princeton University, Eventbrite, Booking.com, Lyft, and Volkswagen use Udemy at work.
        </p>
        </div>
        <a href="https://business.udemy.com/?ref=logout" data-allow-referrer="" class="btn btn-primary learn-more-btn">Learn More</a> -->
        </div>
</div>
</template>

<script>
export default {
  methods: {
    goToAboutUs() {
      this.$router.push("/aboutus");
    }
  }
};
</script>

<style scoped>

@media (min-width: 576px){
.ufb-banner-container {
    background-image: url('/images/carousel.png');
    background-position: right -100px center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    display: block;
    padding: 30px;
}
}
.ufb-banner-container {
    display: flex;
    flex-direction: column;
    /* background-color: #29303b; */
    margin-bottom: 40px;
    min-height: 400px;
    padding: 20px;
    width: 100%;
   
}
</style>
