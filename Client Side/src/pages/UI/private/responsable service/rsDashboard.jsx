import Stat from "./rsStat";
import AddProduct from "./addProduct";
import Attend from "./attend";
import ProductList from "./productList";
import Validate from "./validate";
import { Route, Routes } from "react-router-dom";
import SideBar from "../../../../components/UI/responsable_service/rsSideBar"

const Dashboard = () => {
   return (
      <SideBar>
    <Stat />
    </SideBar>
   );
}

export default Dashboard;