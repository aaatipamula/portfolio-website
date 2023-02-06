import { Handlers PageProps } from "$fresh/server.ts"

interface Repo {
    title: string,
    description: string,
    languages: string
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch('https://api.github.com/users/aaatipamula/repos');
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Projects (props: PageProps) {
    return(
        <div>
          Test
        </div>
    )
}