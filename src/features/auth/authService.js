const API_URL = '/api/users/';

// Register user
const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'React POST Request Example' })
};

// const register = async (userData: RequestInit | undefined) antes de cambiarlo .js
const register = async (userData) => {
  const response = await fetch({
    API_URL, 
    userData,
    requestOptions
  });

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
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