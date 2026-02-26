import React from 'react';
import InsuranceHero from './InsuranceHero';
import { InsuranceServices } from './InsuranceServices'; // named export
import AdditionalInsurance from './AdditionalInsurance';
import CommercialBrokerage from './CommercialBrokerage';
import InsuranceOfferings from './InsuranceOfferings';
// import Why from "../nav1/WhyChooseUs"

function InsCon() {
  return (
    <div>
      <InsuranceHero />
      <InsuranceServices />
      <CommercialBrokerage/>
      <InsuranceOfferings/>
      <AdditionalInsurance/>
      {/* <Why/> */}
      
    </div>
  );
}

export default InsCon;