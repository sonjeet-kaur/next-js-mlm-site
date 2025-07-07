'use client';

import '@/Assets/Style/login.scss';
import _fetch from '@/config/api';
import { api_url } from '@/config/config';
import toasted from '@/config/toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

export default function Profile(pageTitle: any) {

    type PackageType = {
        id: Number,
        price: number;
        title: string;
    };

    const [username, setUsername] = useState('');
    const [selectPackage, setSelectPackage] = useState({ price: 0, packageID: 0 });
    const [allPackages, setAllPackages] = useState<PackageType[]>([]);
    const [balance, setBalance] = useState('');

    return (
        <div className="login-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-heading">
                            <h2>Edit Profile</h2>
                            <div className='login-from'>
                                <div className="form-input">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">User ID</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User ID" onChange={(e: any) => setUsername(e.target.value)} value={username} />
                                </div>
                              
                                <div className="form-btn">
                                    <button className='login-btn' >Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
