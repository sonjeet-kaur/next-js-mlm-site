'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import _fetch from '@/config/api';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';



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
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <Link className='dash-details' href='#'>Edit Profile</Link>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Link className='dash-details' href='#'>Profile</Link>
                                            <Link className='dash-details' href='#'>Edit Profile Image</Link>
                                            <Link className='dash-details' href='#'>Change Secuirty password</Link>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="drops-details">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Account</Accordion.Header>
                                    <Accordion.Body>
                                        <Link className='dash-details' href='#'>Withdraw</Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
