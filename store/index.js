export const state = () => ({
    PRODUCTS: [],
    LAST_PRODUCTS: {},
    LIMIT: 25,
    PAGE: 1,
    NEXT_PAGE: true,
});

export const getters = {

    PRODUCTS: state => {
        return state.PRODUCTS;
    },
    LAST_PRODUCTS: state => {
        return state.LAST_PRODUCTS;
    },
    LIMIT: state => {
        return state.LIMIT;
    },
    PAGE: state => {
        return state.PAGE;
    },

    NEXT_PAGE: state => {
        return state.NEXT_PAGE;
    },

};

export const mutations = {

    ADD_PRODUCTS(state, lastProducts) {
        if (lastProducts && lastProducts.length > 0) {
            lastProducts.forEach(item => {
                state.PRODUCTS.push(item);
            })
        } else {
            state.NEXT_PAGE = false;
            console.log('no more products');
        }
    },

    DEL_PRODUCT(state, element) {
        if (element) {
            let deletedIndex = state.PRODUCTS.findIndex((item) => Number(item.id) === Number(element));
            if (typeof deletedIndex === 'number') {
                state.PRODUCTS.splice(deletedIndex, 1);
            }
        }
    },

    EDIT_PRODUCT(state, data) {
        if (data && data.id && Object.entries(data).length > 0) {
            state.PRODUCTS.map((item) => {
                if (item.id === data.id) {
                    item.name = data.name;
                    item.description = data.description;
                }
            });
        }
    },

    SET_PRODUCTS(state, products) {
        state.PRODUCTS = products;
    },

    SET_LAST_PRODUCTS(state, lastProducts) {
        state.LAST_PRODUCTS = lastProducts;
    },

    SET_LIMIT(state, limit) {
        state.LIMIT = limit;
    },

    SET_PAGE(state, page) {
        state.PAGE = page;
    },

};

export const actions = {

    async lastProductRequest({state, commit}) {
        let url = `https://api.punkapi.com/v2/beers?page=` + state.PAGE + '&limit=' + state.LIMIT;
        await this.$axios.$get(url)
            .then((response) => {
                commit('SET_LAST_PRODUCTS', response);
                commit('ADD_PRODUCTS', state.LAST_PRODUCTS);
            })
            .catch(err => console.log('lastProduct' + err));
    },

    async nextPage({state, commit}) {
        let nextPage = state.PAGE + 1;
        commit('SET_PAGE', nextPage);
    },

};

