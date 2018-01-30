import React, { Component } from 'react'
import Aux from '../Components/Aux'
import Panel from '../Components/Panel'
import Burger from '../Components/Burger'


class Builder extends Component{

    state={
        ingredients:{
            cheese:3,
            tomato:1,
            pickle:3,
            meatball:3,
            patty:2,
            onion:2
    },
    totalPrice:null
}


render(){

    return(
        <Aux>
         <h1>The Best Burger</h1>
         <h2>Only $9.99</h2>
        <Burger ingredients={this.state.ingredients}/>
        <Panel />
        </Aux>
    )
}
}


export default Builder