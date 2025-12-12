import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Cog } from "lucide-react"
import { StarButton } from "@/components/github/StarButton"
import { useState } from "react"
import { Menu } from "lucide-react"
import { MobileMenu } from "@/components/layout/MobileMenu"

export function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  
  const links = [
    { href: "/", label: "Overview" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/strategy", label: "Strategy" },
    { href: "/resources", label: "Resources" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Cog className="h-4 w-4 text-black" />
          </div>
          <span className="font-black text-xl tracking-tighter uppercase">Automation Architect</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-colors hover:text-black hover:underline decoration-2 underline-offset-4",
                location.pathname === link.href
                  ? "text-black underline"
                  : "text-gray-500"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

          <div className="flex items-center gap-4">
          <Link to="/roadmap">
            <Button variant="default" size="sm" className="hidden sm:flex rounded-none border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              Start Learning
            </Button>
          </Link>
          
          <div className="hidden sm:block" title="Open the project on GitHub">
            <StarButton />
          </div>
          <button aria-label="Menu" aria-expanded={open} aria-controls="mobile-menu" className="md:hidden p-2 rounded-none border-2 border-black bg-white hover:bg-black hover:text-white" onClick={() => setOpen(true)}>
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
