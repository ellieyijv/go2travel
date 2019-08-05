<template>
    <b-container id="productHighlight">
        <b-row>
            <b-col sm="12">
                <h4>線路特色</h4>
            </b-col>
        </b-row>
        <b-row style="border-top: 2px solid #F7F5F1" >
            <b-col v-for="(img, index) in spotsData" :key="index" sm="6" lg="4" xl="3" class="hilightlistStyle">
                <img :src="img.image" />
                <p>{{img.name}}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
   props:[ 'spotsData'],
}
</script>

<style scoped>
    #productHighlight{
        background-color: white;
        padding: 1.5rem;
        margin: 4rem auto;
    }

#productHighlight .hilightlistStyle {
	text-align: center;
}

.card-carousel-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 20px auto;

}

.card-carousel {
	display: flex;
	justify-content: center;
	width: 1080px;
  
}

@media (min-width:992px) and (max-width: 1200px){
    .card-carousel{
        width:805px;
        margin:10px;
    }
}

@media (min-width:768px) and (max-width: 992px){
    .card-carousel{
        width:530px;
        margin:10px;
    }
}

@media (max-width:768px){
    .card-carousel{
        width:255px;
        margin:20px;
    }
}
.card-carousel--overflow-container {
	overflow: hidden;
}
.card-carousel--nav__left,
.card-carousel--nav__right {
	display: inline-block;
	width: 15px;
	height: 15px;
	box-sizing: border-box;
	border-top: 3px solid #103a5b;
	border-right: 3px solid #103a5b;
	cursor: pointer;

	transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
	opacity: 0.2;
	border-color: black;
}
.card-carousel--nav__left {
	transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
	transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
	transform: rotate(45deg);
}
.card-carousel--nav__right:active {
	transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
	display: flex;
	transition: transform 150ms ease-out;
	transform: translatex(0px);
}
.card-carousel-cards .card-carousel--card {
	margin: 0 10px;
	cursor: pointer;
	z-index: 3;
	margin-bottom: 2px;
}
.card-carousel-cards .card-carousel--card:first-child {
	margin-left: 0;
}
.card-carousel-cards .card-carousel--card:last-child {
	margin-right: 0;
}
.card-carousel-cards .card-carousel--card img {
	vertical-align: bottom;

	transition: opacity 150ms linear;
	user-select: none;
}
.card-carousel-cards .card-carousel--card img:hover {
	opacity: 0.5;
}
.card-carousel-cards .card-carousel--card--footer {
	border-top: 0;
	padding: 7px 15px;
}
.card-carousel-cards .card-carousel--card--footer p {
	padding: 3px 0;
	margin: 0;
	margin-bottom: 2px;
	font-size: 19px;
	font-weight: 500;
	color: #2c3e50;
	user-select: none;
}
</style>
