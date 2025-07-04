'use client';

import '@/Assets/Style/login.scss';
import _fetch from '@/config/api';
import { api_url } from '@/config/config';
import toasted from '@/config/toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

export default function Investment(pageTitle: any) {

    type PackageType = {
        id: Number,
        price: number;
        title: string;
    };

    const [username, setUsername] = useState('');
    const [selectPackage, setSelectPackage] = useState({ price: 0, packageID: 0 });
    const [allPackages, setAllPackages] = useState<PackageType[]>([]);
    const [balance, setBalance] = useState('');

    useEffect(() => {
        getBalance();
    }, []);

    const getBalance = async () => {

        let res: any = await _fetch(`${api_url}walletFund`, "GET", {}, {});

        if (res?.status == 'success') {
            setBalance(res?.data?.walletBalance);
            setAllPackages(res?.data?.all_package);
        }
        else {
            toasted.error(res?.message);
        }
    }

    const BuyPackage = async (e: any) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('user_id', username);
        formData.append('package_id', String(selectPackage?.packageID));
        formData.append('amount', String(selectPackage?.price));
        console.log('formDataformData', formData);

        let res: any = await _fetch(`${api_url}activation`, "ImagePost", formData, {});
        console.log('resresresres', res);

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
                            <h2>Activation</h2>
                            <p>Wallet Balance: {balance}</p>
                            <div className='login-from'>
                                <div className="form-input">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">User ID</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User ID" onChange={(e: any) => setUsername(e.target.value)} value={username} />
                                </div>
                                <div className="form-input form-input-password">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Packages</label>
                                    <select onChange={(e) => setSelectPackage(JSON.parse(e.target.value))}>
                                        <option value=""> Select Package </option>
                                        {allPackages?.map((item, index) => (
                                            <option key={index} value={JSON.stringify({ price: item?.price, packageID: item?.id })}> {item?.price} </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-btn">
                                    <button className='login-btn' onClick={BuyPackage}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
