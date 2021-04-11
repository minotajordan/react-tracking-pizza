import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement, newIncrement} from '../redux/actions/countAction'

const IndexPage = ({counted, increment, decrement, newIncrement}) => {
  return(
    <div>
      <h1>Pedido</h1>
      <h2>Ordenes actuales: {counted}</h2>
      <hr/>
      <button onClick={() => increment()}>Nuevo pedido</button> 
      &nbsp; 
      <button onClick={() => decrement()}>Remover pedido</button>
      &nbsp; 
      <button onClick={() => newIncrement(666)}>New Data</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counted: state.count ? state.count.count : 0
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  newIncrement: (string) => dispatch(newIncrement(string))
});


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)