"use client";

import { navItems } from "@/data";

import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
import Footer from "@/Components/Footer";
import Clients from "@/Components/Clients";
import Approach from "@/Components/Approach";
import Experience from "@/Components/Experience";
import RecentProjects from "@/Components/RecentProjects";
import { FloatingNav } from "@/Components/ui/FloatingNav";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;