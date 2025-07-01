'use client';

import '@/Assets/Style/login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { api_url } from '@/config/config';
import _fetch from '@/config/api';
import { useState } from 'react';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const RegisterSubmit = async () => {
        // const data = {
        //     'name': username,
        //     'email': email,
        //     'phone': phone
        // }
        // console.log('datadata', data);


        let res = fetch("http://192.168.18.245/mlm_software_hmvc/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: username,
                email: email,
                phone: phone
            }),
        });
        console.log('resresres',res);
        
        // let res: any = await _fetch(`${api_url}mlm_software_hmvc/user/register`, "POST", data);
        // console.log('resres', res);

        // if (res?.status === 'success') {
        // }
        // else {
        // }
    }

    return (
        <div className="login-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-heading">
                            <h2>Register</h2>
                            <div className='login-from'>
                                <div className="form-input">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" onChange={(e: any) => setUsername(e.target.value)} value={username} />
                                </div>
                                <div className="form-input form-input-password">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e: any) => setEmail(e.target.value)} value={email} />
                                </div>
                                <div className="form-input form-input-password">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Ente Your Number" onChange={(e: any) => setPhone(e.target.value)} value={phone} />
                                </div>
                                <div className="form-btn">
                                    <a href='#' className='login-btn' onClick={RegisterSubmit}>Register Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
