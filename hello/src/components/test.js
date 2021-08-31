import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }
  render() {
    return (
      <div>
        test component
        <br />
        <botton onClick={this.handleClick}>
          {this.state.isToggleOn ? 'On' : 'Off'}
        </botton>
      </div>
    );
  }
}
export { Test };
