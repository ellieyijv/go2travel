import axios from 'axios'
const apiUrl = process.env.API_URL || 'http://localhost:80'

export const state = () => ({
    statesList: {}
})
  
export const getters = {
    
    statesList(state) {
      return state.statesList;
    },
  }

export const mutations = {
    ADD_STATES (state, statesList){
        state.statesList = statesList
    }
 
}

export const actions = {
    async nuxtServerInit ({ commit }) {
        axios.get(`${apiUrl}/api/states`)
        .then(res=>{ 
            commit('ADD_STATES', res.data)
           
        })
    }
}