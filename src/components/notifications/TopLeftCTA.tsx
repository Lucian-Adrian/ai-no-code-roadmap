import { useEffect, useState } from "react"
import { X, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { StarButton } from "@/components/github/StarButton"
import { useIsDesktop } from "@/lib/useMediaQuery"

export function TopLeftCTA() {
  const [visible, setVisible] = useState(false)
  const isDesktop = useIsDesktop()

  useEffect(() => {
    // Only show on desktop to avoid mobile popups
    const dismissed = localStorage.getItem("aa_top_left_cta_dismissed")
    if (!dismissed && isDesktop) {
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [isDesktop])

  // Announce only when visible to assistive tech
  const ariaHidden = !visible

  if (!isDesktop) return null

  const dismiss = () => {
    setVisible(false)
    localStorage.setItem("aa_top_left_cta_dismissed", "true")
  }

  return (
    <div
      className={`hidden md:block fixed left-4 top-4 z-50 w-72 max-w-[85vw] rounded-none border-2 border-black bg-white p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-300 ${visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}
      style={{ animation: visible ? "cta-slide-down 450ms cubic-bezier(0.2,0.9,0.2,1)" : undefined }}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-xs font-mono uppercase text-gray-500">Support</div>
          <div className="text-sm md:text-base font-black tracking-tight text-black">Love this? Star the project.</div>
          <div className="text-xs text-black/70 mt-1">Stars help us build more templates, walkthroughs, and tools. Click Star to support the roadmap.</div>
        </div>
          <div className="flex items-center gap-2">
          <Link to="/roadmap" onClick={() => dismiss()} className="hidden md:inline-flex items-center gap-2 text-sm font-bold rounded-none border-2 border-black bg-black text-white px-3 py-2 hover:bg-white hover:text-black transition-all cta-pulse">
            Start <ArrowRight className="h-4 w-4" />
          </Link>
          <div>
            <StarButton />
          </div>
          <button aria-label="Dismiss" onClick={dismiss} className="p-2 rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
