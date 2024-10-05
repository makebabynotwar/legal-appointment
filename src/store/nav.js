// store/device.js
export default {
    namespaced: true,
    state: {
        is_open: false, // Initialize with a default value
    },
    getters: {
        is_nav_open(state) {
            return state.is_open; // Return the current state of the navigation
        },
    },
    mutations: {
        SET_WIDTH(state, width) {
            state.width = width; // Update the width in the state
        },
        TOGGLE_NAV(state) {
            state.is_open = !state.is_open; // Toggle the open state of navigation
        },
        SET_NAV(state, isOpen) {
            state.is_open = isOpen; // Set the navigation open state
        },
    },
    actions: {
        setWidth({ commit }, width) {
            commit('SET_WIDTH', width); // Commit the mutation with the provided width
        },
        toggleNav({ commit }) {
            commit('TOGGLE_NAV'); // Commit the mutation to toggle navigation
        },
        setNav({ commit }, isOpen) {
            commit('SET_NAV', isOpen); // Commit the mutation to set navigation state
        },
    },
};
  