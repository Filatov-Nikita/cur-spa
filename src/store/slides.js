import {getSlides, getActiveMeeting} from "src/api/slides";

const state={
    dataSlides: null
}
const mutations={
    setData(state, obj){
        state.dataSlides = obj.data;
    }
}
const getters={
    slideDataGetter(state){
        if(state.dataSlides === null){
            return null
        }
        return state.dataSlides
    }
}

const actions={
    async slideList({commit}){
        const res = await getSlides();

        commit('setData', res);
    },
    async activeMetting({commit}){
        const res = await getActiveMeeting();
        commit('setData', res);
        return res;
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}