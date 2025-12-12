import { Link } from "react-router-dom"
import { X } from "lucide-react"
import { StarButton } from "@/components/github/StarButton"

export function MobileMenu({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null

  return (
    <div id="mobile-menu" className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative ml-auto w-[86vw] max-w-xs h-full bg-white border-l-2 border-black p-6 shadow-[8px_0px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between mb-6">
          <div className="font-black text-lg">Menu</div>
          <button aria-label="Close menu" onClick={onClose} className="p-2 rounded-none border-2 border-black bg-white hover:bg-black hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          <Link to="/" onClick={onClose} className="block text-lg font-bold uppercase tracking-widest py-4">Overview</Link>
          <Link to="/roadmap" onClick={onClose} className="block text-lg font-bold uppercase tracking-widest py-4">Roadmap</Link>
          <Link to="/strategy" onClick={onClose} className="block text-lg font-bold uppercase tracking-widest py-4">Strategy</Link>
          <Link to="/resources" onClick={onClose} className="block text-lg font-bold uppercase tracking-widest py-4">Resources</Link>

          <div className="mt-6">
            <Link to="/roadmap" onClick={onClose} className="block w-full text-center items-center gap-2 px-4 py-4 rounded-none border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all">
              Start the Roadmap
            </Link>
          </div>

          <div className="mt-8">
            <div className="px-2">
              <StarButton />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
