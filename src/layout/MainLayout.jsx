import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/navbar";
import { Suspense } from "react";
import ScrollToTop from "@/components/scroll-top";
import Footer from "@/components/footer";
import LoadingSpinner from "@/components/loading-spinner";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <div className={cn(pathname === "/" ? "mb-16" : "my-16", "min-h-screen")}>
        <Suspense fallback={<LoadingSpinner />}>
          <ScrollToTop />
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
