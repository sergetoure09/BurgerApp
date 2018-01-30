import React from 'react'
import Aux from './Aux'

const Ingredients=props=>{
    let ingredient=null
    switch (props.type){
        case 'cheese':
        ingredient =  <div className="cheese"></div>
        break;
        case 'tomato':
        ingredient= <div className="tomato"></div>
        break;
        case 'onion':
        ingredient= <div className="onion"></div>
        break;
        case 'meatball':
        ingredient= <div className="meatball"></div>
        break;
        case 'pickle':
        ingredient=  <div className="pickle"></div>
        break;
        case 'patty':
        ingredient= <div className="patty"></div>
        break;
        default:
        ingredient= <h5>Add ingredients to your burger</h5>
        break;

    }

    return(
        <Aux>
        {ingredient}
        </Aux>
)
}


export default Ingredients