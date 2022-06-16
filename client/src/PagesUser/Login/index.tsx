import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { login } from "../../redux/apiCalls";
import { loginStart, loginSuccess } from "../../redux/userSlice";
import { Button } from "@material-ui/core";

const Login = () => {
  const dispatch = useAppDispatch();
  const { isFetching, error } = useAppSelector((state) => state.user);

  const handleSuccess = async(e: any) => {
    const token = e.credential;
    console.log(token);
    await login(dispatch, token);
    // eslint-disable-next-line no-restricted-globals
    await location.reload();
  };

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Button disabled={isFetching}>
        <GoogleLogin onSuccess={handleSuccess} />
      </Button>
      {error && (
        <Alert variant="outlined" severity="error">
          This is an error alert — check it out!
        </Alert>
      )}
    </GoogleOAuthProvider>
  );
};

export default Login;
