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
