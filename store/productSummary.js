export const state = () => ({
	productList: [],
	popularToursList: [],
	stateProductsList:[]
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
  }
  
export const getters = {
	list: state => {
	  return state.productList
	},

	popularList: state =>{
		return state.popularToursList
	}
}