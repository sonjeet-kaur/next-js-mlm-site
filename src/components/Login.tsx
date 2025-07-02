'use client';

import '@/Assets/Style/login.scss';
import _fetch from '@/config/api';
import { api_url } from '@/config/config';
import toasted from '@/config/toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const LoginSubmit = async (e: any) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('user_id', username);
        formData.append('password', password);

        let res: any = await _fetch(`${api_url}login`, "ImagePost", formData, {});
        console.log('resresres', res);

        if (res?.status == 'success') {
            toasted.success(res?.message);
        }
        else {
            toasted.error(res?.message);
        }
    }

    return (
        <div className="login-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
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
                                <div className="form-btn">
                                    <button className='login-btn' onClick={LoginSubmit}>Login Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
