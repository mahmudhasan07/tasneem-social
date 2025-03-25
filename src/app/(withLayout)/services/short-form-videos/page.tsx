import Clients from "@/Components/Clients/Clients";
import ShortVideoBanner from "./ShortVideoBanner";
import ConvertVideo from "./ConvertVideo";
import ShortVideoService from "./ShortVideoService";
import VideoForBusiness from "./VideoforBusiness";
import WhyVideoPopular from "./WhyVideoPopular";
import OurPartner from "@/Components/OurPartner/OurPartner";
import FrequentlyQus from "@/Components/FreqentlyQus/FrequentlyQus";

export default function Page() {
    return (
        <section className="">
            <div className="container">
            <ShortVideoBanner></ShortVideoBanner>
            </div>
            <Clients></Clients>
            <div className="container">
                <ShortVideoService></ShortVideoService>
                <ConvertVideo></ConvertVideo>
                <VideoForBusiness></VideoForBusiness>
                <WhyVideoPopular></WhyVideoPopular>
                <OurPartner></OurPartner>
                <FrequentlyQus></FrequentlyQus>
            </div>
        </section>
    );
}