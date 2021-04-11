import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../redux/actions/countAction'

const IndexPage = ({counted, increment, decrement}) => {
  return(
    <div>
      <h1>Pedido</h1>
      <h2>Ordenes actuales: {counted}</h2>
      <hr/>
      <button onClick={() => increment()}>Nuevo pedido</button> 
      &nbsp; 
      <button onClick={() => decrement()}>Remover pedido</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counted: state.count ? state.count.count : 0
})

const mapDispatchToProps = { increment, decrement }

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)