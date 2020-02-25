import axios from 'axios'

const httpApi = axios.create({ baseURL: 'http://localhost:3001', withCredentials: true })

httpApi.interceptors.response.use(
    response => response.data,
    error => {
      if (error.response && error.response.status === 401) {
        localStorage.clear()
        window.location.assign('/login')
      }
  
      return Promise.reject(error)
    }
)

//API
const login = ({ email, password }) => httpApi.post('/login', { email, password })

const logout = () => httpApi.post('/logout')

const register = (data) => httpApi.post('/user', data)

const users = (data) => console.info('data => ', data) || httpApi.post('/users', data)

const user = (id) => console.info('data => ', id) || httpApi.get(`/user/${id}`)

const createTeam = (data) => httpApi.post('/team', data)

const editTeam = (id) => httpApi.patch(`/team/${id}`)

const tournament = (id) => httpApi.get(`/tournament/${id}`)


//R6 Info api
const username = ( platform, username ) => httpApi.get(`/user/api/${platform}/${username}`)


export default { login, logout, register, username, users, createTeam, editTeam, user, tournament }