import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "preline/preline";
import './pages/AI/private/dashboard/css/style.css';
import './pages/AI/private/dashboard/charts/ChartjsConfig.jsx';
import ClientRoutes from './pages/UI/private/client/routes/ClientRoutes.jsx';
import RSRoutes from './pages/UI/private/responsable service/rsDashboard/rsRoutes.jsx';
import { initFlowbite } from 'flowbite';

// Declare the interface in global scope
window.HSStaticMethods = {};

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.HSStaticMethods.autoInit) { // Check if autoInit function is available
      window.HSStaticMethods.autoInit();
    }
    initFlowbite();
  }, [location.pathname]);

  return (
    <>
      {/* <Index /> */}
      {/* <Service/> */}
      {/* <NavbarClient />
      <Profile/>
      <TabClient /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Dashboard/> */}
      {/* <AdminDashboard /> */}
      {/* <Dashboard /> */}
      {/* <ClientRoutes /> */}

      {/* <AdminDashboard/> */}

      <RSRoutes />
      {/* <ClientRoutes/> */}
    </>
  );
}

export default App;
