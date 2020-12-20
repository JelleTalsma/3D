import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    state: {
        products: [],
        selectedProduct: {}
    },
    actions: {
        loadProducts({commit}) {
            axios
                .get('http://vuex-store-backend.test/api/products')
                .then(response => {
                    commit('SET_PRODUCTS', response);
                });
        },
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products.data.products;
        },
    }
});