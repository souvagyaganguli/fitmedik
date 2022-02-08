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
                                //$this.text(Math.ceil(this.countNum));
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
            <div className='stats_bg'>
                <div className='container pt-5 pb-5'>
                    <h1 className='stats_txt text-white'>Highest <span id='txt-color'>Suicide Rates</span></h1>
                    <h1 className='text-white stats_txt' style={{ paddingBottom: " 136px" }}>among all the professions</h1>
                    <div className="card-group">
                        <div className="card">
                            <div className="card-body" id="counter-box">
                                <span className="card-title counter" data-number="86"></span> <span className='card-title'>%</span>
                                <p className="card-text text-white">Experience <br /> Anxiety</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body" id="counter-box">
                                <span className="card-title counter" data-number="76"></span> <span className='card-title'>%</span>

                                {/* <h5 className="card-title counter" data-count="7600">0</h5> */}
                                <p className="card-text text-white">Face Exhaustion <br /> and burnout</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body" id="counter-box">
                                <span className="card-title counter" data-number="93"></span> <span className='card-title'>%</span>
                                {/* <h5 className="card-title counter" data-count="9300">0</h5> */}
                                <p className="card-text text-white">Experience <br /> Stress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


