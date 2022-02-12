import React, { Component } from 'react'
import './footer.css'

export default class Copyright extends Component {
    render() {
        return (
            <div className="copyright-part">
                <div className="container">
                    <div className="row py-5 d-flex justify-content-between" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.5)" }}>
                        <div className="col-sm-6">
                            <p className="fs-6 text-white">©2022 <span className="fw-bolder" style={{ color: "#F55F4B" }}>Fitmedic</span> | All rights reserved</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="social-medias">
                                <ul className="fs-6 text-white text-sm-end">
                                    <li><a href="/">Facebook</a></li>
                                    <li><a href="/">Twitter</a></li>
                                    <li><a href="/">Instagram</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}