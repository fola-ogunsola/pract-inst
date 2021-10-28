import api from './api'

export function login({ user }) {
  const url = 'admin/auth/login'
  return api.post(url, user);
}
export function forgotPassword({ user}) {
  const url = 'admin/auth/forgot-password'
  return api.post(url, user);
}
export function resetPassword({ data, token}) {
  const url = "admin/auth/reset-password" 
  return api.patch(url, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export function getProfile({token }) {
  const url = 'admin'
  return api.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
export function updatePassword({ passwords}) {
  const url = 'admin/auth/update-password'
  return api.patch(url, passwords);
}
export function updateProfile({ user }) {
  const url = 'admin'
  return api.put(url, user);
}