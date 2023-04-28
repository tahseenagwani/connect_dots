import React from "react";
import './Game.css'
import { GAME_STATE_IDLE,
    GAME_STATE_PLAYING,
    GAME_STATE_WIN,
    GAME_STATE_DRAW,

    NO_CIRCLES,
    NO_PLAYER,
    PLAYER_1,
    PLAYER_2} from './Constants'

const Header=(props)=>
{
    const renderLabel=()=>{
    switch(props.gameState){
        case GAME_STATE_PLAYING:
            return <div> Player {props.player} turn</div> 
        case GAME_STATE_WIN:
            return <div> Player {props.winPlayer} Wins</div> 
        
        case GAME_STATE_DRAW:
            return <div> Its a Draw</div> 
        
            default:
            
    }}

return(
<div className="panel header">
    <div className="text">
          {renderLabel(  )}
    </div>

</div>

)

}
export default Header 