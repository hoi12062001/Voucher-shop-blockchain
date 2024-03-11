import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ListAll from "./ListAll";
import TrangChu from "./FrontEnd/TrangChu" ;
import Shop from "./FrontEnd/Shop";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<TrangChu />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
