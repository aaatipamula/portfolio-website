import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts"

import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import Cards from "../components/Cards.tsx"

const github_api_url = 'https://api.github.com/users/aaatipamula/repos?sort=updated'

interface Repo {
    name: string,
    description: string,
    html_url: string,
    language: string,
    topics: string[]
}

interface Projects {
  recent: Array<Repo>
  featured: Array<Repo>
}

const featured_projects = [
  "Iroha",
  "ytdl-api",
  "apcsp_bot",
  "ytdl-cli",
  "ytdl"
]

export const handler: Handlers<Projects> = {
  async GET(_, ctx) {
    const resp = await fetch(github_api_url);

    if (resp.status === 403) {
      console.log("Error")
    }
    const repos: Array<Repo> = await resp.json();
    const featured_repos: Array<Repo> = repos.filter((repo) => {
      if (featured_projects.includes(repo.name)) {
        return repo
      }
    });
    const recent_repos: Array<Repo> = repos.slice(0, 3);

    // check for rate limit and pull from local file if rate limited

    const projects: Projects = {
      featured: featured_repos,
      recent: recent_repos
    }
    
    return ctx.render(projects);
  },
};

export default function Home({ data }: PageProps<Projects>) {
  return (
    <>
      <Head>
        <title>Interests</title>
      </Head>
      <body class="bg-theme-black overscroll-none">
        <Navbar active="/projects"/>
        <div class="w-5/6 sm:w-3/4 mx-auto mt-10">
          <h2 class="my-14 text-2xl sm:text-4xl text-center text-theme-pink animate-fadeIn">Recent Github Updates</h2>
          <div class="sm:flex sm:justify-between sm:space-x-4 sm:items-stretch mb-10">
            <Cards repos={data.recent}/>
          </div>
          <h2 class="text-center text-2xl sm:text-4xl text-theme-pink animate-fadeIn mb-5">Featured Projects</h2>
          <div>
            <Cards repos={data.featured} topics={true}/>
          </div>
        </div>
        <Footer/>
      </body>
    </>
  );
}
