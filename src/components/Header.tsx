"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import _fetch from "@/config/api";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import userpic from "@/Assets/Images/userr1.png";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";

export default function Header(pageTitle: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Track which collapsible menus are open
  const [openSections, setOpenSections] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSections(openSections === index ? null : index);
  };

  console.log("pageTitlepageTitle", pageTitle);

  return (
    <>
      <div className="main-header">
        <div className="container">
          <div className="row">
            <div className="header-div">
              <div className="logo-div">logo</div>
              <div className="header-right-data">
                <button
                  className="header-toggle d-lg-none me-2"
                  onClick={() => setSidebarOpen(true)}
                >
                  <i className="bi bi-list fs-2"></i>
                </button>
                <div className="userpic-div">
                  <Image src={userpic} alt="" />
                </div>
                <div className="logout-div">
                  <Link href="">
                    <i className="bi bi-box-arrow-left"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-navbar d-none d-lg-block">
        <Navbar expand="lg" className="">
          <Container>
            {/* <Navbar.Brand href="#">logo</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#">Dashboard</Nav.Link>
                <NavDropdown title="Profile" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Edit Profile Image
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Profile Update Image
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Deposit" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Edit Profile Image
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Profile Update Image
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Activate Account"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#">Activate Account</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Edit Profile Image
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Wallet Ledger</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Income Report" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#">Activate Account</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Edit Profile Image
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Wallet Ledger</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Withdraw" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#">Activate Account</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Edit Profile Image
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Wallet Ledger</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          <i className="bi bi-x fs-2"></i>
        </button>
        <Nav className="flex-column side-nav">
          <Nav.Link href="#" className="sidebar-a-main">
            Dashboard
          </Nav.Link>

          {/* Profile */}
          <div className="sidebar-section">
            <button
              className="sidebar-section-toggle w-100 text-start"
              onClick={() => toggleSection(0)}
            >
              Profile
              <i
                className={`bi ms-2 ${
                  openSections === 0 ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              />
            </button>
            <div
              className={`sidebar-section-content ${
                openSections === 0 ? "show" : ""
              }`}
            >
              <Nav.Link href="#" className="sidebar-a ps-4">
                Edit Profile
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-a ps-4">
                Edit Profile Image
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-a ps-4">
                Profile Update Image
              </Nav.Link>
            </div>
          </div>

          {/* Deposit */}
          <div className="sidebar-section">
            <button
              className="sidebar-section-toggle w-100 text-start"
              onClick={() => toggleSection(1)}
            >
              Deposit
              <i
                className={`bi ms-2 ${
                  openSections === 1 ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              />
            </button>
            <div
              className={`sidebar-section-content ${
                openSections === 1 ? "show" : ""
              }`}
            >
              <Nav.Link href="#" className="sidebar-a ps-4">
                Deposit Money
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-a ps-4">
                Deposit History
              </Nav.Link>
            </div>
          </div>

          {/* Activate Account */}
          <div className="sidebar-section">
            <button
              className="sidebar-section-toggle w-100 text-start"
              onClick={() => toggleSection(2)}
            >
              Activate Account
              <i
                className={`bi ms-2 ${
                  openSections === 2 ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              />
            </button>
            <div
              className={`sidebar-section-content ${
                openSections === 2 ? "show" : ""
              }`}
            >
              <Nav.Link href="#" className="sidebar-a ps-4">
                Activate
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-a ps-4">
                Wallet Ledger
              </Nav.Link>
            </div>
          </div>

          {/* Income Report */}
          <div className="sidebar-section">
            <button
              className="sidebar-section-toggle w-100 text-start"
              onClick={() => toggleSection(3)}
            >
              Income Report
              <i
                className={`bi ms-2 ${
                  openSections === 3 ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              />
            </button>
            <div
              className={`sidebar-section-content ${
                openSections === 3 ? "show" : ""
              }`}
            >
              <Nav.Link href="#" className="sidebar-a ps-4">
                View Report
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-a ps-4">
                Download Report
              </Nav.Link>
            </div>
          </div>

          {/* Withdraw */}
          <div className="sidebar-section">
            <button
              className="sidebar-section-toggle w-100 text-start"
              onClick={() => toggleSection(4)}
            >
              Withdraw
              <i
                className={`bi ms-2 ${
                  openSections === 4 ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              />
            </button>
            <div
              className={`sidebar-section-content ${
                openSections === 4 ? "show" : ""
              }`}
            >
              <Nav.Link href="#" className="sidebar-a ps-4">
                Request Withdraw
              </Nav.Link>
              <Nav.Link href="#" className="sidebar-a ps-4">
                Withdraw History
              </Nav.Link>
            </div>
          </div>
        </Nav>
      </div>
    </>
  );
}
