import Clients from "@/Components/Clients/Clients";
import BlogBanner from "./BlogBanner";
import BlogService from "./BlogService";
import BlogDemo from "./BlogDemo";
import WhyChoice from "@/Components/WhyChoice/WhyChoice";
import OurPartner from "@/Components/OurPartner/OurPartner";
import FrequentlyQus from "@/Components/FreqentlyQus/FrequentlyQus";

export default function Page() {
    return (
        <section>
            <div className="container">
                <BlogBanner></BlogBanner>
            </div>
            <Clients></Clients>
            <div className="container">
                <BlogService></BlogService>
            </div>
            <div className="container">
                <BlogDemo></BlogDemo>
            </div>
                <WhyChoice></WhyChoice>
            <div className="container">
                <OurPartner></OurPartner>
                <FrequentlyQus></FrequentlyQus>
            </div>
        </section>
    );
}