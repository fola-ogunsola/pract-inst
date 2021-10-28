import store from '../store'
export function errorHandler({ response: { data, status } }) {
  let { message } = data;
  if(status === 401) {
    store.commit('auth/RESET')
    message = 'Session expired, Please log in again!'
    window.location.replace('/login')
  }
  return {
    error: message
  }
}