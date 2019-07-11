export const state = () => ({
	productList: []
  })
  
export const mutations = {
	add(state, product) {
	  state.productList.push(product)
	},
	emptyList(state) {
	  state.productList = []
	}
  }
  
export const getters = {
	list: state => {
	  return state.productList
	}
}