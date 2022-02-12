import React, { Component } from 'react'
import './reason.css'

export default class Reason extends Component {
    render() {
        return (
            <section className='stats_bg'>
                <div className="container pb-5">
                    <h1 className='stats_txt text-white cus-d2' >Why <span id='txt-color'>Fitmedik?</span></h1>
                    <div className="row row-cols-1 row-cols-md-2 " style={{ paddingTop: " 96px" }} >
                        <div className="col reason_grid line1" >
                            <div className="card">
                                <div className="card-body">
                                    <img src="Ellipse.png" alt="" height="80" />
                                    <h5 className="reason_card-title text-white pt-4 fs-3">Lorem Ipsum</h5>
                                    <h5 className="reason_card-text text-white txt-body pt-4 lh-base ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum voluptate fuga.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col reason_grid line2" style={{ paddingLeft: " 60px" }}>
                            <div className="card">
                                <div className="card-body ">
                                <img src="Ellipse.png" alt="" height="80" />
                                    <h5 className="reason_card-title text-white pt-4 fs-3">Lorem Ipsum</h5>
                                    <h5 className="reason_card-text text-white txt-body pt-4 lh-base ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum voluptate fuga.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 " >
                        <div className="col reason_grid line3">
                            <div className="card">
                                <div className="card-body pt-5">
                                <img src="Ellipse.png" alt="" height="80" />
                                    <h5 className="reason_card-title text-white pt-4 fs-3">Lorem Ipsum</h5>
                                    <h5 className="reason_card-text text-white txt-body pt-4 lh-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum voluptate fuga.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col reason_grid line4" style={{ paddingLeft: " 60px" }}>
                            <div className="card">
                                <div className="card-body pt-5">
                                <img src="Ellipse.png" alt="" height="80" />
                                    <h5 className="reason_card-title text-white pt-4 fs-3">Lorem Ipsum</h5>
                                    <h5 className="reason_card-text text-white txt-body pt-4 lh-base ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum voluptate fuga.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}