import React from 'react';
import './navbar.css'

export default function navbar() {
    return (
        <div className="header-bg">
            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg navbar-light pt-xl-4 pt-lg-3 pt-md-2 pt-sm-1">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="logo.png" alt="" className="responsive-logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto" style={{fontSize: "18px"}}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home" style={{fontWeight: "500"}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#digitaltwin">Digital Twin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#webdashboard">Web Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#appscreen">Mobile App</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contactus">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
            <div className="container header-content d-flex" id="home">
                <div className="row align-content-center align-items-center" style={{flexWrap: 'nowrap'}}>
                    <div className="col-lg-6 ">
                        <h1 className="display-2 cus-d2" style={{fontWeight: "600"}}>SmartCare for Healthcare workers.</h1>
                        <h5 class="txt-body pt-4 lh-base">Monitor, analyze & manage the staff burnouts in real-time to enhance your care delivery.</h5>
                        <form className="custom-input mt-3 mt-sm-4 mt-md-5" action="">
                            <input className="transparent-input" size="1" type="text" placeholder="Enter Email" />
                            <button type="button" className="custom-button">Join Waitlist</button>
                        </form>
                    </div>
                    <div className="col-lg-6 d-flex mt-5 mt-lg-0 justify-content-center" >
                        <img src="headerimg.png" alt="" style={{width: "90%", transform: 'scale(1.5)', overflow: 'clip'}}/>
                    </div>
                </div> 
             </div>
        </div>
    )
}
