import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts"
import Navbar from "../components/Navbar.tsx"

const github_api_url = 'https://api.github.com/users/aaatipamula/repos?sort=updated'

interface Repo {
    name: string,
    description: string,
    html_url: string,
    language: string
}

export const handler: Handlers<Array<Repo>> = {
  async GET(_, ctx) {
    const resp = await fetch(github_api_url);
    const repos: Array<Repo> = await resp.json();
    const top_three_repos: Array<Repo> = repos.slice(0, 3)

    
    return ctx.render(top_three_repos);
  },
};

export default function Home({ data }: PageProps<Array<Repo>>) {

  return (
    <>
      <Head>
        <title>Aniketh A</title>
      </Head>
      <body class="bg-[#0D0D0D]">
        <Navbar active="/"></Navbar>
        <h2 class="block justify-center my-20 font-medium font-sans text-5xl sm:text-7xl text-center text-[#A68F8A]">Hi, I'm Aniketh</h2>
        <h2 class="block justify-center my-14 text-4xl text-center text-[#A68F8A]">Recent Projects</h2>
        <div class="flex flex-col sm:flex-row items-center justify-center">
          {
            data.map((card) => (
              <a href={card.html_url} class="rounded-xl px-6 py-2 bg-[#D9BEB8] m-4 w-11/12 sm:w-2/3 hover:-translate-y-2 hover:scale-105 block transition ease-in-out">
                  <div class="text-xl font-semibold text-[#0D0D0D] border-b-1 border-[#0D0D0D] sm:border-b-0">{card.name}</div>
                  <div class="my-4 text-[#0D0D0D]">{card.description}</div>
                  <div class="text-sm font-light text-[#0D0D0D]">{card.language}</div>
              </a>
            ))
          }
        </div>
        <div>
          <h2>Music I Like</h2>
        </div>
        /** Add footer component */
      </body>
    </>
  );
}
