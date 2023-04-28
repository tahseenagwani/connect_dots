import React from 'react'
import '../Components/Game.css'

const GameCircle = (props) => {  

const stringid=Number.toString(props.id)
// console.log(typeof(stringid))
return (
    <div className={`smallBoxes ${props.className}`} id={`newid_${props.id}`}  onClick={()=> props.onCircleClicked(props.id)}>
     {props.children}
    </div>
  )
}

export default GameCircle