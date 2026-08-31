import React, { useState } from 'react';
import { MARKETS_DATA } from '../data/companyData';
import { MarketData } from '../types';
import { Anchor, Users, DollarSign, Languages, ShieldCheck, ArrowRight, Compass, Sparkles, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InteractiveMarketMapProps {
  isFullPage?: boolean;
}

export const InteractiveMarketMap: React.FC<InteractiveMarketMapProps> = ({ isFullPage = false }) => {
  const [selectedMarket, setSelectedMarket] = useState<MarketData>(MARKETS_DATA[0]);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  // Future expansion pipeline markets
  const pipelineMarkets = [
    { name: 'Kenya', region: 'East Africa Gateway & Tech Hub', flag: '🇰🇪' },
    { name: 'Morocco', region: 'North Africa & Mediterranean Hub', flag: '🇲🇦' },
    { name: 'Egypt', region: 'Suez Canal & MENA Industrial Nexus', flag: '🇪🇬' },
    { name: 'South Africa', region: 'SADC Financial & Industrial Anchor', flag: '🇿🇦' },
    { name: 'Tanzania', region: 'Central-East Maritime Corridor', flag: '🇹🇿' },
    { name: 'Angola', region: 'Atlantic Energy & Logistics Hub', flag: '🇦🇴' },
    { name: 'Cameroon', region: 'CEMAC Central African Anchor', flag: '🇨🇲' },
    { name: 'Rwanda', region: 'East African Logistics Innovation Hub', flag: '🇷🇼' }
  ];

  return (
    <section className={`bg-[#09111D] border-b border-[#1E334E]/60 relative ${isFullPage ? 'py-16' : 'py-20 lg:py-28'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-[#1E334E]/80 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C9A227] tracking-[0.25em] uppercase font-semibold mb-2">
              <Compass className="w-3.5 h-3.5 text-[#6BBF59]" />
              SOVEREIGN TRADE CORRIDORS
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F5EE] tracking-tight">
              Operational Markets & Strategic Presence
            </h2>
          </div>
          <p className="text-[#E6E2D3]/80 max-w-md text-sm sm:text-base font-sans leading-relaxed">
            Direct operational beachheads connecting over 320 million consumers across West Africa, engineered as the foundation for Pan-African expansion.
          </p>
        </div>

        {/* Interactive Map & Market Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Vector Map & Country Selectors */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Country Pill Selector Bar */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {MARKETS_DATA.map((market) => (
                <button
                  key={market.id}
                  onClick={() => setSelectedMarket(market)}
                  className={`p-2.5 rounded-lg text-center transition-all flex flex-col items-center gap-1 border ${
                    selectedMarket.id === market.id
                      ? 'bg-[#2E7D32] border-[#6BBF59] text-[#F7F5EE] shadow-lg shadow-[#2E7D32]/25 font-bold'
                      : 'bg-[#0E1A2B] border-[#1E334E] text-[#E6E2D3]/70 hover:bg-[#15263D] hover:text-[#F7F5EE]'
                  }`}
                >
                  <span className="text-xl">{market.flag}</span>
                  <span className="text-xs font-mono font-medium tracking-tight truncate w-full">
                    {market.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom SVG West Africa Trade Corridors Map */}
            <div className="relative w-full h-80 sm:h-96 rounded-xl bg-[#0E1A2B] border border-[#1E334E] p-4 overflow-hidden shadow-2xl flex items-center justify-center">
              
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#1E334E_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>

              {/* Map Title Tag */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6BBF59] animate-pulse"></span>
                <span className="font-mono text-xs text-[#E6E2D3]/80 uppercase font-semibold">
                  West Africa Maritime & Land Corridors
                </span>
              </div>

              {/* Map Scale / Watermark */}
              <div className="absolute bottom-3 left-4 z-20 font-mono text-[10px] text-[#E6E2D3]/40">
                ECOWAS TRADE INTEGRATION ZONE • 0° - 15° N
              </div>

              {/* SVG Vector Map Container */}
              <svg
                viewBox="200 280 420 200"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Coastal Atlantic Ocean Water Contour */}
                <path
                  d="M200 380 Q 240 370 280 400 T 360 450 T 460 460 T 560 450 L 620 480 L 620 500 L 200 500 Z"
                  fill="#070D16"
                  opacity="0.6"
                />

                {/* Regional Landmass (West Africa Coastline) */}
                <path
                  d="M210 320 Q 250 300 300 300 Q 360 290 420 300 Q 500 310 580 320 Q 610 340 600 410 Q 550 430 480 425 Q 420 420 360 415 Q 300 400 240 370 Q 220 350 210 320 Z"
                  fill="#122135"
                  stroke="#1E334E"
                  strokeWidth="1.5"
                />

                {/* Trade Arteries / High-Volume Corridors (Gold & Green Lines) */}
                {/* Dakar to Abidjan Maritime */}
                <path
                  d="M270 340 Q 310 380 380 395"
                  stroke="#2E7D32"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                  opacity="0.8"
                />
                {/* Abidjan to Accra to Lomé to Cotonou to Lagos Coastal Highway */}
                <path
                  d="M380 395 L 440 400 L 480 410 L 515 405 L 550 390"
                  stroke="#C9A227"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                {/* Interior Arteries (Sahel Transit) */}
                <path
                  d="M480 410 L 470 310"
                  stroke="#6BBF59"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  opacity="0.6"
                />
                <path
                  d="M550 390 L 560 300"
                  stroke="#6BBF59"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  opacity="0.6"
                />

                {/* Country Location Pins & Badges */}
                {MARKETS_DATA.map((market) => {
                  const isSelected = selectedMarket.id === market.id;
                  const isHovered = hoveredCountry === market.id;

                  return (
                    <g
                      key={market.id}
                      className="cursor-pointer transition-all duration-300"
                      onClick={() => setSelectedMarket(market)}
                      onMouseEnter={() => setHoveredCountry(market.id)}
                      onMouseLeave={() => setHoveredCountry(null)}
                    >
                      {/* Outer pulse if selected */}
                      {isSelected && (
                        <circle
                          cx={market.coordinates.x}
                          cy={market.coordinates.y}
                          r="16"
                          fill="#2E7D32"
                          opacity="0.3"
                          className="animate-ping"
                        />
                      )}

                      {/* Main Node Circle */}
                      <circle
                        cx={market.coordinates.x}
                        cy={market.coordinates.y}
                        r={isSelected ? '9' : isHovered ? '8' : '6'}
                        fill={isSelected ? '#6BBF59' : '#C9A227'}
                        stroke="#0E1A2B"
                        strokeWidth="2"
                      />

                      {/* Core Dot */}
                      <circle
                        cx={market.coordinates.x}
                        cy={market.coordinates.y}
                        r="3"
                        fill="#F7F5EE"
                      />

                      {/* Country Label Tag */}
                      <text
                        x={market.coordinates.x}
                        y={market.coordinates.y - 12}
                        textAnchor="middle"
                        fill={isSelected ? '#6BBF59' : '#F7F5EE'}
                        fontSize={isSelected ? '11' : '9'}
                        fontFamily="IBM Plex Mono"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                      >
                        {market.name.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Highway Corridor Legend */}
              <div className="absolute bottom-3 right-4 z-20 flex items-center gap-3 text-[10px] font-mono bg-[#09111D]/90 p-2 rounded border border-[#1E334E]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-1 bg-[#C9A227] rounded-sm"></span>
                  <span className="text-[#E6E2D3]">Coastal Highway</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-1 bg-[#2E7D32] rounded-sm"></span>
                  <span className="text-[#E6E2D3]">Maritime Lanes</span>
                </div>
              </div>
            </div>

            {/* Quick Strategic Summary Quote */}
            <div className="p-4 rounded-lg bg-[#0E1A2B] border border-[#1E334E] text-xs font-mono text-[#E6E2D3]/80 leading-relaxed">
              <span className="text-[#6BBF59] font-bold">REGIONAL INTEGRATION:</span> Bridgeafriport connects the ECOWAS coastal economic corridor (Dakar to Lagos) with inland trade links into the Sahel, creating seamless distribution pathways across West Africa.
            </div>

          </div>

          {/* Right Column: Selected Market Deep-Dive Dossier */}
          <div className="lg:col-span-6 bg-[#0E1A2B] rounded-xl border border-[#1E334E] p-6 sm:p-8 shadow-2xl relative">
            
            {/* Header: Flag, Country Name & Tier Tag */}
            <div className="flex items-start justify-between pb-6 border-b border-[#1E334E]/80">
              <div className="flex items-center gap-4">
                <span className="text-4xl sm:text-5xl">{selectedMarket.flag}</span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F5EE]">
                    {selectedMarket.name}
                  </h3>
                  <div className="flex items-center gap-3 font-mono text-xs text-[#E6E2D3]/70 mt-1">
                    <span>Capital: <strong className="text-[#F7F5EE]">{selectedMarket.capital}</strong></span>
                    <span>•</span>
                    <span>Hub: <strong className="text-[#6BBF59]">{selectedMarket.commercialHub}</strong></span>
                  </div>
                </div>
              </div>

              <span className="font-mono text-xs px-3 py-1 rounded bg-[#2E7D32]/20 border border-[#2E7D32]/50 text-[#6BBF59] font-semibold">
                ACTIVE CORRIDOR
              </span>
            </div>

            {/* Core Macro Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-5 border-b border-[#1E334E]/60 text-xs">
              <div className="p-3 rounded-lg bg-[#15263D]/60 border border-[#1E334E]">
                <div className="text-[#E6E2D3]/60 font-mono text-[10px] uppercase">Population</div>
                <div className="font-mono text-sm font-bold text-[#F7F5EE] mt-0.5">{selectedMarket.population}</div>
              </div>
              <div className="p-3 rounded-lg bg-[#15263D]/60 border border-[#1E334E]">
                <div className="text-[#E6E2D3]/60 font-mono text-[10px] uppercase">GDP (Nominal)</div>
                <div className="font-mono text-sm font-bold text-[#C9A227] mt-0.5">{selectedMarket.gdp}</div>
              </div>
              <div className="p-3 rounded-lg bg-[#15263D]/60 border border-[#1E334E]">
                <div className="text-[#E6E2D3]/60 font-mono text-[10px] uppercase">Currency</div>
                <div className="font-mono text-sm font-bold text-[#F7F5EE] mt-0.5">{selectedMarket.currency.split(' ')[0]}</div>
              </div>
              <div className="p-3 rounded-lg bg-[#15263D]/60 border border-[#1E334E]">
                <div className="text-[#E6E2D3]/60 font-mono text-[10px] uppercase">Official Language</div>
                <div className="font-mono text-sm font-bold text-[#6BBF59] mt-0.5">{selectedMarket.primaryLanguages[0].split(' ')[0]}</div>
              </div>
            </div>

            {/* Strategic Advantages */}
            <div className="py-5 border-b border-[#1E334E]/60 space-y-3">
              <h4 className="font-mono text-xs text-[#C9A227] uppercase tracking-wider font-semibold">
                Strategic Market Advantages:
              </h4>
              <ul className="space-y-2">
                {selectedMarket.strategicAdvantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#E6E2D3]/90 font-sans leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-[#6BBF59] flex-shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* High-Demand Import Sectors */}
            <div className="py-5 border-b border-[#1E334E]/60 space-y-3">
              <h4 className="font-mono text-xs text-[#6BBF59] uppercase tracking-wider font-semibold">
                High-Growth Product Categories:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedMarket.highDemandSectors.map((sector, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#15263D] border border-[#1E334E] text-xs font-mono text-[#F7F5EE]"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Ports & Regulatory Framework */}
            <div className="py-5 border-b border-[#1E334E]/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <div className="font-mono text-[11px] text-[#C9A227] font-semibold mb-1 flex items-center gap-1.5">
                  <Anchor className="w-3.5 h-3.5 text-[#6BBF59]" />
                  Key Ports & Terminals:
                </div>
                <div className="text-[#E6E2D3]/80 space-y-1 font-sans">
                  {selectedMarket.keyPorts.map((port, pIdx) => (
                    <div key={pIdx}>• {port}</div>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-[11px] text-[#C9A227] font-semibold mb-1">
                  Regulatory Bodies:
                </div>
                <div className="text-[#E6E2D3]/80 font-sans">
                  {selectedMarket.regulatoryBody}
                </div>
              </div>
            </div>

            {/* Contact Bridgeafriport Office for This Market */}
            <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#E6E2D3]/80 space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#6BBF59]" />
                  <span>{selectedMarket.officeEmail}</span>
                </div>
                {selectedMarket.officePhone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>{selectedMarket.officePhone}</span>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono font-semibold tracking-wider uppercase bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/40 transition-colors"
              >
                <span>Enter {selectedMarket.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A227]" />
              </Link>
            </div>

          </div>

        </div>

        {/* Expanding Across Africa (Pan-African Expansion Roadmap) */}
        <div className="mt-16 pt-12 border-t border-[#1E334E]/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#C9A227] uppercase tracking-widest font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#6BBF59]" />
                EXPANDING ACROSS AFRICA
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F5EE]">
                Pan-African Continental Rollout Roadmap
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#E6E2D3]/70 font-sans max-w-md">
              Building upon our core West African foundation, Bridgeafriport is systematically extending trade representation and distributor networks across key commercial nodes of Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {pipelineMarkets.map((pipe, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#0E1A2B] border border-[#1E334E] hover:border-[#6BBF59]/50 transition-all text-center flex flex-col items-center justify-center group"
              >
                <span className="text-2xl mb-1.5">{pipe.flag}</span>
                <div className="font-serif text-sm font-bold text-[#F7F5EE] group-hover:text-[#6BBF59] transition-colors">
                  {pipe.name}
                </div>
                <div className="font-mono text-[9px] text-[#C9A227] mt-1 leading-tight line-clamp-2">
                  {pipe.region}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
