export default {
    namespaced: true,
    state: {
      is_nav_open: false, // Initialize with a default value
    },
    getters: {
      is_nav_open(state) {
        return state.is_nav_open; // Return the current state of the navigation
      },
    },
    mutations: {
      TOGGLE_NAV(state) {
        state.is_nav_open = !state.is_nav_open; // Toggle the open state of navigation
      },
      SET_NAV(state, isOpen) {
        state.is_nav_open = isOpen; // Set the navigation open state
      },
    },
    actions: {
      toggleNav({ commit }) {
        commit('TOGGLE_NAV'); // Commit the mutation to toggle navigation
      },
      setNav({ commit }, isOpen) {
        commit('SET_NAV', isOpen); // Commit the mutation to set navigation state
      },
    },
  };
  