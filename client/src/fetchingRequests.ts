import axios from "axios"
const URL= 'http://localhost:5000/api/v1'
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaWZzdXAxNkBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY1NTExNjM4MCwiZXhwIjoxNjU1MTI3MTgwfQ.94lRJ0ozFoLhZGZCC1w-5-zxK-U5aXGgAooxfNxh_qU"

export const handler = async (token:string)=>{
    try{
    const res = await axios.get('http://localhost:5000/api/v1/products',{
      
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
    console.log(res)
    } catch(error:any) {
      // console.log(error.response.data);
    }
  }
export const publicRequest =axios.create({
  baseURL:URL,
})

export const userRequest =axios.create({
  baseURL:URL,
  headers:{token:`Bearer  ${token}`},
});


