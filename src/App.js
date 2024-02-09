import { BrowserRouter , Route , Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { useState } from "react"


function App(){
  const [userDetails,setUserDetails] = useState([
      {
          username:"magesh",
          password:12345
      }
  ]) 

  return(
  <div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login userDetails={userDetails} setUserDetails={setUserDetails}/>}></Route>
            <Route path='/signup' element={<Signup userDetails={userDetails} setUserDetails={setUserDetails}/>}></Route>
            <Route path='/landing' element={<Landing/>}></Route>
        </Routes>
    </BrowserRouter>
  </div>
  )

}

export default App
