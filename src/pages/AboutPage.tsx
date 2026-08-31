import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Award, TrendingUp, Landmark, Network, ArrowUpRight, Scale, CheckCircle2 } from 'lucide-react';
import { GLOBAL_ORIGINS } from '../data/companyData';
import { WhyBridgeafriport } from '../components/WhyBridgeafriport';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#0E1A2B] text-[#F7F5EE] min-h-screen">
      
      {/* Page Header / Hero */}
      <section className="relative py-20 lg:py-28 bg-[#09111D] border-b border-[#1E334E]/60 overflow-hidden">
        {/* Architectural Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1E334E_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15263D] border border-[#2E7D32]/50 text-xs font-mono text-[#C9A227]">
              <span className="w-2 h-2 rounded-full bg-[#6BBF59] inline-block"></span>
              CORPORATE PROFILE & INSTITUTIONAL MANDATE
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F5EE] leading-[1.1]">
              Africa’s Commercial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7F5EE] via-[#E6E2D3] to-[#C9A227]">
                Bridge to the World
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#E6E2D3]/90 font-sans leading-relaxed">
              Bridgeafriport is an institutional market expansion and commercial representation corporation. We bridge the structural gap between world-class international manufacturers, investors, and brands, and the explosive commercial opportunities across African sovereign economies.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Narrative: Mission & Vision */}
      <section className="py-20 lg:py-28 border-b border-[#1E334E]/60 bg-[#0E1A2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Mission & Vision Cards */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="p-8 rounded-xl bg-[#09111D] border border-[#1E334E] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#15263D] text-[#6BBF59]">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#C9A227] font-semibold">
                    OUR CORPORATE MISSION
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#F7F5EE]">
                  Catalyzing Sustainable Economic Expansion
                </h3>
                <p className="text-sm sm:text-base text-[#E6E2D3]/85 font-sans leading-relaxed">
                  To eliminate transactional risk, regulatory opacity, and channel fragmentation for global enterprises entering Africa, creating durable commercial pipelines that generate long-term shareholder value and accelerate continental industrialization.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-[#09111D] border border-[#1E334E] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#15263D] text-[#6BBF59]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#C9A227] font-semibold">
                    OUR CONTINENTAL VISION
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#F7F5EE]">
                  The Definitive Pan-African Trade Conduit
                </h3>
                <p className="text-sm sm:text-base text-[#E6E2D3]/85 font-sans leading-relaxed">
                  To serve as the primary institutional gateway through which global commerce flows into Africa, orchestrating high-yield trade corridors across all major economic regional blocs under the AfCFTA single market framework.
                </p>
              </div>

            </div>

            {/* Right: Institutional Story & Economic Philosophy */}
            <div className="lg:col-span-6 space-y-6 text-[#E6E2D3]/90 font-sans leading-relaxed">
              <div className="font-mono text-xs text-[#6BBF59] uppercase tracking-wider font-semibold">
                THE INSTITUTIONAL PERSPECTIVE
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5EE] leading-tight">
                Architecting Institutional Trade Inflows into the 21st Century's Fastest Growing Economic Basin
              </h2>

              <p className="text-base">
                Africa represents the world's most compelling demographic and commercial growth horizon. With a population projected to reach 2.5 billion by 2050, surging urbanization, and the implementation of the African Continental Free Trade Area (AfCFTA), the continent requires massive inflows of high-quality industrial machinery, healthcare solutions, consumer products, agricultural inputs, and technological infrastructure.
              </p>

              <p className="text-base">
                Historically, international manufacturers and exporters faced significant friction: opaque regulatory procedures, fragmented wholesale channels, unreliable intermediaries, and currency volatility. Traditional consultancies merely compiled static PDF reports from distant offices, while commission brokers chased one-off transactional finder fees without long-term commitment.
              </p>

              <p className="text-base">
                <strong className="text-[#F7F5EE]">Bridgeafriport was founded to solve this institutional gap.</strong> By establishing permanent, sovereign on-the-ground trade directorates in key African capitals—Nigeria, Ghana, Côte d'Ivoire, Senegal, Togo, and Benin—we provide global enterprises with the local stature, vetted distribution syndicates, and regulatory mastery necessary to achieve enduring market dominance.
              </p>

              <div className="pt-4 border-t border-[#1E334E]/80 grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded bg-[#15263D]/60 border border-[#1E334E]">
                  <div className="text-[#6BBF59] font-bold text-sm">ZERO INVENTORY</div>
                  <div className="text-[#E6E2D3]/70 mt-0.5">Pure representation & commercial mandate</div>
                </div>
                <div className="p-3 rounded bg-[#15263D]/60 border border-[#1E334E]">
                  <div className="text-[#C9A227] font-bold text-sm">ALIGNED INCENTIVES</div>
                  <div className="text-[#E6E2D3]/70 mt-0.5">Performance-linked commercial success</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Global Sourcing Corridors (6 Continents) */}
      <section className="py-20 lg:py-28 bg-[#09111D] border-b border-[#1E334E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-[#1E334E]/80 gap-6">
            <div>
              <div className="font-mono text-xs text-[#C9A227] tracking-[0.25em] uppercase font-semibold mb-2">
                GLOBAL ORIGINS NETWORK
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F5EE] tracking-tight">
                Connecting 6 Continents to Africa
              </h2>
            </div>
            <p className="text-[#E6E2D3]/80 max-w-md text-sm sm:text-base font-sans leading-relaxed">
              We represent global enterprise clients and originate commercial transactions across all major manufacturing and capital hubs worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_ORIGINS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0E1A2B] border border-[#1E334E] hover:border-[#6BBF59]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#1E334E]/60 pb-3 mb-4">
                    <span className="font-serif text-xl font-bold text-[#F7F5EE]">{item.continent}</span>
                    <span className="font-mono text-xs text-[#6BBF59] font-bold px-2 py-0.5 rounded bg-[#2E7D32]/20 border border-[#2E7D32]/40">
                      {item.share}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#E6E2D3]/70 mb-1 uppercase tracking-wider">
                    Primary Sourcing Hubs:
                  </div>
                  <div className="text-sm font-sans text-[#F7F5EE] leading-relaxed">
                    {item.hubs}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#1E334E]/40 text-[11px] font-mono text-[#C9A227]">
                  ➔ Direct Corridors to West & Pan-African Ports
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* African Regional Expertise & Future Expansion Strategy */}
      <section className="py-20 lg:py-28 bg-[#0E1A2B] border-b border-[#1E334E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="font-mono text-xs text-[#6BBF59] uppercase tracking-wider font-semibold">
                SYSTEMATIC SCALE
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5EE] leading-tight">
                From Sovereign Beachheads to Pan-African Scale
              </h2>
              <p className="text-base font-sans text-[#E6E2D3]/85 leading-relaxed">
                Bridgeafriport’s operational model follows a disciplined phased expansion methodology. Rather than attempting a diluted continental presence, we establish deep institutional dominance in foundational beachheads—such as Nigeria and Ghana—before activating contiguous trade corridors under the ECOWAS Trade Liberalization Scheme and AfCFTA protocols.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm font-sans text-[#E6E2D3]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#6BBF59] flex-shrink-0 mt-0.5" />
                  <span><strong>Phase 1 (Current Core):</strong> Comprehensive distribution coverage across Nigeria, Ghana, Côte d'Ivoire, Senegal, Togo, and Benin (320M+ population base).</span>
                </div>
                <div className="flex items-start gap-3 text-sm font-sans text-[#E6E2D3]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <span><strong>Phase 2 (Expanding):</strong> Activation of East and North African commercial gateways including Kenya, Morocco, Egypt, and Tanzania.</span>
                </div>
                <div className="flex items-start gap-3 text-sm font-sans text-[#E6E2D3]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#F7F5EE] flex-shrink-0 mt-0.5" />
                  <span><strong>Phase 3 (Continental Maturity):</strong> Full 54-nation AfCFTA trade routing and continental single-window commercial representation.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-xl bg-[#09111D] border border-[#1E334E] space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#F7F5EE]">
                Our Non-Negotiable Institutional Principles
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm font-sans text-[#E6E2D3]/80">
                <div className="p-4 rounded-lg bg-[#15263D]/60 border border-[#1E334E] space-y-1">
                  <div className="font-bold text-[#F7F5EE] font-serif text-base">1. Zero Inventory & Pure Alignment</div>
                  <p>We do not speculate on goods or hold warehouse inventory. Our commercial incentives remain 100% aligned with our principals' revenue growth.</p>
                </div>
                
                <div className="p-4 rounded-lg bg-[#15263D]/60 border border-[#1E334E] space-y-1">
                  <div className="font-bold text-[#F7F5EE] font-serif text-base">2. Verified Solvency & Counterparty Due Diligence</div>
                  <p>Every distributor, wholesaler, and off-taker introduced to our clients undergoes rigorous financial, legal, and operational background verification.</p>
                </div>

                <div className="p-4 rounded-lg bg-[#15263D]/60 border border-[#1E334E] space-y-1">
                  <div className="font-bold text-[#F7F5EE] font-serif text-base">3. Full Regulatory Conformity</div>
                  <p>We strictly uphold national statutory standards (NAFDAC, SON, GSA, FDA, CODINORM) and international anti-bribery / FCPA compliance standards.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Bridgeafriport Comparison Framework */}
      <WhyBridgeafriport />

      {/* CTA */}
      <section className="py-16 bg-[#09111D] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="font-serif text-3xl font-bold text-[#F7F5EE]">
            Connect with Our Institutional Trade Directorate
          </h3>
          <p className="text-sm sm:text-base text-[#E6E2D3]/80 font-sans max-w-xl mx-auto">
            Speak directly with our regional trade officers to explore performance-based market expansion opportunities across Africa.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-semibold tracking-wide bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/40 shadow-xl transition-all group"
          >
            <span>Inquire for Institutional Representation</span>
            <ArrowUpRight className="w-4 h-4 text-[#C9A227] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

    </div>
  );
};
