import { Head } from "$fresh/runtime.ts";
import Navbar from "../islands/Navbar.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Aniketh A</title>
      </Head>
      <div class="w-screen h-screen p-3 m-0 bg-[#0D0D0D]">
        <Navbar></Navbar>
        <div class="flex items-center justify-center px-6 py-20 mx-auto my-3 w-2/3 font-medium font-sans text-6xl text-[#A68F8A]">Hi, I'm Aniketh</div>
        <h2 class="">Recent Projects</h2>
        <div>
          <h2>Music I Like</h2>
        </div>
        /** Add footer component */
      </div>
    </>
  );
}
