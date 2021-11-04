import store from '../store'
export function errorHandler({ response: { data, status } }, login) {
  let { message } = data;
  if(!login && status === 401) {
    store.commit('auth/RESET')
    message = 'Session expired, Please log in again!'
    window.location.replace('/login')
  }
  return {
    error: message
  }
}