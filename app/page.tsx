import Image from "next/image";
import Welcome from "./components/welcome";
import Navbar from "./components/navbar";
import WhyUs from "./components/whyus";
import Produk from "./components/produk";
import Contact from "./components/kontak";

export default function Home() {
  return (
    <div className="text-white">
      <Navbar/>
      <Welcome/>
      <WhyUs/>
      <Produk/>
      <Contact/>
    </div>
  );
}
