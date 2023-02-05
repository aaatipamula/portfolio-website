import { Head } from "$fresh/runtime.ts";
import Navbar from "../islands/Navbar.tsx"
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <nav>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/interests">Interests</a></li>
      </nav>
    </>
  );
}
