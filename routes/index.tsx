import { Head } from "$fresh/runtime.ts";

import Navbar from "../components/Navbar.tsx";
import Skills from "../components/Skills.tsx";
import Footer from "../components/Footer.tsx"


export default function Home() {

  return (
    <>
      <Head>
        <title>Aniketh A</title>
      </Head>
      <body class="bg-theme-black">
        <Navbar active="/"></Navbar>
        <div class="w-5/6 sm:w-3/4 mx-auto">
          <div class="h-screen">
            <div class="flex h-1/3 items-end">
              <h2 class="mb-3 text-5xl sm:text-7xl text-theme-pink animate-fadeIn ">Hi, I'm Aniketh</h2>
            </div>
            <div class="sm:w-11/12">
              <p class="text-xl sm:text-2xl text-theme-dark-pink break-words animate-fadeInSec border-t-2 border-theme-medium-grey">An aspiring computer science major at the University of Kansas with a passion for tech.</p>
            </div>
          </div>
          <Skills></Skills>
        </div>
      </body>
    </>
  );
}
