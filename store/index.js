import axios from 'axios'
const apiUrl = process.env.API_URL || 'http://localhost:80'

export const state = () => ({
    statesList: {},
    basicInfos: {}
})
  
export const getters = {
    
    statesList(state) {
      return state.statesList;
    },

    basicInfos(state){
        return state.basicInfos;
    }
  }

export const mutations = {
    ADD_STATES (state, statesList){
        state.statesList = statesList
    },

    EMPTY_STATES(state){
        state.statesList = []
    },

    ADD_BASIC_INFO(state, basicInfos){
        state.basicInfos = basicInfos
    },

    EMPTY_BASIC_INFO(state){
        state.basicInfos = []
    },
 
}

  
export const actions = {
    async nuxtServerInit ({ commit }) {

    try {
        let stateResponse = await  axios.get(`${apiUrl}/api/states`);
        let basicResponse = await axios.get(`${apiUrl}/api/basicInfos`);

         stateResponse.data.map((item)=>{
            item.thumbnail = JSON.parse(item.thumbnail)[0];
            item.thumbnail= `${apiUrl}/storage/${item.thumbnail}`
            item.banner_image = JSON.parse(item.banner_image)[0];
            item.banner_image= `${apiUrl}/storage/${item.banner_image}`
        })
    		
        commit('ADD_STATES', stateResponse.data);
                commit('ADD_BASIC_INFO', basicResponse.data);			
        } catch (error) {
        console.log(error);
        }
    }

}