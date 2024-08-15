"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"
import axios from "axios"
import React from "react"
import { useState, useEffect } from "react";
import "./im.css"
import Switch from '@mui/material/Switch';
import phot from "./bui.png"
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import Image from "next/image";
import build from "./building.jpg"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {SyncLoader } from "react-spinners"
export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })



    const [disable, setdisable] = useState(false)
    const [loading, setloading] = useState(false)
    const router = useRouter()
    const onLogin = async () => {
        try {
            setloading(true)
            const response = await axios.post("/api/users/login", user)
            console.log(response.data)
            router.push("/profile")
        } catch (err) {
            console.log(err)
        } finally {
            setloading(true)
        }
    }



    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setdisable(false);
        } else {
            setdisable(true)
        }
    }, [user])
    return (
        <>
            <div className="subn2">
                <div className="partm">
                    <div className="logo"></div>
                    <div className="don">Dont have an account?<Link className="upn" href={"/signup"}>Sign up</Link></div>
                    <div className="wel">Welcome Back</div>
                    <div className="pn">Login into your account</div>
                    <div className="gon"> <span className="gi"><FcGoogle /></span>
                        <span className="gp">Google</span></div>
                    <div className="fn"><span className="fi"><FaFacebook /></span>
                        <span className="gp">Facebook</span></div>
                    <div className="cont"><h1 className="font-bold text-green-500 text-2xl">
  {loading ? <SyncLoader className ="bbbn"loading={true} /> : "Login"}
</h1>
</div>


                    <input className="emain" type="email"id="email"value={user.email}onChange={(e)=>setUser({...user,email:e.target.value})} />

                  <input type="password"id="password"value={user.password}onChange={(e)=>setUser({...user,password:e.target.value})} className="pan" />
                    <div className="rem">

                        <Switch {...label} defaultChecked />

                        <button>Remeber me</button>
                    </div>
                  <button className="rec">Recover Password</button>
                    <button className="log" onClick={onLogin}>Log in</button>
                </div>
                <div className="partn"><Image className="blon"
                    src={phot}
                    alt={"logo"}
                // Adjust the width
                /></div>
            </div>

        </>

    )
}