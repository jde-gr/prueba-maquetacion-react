import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
import NavComponent from './ModuleMenu/components/NavComponent/NavComponent';
import PartnerComponent from './ModulePartner/PartnerComponent';
import DigitalSalesComponent from './ModuleDigitalSales/DigitalSalesComponent';

function App() {
  return (
    <div>
      <NavComponent />
      <PartnerComponent />
      <DigitalSalesComponent />
    </div>
  );
}

export default App;
