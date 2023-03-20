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
    <div class="mx-auto w-11/12 sm:w-5/6 sticky top-0 z-10">
      <div class="w-full bg-theme-black m-0 p-0 h-3"></div>
      <div class={"p-6 rounded-xl bg-theme-pink w-full shadow-lg" +
        (active === '/' ? " animate-fadeInNav" : "")}>

        <div class="flex justify-between sm:w-2/3 mx-auto">
            {routes.map(([title, url]) => (
              <a href={url} 
              className={"rounded-lg px-2 sm:px-5 py-2 font-medium text-theme-black sm:hover:bg-theme-dark-pink sm:hover:text-theme-medium-grey transition ease-in duration-250" +
              (url === active ? " text-theme-medium-grey bg-theme-dark-pink" : "")
            }>{title}</a>
            ))}
        </div> 
      </div>
    </div>
  );
}