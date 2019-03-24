import React from 'react';
import { connect } from 'react-redux'

import { inc, dec } from './store/counter'

class Counter extends React.Component {
  render() {
    return <div>
      <div>Current state: {this.props._value} </div>
      <button onClick = {this.props._increment}>+</button>
      <button onClick = {this.props._decrement}>-</button>
    </div>
  }
}

const mapStateToProps = state => ({
  _value: state.counter
})

const mapDispatchToProps = dispatch => ({
  _increment: () => dispatch(inc()),
  _decrement: () => dispatch(dec())
})



export default connect(mapStateToProps, mapDispatchToProps)(Counter);