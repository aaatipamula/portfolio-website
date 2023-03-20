import { Head } from "$fresh/runtime.ts";

import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {

    const skills = [
        "Python",
        "TypeScript",
        "JavaScript",
        "React.js",
        "Preact",
        "Node.js",
        "HTML",
        "CSS",
        "RESTful APIs",
        "SQL",
        "MYSQL",
        "SQLite",
        "Linux",
        "Docker",
        "Shell Scripting"
    ]

  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <body class="bg-theme-black overscroll-none">
        <Navbar active="/about"/>
        <div class="w-5/6 sm:w-3/4 mx-auto mt-10 space-y-10">
          <div class="space-y-3">
            <h1 class="text-theme-pink text-2xl sm:text-4xl animate-fadeIn">About Me</h1>
            <p class="text-theme-light-grey leading-loose animate-fadeInSec">My passion for technology started in 2016 with custom building computers. From there my interests slowly expanded to programming in 2019 and custom mechanical keyboards in 2020. As of today I've indulged in my interests by building my own computer, keyboards and writing programs for many personal projects, including this website! I plan to continue persuing my interests by expanding my knowledge base and trying new technologies.</p>
            <div class="text-white">add headshot</div>
          </div>
          <div class="flex xl:justify-between flex-col xl:flex-row">
              <h2 class="text-2xl sm:text-4xl text-theme-pink xl:self-center animate-fadeIn">Skills</h2>
              <div class="flex flex-wrap mt-6 xl:w-1/2 lg:w-5/6 xl:justify-end xl:self-end xl:mr-10 animate-fadeInSec">
                  {
                      skills.map((skill) => (
                          <div class="text-center text-theme-medium-grey p-2 bg-theme-pink m-1 rounded-lg">{skill}</div>
                      )) 
                  }
              </div>
          </div>
          <div class="space-y-3">
            <h1 class="text-theme-pink text-2xl sm:text-4xl animate-fadeIn">Keyboards</h1>
            <div class="text-white">Add Keyboard Instagram</div>
          </div>
        </div>
        <Footer/>
      </body>
    </>
  );
}
