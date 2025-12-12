import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Terminal, Download, BookOpen, Map } from "lucide-react"

export function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 min-h-[calc(100vh-100px)] flex flex-col">
      <div className="mb-12 border-l-4 border-black pl-6">
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">Technical<br/>Arsenal</h1>
        <p className="text-xl font-medium text-black">Tools, guides, and maps to build your automation career.</p>
      </div>
      
      <Tabs defaultValue="setup" className="flex-1 flex flex-col">
        <TabsList className="w-fit mb-8 bg-transparent p-0 gap-4 h-auto flex-wrap">
          <TabsTrigger 
            value="setup" 
            className="rounded-none border-2 border-black bg-white px-6 py-3 text-lg font-bold uppercase tracking-wide data-[state=active]:bg-black data-[state=active]:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all data-[state=active]:translate-x-[2px] data-[state=active]:translate-y-[2px] data-[state=active]:shadow-none"
          >
            Setup & Installation
          </TabsTrigger>
          <TabsTrigger 
            value="roadmap" 
            className="rounded-none border-2 border-black bg-white px-6 py-3 text-lg font-bold uppercase tracking-wide data-[state=active]:bg-black data-[state=active]:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all data-[state=active]:translate-x-[2px] data-[state=active]:translate-y-[2px] data-[state=active]:shadow-none"
          >
            AI Data Scientist Roadmap
          </TabsTrigger>
        </TabsList>

        <TabsContent value="setup" className="flex-1">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="rounded-none border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
              <CardHeader className="border-b-2 border-black bg-gray-50">
                <CardTitle className="flex items-center gap-3 text-xl font-black uppercase">
                  <div className="p-2 bg-black text-white">
                    <Download className="h-5 w-5" />
                  </div>
                  1. Install Node.js
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <p className="text-lg font-medium text-black">
                  Required to run n8n locally. Download the LTS (Long Term Support) version for stability.
                </p>
                <Button asChild className="w-full rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12">
                  <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                    Download Node.js <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-none border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
              <CardHeader className="border-b-2 border-black bg-gray-50">
                <CardTitle className="flex items-center gap-3 text-xl font-black uppercase">
                  <div className="p-2 bg-black text-white">
                    <Terminal className="h-5 w-5" />
                  </div>
                  2. Run n8n
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="bg-black text-green-400 p-4 border-2 border-gray-800 font-mono text-sm font-bold">
                  &gt; npx n8n
                </div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                  Type this into your terminal after installing Node.js.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
              <CardHeader className="border-b-2 border-black bg-gray-50">
                <CardTitle className="flex items-center gap-3 text-xl font-black uppercase">
                  <div className="p-2 bg-black text-white">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  3. Learn
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Button asChild variant="ghost" className="w-full justify-start rounded-none border-2 border-transparent hover:border-black hover:bg-gray-100 font-bold text-lg">
                  <a href="https://n8n.io/workflows/" target="_blank" rel="noreferrer">
                    Browse Templates <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" className="w-full justify-start rounded-none border-2 border-transparent hover:border-black hover:bg-gray-100 font-bold text-lg">
                  <a href="https://docs.n8n.io/" target="_blank" rel="noreferrer">
                    Read Docs <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="roadmap" className="flex-1 h-full">
          <div className="flex flex-col items-center justify-center h-[500px] border-2 border-black bg-gray-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 text-center space-y-8">
            <div className="p-6 bg-white border-2 border-black rounded-full">
              <Map className="h-16 w-16 text-black" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-black uppercase">External Resource</h2>
              <p className="text-xl font-medium text-gray-600 max-w-md mx-auto">
                The AI Data Scientist roadmap is hosted on roadmap.sh. It is too large to embed directly.
              </p>
            </div>
            <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-none border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
              <a href="https://roadmap.sh/ai-data-scientist" target="_blank" rel="noreferrer">
                OPEN FULL ROADMAP <ExternalLink className="ml-3 h-6 w-6" />
              </a>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
