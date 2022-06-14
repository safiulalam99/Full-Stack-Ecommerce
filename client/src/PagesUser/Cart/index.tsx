import { Add, Remove } from "@material-ui/icons";
import { useAppSelector } from "../../redux/hooks";
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
  TopText,
  TopButton,
  TopTexts,
  Bottom,
  Info,
} from "./index.style";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  console.log(cart);
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
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
                    <ProductAmount>{cart.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  {/* @ts-ignore   */}
                  <ProductPrice>€{product.price * product.quantity}</ProductPrice>
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
              <SummaryItemPrice>€ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>€ -5.90</SummaryItemPrice>
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
