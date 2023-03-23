// библеотеки 
import React  from "react";
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { store } from "./features/store";
import { Provider } from "react-redux";

//компоненты 
import App from './components/app/app'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
<Provider store = {store}>
<BrowserRouter>
 <App />
</BrowserRouter>
</Provider>


)