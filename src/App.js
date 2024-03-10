import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ListAll from "./ListAll";
import TrangChu from "./TrangChu" ;
import Shop from "./Shop";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<ListAll />} /> */}
          <Route exact path="/" element={<TrangChu />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
