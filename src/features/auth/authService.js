const API_URL = '/api/users/';

// Register user
// const register = async (userData: RequestInit | undefined) antes de cambiarlo .js
const register = async (userData) => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  console.log(response);

  if(response.token) {
    localStorage.setItem('token', JSON.stringify(response.token))
  }
  return response.token
}

// Login user
const login = async (userData) => {
  const response = await fetch(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService