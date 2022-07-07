import { Route, Routes } from "react-router-dom";
import './App.css';
import Welcome from "./pages/Welcome/Welcome.jsx";
import LetsPlay from "./pages/letsPlay/letsPlay";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/letsPlay' element={<LetsPlay />} />
        {/* <Route path='/countries/:id' element={<Detail />} />
        <Route path='/formActivity' element={<FormActivity />} /> */}
      </Routes>
    </div>
  );
}

export default App;
