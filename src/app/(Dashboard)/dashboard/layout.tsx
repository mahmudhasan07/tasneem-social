'use client';
import { usePathname } from "next/navigation";
import Sidebar from '@/Components/DashboardSidebar/DashboardSidebar';
import DashboardNavbar from '@/Components/DashboardSidebar/DashboardNavbar';
import DashboardSubNavbar from '@/Components/DashboardSidebar/DashboardSubNavbar';
import { useState } from "react";
import DashPackageNavbar from "@/Components/DashboardSidebar/DashPackageNavbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const pathname = usePathname();

  // Determine the route for conditional rendering
  const isDashboardRoute = pathname === '/dashboard'; // Exact match for dashboard
  const isPaymentRoute = pathname === '/dashboard/payment'; // Exact match for dashboard
  const isFeaturesRoute = pathname === '/dashboard/featuresServices'; // Exact match for featuresServices
  const isAddServiceRoute = pathname === '/dashboard/featuresServices/addService';
  const isPortfolioRoute = pathname === '/dashboard/featuresServices/allPortfolio';
  const isAddPortfolioRoute = pathname === '/dashboard/featuresServices/allPortfolio/addPortfolio';
  const isPackageRoute = pathname === '/dashboard/package';
  const isPackageOrderRoute = pathname === '/dashboard/package/order';
  const isnewPackageOrderRoute = pathname === '/dashboard/package/newPackage';

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body>
        <main>
          <div className="flex">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 ${isSidebarOpen ? 'w-[320px]' : 'w-[80px]'} transition-all duration-300`}>
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            </div>

            {/* Main Content */}
            <div className={`w-full transition-all duration-300 ${isSidebarOpen ? 'ml-[320px]' : 'ml-[80px]'}`}>
              {/* Sticky Navbar based on route */}
              <div className="sticky top-0 z-10">
                {(isDashboardRoute || isPaymentRoute) && <DashboardSubNavbar />}
                {(isFeaturesRoute || isAddServiceRoute || isPortfolioRoute || isAddPortfolioRoute) && <DashboardNavbar />}
                {(isPackageRoute || isPackageOrderRoute || isnewPackageOrderRoute )&& <DashPackageNavbar/>}
              </div>

              {/* Main Content Area */}
              <div className="bg-slate-100 min-h-screen">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
