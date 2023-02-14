import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx"

export default function Error(props: PageProps) {

  return(
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <body class="bg-theme-black">
        <Navbar active=""></Navbar>
        <h2 class="my-20 font-medium text-5xl sm:text-7xl text-center text-theme-dark-pink animate-fadeIn">Sorry this page doesn't exist.</h2>
        <div class="flex justify-center my-40">
          <a href="/" class="bg-theme-pink rounded-xl font-bold text-3xl text-theme-medium-grey p-6 hover:-translate-y-2 hover:scale-105 transition ease-in-out duration-300 animate-fadeInSec">Go Home</a>
        </div>
      </body>
    </>
  )
}
