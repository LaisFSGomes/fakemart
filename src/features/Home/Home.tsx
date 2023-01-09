import { AppBar, Banner, GridProduct, PageResponsiveGrid } from "components";
import { api } from "config/api";
import { CartContext } from "contexts";
import React from "react";
import { useLocation } from "react-router-dom";

export const Home: React.FC = () => {
  const [ loaded, setLoaded ] = React.useState<boolean>(false);
  const { products, setProducts } = React.useContext(CartContext);
  const location = useLocation();

  React.useEffect(() => {
    let category = location.pathname.split("/").reverse()[0];
    let url;
    const getProducts = async () => {
      if (category === "") {
        url = "/products";
      } else {
        url = `products/category/${category}`;
      }
      const response = await api.get(url);
      setProducts([]);
      setProducts(response.data);
      setLoaded(true);
    };
    getProducts();
  }, [location, products, setProducts]);
  return (
    <React.Fragment>
      <AppBar />
      <Banner />
      {
        loaded && 
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
      }
      {
        !loaded &&
        <div>Loading...</div>
      }
    </React.Fragment>
  );
};
