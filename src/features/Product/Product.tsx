import { Banner, BannerInfo, PageResponsiveFlex } from "components";
import { AppBar } from "components/AppBar";
import { CartContext } from "contexts";
import { PagesRoutes } from "features/constants";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductInfo } from "_utils/interfaces";
import {
  Container,
  ProductButton,
  ProductDescription,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./Product.styles";

export const Product: React.FC = () => {
  const [product, setProduct] = React.useState<ProductInfo | undefined>(
    {} as ProductInfo
  );
  const { getProduct, addToCart } = React.useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const productID = Number(location.pathname.split("/").reverse()[0]);
    const prod = getProduct(productID);
    if (!prod) navigate(PagesRoutes.home);
    setProduct(prod);
  }, [getProduct, location, navigate]);

  return (
    <React.Fragment>
      <AppBar />
      <BannerInfo />
      <PageResponsiveFlex>
        <ProductImage src={product?.image} alt={product?.title} />
        <Container>
          <ProductName>{product?.title}</ProductName>
          <ProductDescription>{product?.description}</ProductDescription>
          <ProductPrice>{product?.price}</ProductPrice>
          <ProductButton>Add to cart</ProductButton>
        </Container>
      </PageResponsiveFlex>
      <Banner />
    </React.Fragment>
  );
};
