import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardWrapper,
  Image,
  ProductDescription,
  ProductPrice,
  ProductTitle,
  Button,
} from "./GridProduct.styles";
// import { CartContext } from "contexts";
import { TextWithLimit, ValueDollar } from "components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "contexts";

interface GridProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const GridProduct: React.FC<GridProductProps> = ({
  id,
  title,
  description,
  price,
  image,
}) => {
  const link = useNavigate();
  const { addToCart } = React.useContext(CartContext);
  
  const onAddToCartButtonClick = () => {
    addToCart({
      id,
      title,
      price,
      image,
    });
    console.log("Added to cart");
  };

  const onCardClick = () => link(`/product/${id}`);
  return (
    <CardWrapper>
      <Image src={image} alt={title} onClick={onCardClick} />
      <ProductTitle variant="h1" onClick={onCardClick}>
        <TextWithLimit title={title} charactersLimit={60} />
      </ProductTitle>
      <ProductDescription>
        <TextWithLimit title={description} charactersLimit={100} />
      </ProductDescription>
      <ProductPrice>
        <ValueDollar price={price} />
      </ProductPrice>
      <Button >
        <ShoppingCartIcon onClick = {onAddToCartButtonClick} />
        Add to cart
      </Button>
    </CardWrapper>
  );
};
