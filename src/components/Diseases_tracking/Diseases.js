import React, { Component } from 'react'
import './diseases.css'

export default class Diseases extends Component {
    render() {
        return (
            <section className="diseases-tracking" >
                <div className="container">
                    <h1 className="cus-d2">Diseases We Are Tracking</h1>
                    <div className="row pt-3 pt-lg-5">
                        <div className="col-12 col-lg-6 col-xl-3 mb-4 mb-xl-0 d-flex align-items-stretch">
                            <div className=" cus-card">
                                <div >
                                    <img src="d-i-1.svg" alt="" height="80"/>
                                        <h4 className=" mt-4" style={{fontWeight: "600"}}>Lifestyle Disorders</h4>
                                        <p className=" mt-3" style={{color: "rgba(0, 0, 0, 0.6)"}}>Dui auctor proin interdum turpis nunc, lacinia sapien, velit. Vitae sit faucibus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-3 mb-4 mb-xl-0 d-flex align-items-stretch">
                            <div className=" cus-card">
                                <div >
                                    <img src="d-i-2.svg" alt="" height="80"/>
                                        <h4 className="mt-4" style={{fontWeight: "600"}}>Cardiovascular Disorders</h4>
                                        <p className=" mt-3" style={{color: "rgba(0, 0, 0, 0.6)"}}>Dui auctor proin interdum turpis nunc, lacinia sapien, velit. Vitae sit faucibus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-3 mb-4 mb-xl-0 d-flex align-items-stretch">
                            <div className="cus-card">
                                <div >
                                    <img src="d-i-3.svg" alt="" height="80"/>
                                        <h4 className=" mt-4" style={{fontWeight: "600"}}>Hospital Acquired Infections</h4>
                                        <p className=" mt-3" style={{color: "rgba(0, 0, 0, 0.6)"}}>Dui auctor proin interdum turpis nunc, lacinia sapien, velit. Vitae sit faucibus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-3 mb-4 mb-xl-0 d-flex align-items-stretch">
                            <div className=" cus-card">
                                <div >
                                    <img src="d-i-4.svg" alt="" height="80"/>
                                        <h4 className=" mt-4" style={{fontWeight: "600"}}>Mental Health</h4>
                                        <p className="mt-3" style={{color: "rgba(0, 0, 0, 0.6)"}}>Dui auctor proin interdum turpis nunc, lacinia sapien, velit. Vitae sit faucibus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}