"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"
import axios from "axios"
import React from "react"
import { useState, useEffect } from "react";
import Image from "next/image";
import photo from "./phot.png"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./style.css"
import {SyncLoader } from "react-spinners"
export default function SignupPage() {

    const router = useRouter()
    const [disable, setdisable] = useState(false)
    const [loading, setloading] = useState(false)
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })


    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setdisable(false);
        } else {
            setdisable(true)
        }
    }, [user])


    const onSignup = async () => {
        try {
            setloading(true)
            const response = await axios.post("api/users/signup", user);
            console.log("signup success", response.data);
            router.push("/login")
        } catch (err) {
            console.log(err)
        } finally {
            setloading(true)
        }
    }

    return (
        <>
            <div className="subn1">
                <div className="part9">


                    <Image className="blog"
                        src={photo}
                        alt={"logo"}
                    // Adjust the width
                    />
                </div>
                <div className="part10">
                    <div className="t1">Don’t have an account?<Link className="upm" href={"/login"}>Signin</Link></div>
                    <div className="wel">Get Started With Leagle. <span className="t2">Getting started is easy</span></div>
                    <div className="gog"><span className="gi"><FcGoogle /></span><span className="gt">Google</span></div>
                    <div className="face"><span className="fi"><FaFacebook /></span>
                        <span className="gp">Facebook</span></div>
                    <div className="cont"><h1 className="font-bold text-green-500 text-2xl">
  {loading ? <SyncLoader className ="bbbn"loading={true} /> : "signup"}
</h1>
                    </div>
                    <input type="text" id="username" placeholder="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className="user" />
                    <input type="email" id="email" placeholder="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="email" />
                    <input type="password" id="password" placeholder="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="pass" />
                    <input type="password" id="password" placeholder="confirm password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="conf" />
                    <button className="cre" onClick={onSignup}>Create</button>
                    <div className="last">By continuing you indicate that you read and agreed to the Terms of Use</div>
                </div>
            </div>

        </>

    )
}