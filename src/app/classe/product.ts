import { Category } from "./Categoty";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    imageUrl: string;
    category: Category;
    qty:number;
}