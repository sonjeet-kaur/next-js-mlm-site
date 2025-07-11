'use client';

import { useState } from 'react';
import '@/Assets/Style/login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { api_url } from '@/config/config';
import _fetch from '@/config/api';
import toasted from '@/config/toast';
import { ethers } from 'ethers';
import { Web3 } from 'web3';
import Web3modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";
import login_img from '@/Assets/Images/login_img.png';
import Image from "next/image";

export default function Register() {

    const [sponsorID, setSponsorID] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [walletAddress, setWalletAddress] = useState("");

    const connectWallet = async () => {
        try {
            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        56: "https://bsc-dataseed.binance.org/",
                    }
                }
            }
            const web3modal = new Web3modal({
                cacheProvider: false,
                providerOptions
            });
            const instance = await web3modal.connect();
            const web3 = new Web3(instance);
            const accounts = await web3.eth.getAccounts();
            setWalletAddress(accounts[0]);
        } catch (error) {
            console.error("Wallet connection failed", error);
        }
    };

    const RegisterSubmit = async (e: any) => {
        e.preventDefault();
        console.log('walletAddresswalletAddresswalletAddress', walletAddress);

        let formData = new FormData();
        formData.append('sponser_id', sponsorID);
        formData.append('wallet_address', walletAddress);
        // formData.append('name', username);
        // formData.append('email', email);
        // formData.append('phone', phone);

        // let res: any = await _fetch(`${api_url}register`, "ImagePost", formData, {});
        let res: any = await _fetch(`${api_url}dappRegister`, "ImagePost", formData, {});

        if (res?.status === 'success') {
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
        <div className="login-sec">
            <div className="container">
                <div className="row justify-content-center login-row">
                    <div className='col-md-6 login-img-div'>
                       <div className="login-img register-img">
                           <Image src={login_img} alt="login-img" />
                       </div>
                    </div>
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
                                <div className="form-btn btn-main">
                                    {/* <button className='login-btn' onClick={RegisterSubmit}>Register Now</button> */}
                                    <button className="animated-button " onClick={RegisterSubmit}>
                                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                            ></path>
                                        </svg>
                                        <span className="text">Register Now</span>
                                        <span className="circle"></span>
                                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>

                                <button onClick={connectWallet}>
                                    {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
