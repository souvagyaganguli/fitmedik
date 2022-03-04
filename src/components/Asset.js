import React, { Component } from 'react'

export default class Asset extends Component {
    render() {
        return (
            <section className="background">
                <div className="container">
                    <div className="row align-content-center align-items-center">
                        <div className="col-lg-6">

                            <h1 className="cus-d2 text-white">Medicines cure a disease,</h1>
                            <h1 className="cus-d2 text-white">but only healthy medics can cure patients</h1>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
                            <img src="coverimg.png" alt="" style={{ width: "90%" }} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}