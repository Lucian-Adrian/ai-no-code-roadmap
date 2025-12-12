import { useEffect, useState } from "react"

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    try { return window.matchMedia(query).matches } catch { return false }
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    const m = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    m.addEventListener("change", handler)
    setMatches(m.matches)
    return () => m.removeEventListener("change", handler)
  }, [query])

  return matches
}

export function useIsDesktop() {
  // Tailwind md breakpoint ~768px
  return useMediaQuery("(min-width: 768px)")
}
