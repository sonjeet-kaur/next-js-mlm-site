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
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" value="Administrator" />
                                            </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Contact Number</label>
                                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Number" value="000000000" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" value="abc12@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input">
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
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Address" value="Address" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                                            <span className="form-control">Active</span>
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
