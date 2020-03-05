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

const deleteTeam = (id) => httpApi.delete(`/team/${id}`)

const teams = (id) => httpApi.get(`/teams/tournament/${id}`)

const team = (id) => httpApi.get(`/team/${id}`)

const tournament = (id) => httpApi.get(`/tournament/${id}`)

const groups = (id) => httpApi.get(`/groups/${id}`)

const bracket = (id) => httpApi.get(`/bracket/${id}`)

const match = (id) => httpApi.get(`/match/${id}`)

const matches = (id) => httpApi.get(`/matches/tournament/${id}`)


//R6 Info api
const username = ( platform, username ) => httpApi.get(`/user/api/${platform}/${username}`)
const userStats = (id) => httpApi.get(`/user/api/player/${id}`)


export default { login, logout, register, username, users, createTeam, editTeam, deleteTeam, user, tournament, teams, team, groups, bracket, match, matches, userStats }