import CommonBanner from "@/Components/Banner/CommonBanner";
import Services from "./Services";
import ScheduleDemo from "@/Components/ScheduleDemo/ScheduleDemo";

export default function Page() {
    return (
        <div className="container">
            <CommonBanner></CommonBanner>
            <Services></Services>
            <ScheduleDemo/>
        </div>
    );
}