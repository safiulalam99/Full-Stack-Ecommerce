import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import {addProduct} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import {
  Summary,
  SummaryItem,
  SummaryTitle,
  SummaryItemText,
  SummaryItemPrice,
  Button,
  Hr,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  Bottom,
  Info,
} from "./index.style";
// @ts-ignore
const getCart = JSON.parse(localStorage.getItem("cart"))  ;

const Cart = () => {
 
  const cart = useAppSelector((state) => state.cart);
  useEffect(()=>{
// @ts-ignore
    const cart = JSON.parse(localStorage.getItem("cart"));
  },[])

      // @ts-ignore
       localStorage.setItem("cart", JSON.stringify(cart))



  // console.log(getCart);
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
        <Link to={`/`} style={{ textDecoration: "none" }}>

        <TopButton>CONTINUE SHOPPING</TopButton>
        </Link>
          <TopTexts>

          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {/* @ts-ignore */}
            {cart?.products.map((product) => (
              <Product>
                <ProductDetail>
                  {/* @ts-ignore  */}
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      {/* @ts-ignore  */}
                      <b>Product:</b> {product.name}
                    </ProductName>
                    <ProductId>
                      {/* @ts-ignore  */}
                      <b>ID:</b> {product._id}
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    {/* @ts-ignore   */}
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                  {/* @ts-ignore   */}
                    €{product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>€ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>€ 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>€ 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>€ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
