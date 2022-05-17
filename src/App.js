import React from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";


function App() {
  const [Detail, setDetail]=React.useState()
    
    React.useEffect(()=>{
        const getDetail= new Promise(resolve=>{
            setTimeout(()=>{
                resolve(<ItemDetailContainer/>);
            }, 2000);
        });
        getDetail.then(res=>setDetail(res));
    }, []);

    const bodyStyle={
      width:"55%",
      height:"550px",
      backgroundColor:"#444",
      border:"2px solid #444",
      borderRadius:"12px",
    }
  return (
    <>
    <div className="App">
      <div style={bodyStyle}>{Detail}</div>
      
    </div>
    
    </>
  );
}
export default App;


