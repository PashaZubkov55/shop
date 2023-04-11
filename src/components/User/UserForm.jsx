import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { togleForm } from "../../features/user/userSlice";
import styles from "../../styles/User.module.css";
import UserSignupForm from "./UserSignupForm";

const UserForm = ()=>{
    const {showForm} = useSelector(({user})=>user) ;
    const Dispatch = useDispatch()
     const closeForm = ()=>{
        Dispatch(
            togleForm(false)
        )
    }
    
    return (
        showForm?(
        <>
        <div className={styles.overlay}  onClick={closeForm}/>
        <UserSignupForm closeForm = {closeForm}/> 
        </>):<></>
    )
   
}
export default UserForm;