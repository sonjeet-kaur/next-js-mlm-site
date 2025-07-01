'use client';

import '@/Assets/Style/login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Login() {
    return (
        <div className="login-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-heading">
                            <h2>Login</h2>
                            <div className='login-from'>
                                <div className="form-input">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="form-input form-input-password">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Password" />
                                </div>
                                <div className="form-input form-input-forget">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Remember Me
                                        </label>
                                    </div>
                                    <a href="#">Forget Password</a>
                                </div>
                                <div className="form-btn">
                                    <a href='#' className='login-btn'>Login Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
