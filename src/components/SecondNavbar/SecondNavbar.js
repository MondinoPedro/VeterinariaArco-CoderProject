
import { Link } from "react-router-dom"
import { useContext } from "react"
import React from "react"
import { mainContext } from "../../context/MainContext/MainContext"


export default function SecondNavbar(){
    const {backToMenu}= useContext(mainContext)
    const {backToSubMenu}= useContext(mainContext)
    const {handleEventFilter}=useContext(mainContext)
    const {handleEventLastFilter} = useContext(mainContext)
    const {alimento} =useContext(mainContext)
    
    const {handleEventType}= useContext(mainContext)

    const containerStyle ={
        width:"100%",
        backgroundColor:"#000",
        display:"flex",
        justifyContent:"center",
        marginBottom:"80px",
        borderBottom:"2px solid #fff"
    }
    const headerStyle = {
        backgroundColor: "#000",
        display:"flex",
        justifyContent:"center",
        width: "100%",
        height:"80px",
        fontFamily:"'Oswald', sans-serif"
    }
    

    const headerLinksStyle = {
        listStyle:"none",
        display: "flex",
        justifyContent:"space-around",
        alignItems:"center",
        width:"100%",
    }


    return(
        <div style={containerStyle}>
            <header className="header" style={headerStyle}>
                <div className="header-links" style={headerLinksStyle}>
                    
                    {
                        alimento===true ?
                        <>
                        <input 
                            className="header-link" value="Alimentos" name="Alimentos" type ="submit" onClick={handleEventType}>
                        </input>
                        <input 
                            className="header-link" value="Juguetes"  type ="submit" onClick={handleEventType}> 
                        </input>
                        <input 
                            className="header-link" value="Medicamentos"  type ="submit" onClick={handleEventType}> 
                        </input>
                        <input 
                            className="header-link" value="Varios" type ="submit" onClick={handleEventType}>
                        </input>
                        </> 
                        : alimento===false ?
                            <>
                           
                            <input 
                                className="header-link" value="Perros"  type ="submit" onClick={handleEventFilter}> 
                            </input>
                            <input 
                                className="header-link" value="Gatos" type ="submit" onClick={handleEventFilter}>
                            </input>
                            <input 
                                className="header-link" value="Volver" type ="submit" onClick={backToMenu}>
                            </input>
                            </>
                        : 
                            <>
                            
                            <input 
                                className="header-link" value="Adulto"  type ="submit" onClick={handleEventLastFilter}> 
                            </input>
                            <input 
                                className="header-link" value="Puppy" type ="submit" onClick={handleEventLastFilter}>
                            </input>
                            <input 
                                className="header-link" value="Volver" type ="submit" onClick={backToSubMenu}>
                            </input>
                            </>
                        

                    }
                </div>  
            </header>
        </div>           
    )
}