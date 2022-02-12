import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row d-flex justify-content-center pb-4">
                        <div className="col-12 col-md-8">
                            <h1 className="cus-d2 text-center" style={{color: "#fff", fontWeight: "300"}}>Give us a chance to prove that <span style={{color: "#FFE092", ontWeight: "500"}}>we care</span></h1>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-3 mt-sm-4 mt-md-5">
                        <div className="col-12 col-md-8">
                            <form className="custom-input custom-input-lt" action="">
                                <input className="transparent-input text-white" size="1" type="email" placeholder="Enter Email Address" />
                                <button type="button" className="custom-button">Join Waitlist</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
        )
                
    }
}