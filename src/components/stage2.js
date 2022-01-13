import React,{useContext} from 'react'
import {MyContext} from '../context'


const Stage2=()=>{
    const context=useContext(MyContext)

    return (
        <div className="result_wrapper">
            <h3>The looser is:</h3>
            <div>{context.state.result}</div>
            <div className="action_button" onClick={context.resetGame}><h4>START OVER</h4></div>
            <div className="action_button btn_2" onClick={context.getNewLooser}><h4>GET NEW LOOSER</h4></div>
        
        </div>
    )
}

export default Stage2