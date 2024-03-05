import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListAll from "./ListAll";
import TrangChu from "./TrangChu" ;
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ListAll />} />
          <Route exact path="/TrangChu" element={<TrangChu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
