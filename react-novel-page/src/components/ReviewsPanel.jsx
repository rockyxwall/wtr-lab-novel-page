import { Icon } from '../icons'
import { reviews } from '../data/pageData'

export default function ReviewsPanel() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-foreground/60">Comments Only</span>
          <span className="text-foreground/30">|</span>
          <span className="text-card-foreground font-medium">Best</span>
          <span className="text-foreground/30">|</span>
          <span className="text-foreground/60">Newest</span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-primary hover:text-primary/80 transition-colors text-center">
        Load More
      </button>

      <div className="mt-6 pt-4 border-t border-foreground/10">
        <h3 className="text-sm font-semibold text-card-foreground mb-3">Leave a Review</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <button key={i} className="text-foreground/30 hover:text-yellow-500 transition-colors">
                <Icon id="star" className="icon inline-flex shrink-0 size-5" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-foreground/60">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="rounded border-foreground/30" />
              Spoiler
            </label>
          </div>
          <div className="tiptap-wrapper">
            <div className="border border-foreground/20 rounded-lg overflow-hidden">
              <div className="bg-foreground/[0.02] px-2 py-1.5 border-b border-foreground/10 flex items-center gap-1 flex-wrap">
                <button type="button" className="px-1.5 py-0.5 text-xs font-bold text-foreground/60 hover:text-card-foreground hover:bg-foreground/5 rounded transition-colors"><strong>B</strong></button>
                <button type="button" className="px-1.5 py-0.5 text-xs font-bold text-foreground/60 hover:text-card-foreground hover:bg-foreground/5 rounded transition-colors"><em>I</em></button>
                <button type="button" className="px-1.5 py-0.5 text-xs font-bold text-foreground/60 hover:text-card-foreground hover:bg-foreground/5 rounded transition-colors"><s>S</s></button>
                <button type="button" className="px-1.5 py-0.5 text-xs font-bold text-foreground/60 hover:text-card-foreground hover:bg-foreground/5 rounded transition-colors">Spoiler</button>
                <span className="w-px h-4 bg-foreground/10 mx-1" />
                <button type="button" className="px-1.5 py-0.5 text-xs text-foreground/40 cursor-not-allowed" disabled>@User</button>
                <button type="button" className="px-1.5 py-0.5 text-xs text-foreground/60 hover:text-card-foreground hover:bg-foreground/5 rounded transition-colors">#Novel</button>
                <span className="ml-auto text-xs text-foreground/40">0 / 2048</span>
              </div>
              <textarea
                className="w-full min-w-0 px-2.5 py-1.5 text-sm transition-colors outline-none bg-transparent text-card-foreground placeholder:text-foreground/40 border-0 resize-none"
                placeholder="This novel is..."
                rows={3}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-4 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
              Post Review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div className="rounded-lg border border-foreground/10 p-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
          <Icon id="account" className="icon inline-flex shrink-0 size-4 text-foreground/50" />
        </div>
        <div>
          <div className="text-sm font-medium text-card-foreground">{review.user}</div>
          <div className="text-xs text-foreground/50">
            {review.date && <span>{review.date} · </span>}
            {review.read}
          </div>
        </div>
      </div>
      <div className="text-sm text-foreground/80 whitespace-pre-line leading-relaxed">
        {review.text}
      </div>
      <div className="mt-2 flex items-center gap-3 text-xs text-foreground/50">
        <button className="hover:text-card-foreground transition-colors flex items-center gap-1">
          <Icon id="like" className="icon inline-flex shrink-0 size-3" /> Like
        </button>
        <button className="hover:text-card-foreground transition-colors flex items-center gap-1">
          <Icon id="message" className="icon inline-flex shrink-0 size-3" /> Reply
        </button>
        <button className="hover:text-card-foreground transition-colors flex items-center gap-1">
          <Icon id="translate" className="icon inline-flex shrink-0 size-3" /> Translate
        </button>
        {review.replies > 0 && (
          <button className="ml-auto text-primary hover:text-primary/80 transition-colors">
            View {review.replies} {review.replies === 1 ? 'Reply' : 'Replies'}
          </button>
        )}
      </div>
    </div>
  )
}
