/* eslint-disable no-empty-pattern */
import { 
  login, forgotPassword, resetPassword, getProfile, updateProfile, updatePassword
} from "@/api/auth";
import { errorHandler } from "@/utils/error-handler";

export default {
  login: ({ commit, dispatch }, body) => {
    return login(body)
      .then(async ({ data: { data } }) => {
        const user = await dispatch('fetchProfile', { token: data.token })
        commit("SET_TOKEN", data.token);
        delete data.token;
        commit("SET_USER", data);
        return user;
      }).catch(response => errorHandler(response, true));
  },

  forgotPassword: ({ }, body) => {
    return forgotPassword(body)
      .then(({ data }) => {
        const { message } = data;
        return message;
      }).catch(response => errorHandler(response));
  },

  resetPassword: ({ }, body) => {
    return resetPassword(body)
      .then(({ data }) => {
        const { message } = data;
        return message;
      }).catch(response => errorHandler(response));
  },
  fetchProfile: ({ commit }, body) => {
    return getProfile(body)
      .then(({ data: { data } }) => {
        commit('SET_PROFILE', data)
        return data
      }).catch(response => errorHandler(response));
  },
  updateProfile: ({ commit }, body) => {
    return updateProfile(body)
      .then(({ data }) => {
        commit('SET_PROFILE', body.user)
        const { message } = data;
        return message;
      }).catch(response => errorHandler(response));
  },
  changePassword: ({ }, body) => {
    return updatePassword(body)
      .then(({ data }) => {
        const { message } = data;
        return message;
      }).catch(response => errorHandler(response));
  },
};

