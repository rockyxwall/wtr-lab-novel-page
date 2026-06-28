import { Icon } from '../icons'
import { novel, authorInfo, rankings, genreTags, ratingBreakdown } from '../data/pageData'

export default function AboutPanel() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="order-2 lg:order-1 flex-1 min-w-0 p-4 lg:border-r border-foreground/10">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3 pl-2.5 border-l-2 border-l-primary">
            <Icon id="book-marked" className="icon inline-flex shrink-0 size-4 text-primary" />
            <span className="font-semibold text-sm text-card-foreground">Novel Summary</span>
          </div>
          <div className="text-sm text-foreground/80 leading-relaxed space-y-2 whitespace-pre-line">
            {novel.summary}
          </div>
          <button className="mt-2 text-xs text-primary hover:text-primary/80 transition-colors">
            Show more
          </button>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3 pl-2.5 border-l-2 border-l-primary">
            <Icon id="edit" className="icon inline-flex shrink-0 size-4 text-primary" />
            <span className="font-semibold text-sm text-card-foreground">Author's Other Novels</span>
          </div>
          <ol className="space-y-1 list-none pl-0 m-0">
            {['Steady Cultivation: Grab It in One Go, Decompose It in an Instant',
              'Start by Synthesizing Enlightenment Tea, Be Steady and Cautious',
              'Xiuxian: I am the Master of Dreams',
              'Steady Immortal Cultivation: My gain effect is randomly doubled'
            ].map((title, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="text-[10px] font-bold text-foreground/30 min-w-[14px] text-right shrink-0 leading-none">{i + 1}</span>
                <a className="text-primary hover:text-primary/80 transition-colors" href="#">{title}</a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="order-1 lg:order-2 w-full lg:w-80 shrink-0 p-4 bg-foreground/[0.02]">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2 mb-2 pl-2.5 border-l-2 border-l-primary">
            <span className="flex-1 text-base font-semibold text-card-foreground">Details</span>
            <div className="flex gap-1">
              <button type="button" className="inline-flex cursor-pointer items-center justify-center bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none border border-border bg-card hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-7 gap-1 rounded-lg px-2.5 text-[0.8rem]">
                <Icon id="edit" className="icon inline-flex shrink-0 size-3.5" />
                Edit
              </button>
              <button type="button" className="inline-flex cursor-pointer items-center justify-center bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none border border-border bg-card hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-7 gap-1 rounded-lg px-2.5 text-[0.8rem]">
                <Icon id="history" className="icon inline-flex shrink-0 size-3.5" />
                History
              </button>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-border mb-0 text-sm">
            <DetailsRow label="Titles">
              <ul className="m-0 pl-0 list-none">
                <li className="py-px text-[13px]">{novel.title}</li>
                <li className="py-px text-[13px] text-foreground/70">{novel.titleCn}</li>
              </ul>
            </DetailsRow>
            <DetailsRow label="Status">
              <span>{novel.status}</span>
            </DetailsRow>
            <DetailsRow label="Date Added">
              <span>{authorInfo.dateAdded}</span>
            </DetailsRow>
            <DetailsRow label="Author">
              <div className="flex flex-col gap-px">
                <a className="text-primary hover:text-primary/80" href="#">{authorInfo.name}</a>
                <a className="text-xs opacity-65 text-primary hover:text-primary/80" href="#">{authorInfo.nameEn}</a>
              </div>
            </DetailsRow>
            <DetailsRow label="Requested">
              <a className="text-primary hover:text-primary/80 inline-flex items-center gap-1" href="#">{authorInfo.requested}</a>
            </DetailsRow>
            <DetailsRow label="Released">
              <a className="text-primary hover:text-primary/80 inline-flex items-center gap-1" href="#">{authorInfo.released}</a>
            </DetailsRow>
          </div>

          <div className="pt-2 border-t border-foreground/10">
            <span className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">Rankings</span>
            <div className="mt-2 flex gap-2">
              <button className="text-xs px-3 py-1 rounded-full border border-foreground/20 text-foreground/60 hover:text-card-foreground transition-colors">Weekly</button>
              <button className="text-xs px-3 py-1 rounded-full border border-foreground/20 text-foreground/60 hover:text-card-foreground transition-colors">All Time</button>
            </div>
            <div className="mt-3">
              <span className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">Novel Patrons</span>
              <div className="mt-2 space-y-1.5">
                {rankings.patrons.map((p, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-card-foreground">{p.name}</span>
                    <span className="text-foreground/60">{p.amount}</span>
                  </div>
                ))}
                <button className="text-xs text-primary hover:text-primary/80 transition-colors">
                  +{rankings.morePatrons} more patrons
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-foreground/10">
            <span className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">Rating</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-card-foreground">{novel.rating}</span>
              <span className="text-xs text-foreground/50">/ 5.0</span>
            </div>
            <div className="text-xs text-foreground/50 mb-2">{novel.ratingCount} votes</div>
            <div className="space-y-1">
              {ratingBreakdown.map(r => (
                <div key={r.stars} className="flex items-center gap-2 text-xs">
                  <span className="w-3 text-foreground/60">{r.stars}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                    <div className="h-full rounded-full bg-yellow-500" style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="w-6 text-right text-foreground/50">{r.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {genreTags.map(section => (
            <div key={section.label} className="pt-2 border-t border-foreground/10">
              <span className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">{section.label}</span>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {section.tags.map(tag => (
                  <span key={tag} className="text-xs px-1.5 py-0.5 rounded bg-foreground/5 text-foreground/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DetailsRow({ label, children }) {
  return (
    <div className="grid grid-cols-[108px_1fr] items-center gap-x-2.5 px-3.5 py-[9px] border-b border-border last:border-b-0 even:bg-black/[0.016] dark:even:bg-white/[0.022] max-[400px]:grid-cols-1 max-[400px]:gap-0.5 max-[400px]:px-3 max-[400px]:py-2">
      <span className="text-[10.5px] font-bold uppercase tracking-[0.07em] whitespace-nowrap pt-px leading-6 text-foreground/50">{label}</span>
      <div className="text-[13px] leading-relaxed wrap-break-word text-card-foreground">{children}</div>
    </div>
  )
}
