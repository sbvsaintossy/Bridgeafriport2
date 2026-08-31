import React from 'react';
import { TradeNetworkHeroCanvas } from '../components/TradeNetworkHeroCanvas';
import { TrustPillars } from '../components/TrustPillars';
import { GlobalImpactMetrics } from '../components/GlobalImpactMetrics';
import { InteractiveMarketMap } from '../components/InteractiveMarketMap';
import { WhyBridgeafriport } from '../components/WhyBridgeafriport';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Globe, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#0E1A2B] text-[#F7F5EE] min-h-screen">
      
      {/* 1. Full-Screen Hero Experience */}
      <TradeNetworkHeroCanvas />

      {/* 2. Trust Section: Built for Serious Market Expansion */}
      <TrustPillars />

      {/* 3. Global Impact Section: Luxury Annual Report Metrics */}
      <GlobalImpactMetrics />

      {/* 4. Executive Services Framework Teaser */}
      <section className="py-20 lg:py-28 bg-[#09111D] border-b border-[#1E334E]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-[#1E334E]/80 gap-6">
            <div>
              <div className="font-mono text-xs text-[#C9A227] tracking-[0.25em] uppercase font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6BBF59]"></span>
                SOVEREIGN EXECUTION SUITE
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F5EE] tracking-tight">
                Institutional Growth Frameworks
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#6BBF59] hover:text-[#F7F5EE] transition-colors"
            >
              <span>View All 10 Frameworks</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Key Highlighted Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-xl bg-[#0E1A2B] border border-[#1E334E] hover:border-[#6BBF59]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="font-mono text-xs text-[#C9A227] font-bold mb-3 pb-2 border-b border-[#1E334E]/60">
                    FRAMEWORK {service.number}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#F7F5EE] group-hover:text-[#6BBF59] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#E6E2D3]/80 font-sans leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E334E]/60">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F7F5EE] group-hover:text-[#6BBF59] transition-colors"
                  >
                    <span>Inspect Deliverables</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A227]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Operational Markets & Strategic Presence Interactive Map */}
      <InteractiveMarketMap />

      {/* 6. Why Bridgeafriport: Institutional Comparison Framework */}
      <WhyBridgeafriport />

      {/* 7. Institutional Final Call to Action */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#09111D] to-[#0E1A2B] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15263D] border border-[#2E7D32]/60 text-xs font-mono text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#6BBF59] animate-pulse"></span>
            GLOBAL MANDATE FOR AFRICAN MARKET ENTRY
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F7F5EE] leading-tight">
            Ready to Establish Your Commercial Beachhead in Africa?
          </h2>

          <p className="text-base sm:text-xl text-[#E6E2D3]/85 font-sans max-w-3xl mx-auto leading-relaxed">
            Partner with a sovereign commercial representation corporation backed by verified distribution networks, regulatory mastery, and on-ground executive presence.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md text-base font-semibold tracking-wide bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/50 shadow-2xl shadow-[#2E7D32]/30 transition-all group"
            >
              <span>Initiate Executive Consultation</span>
              <ArrowUpRight className="w-5 h-5 text-[#C9A227] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md text-base font-medium bg-[#15263D] hover:bg-[#1C3352] text-[#F7F5EE] border border-[#1E334E] transition-colors"
            >
              <span>Read Institutional Story</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
