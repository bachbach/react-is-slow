import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import SelectorBad from 'connectors/SelectorBad';
import SelectorGood from 'containers/SelectorGood';

class SelectorsExample extends Component {
  render () {
    return (
      <div>
        <div className='app--navigation--item'>
          <Link to='/selectors/bad'>Bad example</Link>
        </div>
        <div className='app--navigation--item'>
          <Link to='/selectors/good'>Good example</Link>
        </div>
        <Route exact path='/selectors/bad' component={SelectorBad} />
        <Route path='/selectors/good' component={SelectorGood} />
      </div>
    )
  }
}

export default SelectorsExample