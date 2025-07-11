"use client";

import "@/Assets/Style/style.scss";
import "@/Assets/Style/common.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import _fetch from '@/config/api';
import deposit_qr_img from '@/Assets/Images/deposit_qr.png';
import Image from "next/image";
import Link from "next/link";
import { useUser } from '@/app/context/UserContext';

export default function Dashboard(pageTitle: any) {
  return (
    <section className="main">
      <Header />
      <div className="main-page">
        <div className="container">
          <div className="row">

             <div className="col-lg-6 col-12 col-sm-12 col-md-12">
               <div className="card-deposit">
                  <div className="info-p time-info">
                    <p>Please stay here at least 60 Sec for confirm Transaction</p>
                  </div>
                  <div className="deposit-qr-main">
                    <div className="deposit-qr">
                      <Image src={deposit_qr_img} alt="dash-img" />
                    </div>
                    <div className="deposit-qr-info">
                      <h5>E-Wallet Balance: </h5>
                      <span>$0</span>
                    </div>
                  </div>
                  <div className="deposit-copy-input">
                    <h2>Copy Link</h2>
                    <div className="copy-address">
                      <div className="copy-link">
                        <p>0xD40er6mngkkbbvciohgfjdiyyutuer7657ru</p>
                      </div>
                      <div className='btn-main'>
                          <button className="animated-button">
                          <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                              <path
                              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                              ></path>
                          </svg>
                          <span className="text">Copy Now</span>
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
                  <div className="info-p">
                    <h6>Click Here to See Transaction at Bscscan</h6>
                  </div>
                  <div className="deposit-note">
                    <h6>Note: Confirmation Time is 1 Minute then click on Transaction History</h6>
                  </div>
               </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}
