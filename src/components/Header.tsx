'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import _fetch from '@/config/api';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
import userpic from '@/Assets/Images/userr1.png';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header(pageTitle: any) {

    console.log('pageTitlepageTitle', pageTitle);

    return (
        <>
            <div className="main-header">
                <div className="container">
                    <div className="row">
                        <div className="header-div">
                            <div className="logo-div">
                                logo
                            </div>
                            <div className="header-right-data">
                                <div className="userpic-div">
                                    <Image src={userpic} alt="" />
                                </div>
                                <div className="logout-div">
                                    <Link href='' ><i className="bi bi-box-arrow-left"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-navbar">
                <Navbar expand="lg" className="">
                    <Container>
                        {/* <Navbar.Brand href="#">logo</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                                 <Nav.Link href="#">Dashboard</Nav.Link>
                               <NavDropdown title="Profile" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Edit Profile Image</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Profile Update Image</NavDropdown.Item>
                                </NavDropdown>
                                   <NavDropdown title="Deposit" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Edit Profile Image</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Profile Update Image</NavDropdown.Item>
                                </NavDropdown>
                                   <NavDropdown title="Activate Account" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#">Activate Account</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Edit Profile Image</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Wallet Ledger</NavDropdown.Item>
                                </NavDropdown>
                                      <NavDropdown title="Income Report" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#">Activate Account</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Edit Profile Image</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Wallet Ledger</NavDropdown.Item>
                                </NavDropdown>
                                      <NavDropdown title="Withdraw" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#">Activate Account</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Edit Profile Image</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Wallet Ledger</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
