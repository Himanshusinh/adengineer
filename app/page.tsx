import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 w-full">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-purple-400" />
          <span className="text-xl font-bold tracking-tight">AdEngineer</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          Something big is brewing
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight max-w-4xl mb-6 leading-[1.1]">
          <span className="text-gradient">Coming Soon</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed">
          The ultimate platform for marketers and engineers to design, test, and deploy ad creatives at scale with AI.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-10">
          <form className="flex w-full sm:w-auto max-w-sm relative">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:w-80 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 backdrop-blur-md"
              required
            />
            <button 
              type="button"
              className="absolute right-2 top-2 bottom-2 px-6 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-sm text-gray-600 border-t border-white/10">
        © {new Date().getFullYear()} AdEngineer Inc. All rights reserved.
      </footer>
    </div>
  );
}
