'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import _fetch from '@/config/api';
import Link from 'next/link';


export default function Sidebar(pageTitle: any) {

    console.log('pageTitlepageTitle', pageTitle);

    return (
        <div className="main-sidebar">
            <div className="container">
                <div className="row">
                    <div className="sidebar-div">
                        <div className="main-logo">
                            Demo
                        </div>
                        <div className="sidebar-drops">
                            <div className="drops-details">
                                <Link className='dash-details' href='#'>Dashboard</Link>
                            </div>
                             <div className="drops-details">
                                <Link className='dash-details' href='#'>Dashboard</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    )
}
