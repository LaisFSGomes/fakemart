import { AppBar, Banner, GridProduct, PageResponsiveGrid } from "components";
import { api } from "config/api";
import { CartContext } from "contexts";
import React from "react";

export const Home: React.FC = () => {
  const { products, setProducts } = React.useContext(CartContext);

  const getProducts = async () => {
    const response = await api.get("/products");
    setProducts(response.data);
  };
  React.useEffect(() => {
    getProducts();
  }, [setProducts]);
  return (
    <React.Fragment>
      <AppBar />
      <Banner />
      <PageResponsiveGrid>
        {products?.map((product) => (
          <GridProduct
            key={product?.id}
            id={product?.id}
            image={product?.image}
            title={product?.title}
            description={product?.description || ""}
            price={product?.price}
          />
        ))}
      </PageResponsiveGrid>
    </React.Fragment>
  );
};
