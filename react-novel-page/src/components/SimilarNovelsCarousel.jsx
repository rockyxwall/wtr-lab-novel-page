import { Icon } from '../icons'
import { similarNovels } from '../data/pageData'

export default function SimilarNovelsCarousel() {
  return (
    <div data-slot="card" className="group/card flex flex-col gap-0 bg-card text-sm text-card-foreground shadow rounded-md ring-1 ring-foreground/20 mx-2 mb-2 overflow-hidden">
      <div data-slot="card-content" className="p-2">
        <div className="flex items-center justify-between gap-2 mb-2 pl-2.5 border-l-2 border-l-primary mt-0">
          <span className="flex-1 text-base font-semibold text-card-foreground">Similar Novels</span>
        </div>
        <div className="relative flex h-full items-stretch overflow-hidden">
          <div className="flex h-full gap-2 overflow-x-auto pb-1.5">
            {similarNovels.map((novel, i) => (
              <div key={i} className="flex shrink-0 flex-col rounded-md bg-card text-sm text-card-foreground shadow border border-white/10 w-44 min-w-44">
                <a target="_blank" className="block" href="#">
                  <div className="image-wrap relative rounded-md aspect-[3/4] w-full rounded-b-none zoom bg-foreground/5 flex items-center justify-center">
                    <div className="w-8 h-8 rounded bg-foreground/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-foreground/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <span className="absolute top-1 right-1 flex items-center gap-0.5 bg-black/60 text-yellow-400 text-[11px] font-bold px-1.5 py-0.5 rounded">
                      <span>{novel.rating}</span>
                      <span className="text-yellow-400" style={{ fontSize: 11 }}>★</span>
                    </span>
                  </div>
                </a>
                <a target="_blank" className="line-clamp-2 px-2 pt-1 mb-1 font-bold text-sm leading-snug text-card-foreground hover:text-primary transition-colors" href="#">
                  {novel.title}
                </a>
                <div className="mt-auto flex flex-col gap-1 px-2 pb-2 text-foreground">
                  <div className="flex items-center gap-1 text-xs">
                    <span className="inline-flex items-center font-medium border rounded px-1.5 py-0.5 whitespace-nowrap transition-colors border-white/20 text-card-foreground text-xs capitalize">{novel.genre}</span>
                    <span className="ms-auto text-xs text-foreground/50">{novel.chapters}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex shrink-0 flex-col rounded-md text-sm text-card-foreground shadow border border-white/10 w-44 min-w-44 cursor-pointer items-center justify-center bg-primary/5 transition-colors hover:bg-primary/10" role="button" tabIndex={0}>
              <div className="mb-2 flex text-primary">
                <Icon id="chevron-down" className="icon inline-flex shrink-0 size-5 -rotate-90" />
                <Icon id="chevron-down" className="icon inline-flex shrink-0 size-5 -rotate-90" />
                <Icon id="chevron-down" className="icon inline-flex shrink-0 size-5 -rotate-90" />
              </div>
              <span className="font-semibold text-primary text-sm">Show More</span>
              <span className="text-xs text-foreground/50">(48 left)</span>
            </div>
          </div>
          <button type="button" className="inline-flex cursor-pointer shrink-0 items-center justify-center rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none select-none border border-current/50 bg-card text-foreground hover:bg-card-foreground hover:text-card gap-1.5 absolute top-1/2 -translate-y-1/2 z-15 right-2 w-8 h-12 p-0">
            <Icon id="chevron-down" className="icon inline-flex shrink-0 size-6 -rotate-90" />
          </button>
        </div>
      </div>
    </div>
  )
}
