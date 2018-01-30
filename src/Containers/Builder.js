import React, { Component } from 'react'
import Aux from '../Components/Aux'
import Panel from '../Components/Panel'
import Burger from '../Components/Burger'
import Header    from '../Components/Header'

class Builder extends Component{

    state={
        ingredients:{
            cheese:{quant:2,up:5},
            tomato:{quant:2,up:5},
            pickle:{quant:2,up:5},
            meatball:{quant:2,up:5},
            patty:{quant:2,up:5},
            onion:{quant:2,up:5}
    }
}


render(){

    return(
        <Aux>
            <Header />
         <h1>The Best Burger</h1>
         <h2>Only $9.99</h2>

        <Burger />
        <Panel />
        </Aux>
    )
}
}


export default Builder