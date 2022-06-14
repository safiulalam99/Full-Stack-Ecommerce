import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { login } from "../../redux/apiCalls";
import { loginStart, loginSuccess } from "../../redux/userSlice";

const Login = () => {
  const [token, setToken] = useState("");
  const dispatch = useAppDispatch();

  const handleSucess = async (googleResponse: any) => {
    const tokenId = googleResponse.credential;
    console.log(googleResponse);
    dispatch(loginStart());
    const res = await axios.post(
      "http://localhost:5000/api/v1/login/google",
      {},
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    dispatch(loginSuccess(res));
  };

  const handleSuccess = (e: any) => {
    const token = e.credential;
    console.log(token);
    login(dispatch, token);
  };

  const clientId =
    "562271276406-2fmcdq1ue2kqia033m3pku5tjp62hio4.apps.googleusercontent.com";

  return (
    <div className="App">
      <header className="App-header">
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSuccess} />
        </GoogleOAuthProvider>
      </header>
    </div>
  );
};

export default Login;
