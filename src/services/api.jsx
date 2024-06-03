import axios from "axios"

const baseUrl = "http://localhost:5100/api/v1"
// const baseUrl = "https://api.aieswess.com/api"


const Http = axios.create({
    baseURL : baseUrl , 
})

Http.interceptors.request.use((config)=> {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDU3MGFhNWMtNzYyZi00ZTcwLWIxMGMtYTI4Njg4ZWQ1MWYyIiwicm9sZV9pZCI6IjlmMGQ0NTQzLTUzODQtNGE5YS1iNDg0LTIxODYwMDhlYmFlYyIsImlhdCI6MTcxNzIxNDY5MH0.X_gL9JO-c2p01p3BsNuH0ZJmGDMjQijUquD0LAAV894`;
    if (token) {
        config.headers.Authorization =   `Bearer ${token}`
    }
    return config;
  },(err)=> Promise.reject(err) )

export {
    baseUrl,Http,
}