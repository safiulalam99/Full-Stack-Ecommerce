import React from "react";
import styled from "styled-components";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Centre = styled.div`
  text-align: center;
  flex: 1;
`;
const Right = styled.div`
display: flex;
align-items: center;
  flex: 1;
  justify-content: flex-end;
`;
const Input = styled.div`
border
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Logo = styled.div`
  font-weight: bold;
  Font-size: 25px;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input />
            <Search style={{color:'gray',fontSize:"16"}}/>
          </SearchContainer>
        </Left>
        <Centre>
          <Logo>SAKIP </Logo>
        </Centre>
        <Right>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge color="secondary" badgeContent={3}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
