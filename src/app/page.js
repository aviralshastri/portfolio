"use client";
import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import projectsAnimation from "../public/lottie-animations/projects.json";
import skillsAnimation from "../public/lottie-animations/skills.json";
import educationAnimation from "../public/lottie-animations/education.json";
import blogsAnimation from "../public/lottie-animations/me.json";
import contactMeAnimation from "../public/lottie-animations/contact-me.json";
import Link from "next/link";
import { Twitter } from "lucide-react";
import { GithubIcon } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import { Globe } from "lucide-react";

export default function Home() {
  const animationRefs = {
    projects: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    blogs: useRef(null),
    contactMe: useRef(null),
    MobileProjects: useRef(null),
    MobileSkills: useRef(null),
    MobileEducation: useRef(null),
    MobileBlogs: useRef(null),
    MobileContactMe: useRef(null),
  };

  const animations = {
    projects: projectsAnimation,
    skills: skillsAnimation,
    education: educationAnimation,
    blogs: blogsAnimation,
    contactMe: contactMeAnimation,
    MobileProjects: projectsAnimation,
    MobileSkills: skillsAnimation,
    MobileEducation: educationAnimation,
    MobileBlogs: blogsAnimation,
    MobileContactMe: contactMeAnimation,
  };

  const [isLoading, setIsLoading] = useState(true);
  const animationInstances = useRef({});

  useEffect(() => {
    const loadAnimations = () => {
      Object.keys(animationRefs).forEach((key) => {
        const container = animationRefs[key].current;
        if (container) {
          try {
            const anim = lottie.loadAnimation({
              container,
              renderer: "svg",
              loop: true,
              autoplay: false,
              animationData: animations[key],
            });

            anim.addEventListener("DOMLoaded", () => {
              setIsLoading((prev) => prev && false);
              anim.play();
            });

            animationInstances.current[key] = anim;
          } catch (error) {
            console.error(`Error loading animation for ${key}:`, error);
          }
        }
      });
    };

    loadAnimations();

    return () => {
      Object.keys(animationInstances.current).forEach((key) => {
        if (animationInstances.current[key]) {
          animationInstances.current[key].destroy();
        }
      });
    };
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
          <div className="loader hidden sm:grid"></div>
          <div className="absolute bottom-0 left-0 p-3 flex flex-row">
            <h1 className="text-white POPFINE-bold text-8xl">LOADING</h1>
            <div className="loader-dot ml-3 mt-6"></div>
          </div>
        </div>
      )}
      <div className="hidden sm:flex bg-white min-h-screen flex-col-reverse lg:flex-col space-y-4 lg:space-y-2 p-3 text-white overflow-hidden">
        <div
          id="top"
          className="flex-grow flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3"
        >
          <div
            id="projects"
            className="bg-CustomYellow space-x-6 flex-1 flex flex-row items-center justify-center border-white border-2 shadow-black shadow-[7px_7px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 ease-in-out p-3"
          >
            <div ref={animationRefs.projects} className="w-40 h-40" />
            <div>
              <h2 className="text-4xl font-bold mb-2">Projects</h2>
              <p className="mb-4">
                Explore my innovative projects showcasing my coding skills and
                creativity.
              </p>
              <div className="hover:translate-y-1 hover:translate-x-1 transition-all duration-300">
                <Link
                  href={"/"}
                  className="bg-black text-white border-white border-2 px-6 py-2 shadow-[7px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-none transition-all duration-300 font-bold text-xl"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
          <div
            id="skills"
            className="bg-CustomBlue flex-1 md:flex-[0.5] flex flex-row items-center justify-center border-white border-2 shadow-black shadow-[7px_7px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 ease-in-out p-3"
          >
            <div ref={animationRefs.skills} className="w-60 h-60" />
            <div>
              <h2 className="text-3xl font-bold mb-2">Skills</h2>
              <p className="mb-4">
                A display of my technical skills and expertise in various
                programming languages.
              </p>
              <div className="hover:translate-y-1 hover:translate-x-1 transition-all duration-300">
                <Link
                  href={"/"}
                  className="bg-black text-white border-white border-2 px-6 py-2 shadow-[7px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-none transition-all duration-300 font-bold text-xl"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          id="middle"
          className="flex-grow flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3"
        >
          <div
            id="education"
            className="bg-CustomGreen flex-1 flex flex-col justify-center border-white border-2 shadow-black shadow-[7px_7px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 ease-in-out p-3"
          >
            <div ref={animationRefs.education} className="w-40 h-40" />
            <div className="mb-10 ml-8">
              <h2 className="text-3xl font-bold mb-2">Education/Experiences</h2>
              <p className="mb-4">
                Information about my academic background and achievements in
                computer science.
              </p>
              <div className="hover:translate-y-1 hover:translate-x-1 transition-all duration-300">
                <Link
                  href={"/"}
                  className="bg-black text-white border-white border-2 px-6 py-2 shadow-[7px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-none transition-all duration-300 font-bold text-xl"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
          <div
            id="profile"
            className="bg-CustomBrown flex-1 md:flex-[2] flex flex-col items-center justify-center border-white border-2 shadow-black shadow-[7px_7px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 ease-in-out p-3"
          >
            <div ref={animationRefs.blogs} className="w-60 h-60" />
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-2">Aviral Shastri</h2>
              <p className="text-center font-semibold text-xl mb-4">
                Get to know more about me, my interests, and my journey in tech.
              </p>
              <div className="hover:translate-y-1 hover:translate-x-1 transition-all duration-300">
                <Link
                  href={"/"}
                  className="bg-black text-white border-white border-2 px-6 py-2 shadow-[7px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-none transition-all duration-300 font-bold text-xl"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
          <div
            id="contact"
            className="bg-CustomRed justify-center flex-1 flex flex-col w-full border-white border-2 shadow-black shadow-[7px_7px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 ease-in-out p-3 "
          >
            <div ref={animationRefs.contactMe} className="w-40 h-40" />
            <div className="mb-8 ml-6">
              <h2 className="text-3xl font-bold mb-2">Contact</h2>
              <p className="mb-4">
                Reach out to me for collaboration or inquiries.
              </p>
              <div className="hover:translate-y-1 hover:translate-x-1 transition-all duration-300">
                <Link
                  href={"/"}
                  className="bg-black text-white border-white border-2 px-6 py-2 shadow-[7px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-none transition-all duration-300 font-bold text-xl"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="ml-6 bg-black px-8 py-2 flex flex-row items-center justify-between space-x-4  border-white border-2 shadow-[7px_7px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 ease-in-out">
              <Link
                href={"https://x.com/AviralShastri"}
                className="rounded-xl bg-white p-1.5 hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <Twitter size={30} color="black" />
              </Link>
              <Link
                href={"https://github.com/aviralshastri"}
                className="rounded-xl bg-white p-1.5 hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <GithubIcon size={30} color="black" />
              </Link>
              <Link
                href={"https://in.linkedin.com/in/aviral-shastri-104944270"}
                className="rounded-xl bg-white p-1.5 hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <LinkedinIcon size={30} color="black" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
