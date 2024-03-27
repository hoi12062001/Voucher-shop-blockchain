import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ListAll from "./ListAll";
import TrangChu from "./FrontEnd/TrangChu";
import Shop from "./FrontEnd/user/Shop";
import Contact from "./FrontEnd/layout/user/Contact";
import LayoutAdmin from "./FrontEnd/layout/admin/LayoutAdmin";
import ProductManagement from "./FrontEnd/Admin/ProductManagement";
import AddProduct from "./FrontEnd/Admin/AddProduct";
import EditProduct from "./FrontEnd/Admin/EditProduct";
import Dashboard from "./FrontEnd/Admin/Dashboard";
import { ContextProvider } from "./Components/ContextProvider";

require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<TrangChu />}>
              <Route exact index element={<Contact />} />
              <Route exact path="/shop" element={<Shop />} />
            </Route>

            <Route exact path="/admin" element={<LayoutAdmin />}>
              <Route
                exact
                path="ProductManagement"
                element={<ProductManagement />}
              />
              <Route exact path="AddProduct" element={<AddProduct />} />
              <Route exact path="EditProduct" element={<EditProduct />} />
              <Route exact path="Dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
