import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import jwt_decode from "jwt-decode";
// import { decodeFunction } from "../../redux/apiCalls";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Grid } from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { RULES } from "../../roles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Can from "../../helper/authCheck";
import Login from "../../PagesUser/Login/";
import { decodeFunction } from "../../redux/apiCalls";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  // @ts-ignore
  const quantity = useSelector((state) => state.cart.quantity);

  const [isLoggedIn, setIsLoggedIn] = React.useState("");
  const [cartQuantity, setCartQuantity] = React.useState("");
  const [searchP, setSearchP] = React.useState("");
  console.log(searchP);

  React.useEffect(() => {
    const getToken = localStorage.getItem("token");
    // @ts-ignore
    const cartQ = JSON.parse(localStorage.getItem("cart"));
    if (getToken) {
      setIsLoggedIn(getToken);
    }
    if (cartQ) {
      setCartQuantity(cartQ.quantity);
    }
    
  }, []);
  console.log(cartQuantity);
  // @ts-ignore
  const decoded = decodeFunction();
  // @ts-ignore

  // const finalcode = decoded?.role.toLowerCase();
  const finalcode = decoded?.role.toLowerCase();
  console.log(finalcode);

  const handleLogout = async () => {
    await localStorage.removeItem("token");
    setIsLoggedIn("");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const Search = styled("div")(({ theme }) => ({
    position: "relative",

    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KIRA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Can
                role={finalcode}
                perform="admin:get"
                yes={() => (
                  <MenuItem>
                    <Button
                      sx={{
                        display: { xs: "block", md: "n  one" },
                      }}
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      admin1 {<KeyboardArrowDownIcon />}
                    </Button>

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <Link
                        to={`/admin/users`}
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem onClick={handleClose}>Users</MenuItem>
                      </Link>
                      <Link
                        to={`/admin/products`}
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem onClick={handleClose}>Products</MenuItem>
                      </Link>
                      <Link
                        to={`/admin/orders`}
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem onClick={handleClose}>Orders</MenuItem>
                      </Link>
                    </Menu>
                  </MenuItem>
                )}
              />
              <MenuItem>
                {isLoggedIn ? (
                  <Button
                    // key={page}
                    onClick={handleLogout}
                    sx={{ color: "black", display: "inline" }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Link to={`/login`} style={{ textDecoration: "none" }}>
                    <Button
                      // key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ color: "black", display: "inline" }}
                    >
                      Login
                    </Button>
                  </Link>
                )}
              </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearchP(e.target.value)}
            />
          </Search>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KIRA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "inline" } }}>
            {/* {pages.map((page) => ( */}

            {/* ))} */}
          </Box>
          <Can
            role={finalcode}
            perform="admin:get"
            yes={() => (
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{
                  backgroundColor: "white",
                  position: "relative",
                  right: "65px",
                }}
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                admin2 {<KeyboardArrowDownIcon />}
              </Button>
            )}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link to={`/admin/users`} style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>Users</MenuItem>
            </Link>
            <Link to={`/admin/products`} style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>Products</MenuItem>
            </Link>
            <Link to={`/admin/users`} style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>Orders</MenuItem>
            </Link>
          </Menu>
          {isLoggedIn ? (
            <Button
              style={{ position: "relative", right: "60px" }}
              // key={page}
              onClick={handleLogout}
              sx={{ color: "white", display: { xs: "none", md: "block" } }}
            >
              Logout
            </Button>
          ) : (
            <Button
              style={{ position: "relative", right: "60px" }}
              // key={page}
              onClick={handleCloseNavMenu}
              sx={{ color: "white", display: { xs: "none", md: "block" } }}
            >
              <Login />
            </Button>
          )}

          <Box
            style={{ position: "relative", right: "30px" }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Link to={`/cart`} style={{ textDecoration: "none" }}>
              <Badge badgeContent={cartQuantity?  cartQuantity : quantity} style={{ color: "red" }}>
                <ShoppingBagIcon sx={{ fontSize: 37 }} />
              </Badge>
            </Link>
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
