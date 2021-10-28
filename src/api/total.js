import api from './api'

export function getActivityTotal() {
  return api.get("/dashboard");
}