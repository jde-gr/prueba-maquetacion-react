import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
import NavComponent from './ModuleMenu/components/NavComponent/NavComponent';
import ModulePartner from './ModulePartner/ModulePartner';
import ModuleDigitalSales from './ModuleDigitalSales/ModuleDigitalSales';

function App() {
  return (
    <div>
      <NavComponent />
      <ModulePartner />
      <ModuleDigitalSales />
    </div>
  );
}

export default App;
