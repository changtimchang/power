'use client'
import Image from "next/image";
import Navbar from "../components/Navbar";
import SimpleSlider from "@/components/SimpleSlider";
import Business from "@/components/Business";


export default function Home() {
  return (
    <section>
      <div className="w-full max-h-screen">
        <SimpleSlider />
      </div>
      <div className="w-full max-h-screen">
        <Business />
      </div>
    </section>
  );
}
