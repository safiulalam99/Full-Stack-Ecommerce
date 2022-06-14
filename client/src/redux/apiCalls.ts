import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";


export const login = async (dispatch: any, googleToken: any) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
        "http://localhost:5000/api/v1/login/google",
        {},
        {
          headers: {
            Authorization: `Bearer ${googleToken}`,
          },
        }
    );
    console.log(googleToken)
    dispatch(loginSuccess(res));
    console.log(res)
  } catch (err) {
    dispatch(loginFailure());
    console.log(err)
  }
};
