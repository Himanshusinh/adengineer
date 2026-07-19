import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 w-full">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-purple-400" />
          <span className="text-xl font-bold tracking-tight">A.D.Engineers</span>
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
          ADEN provides innovative solutions in mechanical and thermal solid/liquid separation offering Centrifuges & Pumps on a global basis.
        </p>

        <div className="flex flex-col items-center gap-6 w-full sm:w-auto relative z-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-500 text-sm">Contact us directly</span>
            <a href="tel:+919316565097" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium hover:bg-purple-500/20 hover:text-purple-200 transition-colors">
              📞 +91 93165 65097
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-sm text-gray-600 border-t border-white/10">
        © {new Date().getFullYear()} A.D.Engineers
      </footer>
    </div>
  );
}
