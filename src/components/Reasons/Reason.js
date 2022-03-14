import React, { Component } from 'react'
import $ from 'jquery';

import './reason.css'

export default class Reason extends Component {
    componentDidMount() {
        var a = 0;
        $(window).scroll(function () {
            var oTop = $("#counter-box").offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $(".counter").each(function () {
                    var $this = $(this),
                        countTo = $this.attr("data-number");
                    $({
                        countNum: $this.text()
                    }).animate(
                        {
                            countNum: countTo
                        },

                        {
                            duration: 850,
                            easing: "swing",
                            step: function () {
                                $this.text(
                                    Math.ceil(this.countNum).toLocaleString("en")
                                );
                            },
                            complete: function () {
                                $this.text(
                                    Math.ceil(this.countNum).toLocaleString("en")
                                );
                                //alert('finished');
                            }
                        }
                    );
                });
                a = 1;
            }
        });
    }
    render() {
        return (
            <section className='stats_bg'>
                <div className="container pb-5">
                    <h1 className='stats_txt text-white cus-d2' >Why <span id='txt-color'>Fitmedik?</span></h1>
                    <div className="row row-cols-1 row-cols-md-2 " style={{ paddingTop: " 96px" }} >
                        <div className="col reason_grid line1" >
                            <div className="card">
                                <div className="card-body" id="counter-box">
                                    <div className="d-flex">
                                        <span className="card-title counter cus-d1 " data-number="86"></span> <span className='card-title cus-d1'>%</span>
                                    </div>
                                    <h5 className="reason_card-title text-white pt-4">Medics Experience <br /> Anxiety & Stress</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col reason_grid line2" style={{ paddingLeft: " 60px" }}>
                            <div className="card">
                                <div className="card-body" id="counter-box">
                                    <div className="d-flex">
                                        <span className='card-title cus-d1'>$</span><span className="card-title counter cus-d1 " data-number="7600"></span>
                                    </div>
                                    <h5 className="reason_card-title text-white pt-4">Lost per medic <br /> per year</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 " >
                        <div className="col reason_grid line3">
                            <div className="card">
                                <div className="card-body pt-5" id="counter-box">
                                    <div className="d-flex">
                                        <span className="card-title counter cus-d1 " data-number="76"></span> <span className='card-title cus-d1'>%</span>
                                    </div>
                                    <h5 className="reason_card-title text-white pt-4">Medics Face Exhaustion <br /> and Burnout</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col reason_grid line4" style={{ paddingLeft: " 60px" }}>
                            <div className="card">
                                <div className="card-body pt-5" id="counter-box">
                                    <div className="d-flex">
                                        <span className="card-title counter cus-d1 " data-number="3"></span> <span className='card-title cus-d1'>&nbsp;years</span>
                                    </div>
                                    <h5 className="reason_card-title text-white pt-4">Average staff<br /> turnover</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}