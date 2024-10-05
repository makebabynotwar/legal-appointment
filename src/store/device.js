// store/device.js
export default {
    namespaced: true,
    state: {
      width: 0, // Initialize with a default value
    },
    getters: {
      deviceWidth(state) {
        return state.width; // Return the current width
      },
    },
    mutations: {
      SET_WIDTH(state, width) {
        state.width = width; // Update the width in the state
      },
    },
    actions: {
      setWidth({ commit }, width) {
        commit('SET_WIDTH', width); // Commit the mutation with the provided width
      },
      updateWidth({ dispatch }) {
        const width = window.innerWidth; // Get the current window width
        dispatch('setWidth', width); // Dispatch the action to set width
      },
    },
  };
  