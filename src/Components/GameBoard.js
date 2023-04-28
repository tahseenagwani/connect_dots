import React, { useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import '../Components/Game.css'
import Header from './Header'
import Footer from "./Footer";
import { getComputerMove, isDraw, isWinner } from "./Helper";
import { GAME_STATE_IDLE,
         GAME_STATE_PLAYING,
         GAME_STATE_WIN,
         GAME_STATE_DRAW,
    
         NO_CIRCLES,
         NO_PLAYER,
         PLAYER_1,
         PLAYER_2} from './Constants'
import { isClickableInput } from "@testing-library/user-event/dist/utils";



const GameBoard =()=>
{ 
   
 const [gameBoard,setgameBoard] =useState(Array(16).fill(NO_PLAYER))
const [currentPlayer,setcurrentPlayer]=useState(PLAYER_1);
const [gameState,setGameState]=useState(GAME_STATE_PLAYING)
const [winPlayer,setwinPlayer]=useState(NO_PLAYER);

useEffect(()=>{
initGame();

 },[])

const initGame=()=>{
    console.log("initialize game")
    setgameBoard(Array(16).fill(NO_PLAYER))
    setcurrentPlayer(PLAYER_1)
    setGameState(GAME_STATE_PLAYING)
}


const initBoard=()=>
{
    const circles=[];
    // gameBoard.map((value,pos)=>{
    //     console.log(pos)
    //     circles.push(renderCircle(pos))
    // }
   
    // )
    for(let i=0;i<NO_CIRCLES;i++){
        circles.push(renderCircle(i))

    }
    return circles
}

const circleClicked=(id)=>{
   // console.log('Circle CLicked')
   if(gameBoard[id]!==0){ return}
   if(gameState!==GAME_STATE_PLAYING){return}
    console.log("Game board value :",gameBoard)
 setgameBoard((prev)=>

    {
        console.log("provious value:",prev)
        return prev.map((circle,pos)=>{
            // console.log("cirvle value:",circle)
            // console.log("position:",pos)
            // console.log("id vallue:",id)
       
                if(pos===id) return currentPlayer;
                return circle
        })
    } 

   )
if(isDraw(gameBoard,id,currentPlayer)){
setGameState(GAME_STATE_DRAW)
setwinPlayer(NO_PLAYER)
    console.log("Draw")
}
if(isWinner(gameBoard,id,currentPlayer)){
setGameState(GAME_STATE_WIN)
setwinPlayer(currentPlayer)
    console.log("winner")
}
setcurrentPlayer(currentPlayer===PLAYER_1?PLAYER_2:PLAYER_1)

}
const renderCircle= (id)=>{
  return <GameCircle key={id} id={id} onCircleClicked={circleClicked} className={`player_${gameBoard[id]}`}/>  
}

const onsuggestClick=()=>{
 
 
circleClicked(getComputerMove(gameBoard))


}



return( 
    <>
    <Header gameState={gameState} player={currentPlayer} winPlayer={winPlayer}/>
        <div className="gridBox">
            
            {initBoard()}
        
        
        </div>
    <Footer onclick={initGame} onsuggestClick={onsuggestClick} gameState={gameState}/>
</>
)
}
export default GameBoard