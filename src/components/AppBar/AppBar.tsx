import { Logo } from "components/Logo";
import { api } from "config/api";
import React from "react";
import {
  AppBarWrapper,
  CategoriesTypography,
  InfoWrapper,
  IconsWrapper,
  Icon,
  Login,
  LoginTypography,
  AppBarComputer,
  AppBarMobile,
  ButtonBarr,
  MenuMobile,
} from "./AppBar.styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/system/Box";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { Menu } from "@mui/material";

export const AppBar: React.FC = () => {
  const [categories, setCategories] = React.useState<string[]>([]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getCategories = async () => {
    const response = await api.get("/products/categories");
    setCategories(response?.data);
  };

  React.useEffect(() => {
    getCategories();
  });

  return (
    <div className="App">
      <AppBarWrapper>
        <AppBarComputer>
          <Logo />
          <InfoWrapper>
            {categories.map((category: any, index) => {
              return (
                <Box key={index}>
                  <CategoriesTypography variant="body1">
                    {category}
                  </CategoriesTypography>
                </Box>
              );
            })}
            <IconsWrapper>
              <Icon>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </Icon>
              <Login>
                <LoginTypography>Login</LoginTypography>
              </Login>
            </IconsWrapper>
          </InfoWrapper>
        </AppBarComputer>
        <AppBarMobile>
          <ButtonBarr onClick={handleClick}>
            <MenuIcon />
          </ButtonBarr>
          <MenuMobile
            id="menu-mobile"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <LoginTypography>Login</LoginTypography>
            </MenuItem>
            <MenuItem>
              <CategoriesTypography>My Cart</CategoriesTypography>
            </MenuItem>
            {categories.map((category: any, index) => {
              return (
                <MenuItem key={index}>
                  <CategoriesTypography variant="body1">
                    {category}
                  </CategoriesTypography>
                </MenuItem>
              );
            })}
            
          </MenuMobile>
        </AppBarMobile>
      </AppBarWrapper>
    </div>
  );
};
