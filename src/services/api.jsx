import axios from "axios"

const baseUrl = "http://localhost:5100/api/v1"
// const baseUrl = "https://api.aieswess.com/api"


const Http = axios.create({
    baseURL : baseUrl , 
})

Http.interceptors.request.use((config)=> {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTBjODE3MWUtODQ4MS00MzI4LWE1NjgtN2FlM2UxMDIyMzk1Iiwicm9sZV9pZCI6IjFlYzAyYjY5LTJmOTItNGY3NC05Y2VmLTlmY2ExOGU5ZjRmMSIsImlhdCI6MTcxNzQ4NTU1NH0.6BEDuJ0ZNJVenfswbnwepNCRJXS1ZMY0gD0MCnE2WxE`;
    if (token) {
        config.headers.Authorization =   `Bearer ${token}`
    }
    return config;
  },(err)=> Promise.reject(err) )

export {
    baseUrl,Http,
}