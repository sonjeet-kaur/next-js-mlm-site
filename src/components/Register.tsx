'use client';

import { useState } from 'react';
import '@/Assets/Style/login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { api_url } from '@/config/config';
import _fetch from '@/config/api';
import toasted from '@/config/toast';

export default function Register() {

    const [sponsorID, setSponsorID] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const RegisterSubmit = async (e:any) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('sponser_id', sponsorID);
        formData.append('name', username);
        formData.append('email', email);
        formData.append('phone', phone);
        
        let res: any = await _fetch(`${api_url}register`, "ImagePost", formData, {});

        if (res?.status === 'success') {
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
                            <h2>Register</h2>
                            <div className='login-from'>
                            <div className="form-input">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Sponsor ID</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Sponsor" onChange={(e: any) => setSponsorID(e.target.value)} value={sponsorID} />
                                </div>
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
                                    <button className='login-btn' onClick={RegisterSubmit}>Register Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
