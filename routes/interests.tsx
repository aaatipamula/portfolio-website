import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Interests</title>
      </Head>
      <body class="bg-[#0D0D0D]">
        <Navbar active="/interests"></Navbar>
      </body>
    </>
  );
}
