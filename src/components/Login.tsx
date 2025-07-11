'use client';

import '@/Assets/Style/login.scss';
import _fetch from '@/config/api';
import { api_url } from '@/config/config';
import toasted from '@/config/toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import login_img from '@/Assets/Images/login_img.png';
import Image from "next/image";

export default function Login() {

    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const LoginSubmit = async (e: any) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('user_id', username);
        formData.append('password', password);

        let res: any = await _fetch(`${api_url}login`, "ImagePost", formData, {});

        if (res?.status == 'success') {
            toasted.success(res?.message);
            localStorage.setItem("auth", 'true');
            localStorage.setItem("userInfo", JSON.stringify(res?.userdata));
            localStorage.setItem("accessToken", res?.token);
            router.replace('/dashboard');
        }
        else {
            if (typeof res?.message === 'object') {
                const firstError = Object.values(res.message)[0];
                toasted.error(firstError);
            } else {
                toasted.error(res?.message);
            }
        }
    }

    return (
        <div className="login-sec">
            <div className="container">
                <div className="row justify-content-center login-row">
                    <div className='col-md-6 login-img-div'>
                       <div className="login-img">
                           <Image src={login_img} alt="login-img" />
                       </div>
                    </div>
                    <div className=" col-lg-6 col-md-12 ">
                        <div className="login-heading">
                            <h2>Login</h2>
                            <div className='login-from'>
                                <div className="form-input">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">User ID</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e: any) => setUsername(e.target.value)} value={username} />
                                </div>
                                <div className="form-input form-input-password">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Password" onChange={(e: any) => setPassword(e.target.value)} value={password} />
                                </div>
                                <div className="form-input form-input-forget">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Remember Me
                                        </label>
                                    </div>
                                    <a href="#">Forget Password</a>
                                </div>
                                <div className="form-btn btn-main">
                                    {/* <button className='login-btn' onClick={LoginSubmit}>Login Now</button> */}
                                    <button className="animated-button " onClick={LoginSubmit}>
                                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                            ></path>
                                        </svg>
                                        <span className="text">Login Now</span>
                                        <span className="circle"></span>
                                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
