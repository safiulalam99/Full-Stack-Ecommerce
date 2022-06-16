import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { ProductType } from "../../redux/cartSlice";
import Avatar from "@mui/material/Avatar";
import app from "../../firebase";
import Alert from '@mui/material/Alert';


import TextField from "@mui/material/TextField";
import {
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
} from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addAdminProduct, getAdminProducts } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function TextFieldHiddenLabel() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [token, setToken] = useState('');

  const dispatch = useAppDispatch();
  useEffect(()=>{
    const getToken = localStorage.getItem("token");
    if(getToken){
        setToken(getToken)
    }
},[])
console.log(token)

  const handleChange = (e: any) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  // @ts-ignore

  console.log(file?.name);
  const handlePost = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    const fileName = new Date().getTime() + file?.name;

    const storage = getStorage(app);
    const StorageRef = ref(storage, fileName);
    // @ts-ignore

    const uploadTask = uploadBytesResumable(StorageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log("error is", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const uploadProduct = { ...inputs, image: downloadURL };
          addAdminProduct(dispatch, uploadProduct,token);
            console.log(uploadProduct);
        });
      }
    );
  };

  return (
    <form>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "60vh" }}
      >
        <Typography variant="h4" gutterBottom component="div">
          Add Product
        </Typography>
        <Avatar
          sx={{ width: 100, height: 100 }}
          //   src={product?.image}
          variant="square"
        ></Avatar>

        <Button variant="contained" component="label">
          Upload File
          {/* @ts-ignore */}
          <input
            type="file"
            id="file"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </Button>
        <TextField
          required
          onChange={handleChange}
          label="Name"
          name="name"
          placeholder="id"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "40ch" }}
        />
        <TextField
          required
          onChange={handleChange}
          label="Price"
          type="number"
          name="price"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "40ch" }}
        />


        <TextField
          required
          onChange={handleChange}
          type="number"
          label="Quantity"
          name="quantity"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "40ch" }}
        />
        <TextField
          onChange={handleChange}
          label="Category"
          name="category"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "40ch" }}
        />
        <TextField
          onChange={handleChange}
          label="Description"
          name="description"
          multiline
          rows={4}
          id="outlined-start-adornment"
          sx={{ m: 1, width: "40ch" }}
        />
        <Button onClick={handlePost} variant="contained">
          Add
        </Button>
      </Grid>
    </form>
  );
}
