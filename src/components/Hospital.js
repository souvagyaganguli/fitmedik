import React, { Component } from 'react'

export default class Hospital extends Component {
    render() {
        return (
            <section className="hospital">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-8">
                        <h1 className="cus-d2 text-center">Easily manage your Hospitals with us</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <h5 className="txt-body pt-4 lh-base text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.</h5>
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