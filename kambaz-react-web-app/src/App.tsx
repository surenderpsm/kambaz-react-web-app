// import './App.css'
import Labs from "./Labs";
import {HashRouter, Route} from "react-router";
import {Navigate, Routes} from "react-router-dom";
import Kambaz from "./Kambaz";

function App() {

  return (
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Kambaz"/>}/>
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kambaz/*" element={<Kambaz/>} />
          </Routes>
        </div>
      </HashRouter>
  )
}

export default App
