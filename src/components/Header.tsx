'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import _fetch from '@/config/api';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
import userpic from '@/Assets/Images/userr1.png';


export default function Header(pageTitle: any) {

    console.log('pageTitlepageTitle', pageTitle);

    return (
        <div className="main-header">
            <div className="container">
                <div className="row">
                    <div className="header-div">
                        <div className="icon-div">
                     <i className="bi bi-list"></i>
                        </div>
                        <div className="userpic-div">
                            <Image src={userpic} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
