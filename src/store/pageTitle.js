export default {
  namespaced: true,
  state() {
    return {
      title: 'Legal Appointment'
    }
  },
  actions: {
    setTitle(context, payload){
      const title = context.getters.getTitle;
      const newTitle = `${payload} | ${title}`;
      document.title = newTitle;
    }
  },
  getters: {
    getTitle(state){
      return state.title;
    }
  }
}