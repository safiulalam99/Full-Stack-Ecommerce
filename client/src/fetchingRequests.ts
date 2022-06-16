import axios from "axios"
const URL= 'http://localhost:5000/api/v1'
const getToken = localStorage.getItem("token");

export const handler = async (token:string)=>{
    try{
    const res = await axios.get('http://localhost:5000/api/v1/products',{
      
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
    } catch(error:any) {
      // console.log(error.response.data);
    }
  } 
export const publicRequest =axios.create({
  baseURL:URL,
})

export const userRequest =axios.create({
  baseURL:URL,
  headers:{token:`Bearer  ${getToken}`},
});


