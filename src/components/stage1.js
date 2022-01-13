import {Button,Form, Alert, Badge} from 'react-bootstrap'
import {useState, useContext, useRef} from 'react'
import {MyContext} from '../context'

const Stage1=()=>{
    const textInput=useRef()
    const context=useContext(MyContext)
    const [error, setError]=useState([false, ''])
    const handleSubmit=(e)=>{
        e.preventDefault()
        const value=textInput.current.value
        const validate=validateInput(value)
        if(validate){
            setError([false, ''])
            context.addPlayer(value)
            textInput.current.value=""

        }
        else{
            console.log("err")
        }

    }
    console.log(context)
    const validateInput=(value)=>{
      if(value===""){
          setError([true, 'Sorry, you need add something'])
          return false
      }
      if (value.length<=2){
          setError([true, "Sorry, you need 3 character at least "])
          return false
      }
      return true 
    }

    return (
        <>
        <Form onSubmit={handleSubmit}className="mt-4">
            <Form.Group>
            <Form.Control
              type="text"
              placeholder="Add Player"
              ref={textInput}
            >

            </Form.Control>
            </Form.Group>
        
            {
               error[0]?
               <Alert className="mt-2" variant="danger">{error[1]}</Alert>

               :null
            }
            <Button className="mt-2" variant="primary" type="submit">Add Player</Button>
            {context.state.players && context.state.players.length>0?
            <>
            <hr/>
            <div>
                <ol className="list-group">
                   {context.state.players.map((item, index)=>(
                       <li key={index} className="list-group-item d-flex justify-content-between"> 
                       
                       {item}
                         
                         <Badge bg="danger" className="mr-2"  onClick={()=>context.removePlayer(index)}>x</Badge>
                      
                        
                       </li>
                   ))}
                </ol>
                <div  className="action_button"
                onClick={()=>context.nextHandler()}
                >
                    NEXT
                </div>
            </div>
            </>
            :null
            }
        </Form>
        
        </>
    )
}

export default Stage1