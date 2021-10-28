import api from "./api";

export function getAllCustomers({ page, searchKeyword }) {
  return api.get(`/customer?limit=10&page=${page}&name=${searchKeyword}`);
}

export function addCustomer(body) {
  return api.post("/customer", body);
}