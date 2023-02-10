type Props = {
  active: string
};

export default function Navbar({ active }: Props) {
  const routes = [
    ['Home', '/'],
    ['About', '/about'],
    ['Profile', '/profile'],
    ['Interests', '/interests']
  ]
  return(
  <div class="flex items-center justify-center p-6 mx-auto my-2 rounded-xl bg-[#D9BEB8] w-11/12 sm:w-5/6">
    <nav class="space-x-1 sm:space-x-4">
        {routes.map(([title, url]) => (
          <a href={url} 
          className={"rounded-lg px-2 sm:px-5 py-2 font-medium text-[#404040] hover:bg-[#A68F8A] transition ease-in duration-200" +
          (url === active ? " bg-theme-dark-pink" : "")
        }>{title}</a>
        ))}
    </nav> 
  </div>
  );
}