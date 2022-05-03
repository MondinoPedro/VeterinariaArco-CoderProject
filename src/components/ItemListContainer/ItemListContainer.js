export default function ItemListContainer ({greeting}) {
    
    const catalogoContainerStyle = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"400px",
        fontSize:"50px",
        
    }
    
    return (
        <div className="catalogoContainer" style={catalogoContainerStyle}>
            {greeting}
        </div>
        
    )
}