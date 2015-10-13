import React from 'react';
import Navbar from 'components/Navbar';
import 'styles/core.scss';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  constructor () {
    super();
  }

  render () {
    return (
      <div className='page-container'>
        <Navbar />
        <div id="main">
          <div id="main-container" className='container'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
