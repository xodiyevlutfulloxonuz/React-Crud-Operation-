import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react'
import {MyContext} from './context'
import Stage1 from './components/stage1'
import Stage2 from './components/stage2'
import './App.css'

class  App extends Component {
  static contextType=MyContext


  render(){
    return(
      
        <div className="wrapper">
          <div className="center-wrapper">
            <h1> Shotni kim to'laydi? 😆</h1>
            {this.context.state.stage===1?
            <Stage1/>:
            <Stage2/>}
          </div>
    
            
        </div>
      
    )
  }
 
}

export default App;
