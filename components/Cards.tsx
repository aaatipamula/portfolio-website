interface Repo {
    name: string,
    description: string,
    html_url: string,
    language: string,
    topics: string[]
}

interface Props {
    repos: Array<Repo>,
    topics: boolean
}

export default function Cards ({ repos, topics = false }: Props) {

    return (<>
        {repos.map((repo) => (
            <a href={repo.html_url} class="rounded-xl items-center px-6 py-2 bg-theme-pink mx-auto w-11/12 sm:w-2/3 sm:hover:-translate-y-2 sm:hover:scale-105 block transition-transform ease-in-out duration-300 animate-fadeInSec static z-1 text-theme-dark-pink hover:text-theme-medium-grey relative mb-4">
                <div class="text-xl font-semibold text-theme-black border-b-1 border-theme-dark-pink sm:border-b-0">{repo.name}</div>
                <div class={"my-4 text-theme-medium-grey" + (topics ? "" : " pb-4")}>{repo.description}</div>
                {(topics ? 
                <>
                <div class="text-md font-semibold text-theme-black">Technologies</div>
                <ul class="mb-4 pl-4 pb-4">
                    {repo.topics.map((topic) => (
                        <li class="capitalize text-theme-medium-grey">{topic}</li>
                    ))}
                </ul>
                </> : <></>)}
                <div class="absolute inset-x-6 bottom-2 text-sm self-end transition ease-in-out duration-300">{repo.language}</div>
            </a>
        ))}
    </>)
}