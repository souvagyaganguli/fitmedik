import React from 'react';
import VideoPlay from 'react-video-js-player';
import video from './Dummy.mp4'
import './video.css'


const VideoJS = () => {
    const videoSrc = video;
    const poster = "https://www.businessinsider.in/thumb/msid-83716190,width-700,height-525,imgsize-118040/lloyd-dirks-qdy76giybw8-unsplash.jpg";

    return (
        <section>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6  video-txthead">
                        <b><h1 className=' cus-d2'>Pellentesque</h1>
                            <h1 className=' cus-d2'>lacus orci</h1></b>
                        <h5 className='txt-body pt-4 lh-base' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. </h5>
                    </div>
                    <div className="col-md-6 ">
                        <iframe src="https://player.vimeo.com/video/493370943?h=3f98cb151a" width="640"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen ></iframe>
                    </div>
                </div>
            </div>
        </section>

    );
};
export default VideoJS;