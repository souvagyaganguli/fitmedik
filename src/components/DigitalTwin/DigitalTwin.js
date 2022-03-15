import React, { Component } from 'react';
import './DigitalTwin.css';

let imgBaseDir = "/img/digitaltwin/";

class Hover_point extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='hover_point'
        onMouseEnter={() => this.props.updater(this.props.Tag, true)}
        onMouseLeave={() => this.props.updater(this.props.Tag, false)}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    )
  }
}

class DigitalTwin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stat: 0,
    };
    this.statupdater = this.statupdater.bind(this);
  }
  statupdater(tag, state) {
    if (state) this.setState({ stat: tag });
    else this.setState({ stat: 0 });
  }
  render() {
    return (
      <section>
      <div className="container overflow-hidden">
      <div className='doctor_container' id='digitaltwin'>
        <h1 className='doctor_head_text'>
          An IoT ecosystem for your hospital to monitor &
          manage burnout of your workers in real-time.
        </h1>

        <div className='doctor_row'>
          <div className='left_doctor'
          >
            <img src={imgBaseDir + 'leftdoctor.png'} />
            <div style={{ top: 0 }}>
              <Hover_point
                style={{ top: '0', left: '100px', height: '100px', width: '120px' }}
                Tag='head' updater={this.statupdater} >
              </Hover_point>
              <Hover_point
                style={{ top: '100px', left: '70px', height: '150px', width: '180px' }}
                Tag='body' updater={this.statupdater} >
              </Hover_point>
              <Hover_point
                style={{ top: '250px', left: '70px', height: '200px', width: '180px' }}
                Tag='lower' updater={this.statupdater} >
              </Hover_point>
            </div>
            {
              this.state.stat ? '' :
                <div className='doctor_clickanimation'>
                  <img src={imgBaseDir + 'clickamination.gif'} height='300px' />
                </div>
            }
          </div>
          <div className='shield'>
            <img src={imgBaseDir + 'shield.gif'} />
          </div>
          <div className='right_doctor'>
            <img src={imgBaseDir + 'rightdoctor.png'} />
            {
              this.state.stat == 'head' ?
                <div className='doctor_statcontainer'
                  style={{ top: '0px', display: 'flex', left: '-80px' }}
                >
                  <div>
                    <img src={imgBaseDir + 'head_left.png'} />
                  </div>
                  <div>
                    <div style={{ height: '30px' }}></div>
                    <img src={imgBaseDir + 'head_right.png'} />
                  </div>
                </div>
                : ''
            }
            {
              this.state.stat == 'body' ?
                <div className='doctor_statcontainer'
                  style={{ top: '100px', display: 'flex', left: '-80px' }}
                >
                  <div>
                    <img src={imgBaseDir + 'body_left.png'} />
                  </div>
                  <div>
                    <div style={{ height: '30px' }}></div>
                    <img src={imgBaseDir + 'body_right.png'} />
                  </div>
                </div>
                : ''
            }
            {
              this.state.stat == 'lower' ?
                <div className='doctor_statcontainer'
                  style={{ top: '230px', left: '180px' }}
                >
                  <img src={imgBaseDir + 'lower.png'} />
                </div>
                : ''
            }
          </div>
        </div>
        <div className='doctor_row_mobile'>
          <div style={{position: 'relative'}}>
            <img src={imgBaseDir + 'rightdoctor.png'} />
            <div className='doctor_statcontainer' id='mobstat1'
              style={{ top: '0px', display: 'flex', left: '-80px' }}
            >
              <div>
                <img src={imgBaseDir + 'head_left.png'} />
              </div>
              <div>
                <div style={{ height: '30px' }}></div>
                <img src={imgBaseDir + 'head_right.png'} />
              </div>
            </div>
            <div className='doctor_statcontainer' id='mobstat2'
              style={{ top: '100px', display: 'flex', left: '-80px' }}
            >
              <div>
                <img src={imgBaseDir + 'body_left.png'} />
              </div>
              <div>
                <div style={{ height: '30px' }}></div>
                <img src={imgBaseDir + 'body_right.png'} />
              </div>
            </div>
            <div className='doctor_statcontainer' id='mobstat3'
              style={{ top: '230px', left: '180px' }}
            >
              <img src={imgBaseDir + 'lower.png'} />
            </div>
          </div>
        </div>
        <div className='doctor_bottomtext'>
          <h5 class="txt-body pt-2 lh-base">
            Fitmedik creates a data driven Digital Twin of the healthcare worker and simulates it
            to predict health vulnerabilities.
            Hospital management monitors the twins of their staff to improve operational efficiency.
          </h5>
        </div>
      </div>
      </div>
      </section>
    )
  }
}
export default DigitalTwin;