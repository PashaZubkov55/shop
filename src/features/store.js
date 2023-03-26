import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import ProductsSlice from "./products/ProductsSlice";

export const store = configureStore({
    reducer:{
        categories: categoriesSlice,
        products: ProductsSlice,
    },
    devTools: true,
});