import React, { Component } from 'react'

export default class Phone extends Component {
    render() {
        return (
            <div className="container wrapper" >
                
                <div class="row sec1">
                    <div class="col" style={{ marginTop: " 264px" }}>
                        <b><h1 className='txt-head'>Lorem Ipsum</h1>
                            <h1 className='txt-head'>Lorem Ipsum</h1></b>
                        <p className='txt-body' style={{ paddingTop: " 40px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium culpa molestiae molestias, commodi numquam totam ipsum aperiam perspiciatis? Exercitationem iure, dignissimos velit ad quae consequuntur eum nulla quia tempora.</p>    </div>

                    <div class="col" style={{ marginTop: " 144px" }}>
                        <img id="pic" src="Phone layout .png" alt="" className="rounded mx-auto d-block background" />
                    </div>
                </div>
                <div class="row sec2">
                    <div class="col" style={{ marginTop: " 264px" }}>
                        <b><h1 className='txt-head'>Lorem Ipsum</h1>
                            <h1 className='txt-head'>Lorem Ipsum</h1></b>
                        <p className='txt-body' style={{ paddingTop: " 40px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium culpa molestiae molestias, commodi numquam totam ipsum aperiam perspiciatis? Exercitationem iure, dignissimos velit ad quae consequuntur eum nulla quia tempora.</p>    </div>

                    <div class="col" style={{ marginTop: " 144px" }}>
                        <img id="pic" src="Phone layout text.png" alt="" className="rounded mx-auto d-block background" />
                    </div>
                </div>
            </div>
        )
    }
}