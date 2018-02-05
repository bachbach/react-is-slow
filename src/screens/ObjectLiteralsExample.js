import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import ObjectLiteralBad from 'containers/ObjectLiteralBad';
import ObjectLiteralGood from 'containers/ObjectLiteralGood';

class ObjectLiteralsExample extends Component {
  render () {
    return (
      <div>
        <div className='app--navigation--item'>
          <Link to='/object-literals/bad'>Bad example</Link>
        </div>
        <div className='app--navigation--item'>
          <Link to='/object-literals/good'>Good example</Link>
        </div>
        <Route exact path='/object-literals/bad' component={ObjectLiteralBad} />
        <Route path='/object-literals/good' component={ObjectLiteralGood} />
      </div>
    )
  }
}

ObjectLiteralsExample.propTypes = {

}

export default ObjectLiteralsExample