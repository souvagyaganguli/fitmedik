import React, { Component } from 'react'
import './contact.css'

export default class Contact extends Component {
    render() {
        return (
    <section className="contact-form">
        <div className="container">
            <div className="row">
                <h1 className="cus-d2" style={{color: "#fff"}}>Get in touch</h1>
            </div>
            <div className="row pt-3 pt-lg-5">
                <form >
                    <div className="row">
                        <div className="col-md-6 mb-2 mb-sm-3 mb-md-4">
                            <input className="custom-input-2" type="text" placeholder="First Name" name="firstname"/>
                        </div>
                        <div className="col-md-6 mb-2 mb-sm-3 mb-md-4">
                            <input className="custom-input-2" type="text" placeholder="Last Name" name="lastname"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-2 mb-sm-3 mb-md-4">
                            <input className="custom-input-2" type="text" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-md-6 mb-2 mb-sm-3 mb-md-4">
                            <input className="custom-input-2" type="email" placeholder="Email" name="email"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-2 mb-sm-3 mb-md-4">
                            <textarea rows="3" className="custom-textarea" placeholder="Your Message" name="message"></textarea>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-12">
                            <input type="submit" className="btn custom-input-2 text-white" style={{backgroundColor: "#BD4839", border: "none"}} value="Submit Message"/>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    </section>

        )
    }
}
