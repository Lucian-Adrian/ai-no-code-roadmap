import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Brain, FileText, Database, GitBranch, Lock, Workflow, Bot, XCircle, Unlock } from "lucide-react"
import { cn } from "@/lib/utils"
import React from "react"

export function RoadmapPage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)
  const [selectedNode, setSelectedNode] = useState<RoadmapNodeData | null>(null)

  const handleQuizPass = () => {
    setIsUnlocked(true)
    setQuizOpen(false)
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="text-center mb-24 space-y-6">
        <div className="inline-block border-2 border-black bg-white px-4 py-1 text-sm font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          The Curriculum
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
          From Zero to<br />Architect
        </h1>
        <p className="text-xl font-medium text-black max-w-2xl mx-auto">
          A scaffolded journey from data mindset to AI agent. Follow the path.
        </p>
      </div>

      <div className="relative pl-4 md:pl-0">
        {/* Connector Line */}
        <div className="absolute left-8 md:left-[3.25rem] top-8 bottom-8 w-1 bg-black" />

        <div className="space-y-16">
          <RoadmapNode 
            icon={<Brain className="h-6 w-6 text-black" />}
            title="Start: The Data Mindset"
            description="Think in inputs, states, and outputs. Curiosity over syntax."
            step="00"
            content="To automate, you must first understand the flow of data. Every automation is just: Trigger -> Action -> Result. Stop thinking about 'code' and start thinking about 'information flow'."
            onClick={(data) => setSelectedNode(data)}
          />
          
          <RoadmapNode 
            icon={<FileText className="h-6 w-6 text-black" />}
            title="Level 1: The Input"
            description="Mastering Google Forms & Typeform. Shape questions that yield structured data."
            step="01"
            content="Garbage in, garbage out. Learn to design forms that force users to give you clean, usable data. A text field is your enemy; a dropdown is your friend."
            onClick={(data) => setSelectedNode(data)}
          />

          <RoadmapNode 
            icon={<Database className="h-6 w-6 text-black" />}
            title="Level 2: The Brain"
            description="Structuring Data in Airtable/Sheets. Tables as memory. Views as clarity."
            step="02"
            content="Your automation needs a memory. Airtable is not just a spreadsheet; it's a relational database that acts as the 'Brain' of your operations. Learn to link records."
            onClick={(data) => setSelectedNode(data)}
          />

          <RoadmapNode 
            icon={<GitBranch className="h-6 w-6 text-black" />}
            title="Level 3: The Logic"
            description="Understanding 'If/Then' Logic. Branches, fallbacks, and guardrails."
            step="03"
            content="Logic is the nervous system. 'IF the email contains 'Invoice', THEN save to Drive, ELSE archive it.' This is where the magic happens. Boolean logic is the only language you need."
            onClick={(data) => setSelectedNode(data)}
          />

          {/* Active Recall Checkpoint */}
          <div className="relative ml-16 md:ml-24">
             <div className={cn(
                "absolute -left-[3.25rem] md:-left-[5.25rem] top-1/2 -translate-y-1/2 h-10 w-10 md:h-14 md:w-14 border-2 border-black flex items-center justify-center z-10 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                isUnlocked ? "bg-black text-white" : "bg-white text-black"
              )}>
              {isUnlocked ? <Unlock className="h-5 w-5 md:h-6 md:w-6" /> : <Lock className="h-5 w-5 md:h-6 md:w-6" />}
            </div>
            
            <button 
              onClick={() => !isUnlocked && setQuizOpen(true)}
              disabled={isUnlocked}
              className={cn(
                "w-full text-left p-6 md:p-8 border-2 border-black transition-all duration-200",
                isUnlocked 
                  ? "bg-black text-white cursor-default" 
                  : "bg-white hover:bg-gray-50 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              )}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-1">
                    {isUnlocked ? "Checkpoint Cleared" : "Active Recall Checkpoint"}
                  </h3>
                  <p className={cn("font-medium", isUnlocked ? "text-gray-300" : "text-gray-600")}>
                    {isUnlocked ? "Automation Module Unlocked" : "Solve the logic puzzle to unlock the next stage."}
                  </p>
                </div>
                {!isUnlocked && (
                  <div className="px-4 py-2 bg-black text-white font-bold text-sm uppercase tracking-wider border-2 border-black hover:bg-white hover:text-black transition-colors">
                    Start Quiz
                  </div>
                )}
              </div>
            </button>
          </div>

          <RoadmapNode 
            icon={<Workflow className="h-6 w-6 text-black" />}
            title="Master Skill: n8n Fundamentals"
            description="Visual Programming for Humans. Triggers, nodes, execution data, error handling."
            step="04"
            locked={!isUnlocked}
            content="n8n is the tool that brings it all together. Learn to connect your Input (Forms) to your Brain (Airtable) using Logic. This is where you become a builder."
            onClick={(data) => setSelectedNode(data)}
          />

          <RoadmapNode 
            icon={<Bot className="h-6 w-6 text-black" />}
            title="Boss Fight: Build Your First AI Agent"
            description="Connect OpenAI to Gmail using n8n. Ship a working, personal automation."
            step="05"
            isFinal
            locked={!isUnlocked}
            content="The final test. Build an agent that reads your emails, categorizes them using AI, and drafts a reply. You are now an Automation Architect."
            onClick={(data) => setSelectedNode(data)}
          />
        </div>
      </div>

      <QuizDialog open={quizOpen} onOpenChange={setQuizOpen} onPass={handleQuizPass} />
      
      <Dialog open={!!selectedNode} onOpenChange={(open: boolean) => !open && setSelectedNode(null)}>
        <DialogContent className="border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 gap-0 max-w-2xl bg-white rounded-none">
          <DialogHeader className="p-6 border-b-2 border-black bg-gray-50">
            <DialogTitle className="flex items-center gap-4 text-2xl font-black uppercase tracking-tight">
              <div className="p-2 border-2 border-black bg-black w-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {selectedNode?.icon ? React.cloneElement(selectedNode.icon as React.ReactElement, { className: "h-6 w-6 text-white" }) : null}
              </div>
              {selectedNode?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="p-8">
            <p className="text-lg font-medium leading-relaxed text-black">{selectedNode?.content}</p>
          </div>
          <DialogFooter className="p-6 border-t-2 border-black bg-gray-50">
            <Button 
              onClick={() => setSelectedNode(null)}
              className="w-full md:w-auto rounded-none border-2 border-black bg-black text-white hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold uppercase"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface RoadmapNodeData {
  icon: React.ReactNode
  title: string
  description: string
  step: string
  content: string
  isFinal?: boolean
  locked?: boolean
}

function RoadmapNode({ icon, title, description, step, content, isFinal, locked, onClick }: RoadmapNodeData & { onClick: (data: RoadmapNodeData) => void }) {
  return (
    <div className={`relative ml-16 md:ml-24 group ${isFinal ? 'mb-0' : ''}`}>
      <div className={cn(
        "absolute -left-[3.25rem] md:-left-[5.25rem] top-0 h-10 w-10 md:h-14 md:w-14 border-2 border-black flex items-center justify-center z-10 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200",
        !locked && "group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        isFinal && "bg-black text-white",
        locked && "opacity-50 grayscale"
      )}>
        {isFinal ? <Bot className="h-6 w-6 text-white" /> : icon}
      </div>
      <button 
        onClick={() => !locked && onClick({ icon, title, description, step, content, isFinal, locked })}
        disabled={locked}
        className={cn(
          "w-full text-left p-6 md:p-8 border-2 border-black transition-all duration-200 bg-white",
          !locked && "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 cursor-pointer",
          locked && "opacity-50 grayscale cursor-not-allowed bg-gray-100",
          isFinal && !locked && "bg-black text-white hover:bg-gray-900"
        )}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className={cn("text-xl md:text-2xl font-black uppercase tracking-tight", isFinal && !locked ? "text-white" : "text-black")}>{title}</h3>
          <span className={cn("text-sm font-bold font-mono border-2 border-black px-2 py-0.5", isFinal && !locked ? "bg-white text-black" : "bg-black text-white")}>{step}</span>
        </div>
        <p className={cn("text-lg font-medium leading-relaxed", isFinal && !locked ? "text-gray-300" : "text-gray-600")}>{description}</p>
        {locked && <div className="mt-4 flex items-center text-sm font-bold text-gray-500 uppercase tracking-wider"><Lock className="w-4 h-4 mr-2" /> Locked</div>}
      </button>
    </div>
  )
}

function QuizDialog({ open, onOpenChange, onPass }: { open: boolean, onOpenChange: (open: boolean) => void, onPass: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [failed, setFailed] = useState(false)

  const questions = [
    {
      title: "Logic Gate 1",
      scenario: "IF (Email_Subject contains 'Urgent') THEN: Send to Slack ELSE: Archive",
      question: "An email arrives with subject: 'Weekly Newsletter'. What happens?",
      options: [
        { text: "It gets sent to Slack", correct: false },
        { text: "It gets Archived", correct: true },
        { text: "It gets deleted", correct: false }
      ]
    },
    {
      title: "Logic Gate 2",
      scenario: "Trigger: New Form Submission -> Action: Create Airtable Record",
      question: "If the form has a 'Name' field but the Airtable table does NOT have a 'Name' column, what happens?",
      options: [
        { text: "It creates the column automatically", correct: false },
        { text: "The automation fails or drops the data", correct: true },
        { text: "It sends an email to the user", correct: false }
      ]
    },
    {
      title: "Logic Gate 3",
      scenario: "You want to run an automation every Monday at 9am.",
      question: "Which node starts this workflow?",
      options: [
        { text: "Webhook Trigger", correct: false },
        { text: "Schedule / Cron Trigger", correct: true },
        { text: "Email Trigger", correct: false }
      ]
    }
  ]

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1)
        setFailed(false)
      } else {
        onPass()
        setFailed(false)
        setCurrentQuestion(0) // Reset for next time
      }
    } else {
      setFailed(true)
    }
  }

  const q = questions[currentQuestion]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 gap-0 bg-white rounded-none">
        <DialogHeader className="p-6 border-b-2 border-black bg-gray-50">
          <DialogTitle className="text-2xl font-black uppercase tracking-tight flex justify-between items-center">
            <span>{q.title}</span>
            <span className="text-sm bg-black text-white px-3 py-1 font-mono">{currentQuestion + 1}/{questions.length}</span>
          </DialogTitle>
          <DialogDescription className="text-base font-medium text-gray-600">
            Prove you understand the logic before moving to automation.
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-6 space-y-6">
          <div className="p-4 border-2 border-black bg-gray-100 text-sm font-mono font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {q.scenario}
          </div>
          
          <p className="text-lg font-bold text-black">
            {q.question}
          </p>

          {failed && (
            <div className="flex items-center gap-2 text-red-600 font-bold text-sm bg-red-50 p-3 border-2 border-red-100 animate-in fade-in slide-in-from-top-2">
              <XCircle className="h-5 w-5" />
              INCORRECT LOGIC. TRY AGAIN.
            </div>
          )}

          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt.correct)}
                className="w-full text-left p-4 border-2 border-black font-bold hover:bg-black hover:text-white transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none"
              >
                {String.fromCharCode(65 + idx)}. {opt.text}
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
