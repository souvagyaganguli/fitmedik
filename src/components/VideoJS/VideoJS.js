import React, { Component } from 'react'
import './video.css'

export default class VideoJS extends Component {
    render() {
        return (
            <section>
                <div className="container box">
                    <div className="row d-flex align-items-center">
                        <div className=" col-md-6 col-sm-0 col-0 ">
                            <h1 className='cus-d2'><span style={{color: 'rgb(245, 95, 75)'}} >Healthy</span> Medics, </h1>
                            <h1 className='cus-d2'>Better <span style={{color: 'rgb(245, 95, 75)'}} >Healthcare</span>,</h1>
                            <h1 className='cus-d2'><span style={{color: 'rgb(245, 95, 75)'}} >Improved</span> Lives!</h1>
                        </div>
                        <div className="video-contaier col-md-6 col-sm-12 col-12 videowrapper" >
                            <iframe className="iframe-video" style={{height:'100%', width:'100%'}} src="https://www.youtube.com/embed/penEf8ghaYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
