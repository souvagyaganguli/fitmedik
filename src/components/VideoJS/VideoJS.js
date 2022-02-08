import React from 'react';
import VideoPlay from 'react-video-js-player';
import video from './Dummy.mp4'

const VideoJS = () => {
    const videoSrc = video;
    const poster = "https://images.unsplash.com/photo-1523395243481-163f8f6155ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

    return (
        <div className="row pb-5 gx-0">
            <div className="col  video-txthead">
                <b><h1 className='txt-head'>Pellentesque</h1>
                    <h1 className='txt-head'>lacus orci</h1></b>
                <p className='txt-body' style={{ paddingTop: " 40px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. </p>
            </div>
            <div className="col" style={{ marginTop: " 144px" }}>
                <div>
                    <VideoPlay
                        src={videoSrc}
                        poster={poster}
                        width="673"
                        height="448.67"
                    />
                </div>
            </div>
        </div>

    );
};
export default VideoJS;