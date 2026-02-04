import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Page() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
