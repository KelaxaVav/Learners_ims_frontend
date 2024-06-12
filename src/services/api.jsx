import axios from "axios"

const baseUrl = "http://localhost:5100/api/v1"
// const baseUrl = "https://api.aieswess.com/api"


const Http = axios.create({
    baseURL : baseUrl , 
})

Http.interceptors.request.use((config)=> {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNmJiZjkwNDYtYjBjZS00OWFlLWI4ZDUtMjc0MzEzODUxODY4Iiwicm9sZV9pZCI6IjM4NjA1NDNlLTg1OTctNDEzNC1hODYwLTZkMmIwMjg0M2IzMCIsImlhdCI6MTcxODEwNDczMX0.LVRVpy2UePnkxqOHPw_cgIMH3m3FARlrfYJuO8rL_7E`;
    if (token) {
        config.headers.Authorization =   `Bearer ${token}`
    }
    return config;
  },(err)=> Promise.reject(err) )

export {
    baseUrl,Http,
}