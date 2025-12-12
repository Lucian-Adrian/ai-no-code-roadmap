import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/layout"
import { HomePage } from "@/pages/home"
import { RoadmapPage } from "@/pages/roadmap"
import { StrategyPage } from "@/pages/strategy"
import { ResourcesPage } from "@/pages/resources"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
