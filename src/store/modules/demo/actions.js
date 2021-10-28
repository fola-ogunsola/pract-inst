/* eslint-disable no-unused-vars */
import {
  getAllDemoRequests,
  getSingleDemoRequest,
  updateDemoStatus
} from "@/api/demo";
import { errorHandler } from "@/utils/error-handler";
export default {
  fetchAllDemoRequests: ({ commit }, body) => {
    return getAllDemoRequests(body)
      .then(({ data: { data } }) => {
        commit("SET_ALL_DEMO_REQUESTS", data.demoRequest);
        delete data.demoRequest;
        return data;
      })
      .catch(response => errorHandler(response));
  },
  fetchSingleDemo: ({ commit }, id) => {
    return getSingleDemoRequest( id)
      .then(({ data }) => {
        const { message } = data;
        return message;
      })
      .catch(response => errorHandler(response));
  },
  approveDemo: ({ commit }, id) => {
    return updateDemoStatus(id)
      .then(({ data: { data } }) => {
        return data;
      })
      .catch(response => errorHandler(response));
  }
};
