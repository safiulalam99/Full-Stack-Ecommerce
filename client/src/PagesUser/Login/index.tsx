import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchingProductsThunk } from "../../redux/cartRedux";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
  const [token, setToken] = useState("");
  const dispatch = useAppDispatch();
  const  cart  = useAppSelector(state => state.cart);
  console.log(cart)

  const handleSucess = async (googleResponse: any) => {
    const tokenId = googleResponse.credential;
    console.log(googleResponse);
    const res = await axios.post(
      "http://localhost:5000/api/v1/login/google",
      {},
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    const token = res.data.token;
    setToken(token);
    console.log(res.data);
  };
  // console.log({token});
  const clientId =
    "562271276406-2fmcdq1ue2kqia033m3pku5tjp62hio4.apps.googleusercontent.com";

  // const clientId =process.env.CLIENT_ID as string
  // const handler = async ()=>{
  //   try{
  //   const res = await axios.get('http://localhost:5000/api/v1/products',{

  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //   })
  //   console.log(res)
  //   } catch(error:any) {
  //     // console.log(error.response.data);
  //   }
  // }

  const onClickHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(fetchingProductsThunk());
  }
  return (
    <div className="App">
      <header className="App-header">
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSucess} />
        </GoogleOAuthProvider>
        <button onClick={onClickHandler}>Test Fetch </button>
      </header>
    </div>
  );
};

export default Login;
