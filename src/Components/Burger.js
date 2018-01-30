import React from 'react'
import Ingredients from './Ingredients'
import Bread from './Bread'
import Plate from './Plate'
import Aux from './Aux'



const Burger=props=>{
    let ingredients=[]
    if(props.ingredients){
    Object.keys(props.ingredients).map(key=> {
        if(+props.ingredients[key] !==0){ 
        for (let i=1;i<=+props.ingredients[key];i++){
        ingredients.push(<Ingredients type={key}/>)
                }
            }
        })
    }
        return(
            <Aux classes="burger">
            <Bread>
                {ingredients}
            </Bread>
            <Plate/>
            </Aux>
        )
    }


export default Burger