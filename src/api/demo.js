import api from "./api";

export function getAllDemoRequests({ page, searchKeyword, status }) {
  return api.get(`/demo-request?page=${page}&fullName=${searchKeyword}&status=${status}`);
}

export function getSingleDemoRequest(id) {
  return api.get(`/demo-request/${id}`);
}

export function updateDemoStatus(id) {
  return api.patch(`/demo-request/${id}`, {status: 'approved'});
}

export function createDemoRequest(body) {
  return api.post("/demo-request", body)
}