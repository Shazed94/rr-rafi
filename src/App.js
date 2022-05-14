import Dashbord from "./Pages/Dashbord/Dashbord";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Rightbar/Products/ViewProduct/Products";
import AddProduct from "./Pages/Rightbar/Products/AddProduct/AddProduct";

import "./App.css";
import AddImage from "./Pages/Rightbar/Gallery/Image/AddImage";
import AllImage from "./Pages/Rightbar/Gallery/Image/AllImage";
import AddVideo from "./Pages/Rightbar/Gallery/Video/AddVideo";
import AllVideo from "./Pages/Rightbar/Gallery/Video/AllVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Dashbord />}>
          <Route path="viewproduct" element={<Products />} />
          <Route path="addproduct" element={<AddProduct />} />

          <Route path="addVideo" element={<AddVideo />} />
          <Route path="allVideo" element={<AllVideo />} />
          <Route path="addImage" element={<AddImage />} />
          <Route path="allImage" element={<AllImage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
