import axios from "axios"

const baseUrl = "http://localhost:5100/api/v1"
// const baseUrl = "https://api.aieswess.com/api"

const Http = axios.create({
    baseURL : baseUrl , 
})

Http.interceptors.request.use((config)=> {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGJhNzgwNzQtNjA0Mi00ZGFkLTljOTAtOGE1ZjQ0MDkxMDhlIiwicm9sZV9pZCI6IjU4YjUxZGFhLTUyZTgtNDMzNy05NWJlLWJmYjVhMjY5YmM0NyIsImlhdCI6MTcxNjk1OTI3NH0.4a2tkzwT9YHVRwvlQJG6tDI-f6qXEUOCTTQffsnj0dY`;
    if (token) {
        config.headers.Authorization =   `Bearer ${token}`
    }
    return config;
  },(err)=> Promise.reject(err) )





 const getRoles = async () =>{ 
    try {
   const response = await Http.get('/role')
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}




export {
    baseUrl,getRoles,Http,
}