import React from 'react'
import {Route, Routes, } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'



import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import SingleCategory from '../SingleCategory/SingleCategory'
import SingleProduct from '../SingleProduct/SingleProduct'

const AppRoutes = ()=>{
    return (
       <Routes>
        <Route index element = {<Home/>}/>
        <Route path={ROUTES.PRODUCT} element = {<SingleProduct/>}/>
        <Route path={ROUTES.PROFILE} element = {<Profile/>}/>
        <Route path={ROUTES.CATEGORY} element = {<SingleCategory/>}/>



       </Routes>
    )
}
export default AppRoutes