import { configureStore, } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import categoriesSlice from "./categories/categoriesSlice";
import ProductsSlice from "./products/ProductsSlice";

export const store = configureStore({
    reducer:{
        categories: categoriesSlice,
        products: ProductsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer

    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
});