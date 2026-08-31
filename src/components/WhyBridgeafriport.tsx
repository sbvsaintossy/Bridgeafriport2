import React from 'react';
import { COMPARISONS_DATA } from '../data/companyData';
import { CheckCircle2, XCircle, ShieldCheck, Scale, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyBridgeafriport: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0E1A2B] border-b border-[#1E334E]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-[#1E334E]/80 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C9A227] tracking-[0.25em] uppercase font-semibold mb-2">
              <Scale className="w-3.5 h-3.5 text-[#6BBF59]" />
              INSTITUTIONAL DIFFERENTIATION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F5EE] tracking-tight">
              Why Bridgeafriport
            </h2>
          </div>
          <p className="text-[#E6E2D3]/80 max-w-md text-sm sm:text-base font-sans leading-relaxed">
            We are neither an advertising agency nor an abstract consultancy. We are a sovereign commercial representation corporation with aligned financial skin in the game.
          </p>
        </div>

        {/* 4 Core Comparison Frameworks */}
        <div className="space-y-6">
          {COMPARISONS_DATA.map((comp, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#09111D]/90 border border-[#1E334E] overflow-hidden shadow-xl"
            >
              {/* Dimension Header Bar */}
              <div className="bg-[#122135] px-6 py-3.5 border-b border-[#1E334E] flex items-center justify-between">
                <span className="font-mono text-xs text-[#C9A227] uppercase tracking-wider font-semibold">
                  0{idx + 1}. {comp.dimension}
                </span>
                <span className="font-mono text-[11px] text-[#6BBF59] font-medium hidden sm:inline">
                  Performance-Based Mandate
                </span>
              </div>

              {/* Grid: Traditional vs Bridgeafriport */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1E334E]">
                
                {/* Traditional Column */}
                <div className="p-6 sm:p-8 bg-[#09111D]/50 space-y-4">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="font-serif text-lg font-bold text-[#E6E2D3]/70">
                      {comp.traditionalEntity}
                    </span>
                  </div>
                  <p className="text-sm font-sans text-[#E6E2D3]/60 leading-relaxed pl-8">
                    {comp.traditionalApproach}
                  </p>
                </div>

                {/* Bridgeafriport Sovereign Advantage Column */}
                <div className="p-6 sm:p-8 bg-[#122135]/40 space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E7D32]/10 rounded-full blur-2xl pointer-events-none"></div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6BBF59] flex-shrink-0" />
                    <span className="font-serif text-lg font-bold text-[#F7F5EE]">
                      Bridgeafriport Approach
                    </span>
                  </div>
                  
                  <p className="text-sm font-sans text-[#F7F5EE] leading-relaxed pl-8 font-medium">
                    {comp.bridgeafriportAdvantage}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#1E334E]/60 pl-8 flex items-start gap-2">
                    <span className="font-mono text-[11px] text-[#C9A227] font-semibold uppercase">Outcome:</span>
                    <span className="font-mono text-xs text-[#6BBF59] leading-snug">{comp.outcome}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Operating Model Transparency Box */}
        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-[#122135] to-[#0E1A2B] border border-[#2E7D32]/50 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#6BBF59] uppercase font-semibold tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              COMMERCIAL INTEGRITY DIRECTIVE
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F5EE]">
              Zero Speculation. Pure Commercial Execution.
            </h3>
            <p className="text-sm text-[#E6E2D3]/90 font-sans max-w-2xl leading-relaxed">
              Bridgeafriport does not act as a middleman purchasing discounted inventory or taking speculative warehousing risks. We act as your accredited, sovereign commercial directorate, driving high-yield business development agreements and long-term representation.
            </p>
          </div>

          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold tracking-wide bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/40 shadow-xl transition-all group"
          >
            <span>Partner With Bridgeafriport</span>
            <ArrowUpRight className="w-4 h-4 text-[#C9A227] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
