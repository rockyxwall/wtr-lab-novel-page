import AboutPanel from './AboutPanel'
import ReviewsPanel from './ReviewsPanel'
import RecommendationsPanel from './RecommendationsPanel'

export default function TabSection({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'toc', label: 'Table of Contents' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'recommendations', label: 'Recommendations' },
  ]

  return (
    <div className="mx-2 mb-2">
      <div className="rounded-lg border bg-card shadow-sm ring-1 ring-foreground/10 overflow-hidden">
        <div role="tablist" className="flex border-b border-foreground/10 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              role="tab"
              className={`relative px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors focus:outline-none ${
                activeTab === tab.id
                  ? 'text-card-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : 'text-foreground/60 hover:text-card-foreground'
              }`}
              aria-selected={activeTab === tab.id}
              data-active={activeTab === tab.id ? '' : undefined}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" hidden={activeTab !== 'about'} inert={activeTab !== 'about' ? 'true' : undefined}>
          {activeTab === 'about' && <AboutPanel />}
        </div>

        <div role="tabpanel" hidden={activeTab !== 'toc'} inert={activeTab !== 'toc' ? 'true' : undefined}>
          {activeTab === 'toc' && (
            <div className="p-4 text-center text-foreground/60 text-sm">Table of contents loading...</div>
          )}
        </div>

        <div role="tabpanel" hidden={activeTab !== 'reviews'} inert={activeTab !== 'reviews' ? 'true' : undefined}>
          {activeTab === 'reviews' && <ReviewsPanel />}
        </div>

        <div role="tabpanel" hidden={activeTab !== 'recommendations'} inert={activeTab !== 'recommendations' ? 'true' : undefined}>
          {activeTab === 'recommendations' && <RecommendationsPanel />}
        </div>
      </div>
    </div>
  )
}
