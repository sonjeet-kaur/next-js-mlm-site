"use client";

import "@/Assets/Style/style.scss";
import "@/Assets/Style/common.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import _fetch from '@/config/api';
import dash_img from '@/Assets/Images/dash.png';
import user_img from '@/Assets/Images/user_img.png';
import Image from "next/image";
import Link from "next/link";
import { useUser } from '@/app/context/UserContext';
import { currency } from "@/config/config";

export default function Dashboard(pageTitle: any) {

  const { user } = useUser();

  return (
    <section className="main">
      <div className="main-page">
        <div className="container">

          <div className="row">

            <div className="col-lg-8 col-12 col-sm-12 col-md-7">
              <div className="dashboard-heading">
                <div className="dash-content">
                  <h2>Welcome back</h2>
                  <Image src={dash_img} alt="dash-img" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-12 col-sm-12 col-md-12">
                  <div className="row">
                    <div className="col-lg-6 col-12 col-sm-6 col-md-6">
                      <div className="share-btn">
                        <Link href="" className="custom-link">
                          <i className="bi bi-whatsapp"></i>
                          <span className="span-title">whatsapp Share</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 col-sm-6 col-md-6">
                      <div className="share-btn">
                        <Link href="" className="custom-link">
                          <i className="bi bi-telegram"></i>
                          <span className="span-title">telegram Share</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 col-sm-12 col-md-12">
                  <div className="user-status">
                    <div className="user-img">
                      <Image src={user_img} alt="user" />
                    </div>
                    <h3>User Status</h3>
                    <span>Active</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 col-sm-12 col-md-5">
              <div className="profile-card responsive-profile">
                <div className="profile-heading">
                  <span>User Profile</span>
                </div>
                <div className="user-info">
                  <h3>
                    User ID: <span>{user?.user_id}</span>
                  </h3>
                  <h3>
                    Name: <span>{user?.name}</span>
                  </h3>
                  <h3>
                    Register Date: <span>{user?.created_at?.split(' ')[0]}</span>
                  </h3>
                  <h3>
                    Activation Date: <span>{user?.topup_date?.split(' ')[0]}</span>
                  </h3>
                </div>
                <div className='btn-main user-profile-btn'>
                  <button className="animated-button">
                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                    </svg>
                    <span className="text">Sign Out</span>
                    <span className="circle"></span>
                    <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-12 col-sm-12 col-md-12">
                  <div className="refer-link-main">
                    <div className="refer-link">
                      <h4>Referal Link</h4>
                      <div className="refer-btn">
                        <Link href="" className="copy-link">
                          <i className="bi bi-copy"></i> Copy Link
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-lg-4 col-12 col-sm-6 col-md-6">
              <div className="card project-profit-card">
                <div className="shape-div"></div>
                <div className="shape-div2"></div>
                <div className="card-body">
                  <div className="profit-arrow">
                    <span>
                      <i className="bi bi-arrow-up-right-circle-fill"></i>
                    </span>
                  </div>
                  <div className="icon-div">
                    <span>
                      <i className=""></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <h4>Total Investment</h4>
                    <p><span><i className=""></i></span> {currency}0</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 col-sm-6 col-md-6">
              <div className="card project-profit-card">
                <div className="shape-div"></div>
                <div className="shape-div2"></div>
                <div className="card-body">
                  <div className="profit-arrow">
                    <span>
                      <i className="bi bi-arrow-up-right-circle-fill"></i>
                    </span>
                  </div>
                  <div className="icon-div">
                    <span>
                      <i className="bi bi-cash-coin"></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <h4> Total Withdrawal</h4>
                    <p><span><i className=""></i></span> {currency}0</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 col-sm-6 col-md-6">
              <div className="card project-profit-card">
                <div className="shape-div"></div>
                <div className="shape-div2"></div>
                <div className="card-body">
                  <div className="profit-arrow">
                    <span>
                      <i className="bi bi-arrow-up-right-circle-fill"></i>
                    </span>
                  </div>
                  <div className="icon-div">
                    <span>
                      <i className=""></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <h4>Available Balance</h4>
                    <p><span><i className=""></i></span> {currency}0</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 col-sm-6 col-md-6">
              <div className="card project-profit-card">
                <div className="shape-div"></div>
                <div className="shape-div2"></div>
                <div className="card-body">
                  <div className="profit-arrow">
                    <span>
                      <i className="bi bi-arrow-up-right-circle-fill"></i>
                    </span>
                  </div>
                  <div className="icon-div">
                    <span>
                      <i className=""></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <h4>Direct Business</h4>
                    <p><span><i className=""></i></span> {currency}0</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 col-sm-6 col-md-6">
              <div className="card project-profit-card">
                <div className="shape-div"></div>
                <div className="shape-div2"></div>
                <div className="card-body">
                  <div className="profit-arrow">
                    <span>
                      <i className="bi bi-arrow-up-right-circle-fill"></i>
                    </span>
                  </div>
                  <div className="icon-div">
                    <span>
                      <i className=""></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <h4> Team Business</h4>
                    <p><span><i className=""></i></span> {currency}0</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 col-sm-6 col-md-6">
              <div className="card project-profit-card">
                <div className="shape-div"></div>
                <div className="shape-div2"></div>
                <div className="card-body">
                  <div className="profit-arrow">
                    <span>
                      <i className="bi bi-arrow-up-right-circle-fill"></i>
                    </span>
                  </div>
                  <div className="icon-div">
                    <span>
                      <i className=""></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <h4> Total Income</h4>
                    <p><span><i className=""></i></span> {currency}0</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 col-sm-6 col-md-6">
              <div className="card project-profit-card">
                <div className="shape-div"></div>
                <div className="shape-div2"></div>
                <div className="card-body">
                  <div className="profit-arrow">
                    <span>
                      <i className="bi bi-arrow-up-right-circle-fill"></i>
                    </span>
                  </div>
                  <div className="icon-div">
                    <span>
                      <i className=""></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <h4> Level Income</h4>
                    <p><span><i className=""></i></span> {currency}0</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 col-sm-6 col-md-6">
              <div className="card project-profit-card">
                <div className="shape-div"></div>
                <div className="shape-div2"></div>
                <div className="card-body">
                  <div className="profit-arrow">
                    <span>
                      <i className="bi bi-arrow-up-right-circle-fill"></i>
                    </span>
                  </div>
                  <div className="icon-div">
                    <span>
                      <i className=""></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <h4>Roi Income</h4>
                    <p><span><i className=""></i></span> {currency}0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-12 col-sm-6 col-md-6">
              <div className="card project-profit-card">
                <div className="shape-div"></div>
                <div className="shape-div2"></div>
                <div className="card-body">
                  <div className="profit-arrow">
                    <span>
                      <i className="bi bi-arrow-up-right-circle-fill"></i>
                    </span>
                  </div>
                  <div className="icon-div">
                    <span>
                      <i className="bi bi-wallet"></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <h4> Deposit Wallet</h4>
                    <p><span><i className=""></i></span> {currency}0</p>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}
