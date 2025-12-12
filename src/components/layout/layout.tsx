import { Navbar } from "./navbar"
import { useLocation } from "react-router-dom"

interface LayoutProps {
  children: React.ReactNode
}

import { StartDialog } from "@/components/start/StartDialog"
export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHome = location.pathname === "/" && (location.hash === "" || location.hash === "#" || location.hash === "#/" )

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      {isHome && <StartDialog />}
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t-2 border-black bg-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-sm font-bold uppercase tracking-widest">
          <p>© 2025 Automation Architect. Built for the future of work.</p>
        </div>
      </footer>
    </div>
  )
}
