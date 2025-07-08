'use client';

import '@/Assets/Style/common.scss';
import _fetch from '@/config/api';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile(pageTitle: any) {

    return (
        <div className="form-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="form-heading">
                            <div className='form-main'>
                               <div className='row'>
                                    <div className="col-md-6">
                                            <div className="form-input">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" defaultValue="Administrator" />
                                            </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Contact Number</label>
                                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Number" defaultValue="000000000" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input space-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" defaultValue="abc12@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input space-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Country</label>
                                            <select className="form-select" aria-label="-- Country --">
                                                <option selected>-- Country --</option>
                                                <option value="1">India</option>
                                                <option value="2">canada</option>
                                                <option value="3">china</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Address" defaultValue="Address" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                                            <span className="form-control">Active</span>
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
                                            <span className="text">Update Now</span>
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
