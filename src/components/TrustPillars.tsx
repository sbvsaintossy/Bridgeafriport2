import React from 'react';
import { PILLARS_DATA } from '../data/companyData';
import { ShieldCheck, Network, Building2, TrendingUp, Scale, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#6BBF59]" />,
  Network: <Network className="w-6 h-6 text-[#6BBF59]" />,
  Building2: <Building2 className="w-6 h-6 text-[#6BBF59]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#6BBF59]" />,
  Scale: <Scale className="w-6 h-6 text-[#6BBF59]" />,
  Compass: <Compass className="w-6 h-6 text-[#6BBF59]" />
};

export const TrustPillars: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#09111D] border-b border-[#1E334E]/60 relative overflow-hidden">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#15263D_1px,transparent_1px),linear-gradient(to_bottom,#15263D_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#1E334E]/80 gap-6">
          <div>
            <div className="font-mono text-xs text-[#C9A227] tracking-[0.2em] uppercase font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6BBF59]"></span>
              INSTITUTIONAL FOUNDATION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F5EE] tracking-tight">
              Built for Serious Market Expansion
            </h2>
          </div>
          <p className="text-[#E6E2D3]/80 max-w-md text-sm sm:text-base font-sans leading-relaxed">
            Six disciplined operational pillars engineered to eliminate cross-border friction and establish high-yield market dominance across African jurisdictions.
          </p>
        </div>

        {/* 6 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative rounded-xl bg-[#0E1A2B]/80 border border-[#1E334E] hover:border-[#6BBF59]/60 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2E7D32]/10 flex flex-col justify-between"
            >
              {/* Pillar Number & Top Accent */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1E334E]/60">
                  <div className="p-3 rounded-lg bg-[#15263D] border border-[#1E334E] group-hover:border-[#6BBF59]/40 group-hover:bg-[#2E7D32]/20 transition-colors">
                    {iconMap[pillar.iconName]}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#C9A227] tracking-widest">
                    PILLAR {pillar.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F5EE] mb-3 group-hover:text-[#6BBF59] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#E6E2D3]/80 leading-relaxed font-sans mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Strategic Impact Monospace Footer */}
              <div className="pt-4 border-t border-[#1E334E]/60">
                <div className="text-[11px] font-mono text-[#C9A227] uppercase tracking-wider mb-1 font-semibold">
                  Strategic Output:
                </div>
                <div className="text-xs text-[#E6E2D3]/90 font-mono leading-relaxed">
                  {pillar.strategicImpact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#122135] border border-[#2E7D32]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-[#6BBF59] flex-shrink-0 animate-pulse"></div>
            <p className="text-sm font-sans text-[#F7F5EE]">
              <strong className="text-[#C9A227] font-semibold">Zero Speculation Operating Model:</strong> Bridgeafriport does not purchase, warehouse, or hold inventory. We operate exclusively through performance-based commercial representation and revenue-aligned mandates.
            </p>
          </div>
          <Link
            to="/about"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono font-semibold uppercase tracking-wider bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/40 transition-colors"
          >
            <span>Our Institutional Model</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
