'use client';

import  '@/Assets/Style/login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Register() {
    return (
        <div className="login-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-heading">
                            <h2>Register</h2>
                            <div className='login-from'>
                                <div className="form-input">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                                </div>
                                <div className="form-input form-input-password">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="form-input form-input-password">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Ente Your Number" />
                                </div>
                                <div className="form-btn">
                                    <a href='#' className='login-btn'>Register Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
