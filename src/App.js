import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
import BarComponent from './ModuleMenu/BarComponent/BarComponent';
import ModulePartner from './ModulePartner/ModulePartner';
import ModuleForm from './ModuleForm/ModuleForm';
import ModuleDigitalSales from './ModuleDigitalSales/ModuleDigitalSales';

function App() {
  return (
    <div>
      <BarComponent />
      <ModulePartner />
      <ModuleForm />
      <ModuleDigitalSales />
    </div>
  );
}

export default App;
