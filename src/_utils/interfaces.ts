export interface CartInfo {
  id: number;
  title: string;
  image: string;
  price: number;
  count: number;
}
export interface ProductInfo {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
  rating?: {
    count: number;
    rate: number;
  };
}
export interface InputProps {
  label?: string;
  id?: string;
  type: "email" | "text" | "password" | "number" | "tel" | "date";
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  helpText?: string;
  colorHelp?: "red" | "green";
}
export interface User {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  phone: string;
}
export interface Login {
  username: string;
  password: string;
}
export interface CartProviderProps {
  children: React.ReactNode;
}
export interface CartContextProps {
  products: ProductInfo[];
  cart: CartInfo[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInfo[]>>;
  getProduct: (id: number) => ProductInfo | undefined;
  addToCart: (product: ProductInfo) => void;
  removeFromCart: (id: number) => void;
  removeAllCart: () => void;
  incrementCart: (id: number) => void;
  decrementCart: (id: number) => void;
  getAmountItems: () => number;
  getTotal: () => number;
}
