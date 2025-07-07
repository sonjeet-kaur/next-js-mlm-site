'use client';

import '@/Assets/Style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import _fetch from '@/config/api';
import Header from '@/components/Header';
import dash_img from '@/Assets/Images/dash.png';
import Image from "next/image";
import Link from "next/link";

export default function Dashboard(pageTitle: any) {

    return (
    <section className='main'>
        <Header />
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
                           <h3>Name:- <span>Administrator</span></h3>
                           <h3>User ID:- <span>Admin</span></h3>
                           <h3>Register Date:- <span>07/07/2025</span></h3>
                           <h3>Activation Date:- <span>07/07/2025</span></h3>
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
