import React from "react";
import './Game.css'
import { GAME_STATE_IDLE,
    GAME_STATE_PLAYING,
    } from './Constants'
const Footer=(props)=>
{
return(
<div className="panel footer">
    { 
    props.gameState=== GAME_STATE_PLAYING &&

    <button onClick={props.onsuggestClick}> Suggest</button>

    }
    {
  props.gameState !== GAME_STATE_PLAYING &&
<button onClick={props.onclick}> Newgame</button>
    }
    
    
</div>

)

}
export default Footer