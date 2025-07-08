'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import _fetch from '@/config/api';
import dash_img from '@/Assets/Images/dash.png';
import Image from "next/image";
import Link from "next/link";
import { useUser } from '@/app/context/UserContext';

export default function Dashboard(pageTitle: any) {
    const { user } = useUser();

    return (
        <section className='main'>
            <div className='main-page'>
                <div className='container'>

                    <div className='row'>
                        <div className="col-lg-8">
                            <div className="dashboard-heading">
                                <div className='dash-content'>
                                    <h2>Welcome back Mathew!</h2>
                                    <Image src={dash_img} alt="dash-img" />
                                </div>
                            </div>
                            <div className='refer-link-main'>
                                <div className='refer-link'>
                                    <Link href="" className="copy-link">
                                        <i className="bi bi-copy"></i> Copy Link
                                    </Link>
                                </div>

                                <div className='share-btn'>
                                    <div className='social-btn'>
                                        <Link href="" className="custom-link">
                                            <i className="bi bi-whatsapp"></i>whatsapp
                                        </Link>
                                    </div>
                                    <div className='social-btn'>
                                        <Link href="" className="custom-link">
                                            <i className="bi bi-telegram"></i>telegram
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="profile-card">
                                <div className="profile-heading">
                                    <span>User Profile</span>
                                </div>
                                <div className='user-info'>
                                    <h3>User ID:- <span>{user?.user_id}</span></h3>
                                    <h3>Name:- <span>{user?.name}</span></h3>
                                    <h3>Register Date:- <span>{user?.created_at?.split(' ')[0]}</span></h3>
                                    <h3>Activation Date:- <span>{user?.topup_date?.split(' ')[0]}</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-4'>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
