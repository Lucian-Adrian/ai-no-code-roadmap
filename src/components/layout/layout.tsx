import { Navbar } from "./navbar"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
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
