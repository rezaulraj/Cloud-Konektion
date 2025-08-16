import React from "react";
import HeroHome from "./HeroHome";
import ClientHome from "./ClientHome";
import CompanyOverview from "./CompanyOverview";
import PartnerHome from "./PartnerHome";
import AreaExpertise from "./AreaExpertise";
import Consultation from "./Consultation";
import WhyCloudeKonektion from "./WhyCloudeKonektion";
import OurPartner from "./OurPartner";
import ContactHelp from "./ContactHelp";
import EmployeeService from "./EmployeeService";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <ClientHome />
      <CompanyOverview />
      <PartnerHome />
      <AreaExpertise />
      <EmployeeService />
      <Consultation />
      <WhyCloudeKonektion />
      <OurPartner />
      <ContactHelp />
    </div>
  );
};

export default HomePage;
