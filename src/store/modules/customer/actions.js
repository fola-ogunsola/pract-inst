/* eslint-disable no-unused-vars */
import {
  getAllCustomers,
  addCustomer
} from "@/api/customer";
import { errorHandler } from "@/utils/error-handler";
export default {
  fetchAllCustomers: ({ commit }, body) => {
    return getAllCustomers(body)
      .then(({ data: { data } }) => {
        commit("SET_ALL_CUSTOMERS", data.customers);
        delete data.customers;
        return data;
      })
      .catch(response => errorHandler(response));
  },
  addCustomer: ({ dispatch }, body) => {
    return addCustomer(body)
      .then(({ data }) => {
        const { message } = data;
        dispatch('fetchAllCustomers', { page: 1, searchKeyword: ''})
        return message;
      })
      .catch(response => errorHandler(response));
  },
};
