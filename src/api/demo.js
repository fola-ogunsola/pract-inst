import api from "./api";

export function getAllDemoRequests({ page, searchKeyword }) {
  return api.get(`/demo-request?${!searchKeyword ? 'page=' + page +'&' : ''}name=${searchKeyword}`);
}

export function getSingleDemoRequest(id) {
  return api.get(`/demo-request/${id}`);
}

export function updateDemoStatus(id) {
  return api.patch(`/demo-request/${id}`, {status: 'approved'});
}