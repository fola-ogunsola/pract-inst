export default {
  SET_USER: (state, payload) => {
    state.user = payload
  },
  SET_TOKEN: (state, payload) => {
    state.token = payload
  },
  SET_PROFILE: (state, payload) => {
    state.profile = { ...state.profile, ...payload }
  },
  RESET: (state) => {
    state.user = {}
    state.token = null
    state.profile = {}
  }
}