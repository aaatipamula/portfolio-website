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
        <div class="flex justify-center my-40">
          <a href="/" class="bg-theme-pink rounded-xl font-bold text-3xl text-theme-black p-6 hover:-translate-y-2 hover:scale-110 transition ease-in-out">Go Home</a>
        </div>
      </body>
    </>
  )
}
