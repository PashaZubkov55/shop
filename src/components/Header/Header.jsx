import React from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import styles from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'

import LOGO from "../../images/logo.svg";
import avatar from '../../images/avatar.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { togleForm } from '../../features/user/userSlice';
import { useState,  useEffect} from 'react';
import { useGetProductsQuery } from '../../features/api/apiSlice';



const Header = ()=>{
    const {currentUser} = useSelector(({user})=>user)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [values, setValues] = useState({name:'Guest', avatar : avatar})
    const [searchValue, setSearchValue] = useState('')
    const {data, isLoading} = useGetProductsQuery({title: searchValue});
    console.log(data)
    const handleClick = ()=>{
        if (!currentUser) 
            dispatch(togleForm(true)) ;
            else navigate(ROUTES.PROFILE);

        
    }
    const handleSearch = (e)=>{setSearchValue(e.target.value)}
    useEffect(()=>{
            if (!currentUser) return 
            setValues(currentUser)
    },[currentUser])

    return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to ={ROUTES.HOME}>
            <img src={LOGO} alt="LOGO" />

            </Link>
        </div>
        <div className={styles.info}>
            <div className={styles.user} onClick={handleClick}>
            
            <div className={styles.avatar} 
            style={{backgroundImage: `url(${values.avatar})`}}
            
            />
                 <div className={styles.username}>{values.name}</div>

            
            </div>

            <form className={styles.form}>

            <div className={styles.icon}>
                <svg className='icon'>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>

                </svg>
                </div>
                <div className={styles.input}>
                    <input type="search" 
                     name= 'Поиск'
                      placeholder='Поиск...'
                      autoComplete='off'
                        onChange={handleSearch}
                      value = {searchValue}
                      />
                </div>

               { false && <div className={styles.box}></div>}

            </form>
            <div className={styles.account}>
                <Link to={ROUTES.HOME} className={styles.favourites}>
                <svg className={styles["icon-fav"]}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
                </svg>
                </Link>

                <Link to={ROUTES.CART} className={styles.cart}>
                <svg className={styles["icon-cart"]}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
                </svg>
                <span className={StyleSheet.count}>2</span>
                </Link>
            </div>
        </div>

    </div>
    )
}
export default Header