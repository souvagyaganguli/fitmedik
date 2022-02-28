import React, { Component } from 'react'
import $ from 'jquery';
import './statistics.css'

export default class Statistics extends Component {
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
                <div className='container pt-5 pb-5'>
                    <h1 className='stats_txt text-white cus-d2'>Highest <span id='txt-color'>Suicide Rates</span></h1>
                    <h1 className='text-white stats_txt cus-d2' style={{ paddingBottom: " 136px" }}>among all the professions</h1>
                    <div className="card-group">
                        <div className="card">
                            <div className="card-body " id="counter-box">
                                <div className="d-flex">
                                    <span className="card-title counter cus-d1 " data-number="86"></span> <span className='card-title cus-d1'>%</span>
                                </div>
                                <p className="card-text text-white fs-3">Experience <br /> Anxiety & Stress</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body" id="counter-box">
                                <div className="d-flex">
                                    <span className="card-title counter cus-d1" data-number="76"></span> <span className='card-title cus-d1'>%</span>
                                </div>
                                <p className="card-text text-white fs-3">Face Exhaustion <br /> and burnout</p>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body" id="counter-box">
                                <div className="d-flex">
                                    <span className="card-title counter cus-d1" data-number="93"></span> <span className='card-title cus-d1'>%</span>
                                </div>
                                <p className="card-text text-white fs-3">Experience <br /> Stress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}


