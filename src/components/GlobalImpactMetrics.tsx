import React from 'react';
import { METRICS_DATA } from '../data/companyData';
import { BarChart3, TrendingUp, Landmark, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GlobalImpactMetrics: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0E1A2B] border-b border-[#1E334E]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxury Annual Report Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-[#1E334E]/80 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C9A227] tracking-[0.25em] uppercase font-semibold mb-2">
              <Landmark className="w-3.5 h-3.5 text-[#6BBF59]" />
              EXECUTIVE COMMERCIAL METRICS
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F5EE] tracking-tight">
              Global Scale & Market Impact
            </h2>
          </div>
          
          <div className="flex items-center gap-3 text-xs font-mono text-[#E6E2D3]/70">
            <span className="px-3 py-1.5 rounded bg-[#15263D] border border-[#1E334E] text-[#6BBF59] font-bold">
              AUDITED COMMERCIAL DATA
            </span>
            <span className="hidden sm:inline">WEST AFRICA & PAN-AFRICA CORRIDORS</span>
          </div>
        </div>

        {/* 6 Luxury Metric Cards (Annual Report Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {METRICS_DATA.map((metric, index) => (
            <div
              key={metric.id}
              className="relative p-8 rounded-xl bg-[#09111D]/90 border border-[#1E334E] hover:border-[#C9A227]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Category Tag & Index */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#1E334E]/40">
                <span className="font-mono text-xs uppercase tracking-widest text-[#6BBF59] font-semibold">
                  {metric.category} Dimension
                </span>
                <span className="font-mono text-xs text-[#E6E2D3]/40">
                  0{index + 1}
                </span>
              </div>

              {/* Large Metric Display */}
              <div className="my-2">
                <div className="font-mono text-4xl sm:text-5xl font-bold text-[#F7F5EE] tracking-tight group-hover:text-[#C9A227] transition-colors">
                  {metric.value}
                </div>
                <div className="font-serif text-lg font-bold text-[#F7F5EE] mt-2 group-hover:text-[#6BBF59] transition-colors">
                  {metric.label}
                </div>
              </div>

              {/* Monospace Sublabel / Context */}
              <div className="pt-4 mt-4 border-t border-[#1E334E]/60 text-xs text-[#E6E2D3]/80 font-sans leading-relaxed">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Annual Statement Quote */}
        <div className="mt-14 p-8 rounded-xl bg-[#15263D]/60 border border-[#1E334E] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-3xl">
            <div className="font-mono text-xs text-[#6BBF59] uppercase tracking-wider font-semibold">
              Corporate Governance & Value Creation
            </div>
            <p className="font-serif text-lg sm:text-xl text-[#F7F5EE] italic leading-relaxed">
              "We measure our success not by the volume of speculative leads generated, but by the tangible commercial equity and verified distribution channels established across sovereign African markets."
            </p>
            <div className="font-mono text-xs text-[#C9A227] pt-1">
              — Bridgeafriport Corporate Governance & Directorate
            </div>
          </div>

          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold tracking-wide bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/40 shadow-lg transition-all group"
          >
            <span>Request Market Dossier</span>
            <ArrowUpRight className="w-4 h-4 text-[#C9A227] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
