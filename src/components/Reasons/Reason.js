import React, { Component } from 'react'
import './reason.css'

export default class Reason extends Component {
    render() {
        return (
            <div className='stats_bg'>
                <div className="container pb-5">
                    <h1 className='stats_txt text-white' style={{ paddingTop: " 144px" }}>Why <span id='txt-color'>Fitmedik?</span></h1>
                    <div className="row row-cols-1 row-cols-md-2 g-4 " style={{ paddingTop: " 96px" }} >
                        <div className="col reason_grid">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="reason_card-title text-white pb-4">Lorem Ipsum</h5>
                                    <p className="reason_card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum voluptate fuga.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col reason_grid">
                            <div className="card">
                                <img src="#"     alt="" />
                                <div className="card-body">
                                    <h5 className="reason_card-title text-white pb-4">Lorem Ipsum</h5>
                                    <p className="reason_card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum voluptate fuga.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-4" style={{ paddingTop: " 120px" }}>
                        <div className="col reason_grid">
                            <div className="card">
                                <img src="#" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="reason_card-title text-white pb-4">Lorem Ipsum</h5>
                                    <p className="reason_card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum voluptate fuga.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col reason_grid">
                            <div className="card">
                                <img src="#" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="reason_card-title text-white pb-4">Lorem Ipsum</h5>
                                    <p className="reason_card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum voluptate fuga.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}