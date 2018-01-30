import React from 'react'
import Aux from './Aux'

const Bread=(props)=>{
    return(
        <Aux>
        <div className="bun-top"></div>
        {props.children}
        <div className="bun-bottom"></div>
        </Aux>
    )
}
export default Bread