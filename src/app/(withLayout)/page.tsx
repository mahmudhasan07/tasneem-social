import ApproachtoCreative from "@/Components/ApproachtoCreative/ApproachtoCreative";
import Banner from "@/Components/Banner/Banner";
import Clients from "@/Components/Clients/Clients";
import CreativeService from "@/Components/Creative-service/CreativeService";
import EffortlessSolution from "@/Components/EffortlessSolution/EffortlessSolution";
import FrequentlyQus from "@/Components/FreqentlyQus/FrequentlyQus";
import OurPartner from "@/Components/OurPartner/OurPartner";
import ScheduleDemo from "@/Components/ScheduleDemo/ScheduleDemo";
import Service from "@/Components/Service/Service";
import SocialMediaSuccess from "@/Components/SocialMedicaSuccess/SocialMediaSuccess";
import WhyChoice from "@/Components/WhyChoice/WhyChoice";

export default function Page() {

    return (
        <section  className="">
            <div className="container">
                <Banner></Banner>
            </div>
            <Clients></Clients>
            <div className="container">
                <CreativeService></CreativeService>
                <Service></Service>
            </div>
            <SocialMediaSuccess></SocialMediaSuccess>
            <div className="container">
                <OurPartner></OurPartner>
            </div>
            <WhyChoice></WhyChoice>
            <div className="container">
                <EffortlessSolution></EffortlessSolution>
                <ApproachtoCreative></ApproachtoCreative>
                {/* <Faq/> */}
                <FrequentlyQus/>
            </div>
            <div className="container">
                <ScheduleDemo />
            </div>
            
        </section>
    );
}