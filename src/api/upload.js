import api from './api'

export function uploadFile(form) {
  return api.post('upload', form, {
    "Content-Type": "multipart/form-data"
  });
}