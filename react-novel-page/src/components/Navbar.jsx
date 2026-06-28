import { Icon } from '../icons'

export default function Navbar() {
  return (
    <nav
      className="sticky inset-x-0 top-0 z-40 border-b border-white/10 bg-navbar py-2 text-white shadow-md transition-transform duration-200 font-sans antialiased"
      style={{ marginBottom: 8 }}
      translate="no"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center px-2">
        <button
          type="button"
          className="group/button inline-flex cursor-pointer shrink-0 items-center justify-center rounded-lg bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 border aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 size-10 border-white/30 bg-transparent text-white/85 hover:bg-white/10 hover:text-white focus-visible:border-white/50 focus-visible:bg-white/10 focus-visible:text-white lg:w-10 mr-1 ml-0"
        >
          <Icon id="menu" className="icon inline-flex shrink-0 size-6" />
        </button>

        <a className="me-4 inline-flex items-center gap-2 whitespace-nowrap text-[18px] font-semibold text-white/90 hover:no-underline transition-colors hover:text-white" href="#">
          <Icon id="book" className="icon inline-flex shrink-0 size-5" />
          <span>WTR-LAB</span>
        </a>

        <div className="ml-auto flex lg:hidden">
          <button
            type="button"
            className="group/button inline-flex cursor-pointer shrink-0 items-center justify-center rounded-lg bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 border aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 size-10 border-white/30 bg-transparent text-white/85 hover:bg-white/10 hover:text-white focus-visible:border-white/50 focus-visible:bg-white/10 focus-visible:text-white"
          >
            <Icon id="search" className="icon inline-flex shrink-0 size-5" />
          </button>
        </div>

        <div className="absolute inset-y-0 left-0 right-0 z-50 items-center bg-navbar lg:static lg:z-auto lg:bg-transparent hidden lg:flex">
          <button
            type="button"
            className="group/button inline-flex cursor-pointer shrink-0 items-center justify-center rounded-lg bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 border-0 text-white/85 hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white size-10 mr-1 lg:hidden"
          >
            <Icon id="close" className="icon inline-flex shrink-0 size-5" />
          </button>
          <div className="relative flex-1 px-2 lg:px-0 lg:w-64">
            <form>
              <input
                id="navbar-search"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                className="w-full min-w-0 rounded-lg border px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-transparent border-white/20 text-white placeholder:text-white/40"
              />
            </form>
          </div>
        </div>

        <div className="hidden lg:flex items-center ml-auto">
          <a className="inline-flex items-center gap-1 rounded-md px-2 py-2 text-sm transition-colors hover:text-white/80 hover:no-underline text-white/55" href="#">
            <Icon id="book-marked" className="icon inline-flex shrink-0 size-4 opacity-55" />
            <span>Library</span>
          </a>
          <a className="inline-flex items-center gap-1 rounded-md px-2 py-2 text-sm transition-colors hover:text-white/80 hover:no-underline text-white/55" href="#">
            <Icon id="list" className="icon inline-flex shrink-0 size-4 opacity-55" />
            <span>Novels</span>
          </a>
          <a className="inline-flex items-center gap-1 rounded-md px-2 py-2 text-sm transition-colors hover:text-white/80 hover:no-underline text-white/55" href="#">
            <Icon id="trending" className="icon inline-flex shrink-0 size-4 opacity-55" />
            <span>Ranking</span>
          </a>
          <a className="inline-flex items-center gap-1 rounded-md px-2 py-2 text-sm transition-colors hover:text-white/80 hover:no-underline text-white/55" href="#">
            <Icon id="crown" className="icon inline-flex shrink-0 size-4 opacity-55" />
            <span>Leaderboard</span>
          </a>
        </div>

        <button
          type="button"
          className="group/button inline-flex cursor-pointer shrink-0 items-center justify-center rounded-lg bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 border aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 size-10 border-white/30 bg-transparent text-white/85 hover:bg-white/10 hover:text-white focus-visible:border-white/50 focus-visible:bg-white/10 focus-visible:text-white"
        >
          <Icon id="search" className="icon inline-flex shrink-0 size-5" />
        </button>

        <button
          type="button"
          className="group/button inline-flex cursor-pointer shrink-0 items-center justify-center rounded-lg bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 border aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 size-10 border-white/30 bg-transparent text-white/85 hover:bg-white/10 hover:text-white focus-visible:border-white/50 focus-visible:bg-white/10 focus-visible:text-white"
        >
          <Icon id="account" className="icon inline-flex shrink-0 size-5" />
        </button>
      </div>
    </nav>
  )
}
