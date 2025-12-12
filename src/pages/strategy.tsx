import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StrategyPage() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <div className="mb-20 border-l-4 border-black pl-8">
        <div className="inline-block border-2 border-black bg-white px-4 py-1 text-sm font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
          Manifesto
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
          The<br/>Strategy
        </h1>
        <p className="text-2xl font-medium text-black max-w-2xl">
          Why n8n is the "Visual Language of the Future".
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <StrategyCard 
          number="01"
          title="WHO (The Audience)"
          content="We looked at the non-tech person. The coordinator. The teacher. They see 'Python' and they run away. They see 'Excel' and they get bored. Our audience is the Visual Learner who wants to build."
        />
        <StrategyCard 
          number="02"
          title="WHAT (The Purpose)"
          content="The purpose is Empowerment via Visualization. We aren't teaching code. We are teaching n8n. Why? Because n8n looks exactly like thinking. It's a flowchart. If you can draw it, you can build it."
        />
        <StrategyCard 
          number="03"
          title="CONTENT (The Pedagogy)"
          content="We built a Pedagogical Engine. It uses Scaffolding (Forms -> Logic). It uses Active Recall (Unlock modules). It ends with Project-Based Mastery (A working AI Agent, not a certificate)."
        />
        <StrategyCard 
          number="04"
          title="CONSTRAINTS (The Design)"
          content="The constraint was Clarity. That's why we chose 'Swiss Brutalism'. High contrast. No ambiguity. It tells the user: 'This is solid. This is robust. This is a tool for builders.'"
        />
      </div>

      <div className="mt-32 p-12 border-2 border-black bg-black text-white shadow-[12px_12px_0px_0px_rgba(100,100,100,1)]">
        <blockquote className="text-3xl md:text-4xl font-black uppercase leading-tight text-center">
          "Everyone else is teaching you how to work. This roadmap teaches you how to let the machine do the work, so you can be human again."
        </blockquote>
      </div>
    </div>
  )
}

function StrategyCard({ number, title, content }: { number: string, title: string, content: string }) {
  return (
    <Card className="rounded-none border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all h-full">
      <CardHeader className="border-b-2 border-black bg-gray-50 pb-4">
        <div className="text-6xl font-black text-gray-200 absolute top-4 right-6 -z-10 select-none">{number}</div>
        <div className="inline-block bg-black text-white px-3 py-1 text-sm font-mono font-bold w-fit mb-2">
          AXIOM {number}
        </div>
        <CardTitle className="text-2xl font-black uppercase tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-lg font-medium text-black leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  )
}
