import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ListAll from "./ListAll";
import TrangChu from "./FrontEnd/TrangChu" ;
import Shop from "./FrontEnd/user/Shop";
import Contact from "./FrontEnd/layout/user/Contact";
import LayoutAdmin from "./FrontEnd/layout/admin/LayoutAdmin";
import ProductManagement from "./FrontEnd/admin/ProductManagement";
import AddProduct from "./FrontEnd/admin/AddProduct";
import EditProduct from "./FrontEnd/admin/EditProduct";
import Dashboard from "./FrontEnd/admin/Dashboard";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<TrangChu />} >
            <Route exact index element={<Contact />} />
            <Route exact path="/shop" element={<Shop/>} />
          </Route>
         
          <Route exact path="/admin" element={<LayoutAdmin />} >
            <Route exact path="ProductManagement" element={<ProductManagement/>} />
            <Route exact path="AddProduct" element={<AddProduct/>} />
            <Route exact path="EditProduct" element={<EditProduct/>} />
            <Route exact path="Dashboard" element={<Dashboard/>} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
