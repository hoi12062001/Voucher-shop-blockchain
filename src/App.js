import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListAll from "./ListAll";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ListAll />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
