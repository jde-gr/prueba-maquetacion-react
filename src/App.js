import React from 'react';
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

function App() {
  return (
    <div>
      <NavComponent />
      <PartnerComponent />
      <DigitalSalesComponent />
      <IntegrationsComponent />
      <IntelligentTechComponent />
      <SimpleAndAgileComponent />
      <TrustTheExperienceComponent />
      <BrandsComponent />
      <LetUsTalkComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
