import { Outlet, useLocation } from "react-router-dom";
import NavbarClient from "../../../../../components/UI/client/navbarClient";
import TabClient from "../../../../../components/UI/client/tabClient";

const ClientWrapped = ({ children }) => {
    const location = useLocation()
    return (
        <>
            <NavbarClient />
            <Outlet/>
             <TabClient />

        </>
    );
}

export default ClientWrapped;