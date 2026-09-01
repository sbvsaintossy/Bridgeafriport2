import React, { useState, useRef } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';
import { ShieldCheck, CheckCircle2, FileText, Target, ArrowUpRight, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);
  const showcaseRef = useRef<HTMLElement | null>(null);

  const handleInspectFramework = (srv: ServiceItem) => {
    setSelectedService(srv);
    requestAnimationFrame(() => {
      if (showcaseRef.current) {
        showcaseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  return (
    <div className="bg-[#0E1A2B] text-[#F7F5EE] min-h-screen">
      
      {/* Services Header */}
      <section className="relative py-20 lg:py-28 bg-[#09111D] border-b border-[#1E334E]/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1E334E_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15263D] border border-[#2E7D32]/50 text-xs font-mono text-[#C9A227]">
              <span className="w-2 h-2 rounded-full bg-[#6BBF59] inline-block"></span>
              EXECUTIVE COMMERCIAL SERVICE SUITE
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F5EE] leading-[1.1]">
              Commercial Growth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7F5EE] via-[#E6E2D3] to-[#C9A227]">
                Frameworks (01 – 10)
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#E6E2D3]/90 font-sans leading-relaxed">
              We do not sell theoretical advisory hours. We deploy outcome-engineered commercial frameworks designed to secure distribution contracts, establish regulatory clearance, and accelerate revenue generation across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Services Framework Showcase */}
      <section ref={showcaseRef} className="py-20 lg:py-28 bg-[#0E1A2B] border-b border-[#1E334E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 10 Service Frameworks Navigation List */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-semibold pb-2 mb-2 border-b border-[#1E334E]/80">
                SELECT FRAMEWORK FOR DETAILED OUTCOMES
              </div>

              {SERVICES_DATA.map((service) => {
                const isSelected = selectedService.id === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#15263D] border-[#6BBF59] text-[#F7F5EE] shadow-xl'
                        : 'bg-[#09111D]/80 border-[#1E334E] text-[#E6E2D3]/70 hover:bg-[#15263D]/60 hover:text-[#F7F5EE]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold px-2 py-1 rounded ${
                        isSelected ? 'bg-[#2E7D32] text-[#F7F5EE]' : 'bg-[#0E1A2B] text-[#C9A227]'
                      }`}>
                        {service.number}
                      </span>
                      <span className="font-serif text-base sm:text-lg font-bold group-hover:text-[#6BBF59] transition-colors">
                        {service.title}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#6BBF59] translate-x-1' : 'text-[#E6E2D3]/30'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Selected Service Deep-Dive Inspector */}
            <div className="lg:col-span-7 bg-[#09111D] rounded-2xl border border-[#1E334E] p-8 sm:p-10 shadow-2xl space-y-8 sticky top-28">
              
              {/* Header */}
              <div className="pb-6 border-b border-[#1E334E]/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-[#2E7D32]/20 border border-[#2E7D32]/50 text-[#6BBF59]">
                    EXECUTIVE FRAMEWORK {selectedService.number}
                  </span>
                  <span className="font-mono text-xs text-[#C9A227] tracking-wider uppercase font-semibold">
                    OUTCOME-ORIENTED
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5EE] mb-3">
                  {selectedService.title}
                </h2>

                <p className="text-base text-[#C9A227] font-sans font-medium italic">
                  "{selectedService.tagline}"
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs text-[#6BBF59] uppercase tracking-wider font-semibold">
                  Strategic Scope & Execution:
                </h4>
                <p className="text-sm sm:text-base text-[#E6E2D3]/90 font-sans leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Verified Business Outcomes */}
              <div className="space-y-3 pt-4 border-t border-[#1E334E]/60">
                <h4 className="font-mono text-xs text-[#C9A227] uppercase tracking-wider font-semibold flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#6BBF59]" />
                  Quantifiable Business Outcomes:
                </h4>
                <div className="space-y-2.5">
                  {selectedService.businessOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#F7F5EE]">
                      <CheckCircle2 className="w-4 h-4 text-[#6BBF59] flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Concrete Institutional Deliverables */}
              <div className="space-y-3 pt-4 border-t border-[#1E334E]/60">
                <h4 className="font-mono text-xs text-[#6BBF59] uppercase tracking-wider font-semibold flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#C9A227]" />
                  Key Institutional Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#E6E2D3]">
                  {selectedService.deliverables.map((deliv, idx) => (
                    <div key={idx} className="p-3 rounded bg-[#15263D]/70 border border-[#1E334E]">
                      • {deliv}
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Industry Verticals & CTA */}
              <div className="pt-6 border-t border-[#1E334E]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-[#E6E2D3]/70">
                  <span className="text-[#C9A227] font-bold">Key Verticals:</span> {selectedService.targetSectors.join(' • ')}
                </div>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-xs font-mono font-semibold tracking-wider uppercase bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/40 transition-colors flex-shrink-0"
                >
                  <span>Commission Framework {selectedService.number}</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A227]" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Comprehensive Editorial Service Catalogue (All 10 Laid Out) */}
      <section className="py-20 lg:py-28 bg-[#09111D] border-b border-[#1E334E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-semibold">
              COMPLETE SERVICE DIRECTORY
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5EE]">
              The 10 Strategic Growth Frameworks
            </h3>
            <p className="text-sm sm:text-base text-[#E6E2D3]/80 font-sans">
              An architectural overview of all commercial capabilities deployed by Bridgeafriport across African operational territories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="p-8 rounded-xl bg-[#0E1A2B] border border-[#1E334E] hover:border-[#6BBF59]/50 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E334E]/60">
                    <span className="font-mono text-xs font-bold text-[#C9A227]">
                      FRAMEWORK {srv.number}
                    </span>
                    <span className="font-mono text-[10px] text-[#6BBF59] px-2 py-0.5 rounded bg-[#2E7D32]/20 border border-[#2E7D32]/40">
                      PERFORMANCE-BASED
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-[#F7F5EE] mb-2">
                    {srv.title}
                  </h4>

                  <p className="text-xs text-[#C9A227] font-mono italic mb-4">
                    {srv.tagline}
                  </p>

                  <p className="text-sm font-sans text-[#E6E2D3]/85 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2">
                    <div className="font-mono text-xs text-[#6BBF59] uppercase font-semibold">Key Outcomes:</div>
                    {srv.businessOutcomes.slice(0, 2).map((out, oIdx) => (
                      <div key={oIdx} className="text-xs text-[#E6E2D3]/90 font-sans flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6BBF59] flex-shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1E334E]/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#E6E2D3]/60">
                    Sector: {srv.targetSectors[0]}
                  </span>
                  <button
                    onClick={() => handleInspectFramework(srv)}
                    className="text-xs font-mono text-[#6BBF59] hover:text-[#F7F5EE] font-semibold flex items-center gap-1"
                  >
                    <span>Inspect Full Framework</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0E1A2B] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="font-serif text-3xl font-bold text-[#F7F5EE]">
            Request a Custom Commercial Proposal
          </h3>
          <p className="text-sm sm:text-base text-[#E6E2D3]/80 font-sans max-w-xl mx-auto">
            Our trade directors will evaluate your product catalogue and formulate a customized market-entry framework tailored to your target African jurisdictions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-semibold tracking-wide bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/40 shadow-xl transition-all group"
          >
            <span>Initiate Market Evaluation</span>
            <ArrowUpRight className="w-4 h-4 text-[#C9A227] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

    </div>
  );
};
