import api from "./api";

export function getAllCustomers({ page, searchKeyword, status }) {
  return api.get(`/customer?limit=10&page=${page}&name=${searchKeyword}&status=${status}`);
}

export function addCustomer(body) {
  return api.post("/customer", body);
}