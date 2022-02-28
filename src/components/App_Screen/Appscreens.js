import React, { Component } from 'react'
import './appscreens.css'

export default class Appscreens extends Component {
    render() {
        return (
            <div className="content" >
                <div className="div-text1">
                    <div className="div-text2">
                    <h1 className="display-2 cus-d2" style={{fontWeight: "600"}}>IoT enabled Mobile app for medics</h1>
                    <h5 className="txt-body pt-4 lh-base">Fitmedik ensures your health and well being of healthcare workers through a tailor-made mobile app which monitors their heart rate and sleep cycles through a wearable. </h5>
                    </div>
                    <div className="div-text2">
                    <h1 className="display-2 cus-d2" style={{fontWeight: "600"}}>Monitor vulnerabilities</h1>
                    <h5 className="txt-body pt-4 lh-base">Fitmedik make healthcare workers aware about how vulnerable their health profile is to a certain disease through various Artificial Intelligence and Machine Learning Algorithms. </h5>
                    </div>
                    <div className="div-text2">
                    <h1 className="display-2 cus-d2" style={{fontWeight: "600"}}>On-demand access to care</h1>
                    <h5 className="txt-body pt-4 lh-base">Fitmedik provides access to best Mental health and well being experts to the healthcare workers. Through anonymity and confidentiality, we break the barriers which medics face as patients. </h5>
                    </div>
                    
                </div>
                <div className="div-1">
                    <div className="div-2">
                        <div className="div-3">
                            <img style={{display: "none"}} src="/" id="pic1" />
                            <img style={{display: "none"}} src="/" id="pic2" />
                            <img style={{display: "none"}} src="/" id="pic3" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}