import React, { useEffect } from "react";

import { Route, Switch, useParams } from "react-router-dom";

import CustomerServiceNavbar from "../../components/customer-service-navbar/CustomerServiceNavbar.component";
import CustomerServiceHero from "../../components/customer-services-hero/CustomerServiceHero.component";
import HeighlightBar from "../../components/heighlight-bar/HeighlightBar.component";
import AboutPage from "../aboutpage/AboutPage.component";
import AmbassadorPage from "../ambassadorPage/AmbassadorPage.component";
import ContactPage from "../ContactPage/ContactPage.component";
import Faq from "../faqPage/faqPage.component";
import PrivacyAndPolicy from "../privacy-policy/PrivacyAndPolicy.component";
import TermsAndConditons from "../termsAndConditon/TermsAndContionsPage.component";

export default function CustomerServicesPage() {
  const title = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title.service} . Twistshake`.toUpperCase();
  }, [title]);
  return (
    <div className="customerServicesPage">
      <CustomerServiceHero />
      <HeighlightBar />
      <CustomerServiceNavbar />
      <Switch>
        <Route path={`/customer-service/about-us`} component={AboutPage} />
        <Route
          path={`/customer-service/ambassador`}
          component={AmbassadorPage}
        />
        <Route path={`/customer-service/contact`} component={ContactPage} />
        <Route path={`/customer-service/about-us`} component={AboutPage} />
        <Route path={`/customer-service/faq`} component={Faq} />
        <Route
          path={`/customer-service/privacy-policy`}
          component={PrivacyAndPolicy}
        />
        <Route
          path={`/customer-service/terms-and-conditions`}
          component={TermsAndConditons}
        />
      </Switch>
    </div>
  );
}
