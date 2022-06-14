import { Add, Remove } from "@material-ui/icons";
import {Container, Wrapper,ImgContainer, Image,InfoContainer,Title, Desc, Price,FilterContainer, Filter, FilterTitle,FilterColor,FilterSize,FilterSizeOption, AddContainer, AmountContainer,Amount,Button,} from './index.style'
import { publicRequest, userRequest } from "../../fetchingRequests";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { fetchingProductsThunk } from "../../redux/singleProductSlice";
import { addProduct } from "../../redux/cartSlice";



const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(1);
  const dispatch = useAppDispatch();
  const fetchedProducts =product
  //  = useAppSelector((state) => state.product.products);
  // console.log("dispatch", fetchedProducts);
const getProduct = async () => {
  try{
const res = await publicRequest.get(`/products/${id}`);
setProduct(res.data);
  }catch(err){console.log(err)}
}

  useEffect(() => {
    // dispatch(fetchingProductsThunk(id));
    getProduct()
  }, [location]);
  
  const handleQuantity = (type: string) => {
    if (type === "desc") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
// console.log(fetchedProducts);
const handleCart = () => {
  //update cart
            {/* @ts-ignore */}
dispatch(addProduct({ quantity, ...product}))
  
}
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          {/* @ts-ignore */}
          <Image src={fetchedProducts.image} />
        </ImgContainer>
        <InfoContainer>
          {/* @ts-ignore */}
          <Title>{fetchedProducts.name}</Title>
          {/* @ts-ignore */}
          <Desc>{fetchedProducts.description}</Desc>
          {/* @ts-ignore */}
          <Price>€ {fetchedProducts.price}</Price>
          <FilterContainer></FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("desc")} />
              {/* @ts-ignore */}
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("asc")} />
            </AmountContainer>
            <Button onClick={handleCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
