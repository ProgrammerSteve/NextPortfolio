"use client";

import { StaticImageData } from "next/image";
import { useState } from "react";
import { projects } from "./projects";
import ProjectCard from "./components/ProjectCard";
import SideBar from "./components/Sidebar";
import NavigationBar from "./components/NavigationBar";

export type LinkObj = {
  title: string;
  url: string;
};

export type Project = {
  title: string;
  id: number;
  description: string;
  imageSrc: StaticImageData;
  imageLink: string;
  isLazy: boolean;
  tags: string[];
  links: LinkObj[];
};

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
      <main className="flex flex-col md:flex-row h-screen relative min-w-0">
        <NavigationBar isNavOpen={isNavOpen} toggleNav={toggleNav}/>
        <SideBar isOpen={isNavOpen}/>
        <div className=" bg-[#ded4d4f]  grow min-w-0 h-full px-2 lg:px-8 overflow-y-scroll">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </main>
  );
}
