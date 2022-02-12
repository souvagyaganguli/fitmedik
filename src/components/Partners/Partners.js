import React, { Component } from 'react'
import $ from 'jquery';
// import Slider from 'react-slick';
import './partners.css'

export default class Partners extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $(".customer-logos").slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
        });
    }

    render() {
        return (
            <div className="partners">
                <div className="customer-logos container slider">

                    <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Logo_MicroStarInternational.svg" />
                    </div>

                    <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg" />
                    </div>

                    <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Logo_MicroStarInternational.svg" />
                    </div>

                    <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg" />
                    </div>

                    <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Logo_MicroStarInternational.svg" />
                    </div>

                    <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg" />
                    </div>

                    <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Logo_MicroStarInternational.svg" />
                    </div>

                    <div className="slide"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg" />
                    </div>

                </div>
            </div>
        )
    }
}
