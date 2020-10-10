import React, {useState} from 'react';
import './assets/Login.css';
import { Link,useHistory} from 'react-router-dom' ;
import {auth} from './firebase';


function Login() {

    const history = useHistory();
    const [email , setEmail]=useState("");
    const [password , setPassword]=useState("");

    const login = (event) =>{
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push("/");

            })
            .catch((e) => alert(e.message))


    };
    const register = (event) =>{
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push("/");

            })
            .catch((e) => alert(e.message))


    };
    return (
        <div className={"login"}>

            <div className={"login__container"}>

                <form>
                    <h5>ادرس ایمیل</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type={"email"}/>
                    <h5>رمز عبور( حداقل ۶ حرف )</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type={"password"}/>
                    <button onClick={login}  type={"submit"} className={"btn__signIn"}> ورود</button>
                    <button onClick={register} className={"btn__createAcc"}>حساب کاربری ندارید؟</button>
                </form>

            </div>

        </div>







    );
}
export default Login;