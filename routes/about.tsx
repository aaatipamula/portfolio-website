import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <body class="bg-theme-black">
        <Navbar active="/about"></Navbar>
      </body>
    </>

    
  );
}
