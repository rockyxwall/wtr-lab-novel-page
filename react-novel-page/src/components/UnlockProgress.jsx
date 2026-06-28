import { Icon } from '../icons'

export default function UnlockProgress() {
  return (
    <div className="mx-2 mb-2">
      <div className="flex items-center justify-between gap-2 rounded-lg border bg-card p-2 shadow-sm ring-1 ring-foreground/10">
        <div className="flex items-center gap-2">
          <svg className="icon inline-flex shrink-0 size-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <div>
            <div className="font-semibold text-xs sm:text-sm text-card-foreground">AI-Unlock Progress</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="font-bold text-xs sm:text-sm text-card-foreground">806</span>
          <span className="text-foreground/40 text-xs">/</span>
          <span className="font-bold text-xs sm:text-sm text-card-foreground">806</span>
        </div>
        <div className="flex-1 max-w-40 hidden sm:block">
          <div className="h-2 rounded-full bg-foreground/10 overflow-hidden">
            <div className="h-full rounded-full bg-primary" style={{ width: '100%' }} />
          </div>
        </div>
        <div className="upc-footer">
          <span className="upc-status-done">
            <span className="inline-flex items-center gap-1 text-xs text-green-500 font-medium bg-green-500/10 border border-green-500/20 rounded-full px-2.5 py-0.5">
              <Icon id="check" className="icon inline-flex shrink-0 size-3" />
              All chapters unlocked
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
