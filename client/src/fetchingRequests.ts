import axios from "axios"

const handler = async (token:string)=>{
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
  export default handler