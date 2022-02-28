import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <section className="dashboard-benefits">
                <div className="container">
                    <div className="row mb-4">
                        <h1 className="cus-d2">Benefits of using</h1>
                        <h1 className="cus-d2" style={{ color: "#F55F4B" }}>Fitmedic Dashboard</h1>
                    </div>
                    <div className="row pt-2 pt-md-3 pt-lg-4">
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                            <h4 style={{ fontWeight: "600", color: "#F55F4B" }}>01. </h4>
                            <h4 style={{ fontWeight: "500" }}>Improved patient care-delivery & experience</h4>
                            {/* <h5 className="txt-body pt-2 pt-lg-3 lh-base">Lorem varius tincidunt orci, quis leo magna gravida vel dictum. Ultrices sed.</h5> */}
                        </div>
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                            <h4 style={{ fontWeight: "600", color: "#F55F4B" }}>02. </h4>
                            <h4 style={{ fontWeight: "500" }}>Enhanced operational efficiency & revenue</h4>
                            {/* <h5 className="txt-body pt-2 pt-lg-3 lh-base">Lorem varius tincidunt orci, quis leo magna gravida vel dictum. Ultrices sed.</h5> */}
                        </div>
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                            <h4 style={{ fontWeight: "600", color: "#F55F4B" }}>03. </h4>
                            <h4 style={{ fontWeight: "500" }}>Predictive analysis-based resource/workload management</h4>
                            {/* <h5 className="txt-body pt-2 pt-lg-3 lh-base">Lorem varius tincidunt orci, quis leo magna gravida vel dictum. Ultrices sed.</h5> */}
                        </div>

                    </div>
                </div>
            </section>
        )

    }
}
