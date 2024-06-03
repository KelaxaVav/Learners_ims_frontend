import axios from "axios"

const baseUrl = "http://localhost:5100/api/v1"
// const baseUrl = "https://api.aieswess.com/api"


const Http = axios.create({
    baseURL : baseUrl , 
})

Http.interceptors.request.use((config)=> {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMDk4NDdiOGEtMjNkMi00OTRmLTg0NDUtOGY4YmFkODRiZDkzIiwicm9sZV9pZCI6ImUyNmFlYzhjLWIzMTMtNDZjYy1hMGUzLWUxNTEyMzMzNWQ4ZCIsImlhdCI6MTcxNzQwNTI3MH0.59ikl4dLZjclGdVwNF7JUmINLR07dfQYQitCcg02kJM`;
    if (token) {
        config.headers.Authorization =   `Bearer ${token}`
    }
    return config;
  },(err)=> Promise.reject(err) )

export {
    baseUrl,Http,
}