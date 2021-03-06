// imported from libraries
import { Route, Routes } from "react-router-dom";

// imported styles
import './App.css';

// local imported
import Welcome from "./pages/Welcome/Welcome.jsx";
import LetsPlay from "./pages/letsPlay/letsPlay";
import YouLoose from "./pages/YouLoose/YouLoose";
import YouWereRight from "./pages/YouWereRight/YouWereRight";
import YouWon from "./pages/YouWon/YouWon";
import NotFound from "./pages/NotFound/NotFound";
import YouWonMoney from "./pages/YouWonMoney/YouWonMoney";
import Help from "./pages/Help/Help";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/letsPlay' element={<LetsPlay />} />
        <Route path='/youLoosed' element={<YouLoose />} />
        <Route path='/youWereRight' element={<YouWereRight />} />
        <Route path="/youWonMoney" exact={true} element={<YouWonMoney />} />
        <Route path='/youWon' element={<YouWon />} />
        <Route path='/help' element={<Help />} />
        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
