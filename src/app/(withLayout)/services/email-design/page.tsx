import Clients from "@/Components/Clients/Clients";
import EmailBanner from "./EmailBanner";
import EmailService from "./EmailService";
import EmailDesign from "./EmailDesign";
import EmailPerfection from "./EmailPerfection";
import OurPartner from "@/Components/OurPartner/OurPartner";
import FrequentlyQus from "@/Components/FreqentlyQus/FrequentlyQus";

export default function Page() {
  return (
    <section>
      <div className="container">
        <EmailBanner></EmailBanner>
      </div>
      <Clients></Clients>
      <div className="container">
        <EmailService></EmailService>
      </div>
      <div className="bg-white">
        <EmailDesign></EmailDesign>
      </div>
      <div className=" bg-white">
        <EmailPerfection></EmailPerfection>
      </div>
      <div className="container">
        <OurPartner></OurPartner>
        <FrequentlyQus></FrequentlyQus>
      </div>
    </section>
  );
}
