import React, { Component } from 'react'
import './video.css'

export default class VideoJS extends Component {
    render() {
        return (
            <div>
                <div className="container box">
                    <div className="row d-flex align-items-center">
                        <div className=" col-md-6 col-sm-0 col-0 ">
                            <b><h1 className= 'cus-d2'>Healthy Medics,</h1>
                                <h1 className='cus-d2'>Better Healthcare,</h1>
                                <h1 className='cus-d2'>Improved Lives!</h1></b>
                        </div>
                        <div className=" col-md-6 col-sm-12 col-12 videowrapper" >
                            <iframe src="https://player.vimeo.com/video/493370943?h=3f98cb151a"   frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen ></iframe>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
