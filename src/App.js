import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
import NavComponent from './ModuleMenu/components/NavComponent/NavComponent';
import PartnerComponent from './ModulePartner/PartnerComponent';
import DigitalSalesComponent from './ModuleDigitalSales/DigitalSalesComponent';
import IntegrationsComponent from './ModuleIntegrations/IntegrationsComponent';
import IntelligentTechComponent from './ModuleIntelligentTech/IntelligentTechComponent';
import SimpleAndAgileComponent from './ModuleSimpleAndAgile/SimpleAndAgileComponent';
import TrustTheExperienceComponent from './ModuleTrustTheExperience/TrustTheExperienceComponent';
import BrandsComponent from './ModuleBrands/BrandsComponent';
import LetUsTalkComponent from './ModuleLetUsTalk/LetUsTalkComponent';
import FooterComponent from './ModuleFooter/FooterComponent';
import FormContext from './store/FormContext';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedFormOpenInformation = localStorage.getItem('isOpen');

    if (storedFormOpenInformation === '1') {
      setIsOpen(true);
    }
  }, []);

  const openFormHandler = (email, password) => {
    localStorage.setItem('isOpen', '1');
    setIsOpen(true);
  };

  const closeFormHandler = () => {
    localStorage.removeItem('isOpen');
    setIsOpen(false);
  };

  return (
    <FormContext.Provider
      value={{
        isOpen: isOpen,
      }}
    >
      <div>
        <NavComponent />
        <PartnerComponent
          onFormOpen={openFormHandler}
          onFormClose={closeFormHandler}
        />
        <DigitalSalesComponent />
        <IntegrationsComponent />
        <IntelligentTechComponent />
        <SimpleAndAgileComponent />
        <TrustTheExperienceComponent />
        <BrandsComponent />
        <LetUsTalkComponent />
        <FooterComponent />
      </div>
    </FormContext.Provider>
  );
}

export default App;
