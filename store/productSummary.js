export const state = () => ({
	productList: [],
	popularToursList: [],
	stateProductsList:[],
	arrowDaysDirection: '0.6',
	arrowPriceDirection: '0.6',
	currentProductList: []
  })
  
export const mutations = {
	//homepage special deals product list
	add(state, product) {
	  state.productList.push(product)
	},
	emptyList(state) {
	  state.productList = []
	},

	//homepage popular tour product list
	addPopularTours(state, product) {
		state.popularToursList.push(product)
	},
	emptyPopularToursList(state) {
		state.popularToursList = []
	},

	//statepage or countrypage product list
	addStateProducts(state, product) {
		state.stateProductsList.push(product)
	},
	emptyStateProductsList(state) {
		state.stateProductsList = []
	},

	addCurrentProducts(state, product) {
		state.currentProductList.push(product)
	},
	emptyCurrentProductsList(state) {
		state.currentProductList = []
	},
	sortProductsByDays(state, orderInfo) {
		if(!state.currentProductList.length){
			state.currentProductList = state.stateProductsList;
		}
		if(orderInfo.orderByDaysasc){
			state.currentProductList.sort((a, b) =>Number(a.duration) - Number(b.duration));
			state.arrowDaysDirection = "fas fa-arrow-up"
		}else{
			state.currentProductList.sort((b, a)=> Number(a.duration) - Number(b.duration));
			state.arrowDaysDirection = "fas fa-arrow-down"
		}
	},

	sortedProductListByPrice(state, orderInfo) {
		if(!state.currentProductList.length){
			state.currentProductList = state.stateProductsList;
		}
		if(orderInfo.orderByPriceasc){
			state.currentProductList.sort((a, b)=> a.sales_price - b.sales_price);
			state.arrowPriceDirection = "fas fa-arrow-up"
		}else{
			state.currentProductList.sort((b,a)=>a.sales_price - b.sales_price);
			state.arrowPriceDirection = "fas fa-arrow-down"
		}
	}


  }
  
export const getters = {
	list: state => {
	  return state.productList
	},

	popularList: state =>{
		return state.popularToursList
	},

	stateProductsList: state =>{
		return state.stateProductsList
	},

	stateArrowDaysDirection: state =>{
		return state.arrowDaysDirection
	},

	stateArrowPriceDirection: state =>{
		return state.arrowPriceDirection
	},

	currentProductList: state =>{
		return state.currentProductList
	}

}