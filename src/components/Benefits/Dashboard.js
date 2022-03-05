import React, { Component } from 'react'
import './benefits.css'

export default class Dashboard extends Component {
    render() {
        return (
            <section style={{paddingTop:"0"}}>
                <div className="container">
                    <div className="row mb-4">
                        <h1 className="cus-d2">Benefits of using</h1>
                        <h1 className="cus-d2" style={{ color: "#F55F4B" }}>Fitmedic Dashboard</h1>
                    </div>
                    <div className="row pt-2 pt-md-3 pt-lg-4">
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0" style={{paddingRight : "32px"}}>
                            <h4 style={{ fontWeight: "600", color: "#F55F4B", fontSize: "28px" }}>01. </h4>
                            <h4 style={{ fontWeight: "400" }}>Improved patient care-delivery & experience</h4>
                        </div>
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0" style={{paddingRight : "32px"}}>
                            <h4 style={{ fontWeight: "600", color: "#F55F4B", fontSize: "28px" }}>02. </h4>
                            <h4 style={{ fontWeight: "400" }} >Enhanced operational efficiency & revenue</h4>
                        </div>
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                            <h4 style={{ fontWeight: "600", color: "#F55F4B", fontSize: "28px" }}>03. </h4>
                            <h4 style={{ fontWeight: "400" }} >Predictive analysis-based resource/workload management</h4>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
