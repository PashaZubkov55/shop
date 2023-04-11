import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/userSlice";
import styles from '../../styles/User.module.css'

const UserSignupForm= ({closeForm})=>{
    const Dispatch = useDispatch()
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
      });
       // оживления инпутов
      const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
      };
        const handlSubmit = (event)=>{
            event.preventDefault()

            const isNotEmpty = Object.values(values).every(val => val); // проверка значений

            if (!isNotEmpty) return;

            Dispatch(createUser(values));
            
            closeForm();
                
            

        }
      return (
        <div className={styles.wrapper}>
          <div className={styles.close} onClick={closeForm} >
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
            </svg>
          </div>
    
          <div className={styles.title}>Sign Up</div>
    
          <form className={styles.form}  onSubmit = {handlSubmit}>
            <div className={styles.group}>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                value={values.email}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
    
            <div className={styles.group}>
              <input
                type="name"
                placeholder="Your name"
                name="name"
                value={values.name}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
    
            <div className={styles.group}>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                value={values.password}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
    
            <div className={styles.group}>
              <input
                type="avatar"
                placeholder="Your avatar"
                name="avatar"
                value={values.avatar}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
    
            <div
              className={styles.link}

            >
              I already have an account
            </div>
    
            <button type="submit" className={styles.submit}>
              Create an account
            </button>
          </form>
        </div>
      );
}

export default UserSignupForm