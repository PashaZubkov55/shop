import React from 'react'
import { useState } from 'react'
import styles from '../../styles/User.module.css'

const UserSignupForm= ()=>{

    const [values, setValues]=  useState({
        name : '',
        email: '',
        avatar: '',
        password: '',
    })
    const handleChange = ({target: {value, name}})=>{
        setValues({...values, [name]: value}),
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.close}>
                <svg className='icon'>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}/>
                </svg>
            </div>
            <div className={styles.title}>
                Sign Up
            </div>
            <form className={styles.form}>
            <div className={styles.group}>
            <input type="email" 
            name= 'email' 
            preloader='Your email'  
            value={values.email}
            autoComplete='off' 
            omChange={()=>{handleChange}}
            required
            />

            </div>
            <div className={styles.group}>
            <input type="name" 
            name= 'name' 
            preloader='Your name'  
            value={values.name} 
            autoComplete='off' 
            omChange={()=>{handleChange}}
            required
            />
            
            </div>
            <div className={styles.group}>
            <input type="password" 
            name= 'password' 
            preloader='Your password'  
            value={values.password} 
            autoComplete='off' 
            omChange={()=>{handleChange}}
            required
            />
            
            </div>
            <div className={styles.group}>
            <input type="avatar" 
            name= 'avatar' 
            preloader='Your avatar'  
            value={values.avatar} 
            autoComplete='off' 
            omChange={()=>{handleChange}}
            required
            />
            </div>
            <div className={styles.link}>I already have an account</div>
            <button type='submit' className= {styles.submit}>
                cteat an account
            </button>
            </form>
        </div>
    )
}

export default UserSignupForm