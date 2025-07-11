'use client';

import '@/Assets/Style/login.scss';
import _fetch from '@/config/api';
import { api_url, currency } from '@/config/config';
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

        let res: any = await _fetch(`${api_url}activation`, "ImagePost", formData, {});
        if (res?.status == 'success') {
            toasted.success(res?.message);
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

        <div className="form-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="form-heading">
                            <p className="form-label">Wallet Balance: {currency}{balance ? balance : 0}</p>
                            <div className='form-main'>
                                <div className='row'>
                                    <div className="col-md-6">
                                        <div className="form-input space-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">User ID</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User ID" onChange={(e: any) => setUsername(e.target.value)} value={username} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input space-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Packages</label>
                                            <select className="form-select" aria-label="" onChange={(e) => setSelectPackage(JSON.parse(e.target.value))}>
                                                <option selected>Select Package</option>
                                                {allPackages?.map((item, index) => (
                                                    <option key={index} value={JSON.stringify({ price: item?.price, packageID: item?.id })}> {currency}{item?.price} </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='btn-main'>
                                            <button className="animated-button">
                                                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                                    ></path>
                                                </svg>
                                                <button className="text" onClick={BuyPackage}>Buy Now</button>
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
            </div>
        </div >
    )
}
