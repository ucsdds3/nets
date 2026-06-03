import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

const PAGE_TITLES: Record<string, string> = {
  "/": "Home",
  "/board": "Board",
  "/projects": "Projects",
  "/events": "Events",
  "/about": "About",
  "/join": "Join",
};

function useDocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageName = PAGE_TITLES[pathname];
    document.title = pageName ? `NETS | ${pageName}` : "NETS";
  }, [pathname]);
}

export default function Page() {
  useDocumentTitle();

  return (
    <div className="min-w-0 overflow-x-hidden">
      <Navbar />
      <main className="min-w-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
