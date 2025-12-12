import { useEffect, useState } from "react"

/**
 * useMediaQuery - a small hook to track CSS media queries in React.
 * Useful for conditionally rendering UI only on certain breakpoints (e.g. desktop).
 *
 * Example: const isDesktop = useMediaQuery('(min-width: 768px)')
 */
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
  // Tailwind `md` corresponds to 768px by default. Use this as our desktop cutoff.
  return useMediaQuery("(min-width: 768px)")
}
