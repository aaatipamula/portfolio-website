import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts"
import Navbar from "../components/Navbar.tsx";

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

    if (resp.status === 403) {
      console.log("Error")
    }
    const repos: Array<Repo> = await resp.json();
    const top_three_repos: Array<Repo> = repos.slice(0, 3)

    // check for rate limit and pull from local file if rate limited
    
    return ctx.render(top_three_repos);
  },
};

export default function Home({ data }: PageProps<Array<Repo>>) {
  return (
    <>
      <Head>
        <title>Interests</title>
      </Head>
      <body class="bg-[#0D0D0D]">
        <Navbar active="/interests"></Navbar>
        <h2 class="my-14 text-2xl sm:text-4xl text-center text-theme-pink animate-fadeIn">Recent Github Updates</h2>
        <div class="flex flex-col sm:flex-row items-stretch justify-center">
          {
            data.map((card) => (
              <a href={card.html_url} class="rounded-xl items-center px-6 py-2 bg-theme-pink m-4 w-11/12 sm:w-2/3 sm:hover:-translate-y-2 sm:hover:scale-105 block transition-transform ease-in-out duration-300 animate-fadeInSec">
                  <div class="text-xl font-semibold text-theme-black border-b-1 border-theme-black sm:border-b-0">{card.name}</div>
                  <div class="my-4 text-theme-black">{card.description}</div>
                  <div class="text-sm text-theme-medium-grey self-end">{card.language}</div>
              </a>
            ))
          }
        </div>
      </body>
    </>
  );
}
