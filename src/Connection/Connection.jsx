import React from 'react';
import Hero from '../Home/Home';
import InsuranceSectionPremium from '../InsuranceSectionPremium/InsuranceSectionPremium';
import Chose from '../Chose/Chose';
import InsuranceSlider from '../InsuranceSlider/InsuranceSlider';
// import ContactPage from '../ContactPage/ContactPage';
import AboutUsSection from "../AboutUsSection/AboutUsSection"
import Testimonials from "../Testimonials/Testimonials"
import PartnerCompanies from '../PartnerCompanies/PartnerCompanies';
import ContactSection from '../ContactSection/ContactSection';
import MapSection from '../MapSection/MapSection';
import FooterSection from '../FooterSection/FooterSection';

// import PinnedArch from '../PinnedArch/PinnedArch';


function Connection() {
  return (
    <div>
      <Hero />
      <InsuranceSectionPremium />
      <AboutUsSection/>
      <Chose />
      <Testimonials/>
      <InsuranceSlider />
      <PartnerCompanies/>
      <ContactSection/>
      <MapSection/>
      <FooterSection/>
      {/* <ContactPage /> */}
    </div>
  );
}

export default Connection;