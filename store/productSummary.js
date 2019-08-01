export const state = () => ({
	productList: [],
	popularToursList: [],
	stateProductsList:[],
	arrowDaysDirection: '0.6',
	arrowPriceDirection: '0.6'
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

	sortStateProductsByDsays(state, orderInfo) {
		if(orderInfo.orderByDaysasc){
			state.stateProductsList.sort((a, b) =>Number(a.duration) - Number(b.duration));
			state.arrowDaysDirection = "fas fa-arrow-up"
		}else{
			state.stateProductsList.sort((b, a)=> Number(a.duration) - Number(b.duration));
			state.arrowDaysDirection = "fas fa-arrow-down"
		}
	},

	sortedProductListByPrice(state, orderInfo) {
		if(orderInfo.orderByPriceasc){
			state.stateProductsList.sort((a, b)=> a.sales_price - b.sales_price);
			state.arrowPriceDirection = "fas fa-arrow-up"
		}else{
			state.stateProductsList.sort((b,a)=>a.sales_price - b.sales_price);
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
	}

}