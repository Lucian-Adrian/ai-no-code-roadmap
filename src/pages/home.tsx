import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react"
import { Link } from "react-router-dom"
import React from "react"
import { StarButton } from "@/components/github/StarButton"

export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-32 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="inline-flex items-center border-2 border-black bg-white px-6 py-2 text-sm font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          The Visual Language of the Future
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-black leading-[0.9]">
          DON'T CODE.<br />
          ARCHITECT.
        </h1>
        
        <p className="text-2xl md:text-3xl font-medium text-black max-w-3xl mx-auto leading-tight">
          The "Automation Architect" roadmap bridges the gap between idea and execution. 
          Master n8n, the visual superpower that turns flowcharts into software.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Link to="/roadmap">
            <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-none border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
              START THE JOURNEY <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
          <Link to="/strategy">
            <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-bold rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
              READ STRATEGY
            </Button>
          </Link>
          
          <div className="hidden md:block">
            <StarButton />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto mt-40 w-full">
        <FeatureCard 
          icon={<Brain className="h-12 w-12 text-black" />}
          title="THE PSYCHOLOGY"
          description="Beginners fear code. They don't fear flowcharts. We leverage visual learning to bypass syntax anxiety."
        />
        <FeatureCard 
          icon={<Zap className="h-12 w-12 text-black" />}
          title="THE SPEED"
          description="Bridge the gap between 'Idea' and 'Execution' instantly. No compilation, just connection."
        />
        <FeatureCard 
          icon={<Sparkles className="h-12 w-12 text-black" />}
          title="THE MASTER PROJECT"
          description="Don't just learn. Build a real AI Agent that connects OpenAI to your Gmail."
        />
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-10 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="mb-8 p-4 border-2 border-black bg-black w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {React.cloneElement(icon as React.ReactElement, { className: "h-12 w-12 text-white" })}
      </div>
      <h3 className="text-2xl font-black mb-4 text-black uppercase tracking-tight">{title}</h3>
      <p className="text-lg text-black font-medium leading-relaxed">{description}</p>
    </div>
  )
}
