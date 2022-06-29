import Navbar from "../NavBar/Navbar"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import SecondNavbar from "../SecondNavbar/SecondNavbar"
import React from "react"
import { useContext } from "react"
import { mainContext } from "../../context/MainContext/MainContext"


export default function Main (){
    const {type} = useContext(mainContext)
    return(
        <div>
            <Navbar/>
            <div className="main-container">
                <div className="main-text-container">
                    <div className="main-title">
                        <h1>Descubri Nuestos Productos</h1>
                    </div>
                    <div className="main-description">
                        <h4>La mejor calidad al mejor precio!</h4>
                    </div>
                </div>
            </div>
            <div className="articles-container">
                <div className="articles">
                    <div className="second-navbar-container">
                        <SecondNavbar/>
                    </div>
                    {
                        type === "Todos" ? 
                        <div>
                            <h2>SELECCIONA TUS PRODUCTOS!</h2>
                            <h5>Ahorra hasta un 50% en nuestros productos seleccionados! No dejes pasar esta oportunidad!</h5> 
                        </div>
                        
                        :
                            <ItemListContainer/>
                        
                         
                    }
                    
                       
                </div>
            </div> 
        </div>
        
    )
}