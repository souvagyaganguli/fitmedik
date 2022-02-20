import React, { Component } from 'react';
import './Doctor_Game.css';

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
class Doctor_Game extends Component {
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
              console.log(`tag={tag}`);
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

export default Doctor_Game;