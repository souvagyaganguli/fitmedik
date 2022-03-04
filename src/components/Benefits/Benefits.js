import React, { Component } from 'react'
import './benefits.css'

export default class Benefits extends Component {
    render() {
        return (
            <section className="benefits">
            <div className="container">
                <div className="col-12 col-lg-6">
                    {/* <h3 className='benefits-heading'>BENEFITS</h3> */}
                    <h1 className="cus-d2">One stop IoT enabled ecosystem to counter workplace burnouts.</h1>
                    {/* <h5 className="txt-body pt-4 lh-base">Eget vel aenean ultrices dapibus aliquam vulputate etiam. In felis ultrices feugiat tortor mi diam dictum nisl, lacus. Tempus, aliquet a mauris dignissim nisl, facilisis. </h5> */}
                    <button type="button" className="custom-button mt-4">Let’s Start</button>
                </div>
            </div>
        </section>
        )
    }
}