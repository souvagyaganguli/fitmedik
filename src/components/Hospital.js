import React, { Component } from 'react'

export default class Hospital extends Component {
    render() {
        return (
            <section className="hospital" id="webdashboard">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        <h1 className="cus-d2 text-center">Web-Dashboard for effective Hospital Management</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <h5 className="txt-body pt-4 lh-base text-center mb-4">Understand burnout trends, impact on revenue and disease vulnerabilities in real-time</h5>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 mt-md-3 mt-lg-4">
                    <div className="col-12 col-md-10 col-lg-8">
                        <img src="hospital-screen.svg" alt="" style={{width: "100%"}}/>
                    </div>
                </div>
            </div>
    
        </section>
        )
    }
}