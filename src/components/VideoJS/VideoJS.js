import React, { Component } from 'react'
import VideoPlay from 'react-video-js-player';
// import video from './Dummy.mp4'
import './video.css'

export default class VideoJS extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className=" col-md-6 col-sm-0 col-0 video-txthead">
                            <b><h1 className= 'cus-d2'>Healthy Medics,</h1>
                                <h1 className='cus-d2'>Better Healthcare,</h1>
                                <h1 className='cus-d2'>Improved Lives!</h1></b>
                            {/* <h5 className='txt-body pt-4 lh-base' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. </h5> */}
                        </div>
                        <div className=" col-md-6 col-sm-12 col-12 videowrapper">
                            <iframe src="https://player.vimeo.com/video/493370943?h=3f98cb151a"   frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen ></iframe>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
