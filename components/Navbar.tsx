type Props = {
  active: string
};

export default function Navbar({ active }: Props) {
  const routes = [
    ['Home', '/'],
    ['About', '/about'],
    ['Projects', '/projects']
  ]
  return(
  <div class={"flex justify-center p-6 mx-auto my-3 rounded-xl bg-theme-pink w-11/12 sm:w-5/6" +
    (active === '/' ? " animate-fadeInNav" : "")}>

    <div class="flex justify-around w-2/3 mx-auto">
        {routes.map(([title, url]) => (
          <a href={url} 
          className={"rounded-lg px-2 sm:px-5 py-2 font-medium text-[#404040] sm:hover:bg-[#A68F8A] transition ease-in duration-200" +
          (url === active ? " bg-theme-dark-pink" : "")
        }>{title}</a>
        ))}
    </div> 
  </div>
  );
}