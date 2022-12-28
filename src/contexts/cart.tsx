import React from "react";
import { CartContextProps, CartInfo, CartProviderProps, ProductInfo } from "_utils/interfaces";

export const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps,
);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = React.useState<CartInfo[]>([]);
  const [products, setProducts] = React.useState<ProductInfo[]>([]);

  const getProduct = (id: number) =>
    products.find(product => product.id === id);
  const addToCart = (product: ProductInfo) => {
    const cartList = [...cart];
    const insideCart = cartList.some(item => item.id === product.id);
    if (insideCart){
      incrementCart(product.id);
    } else {
      cartList.push({
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      count: 1,
    });
    setCart(cartList);
    }
  };
  const removeFromCart = (id: number) => {
    const cartList = cart.filter(product => product.id !== id);
    setCart(cartList);
  };
  const removeAllCart = () => {
    setCart([]);
  };
  const getAmountItems = () =>
    cart.reduce((total, product) => total + product.count, 0);
  const getTotal = () =>
    cart.reduce((total, product) => total + product.count * product.price, 0);
  const incrementCart = (id: number) => {
    const cartList = cart.map(product => {
      if (product.id === id) product.count += 1;

      return product;
    });
    setCart(cartList);
  };
  const decrementCart = (id: number) => {
    const cartList = cart.map(product => {
      if (product.id === id && product.count > 1) product.count -= 1;

      return product;
    });
    setCart(cartList);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        setProducts,
        getProduct,
        addToCart,
        removeFromCart,
        removeAllCart,
        incrementCart,
        decrementCart,
        getAmountItems,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
