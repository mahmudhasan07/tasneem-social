'use client'
import CreativeService from "@/Components/Creative-service/CreativeService";
import VideoDemo from "./VideoExample";
import InstaStory from "./InstaStory";
import SocialMediaSuccess from "@/Components/SocialMedicaSuccess/SocialMediaSuccess";
import OurPartner from "@/Components/OurPartner/OurPartner";
import EmailDesign from "../services/email-design/EmailDesign";
import Faq from "@/Components/Faq/Faq";

export default function Page() {
    return (
        <div className="py-20">
            <div className="container mx-auto">
                <CreativeService />
                <VideoDemo />
                <InstaStory />
            </div>
            <div className="bg-white py-16 mt-11 ">
                <SocialMediaSuccess />
            </div>
            <div className="container mx-auto">
                <EmailDesign/>
                <OurPartner />
                <Faq/>
            </div>

        </div>
    );
}