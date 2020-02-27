import Vue from 'vue'

var PACKAGE = require('../package.json');

export const state = () => {
    const s = {
        showMenu: true,
        categories: {},
        version: PACKAGE.version
    };

    return s;
};

export const mutations = {
    TOGGLE_MENU: (state) => {
        state.showMenu = !state.showMenu;
    },
    SET_CATEGORIES: (state, { categories }) => {        
        categories.forEach((category) => {
            if(category) {
                Vue.set(state.categories, category.id, category)
            }
        })
    },
    SET_CATEGORY: (state, { category }) => {
        if(category) {
            Vue.set(state.categories, category.id, category)
        }
    },
};

export const actions = {
    // @todo Cache categories on local storage.
    FETCH_CATEGORIES ({ commit, state }, {}) {
        // Don't load data multiple times.
        if(state.categories && Object.keys(state.categories).length)
            return;
        
        return this.$axios.$get(`api/categories`).then((categories) => commit("SET_CATEGORIES",{ categories }));
    }
};