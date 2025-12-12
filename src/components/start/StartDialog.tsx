import { useEffect, useState } from "react"
import { useIsDesktop } from "@/lib/useMediaQuery"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { Link } from "react-router-dom"

export function StartDialog() {
  const isDesktop = useIsDesktop()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem("aa_start_popup_seen")
    // Do not show on mobile
    if (!seen && isDesktop) {
      // show after a small delay so it feels less abrupt
      const t = setTimeout(() => setOpen(true), 700)
      return () => clearTimeout(t)
    }
  }, [isDesktop])

  // Do not render modal on mobile
  if (!isDesktop) return null

  const close = () => {
    setOpen(false)
    localStorage.setItem("aa_start_popup_seen", "true")
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) close(); else setOpen(o) }}>
      <DialogContent className="max-w-md border-2 border-black rounded-none bg-white brutal-shadow p-6 animate-pop-in">
        <DialogHeader>
          <DialogTitle className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black">Start this project</DialogTitle>
          <DialogDescription className="text-lg font-medium text-black">Kickstart your journey: follow the step-by-step roadmap and ship a working AI automation with n8n.</DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          <p className="text-black leading-relaxed">We include example workflows, design constraints, and a project-based final exercise. Start with the roadmap and build the email AI agent in under an hour.</p>

          <div className="flex items-center gap-3">
            <Link to="/roadmap">
              <Button className="rounded-none border-2 border-black bg-black text-white hover:bg-white hover:text-black font-bold px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none" onClick={close}>
                Start the Roadmap
              </Button>
            </Link>
            <Button variant="ghost" className="rounded-none border-2 border-black bg-white text-black px-4 py-3 font-bold hover:bg-black hover:text-white" onClick={close}>
              Maybe later
            </Button>
          </div>
        </div>

        <DialogFooter className="mt-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Check className="w-4 h-4" />
              Example-first learning
            </div>
            <button aria-label="Close" onClick={close} className="flex items-center gap-2 px-3 py-2 border-2 border-black rounded-none bg-white hover:bg-black hover:text-white">
              <X className="w-4 h-4" /> Close
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
