import { similarNovels } from '../data/pageData'

export default function RecommendationsPanel() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {similarNovels.map((novel, i) => (
          <a key={i} href="#" className="group block rounded-lg border border-white/10 overflow-hidden hover:border-white/30 transition-colors">
            <div className="aspect-[3/4] bg-foreground/5 flex items-center justify-center relative">
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
            <div className="p-2">
              <div className="text-xs text-foreground/70 line-clamp-2 leading-tight mb-1 group-hover:text-card-foreground transition-colors">
                {novel.title}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] px-1 py-0.5 rounded bg-foreground/5 text-foreground/50 uppercase">{novel.genre}</span>
                <span className="text-[10px] text-foreground/40">{novel.chapters}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      <button className="w-full mt-4 py-2 text-sm text-foreground/60 hover:text-card-foreground transition-colors text-center">
        Show More <span className="text-foreground/40">(48 left)</span>
      </button>
    </div>
  )
}
