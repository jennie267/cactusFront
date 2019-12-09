import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    mutations: {
        setUser: function (state, payload) {state.user = payload},
        setUpdatedPeriodId: function (state, payload) {state.updatedPeriodId = payload},
        setUpdatedSchdId: function (state, payload) {state.updatedSchdId = payload},
        setDeletedPeriodId: function (state, payload) {state.deletedPeriodId = payload},
        setDeletedSchdId: function (state, payload) {state.deletedSchdId = payload},
    },
    getters: {
        getUser: function (state) {return state.user},
        getUpdatedPeriodId: function (state) {return state.updatedPeriodId},
        getUpdatedSchdId: function (state) {return state.updatedSchdId},
        getDeletedPeriodId: function (state) {return state.deletedPeriodId},
        getDeletedSchdId: function (state) {return state.deletedSchdId},
    },
    state: {
        user: {},
        parents: [],
        gateway: 'http://zuul.paas-ta.org/',
        updatedPeriodId: 0,
        updatedSchdId: 0,
        deletedPeriodId: 0,
        deletedSchdId: 0,
    },
});