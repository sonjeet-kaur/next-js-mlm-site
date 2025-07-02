'use client';

import '@/Assets/Style/login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import _fetch from '@/config/api';

export default function Dashboard(pageTitle: any) {

    console.log('pageTitlepageTitle', pageTitle);

    return (
        <div className="login-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <p>Dashboard</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
