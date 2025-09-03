import { Route, Routes } from "react-router-dom";
import AddProduct from "../addProduct";
import Attend from "../attend";
import ProductList from "../productList";
import Validate from "../validate";

import Dashboard from "../rsDashboard";

const RSRoutes = () => {
    return (
            <Routes>
                <Route path="RS/AddProduct" element={<AddProduct />} />
                <Route path="RS/Attend" element={<Attend />} />
                <Route path="RS/ProductList" element={<ProductList />} />
                <Route path="RS/Validate" element={<Validate />} />
                <Route path="RS/Dashboard" element={<Dashboard />} />
            </Routes>
    );
}

export default RSRoutes;