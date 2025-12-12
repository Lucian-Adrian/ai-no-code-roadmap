import { useEffect, useState } from "react"
import { Github } from "lucide-react"

export function StarButton({ owner = "Lucian-Adrian", repo = "ai-no-code-roadmap" }: { owner?: string, repo?: string }) {
  const [stars, setStars] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!mounted) return
        if (typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count)
        }
      })
      .catch(() => {
        // Don't show an ugly error if we hit rate limit or fail
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [owner, repo])

  const openRepo = () => {
    window.open(`https://github.com/${owner}/${repo}`, "_blank", "noopener")
  }

  return (
    <button
      aria-label={`Star ${owner}/${repo} on GitHub`}
      onClick={openRepo}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-none font-bold border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
    >
      <Github className="h-4 w-4" />
      <span>Star</span>
      <span className="ml-2 text-xs font-mono bg-white text-black px-2 py-0.5 border-2 border-black rounded-none">{loading ? "..." : stars !== null ? stars : "-"}</span>
    </button>
  )
}
