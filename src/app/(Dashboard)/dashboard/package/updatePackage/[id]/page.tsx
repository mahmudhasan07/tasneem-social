import CreateServiceForm from "@/Components/DashboardSidebar/dashboardService/AddPackageDetails";

export default function Page(params: { id: string; name: string }) {
    // console.log(params.id)
    return (
        <div>
           <CreateServiceForm id={params.id}/>
        </div>
    );
}