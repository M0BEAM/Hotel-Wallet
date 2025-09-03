import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "../clienLogin";
import SignUp from "../ClientSignUp";
import Service from "../clienService";
import Profile from "../clienProfile";
import History from "../history";
import LastService from "../lasService";
import ClientWrapped from "../wrap/clientWrapped";
import Basket from "../basket";

const ClientRoutes = () => {

    return (

        <Routes>
            <Route path="/client"  >
                <Route path="login" element={<Login />} />
                <Route path="SignUp" element={<SignUp />} />
                <Route element={<ClientWrapped />}>
                    <Route path="basket" element={<Basket />} />
                    <Route path="Service" element={<Service />} />
                    <Route path="Profile" element={<Profile />} />
                    <Route path="History" element={<History />} />
                    <Route path="LastService" element={<LastService />} />
                </Route>
            </Route>
        </Routes>


    );
}

export default ClientRoutes;