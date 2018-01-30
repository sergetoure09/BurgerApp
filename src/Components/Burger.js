import React from 'react'
import Ingredients from './Ingredients'
import Bread from './Bread'
import Plate from './Plate'
import Aux from './Aux'



const Burger=props=>{
   
        return(
            <Aux classes="burger">
            <Bread>
                <Ingredients type="cheese"/>
                <Ingredients type="cheese"/>
                <Ingredients type="cheese"/>
                <Ingredients type="patty"/>
                <Ingredients type=""/>
            </Bread>
            <Plate/>
            </Aux>
        )
    }


export default Burger