import { createContext } from "react"
import React from "react"


export const mainContext = createContext()

const Provider = mainContext.Provider

export default function MainContext({children}){
    
    const [type, setType]=React.useState("Todos")

    const [filter, setFilter]=React.useState("Todos")

    const [alimento, setAlimento] = React.useState(true)

    const [age, setAge] = React.useState(false)

    const [lastFilterValue, setLastFilterValue]=React.useState("Todos")


    const handleEventType = (event) =>{
        const  {value} = event.target;
        setType(value)
        setAlimento(false)
            
        
    }

    const handleEventFilter = (event) =>{
        const  {value} = event.target;
        setFilter(value)
        setLastFilterValue(filter)
        if (type === "Alimentos"){
            setAlimento("")
            
        }
        
        
    }

    const handleEventLastFilter = (event) =>{
        const  {value} = event.target;
        setAge(value)
        
    }

    
    
    const backToMenu = (()=>{
    setAlimento(true)
    setFilter("Todos")
    setType("Todos")   
        
    })

    const backToSubMenu = (()=>{
        setAlimento(false)
        setFilter(lastFilterValue) 
        setAge(false)
        
    
    })

   
    const valorContexto = {
        handleEventType: handleEventType,
        handleEventFilter: handleEventFilter,
        handleEventLastFilter:handleEventLastFilter,
        filter:filter,
        type:type,
        age:age,
        backToMenu:backToMenu,
        backToSubMenu:backToSubMenu,
        alimento:alimento,
    }





    
    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}