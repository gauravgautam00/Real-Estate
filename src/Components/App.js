// import '..Components/';

import Restaurant from "./Restaurant"
import { Routes, Route } from "react-router-dom"
import Starting from "./Starting"


function App() {
  return (
    
    <div style={{width:"100%" , boxSizing: "border-box"}}>
  
  <Routes>
    <Route path="/" element={ <Starting/>} />

    <Route path="/rest"  element={ <Restaurant/> }/>
<Route path="*" element={<div>404 Page not found</div>}/>
</Routes>



    </div>
    
    
    );
}

export default App;
