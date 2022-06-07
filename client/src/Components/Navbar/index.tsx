import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import {Container,Wrapper,Left,Centre,Right,Input,SearchContainer,Logo,MenuItem} from './index.styles'

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
          <Logo>ASPARGUS </Logo>
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
