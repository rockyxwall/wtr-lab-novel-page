import { Icon } from '../icons'
import { novel } from '../data/pageData'

export default function NovelCard() {
  return (
    <div className="mx-2 my-2">
      <div
        data-slot="card"
        data-size="default"
        data-variant="default"
        className="group/card flex flex-col gap-0 bg-card text-sm text-card-foreground has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl shadow rounded-md ring-1 ring-foreground/20 fix-size fix-edge mb-2 overflow-hidden"
      >
        <div data-slot="card-content" className="p-2">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex-1 min-w-0">
              <h1 className="text-base text-card-foreground sm:text-xl font-bold uppercase tracking-wide leading-tight wrap-break-word">
                {novel.title}
              </h1>
              <p className="text-xs sm:text-sm text-foreground mt-0.5 wrap-break-word">
                {novel.titleCn}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-1">
              <button
                type="button"
                className="group/button inline-flex cursor-pointer items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 border bg-card hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 size-8 h-9 w-9 shrink-0 p-0 border-amber-200 text-amber-600 hover:bg-amber-50 rounded-lg self-start"
              >
                <Icon id="alert-outline" className="icon inline-flex shrink-0 size-4" />
              </button>
            </div>
          </div>

          <div className="flex w-full rounded-lg border bg-card/50 overflow-hidden mb-3">
            <div className="shrink-0">
              <div className="image-wrap relative rounded-md h-full w-30 sm:w-40 rounded-none zoom group cursor-pointer">
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon id="magnify" className="icon inline-flex shrink-0 size-8 text-white" />
                </div>
                <img
                  className="object-cover w-full h-full min-h-40"
                  src={novel.coverImg}
                  alt={novel.title}
                  style={{ aspectRatio: '120/160' }}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 p-2 w-full text-xs sm:text-sm [&>div]:flex [&>div]:flex-col [&>div]:px-2 [&>div]:py-1">
              <div>
                <span className="text-foreground/60 font-medium">Status</span>
                <div>
                  <span className="inline-flex items-center gap-1">
                    <span className="text-green-500 font-bold">&#9679;</span>
                    <span className="font-medium">{novel.status}</span>
                  </span>
                </div>
              </div>
              <div>
                <span className="text-foreground/60 font-medium">Views</span>
                <span className="font-bold">{novel.views}</span>
              </div>
              <div>
                <span className="text-foreground/60 font-medium">Chapters</span>
                <span className="font-bold">{novel.chapters}</span>
              </div>
              <div>
                <span className="text-foreground/60 font-medium">Rating</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500 text-xs">&#9733;</span>
                  <span className="font-bold">{novel.rating}</span>
                  <span className="text-foreground/50 text-xs">({novel.ratingCount})</span>
                </div>
              </div>
              <div>
                <span className="text-foreground/60 font-medium">Readers</span>
                <span className="font-bold">{novel.readers}</span>
              </div>
              <div>
                <span className="text-foreground/60 font-medium">Chars</span>
                <span className="font-bold">{novel.chars}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap mb-2">
            <div className="relative w-auto">
              <button
                type="button"
                className="group/button inline-flex cursor-pointer items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 border bg-primary/80 text-primary-foreground shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 gap-1 w-auto"
              >
                <Icon id="book-marked" className="icon inline-flex shrink-0 size-4" />
                <span className="text-xs">Reading</span>
                <Icon id="chevron-down" className="icon inline-flex shrink-0 size-3" />
              </button>
            </div>
            <a className="flex items-center gap-1 text-xs sm:text-sm text-foreground/80 hover:text-card-foreground hover:no-underline min-w-0" href="#">
              <Icon id="history" className="icon inline-flex shrink-0 size-4 shrink-0" />
              <span className="font-semibold shrink-0">{novel.readProgress}</span>
              <span className="truncate">Continue Reading</span>
              <Icon id="chevron-down" className="icon inline-flex shrink-0 size-3 -rotate-90 shrink-0" />
            </a>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {novel.tags.map(tag => (
              <a
                key={tag}
                className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 cursor-pointer bg-card/50 text-foreground/70 hover:text-foreground border-foreground/10 hover:border-foreground/20"
                href="#"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
