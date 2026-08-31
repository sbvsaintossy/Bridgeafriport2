import React from 'react';
import { InteractiveMarketMap } from '../components/InteractiveMarketMap';
import { MARKETS_DATA } from '../data/companyData';
import { ShieldCheck, Anchor, TrendingUp, Globe, Compass, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MarketsPage: React.FC = () => {
  return (
    <div className="bg-[#0E1A2B] text-[#F7F5EE] min-h-screen">
      
      {/* Markets Header */}
      <section className="relative py-20 lg:py-28 bg-[#09111D] border-b border-[#1E334E]/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1E334E_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15263D] border border-[#2E7D32]/50 text-xs font-mono text-[#C9A227]">
              <span className="w-2 h-2 rounded-full bg-[#6BBF59] inline-block"></span>
              SOVEREIGN TRADE CORRIDORS & MARITIME GATEWAYS
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F5EE] leading-[1.1]">
              Strategic Markets & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7F5EE] via-[#E6E2D3] to-[#C9A227]">
                Regional Corridors
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#E6E2D3]/90 font-sans leading-relaxed">
              Operating across Nigeria, Ghana, Côte d'Ivoire, Senegal, Togo, and Benin — providing global manufacturers and investors with seamless commercial access to over 320 million consumers across West Africa, with active continental expansion pipelines under AfCFTA.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Map & Deep Inspector Component */}
      <InteractiveMarketMap isFullPage={true} />

      {/* Deep-Dive Grid of All 6 Markets */}
      <section className="py-20 lg:py-28 bg-[#0E1A2B] border-b border-[#1E334E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b border-[#1E334E]/80 gap-6">
            <div>
              <div className="font-mono text-xs text-[#C9A227] tracking-[0.25em] uppercase font-semibold mb-2">
                TERRITORIAL OVERVIEW
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5EE]">
                In-Depth Sovereign Profiles
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#E6E2D3]/80 max-w-md font-sans leading-relaxed">
              Detailed strategic advantages, maritime hubs, high-demand commercial categories, and local office directorates for each market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MARKETS_DATA.map((mkt) => (
              <div
                key={mkt.id}
                className="p-8 rounded-xl bg-[#09111D] border border-[#1E334E] hover:border-[#6BBF59]/60 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#1E334E]/60">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{mkt.flag}</span>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#F7F5EE]">{mkt.name}</h3>
                        <span className="font-mono text-xs text-[#6BBF59]">Hub: {mkt.commercialHub}</span>
                      </div>
                    </div>

                    <div className="text-right font-mono text-xs">
                      <div className="text-[#C9A227] font-bold">{mkt.gdp}</div>
                      <div className="text-[#E6E2D3]/60">{mkt.population}</div>
                    </div>
                  </div>

                  <p className="text-sm font-sans text-[#E6E2D3]/85 leading-relaxed my-4">
                    {mkt.overview}
                  </p>

                  <div className="space-y-3">
                    <div className="font-mono text-xs text-[#C9A227] uppercase font-semibold">
                      Key Strategic Advantages:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#E6E2D3]/90 font-sans">
                      {mkt.strategicAdvantages.slice(0, 3).map((adv, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="text-[#6BBF59] font-bold">•</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#1E334E]/60">
                    <div className="font-mono text-xs text-[#6BBF59] uppercase font-semibold mb-2">
                      High-Growth Inward Sectors:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {mkt.highDemandSectors.slice(0, 4).map((sec, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded bg-[#15263D] border border-[#1E334E] text-[11px] font-mono text-[#F7F5EE]">
                          {sec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1E334E]/60 flex items-center justify-between">
                  <div className="text-xs font-mono text-[#E6E2D3]/70">
                    Office: <span className="text-[#F7F5EE]">{mkt.officeEmail}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#6BBF59] hover:text-[#F7F5EE]"
                  >
                    <span>Initiate Entry</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A227]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AfCFTA Continental Integration Banner */}
      <section className="py-16 bg-[#09111D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#122135] to-[#0E1A2B] border border-[#2E7D32]/50 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="font-mono text-xs text-[#6BBF59] uppercase tracking-widest font-semibold flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C9A227]" />
                PAN-AFRICAN CONTINENTAL FREE TRADE AREA (AfCFTA)
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F5EE]">
                1.4 Billion People. A $3.4 Trillion Combined Single Market.
              </h3>
              <p className="text-sm text-[#E6E2D3]/90 font-sans max-w-3xl leading-relaxed">
                By establishing an accredited commercial foundation in West Africa through Bridgeafriport, international enterprises gain a preferential launching pad to benefit from progressive tariff reductions and harmonized customs rules under AfCFTA.
              </p>
            </div>

            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold tracking-wide bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/40 shadow-xl transition-all group"
            >
              <span>Consult with Trade Officers</span>
              <ArrowUpRight className="w-4 h-4 text-[#C9A227] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
