import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { togleForm, togleFormType } from "../../features/user/userSlice";
import styles from "../../styles/User.module.css";
import UserLoginForm from "./UserLoginForm";
import UserSignupForm from "./UserSignupForm";

const UserForm = ()=>{
    const {showForm, formType} = useSelector(({user})=>user) ;
    const Dispatch = useDispatch()
     const closeForm = ()=>{
        Dispatch(
            togleForm(false)
        )
    };

    const togleCurrentFormType = (type)=>{
        Dispatch(
            togleFormType(type)
        )
    }

    
    return (
        showForm?(
        <>
        <div className={styles.overlay}  onClick={closeForm}/>
       { formType ==='signup'?(
       <UserSignupForm  togleCurrentFormType={togleCurrentFormType} closeForm = {closeForm} />
       ): (<UserLoginForm  togleCurrentFormType={togleCurrentFormType} closeForm = {closeForm}/> 
       )}
        </>
        ):(
            <></>
        )

    )
   
}
export default UserForm;