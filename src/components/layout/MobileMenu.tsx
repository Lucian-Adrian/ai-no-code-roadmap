import { Link } from "react-router-dom"
import { X } from "lucide-react"
import { StarButton } from "@/components/github/StarButton"

export function MobileMenu({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null

  return (
    <div id="mobile-menu" className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative ml-auto w-[80vw] max-w-xs h-full bg-white border-l-2 border-black p-6 shadow-[8px_0px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between mb-6">
          <div className="font-black text-lg">Menu</div>
          <button aria-label="Close menu" onClick={onClose} className="p-2 rounded-none border-2 border-black bg-white hover:bg-black hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <Link to="/" onClick={onClose} className="text-sm font-bold uppercase tracking-widest">Overview</Link>
          <Link to="/roadmap" onClick={onClose} className="text-sm font-bold uppercase tracking-widest">Roadmap</Link>
          <Link to="/strategy" onClick={onClose} className="text-sm font-bold uppercase tracking-widest">Strategy</Link>
          <Link to="/resources" onClick={onClose} className="text-sm font-bold uppercase tracking-widest">Resources</Link>

          <div className="mt-6">
            <Link to="/roadmap" onClick={onClose} className="inline-flex items-center gap-2 px-4 py-3 rounded-none border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all">
              Start the Roadmap
            </Link>
          </div>

          <div className="mt-4">
            <StarButton />
          </div>
        </nav>
      </div>
    </div>
  )
}
