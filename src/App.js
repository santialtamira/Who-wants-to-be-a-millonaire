import { Route, Routes } from "react-router-dom";

//import styles
import './App.css';

//import components
import Welcome from "./pages/Welcome/Welcome.jsx";
import LetsPlay from "./pages/letsPlay/letsPlay";
import YouLoose from "./pages/YouLoose/YouLoose";
import YouWereRight from "./pages/YouWereRight/YouWereRight";
import YouWon from "./pages/YouWon/YouWon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/letsPlay' element={<LetsPlay />} />
        <Route path='/youLoosed' element={<YouLoose />} />
        <Route path='/youWereRight' element={<YouWereRight />} />
        <Route path='/youWon' element={<YouWon />} />
      </Routes>
    </div>
  );
}

export default App;
