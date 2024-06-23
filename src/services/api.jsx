import axios from "axios"

const baseUrl = "http://localhost:5100/api/v1"
// const baseUrl = "https://api.aieswess.com/api"


const Http = axios.create({
    baseURL : baseUrl , 
})

Http.interceptors.request.use((config)=> {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2ZjODBkNGQtMTY3ZC00MjliLWE3YTktNDQ2OGQxMTJlZjg1Iiwicm9sZV9pZCI6ImI3M2MwYjcwLTU4ZTQtNGVjZS1iYTUyLTUzOTE2NDY3YjRhZSIsImlhdCI6MTcxODc3MzMxOH0.ih7OCoGNP-KWvbh-On2itfbQHKgnubqBcf3JKdVAjFs`;
    if (token) {
        config.headers.Authorization =   `Bearer ${token}`
    }
    return config;
  },(err)=> Promise.reject(err) )

export {
    baseUrl,Http,
}