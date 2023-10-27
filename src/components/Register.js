"use client"
import React, {useState} from 'react'
import Navbar from './Navbar';
import styles from './page.module.css';
import {useDispatch} from 'react-redux';
import { authActions } from '../store/auth-slice';
export default function Register(){ 
    const dispatch=useDispatch();
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    
    const registerUser=async(e)=>{
          e.preventDefault();
          if(!username || !email || !password){
            alert("please provide all fields");
            return;
          }
          try{
            await dispatch(authActions.login())
            console.log("register Done");


          }catch(err){
            console.log(err);
            alert(err.message);
          }
          setEmail("");
          setUsername("");
          setPassword("");

    }

    return(
        <>
        <Navbar/>
                <div className={styles.regPar}>
                <div className={styles.mainPar}>
                <div className={styles.child}>
                <input type='username' className={styles.authInput} value={username} placeholder='Enter username'required onChange={(e)=>setUsername(e.target.value)}/>
                <input type='email' className={styles.authInput} value={email} placeholder='Enter Email'required onChange={(e)=>setEmail(e.target.value)}/>
                <input type='password'className={styles.authInput}  value={password} placeholder='Enter password'required onChange={(e)=>setPassword(e.target.value)}/>
                <button className={styles.authBtn} onClick={registerUser}>Register</button>
                </div>
                </div>
                </div> 
        </> 
    )
    }
