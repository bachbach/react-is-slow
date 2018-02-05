import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <header className='app--header'>
          <h1 className='app--title'>React is slow!</h1>
        </header>
        <div className='app--navigation'>
          <div className='app--navigation--item'>
            <Link to='/complex-data'>Complex data example</Link>
          </div>
          <div className='app--navigation--item'>
            <Link to='/final-app'>Final app</Link>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
