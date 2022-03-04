import React, { Component } from 'react';
import './Doctor_Game.css';

// TODO single hover point over whole image
// TODO git pull
// onHover card show animation hide
// noHover card hide animation show

class Hover_point extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='hover_point' 
            onMouseEnter={() => this.props.updater(this.props.Tag,true)}
            onMouseLeave={() => this.props.updater(this.props.Tag,false)}
            >
                {this.props.Tag}
            </div>
        )
    }
}

class Left_Doctor extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='left_doctor'>
          Doctor_img
          <Hover_point 
            Tag={1}
            updater={this.props.updater}
          />
          <Hover_point 
            Tag={2}
            updater={this.props.updater}
          />
      </div>
    )
  }
}

class Right_Doctor extends Component {
  render() {
    return (
      <div className='right_doctor'>
          stats
          {this.props.children}
      </div>
    )
  }
}
class DoctorGame1 extends Component {
  constructor(props) {
      super(props)
      this.state={
          stat : 0,
      };
  }
  render() {
    return (
      <div className='doctor_container'>
          <Left_Doctor 
            updater={(tag,state) => {
              state
                ?this.setState({stat: tag})
                :this.setState({stat:0})
              }}
            mouseLeave={(num) => this.setState({stat : 0})}
          />
          <div className='shield'>
              Shield
          </div>
          <Right_Doctor>
            {this.state.stat}
          </Right_Doctor> 
      </div>
    )
  }
}


class DoctorGame extends Component {
  constructor(props) {
      super(props)
      this.state={
          stat : 0,
      };
  }
  render() {
    return (
      <div className='doctor_container'>
        <h1 className='doctor_head_text'>Fitmedik creates a data driven Digital Twin of the healthcare worker and simulates it
          to predict health vulnerabilities.
          Hospital management monitors the twins of their staff to improve operational efficiency.
        </h1>
        
      <div className='doctor_row'>
      <div className='left_doctor hover_point'
        onMouseEnter={() => {this.setState({stat: 1})}}
        onMouseLeave={() => {this.setState({stat: 0})}}
      >
          <img src={require('./stats_img/leftdoctor.png')} />
          {
            this.state.stat?'':
          <div className='doctor_clickanimation'>
          <img src={require('./stats_img/clickamination.gif')}  height='300px'/>
          </div>
          }
      </div>
          <div className='shield'>
          <img src={require('./stats_img/shield.gif')} />
          </div>
      <div className='right_doctor'>
          <img src={require('./stats_img/rightdoctor.png')} />
          {
            this.state.stat?
          <div className='doctor_statcontainer'>
          <img src={require('./stats_img/stats1.png')} />
          <img src={require('./stats_img/stats2.png')} />
          </div>
          :''
          }
      </div>
      </div>
      </div>
    )
  }
}
export default DoctorGame;