import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Page() {
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
