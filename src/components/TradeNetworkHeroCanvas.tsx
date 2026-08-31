import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe2, Compass, Activity, ChevronRight, ShieldCheck, Layers } from 'lucide-react';

interface RoutePoint {
  id: string;
  name: string;
  region: 'North America' | 'South America' | 'Europe' | 'Middle East' | 'Asia' | 'Oceania' | 'Africa';
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  primaryExports: string;
  flowVolume: string;
  isDestination?: boolean;
}

const GLOBAL_NODES: RoutePoint[] = [
  { id: 'na1', name: 'New York / Chicago', region: 'North America', x: 24, y: 32, primaryExports: 'Industrial Tech & Energy Systems', flowVolume: '$180M+' },
  { id: 'na2', name: 'Houston / Toronto', region: 'North America', x: 19, y: 38, primaryExports: 'Petrochemicals & Machinery', flowVolume: '$140M+' },
  { id: 'sa1', name: 'São Paulo / Santos', region: 'South America', x: 33, y: 72, primaryExports: 'Agri-Processing & Commodities', flowVolume: '$95M+' },
  { id: 'eu1', name: 'Rotterdam / London', region: 'Europe', x: 48, y: 25, primaryExports: 'Specialty Chemicals & Pharma', flowVolume: '$320M+' },
  { id: 'eu2', name: 'Frankfurt / Milan', region: 'Europe', x: 52, y: 29, primaryExports: 'Automotive & Precision Tools', flowVolume: '$240M+' },
  { id: 'me1', name: 'Dubai / Abu Dhabi', region: 'Middle East', x: 64, y: 38, primaryExports: 'Electronics, Plastics & Capital', flowVolume: '$210M+' },
  { id: 'as1', name: 'Shanghai / Shenzhen', region: 'Asia', x: 80, y: 36, primaryExports: 'Consumer Tech & Heavy Hardware', flowVolume: '$460M+' },
  { id: 'as2', name: 'Singapore / Mumbai', region: 'Asia', x: 74, y: 50, primaryExports: 'Engineering Supplies & FMCG', flowVolume: '$280M+' },
  { id: 'oc1', name: 'Sydney / Melbourne', region: 'Oceania', x: 88, y: 78, primaryExports: 'Mining Technology & Agri-inputs', flowVolume: '$75M+' },
  // African Destination Hubs
  { id: 'af1', name: 'Lagos & Lekki Port (Nigeria)', region: 'Africa', x: 50, y: 53, primaryExports: 'Anchor Market & Transshipment', flowVolume: 'Key Destination', isDestination: true },
  { id: 'af2', name: 'Tema & Accra (Ghana)', region: 'Africa', x: 47, y: 54, primaryExports: 'AfCFTA Gateway', flowVolume: 'Key Destination', isDestination: true },
  { id: 'af3', name: 'Abidjan (Côte d\'Ivoire)', region: 'Africa', x: 45, y: 54, primaryExports: 'WAEMU Hub', flowVolume: 'Key Destination', isDestination: true },
  { id: 'af4', name: 'Dakar (Senegal)', region: 'Africa', x: 41, y: 49, primaryExports: 'Atlantic Nexus', flowVolume: 'Key Destination', isDestination: true },
  { id: 'af5', name: 'Lomé & Cotonou (Togo/Benin)', region: 'Africa', x: 49, y: 53.5, primaryExports: 'Deep-Water Transshipment', flowVolume: 'Key Destination', isDestination: true }
];

export const TradeNetworkHeroCanvas: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [hoveredNode, setHoveredNode] = useState<RoutePoint | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const regions = ['All', 'Asia', 'Europe', 'North America', 'Middle East', 'South America', 'Oceania'];

  // Destinations in West Africa
  const destinations = GLOBAL_NODES.filter(n => n.isDestination);
  const origins = GLOBAL_NODES.filter(n => !n.isDestination);

  // Animated canvas flow lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;

      // Filter origins based on selected tab
      const activeOrigins = selectedRegion === 'All'
        ? origins
        : origins.filter(o => o.region === selectedRegion);

      // Draw trade corridors to Africa
      activeOrigins.forEach((origin, index) => {
        destinations.forEach((dest, dIndex) => {
          // Selectively connect to avoid chaotic clutter
          if ((index + dIndex) % 2 === 0 || selectedRegion !== 'All') {
            const startX = (origin.x / 100) * width;
            const startY = (origin.y / 100) * height;
            const endX = (dest.x / 100) * width;
            const endY = (dest.y / 100) * height;

            // Quadratic / Bezier curve control point (arching over the globe)
            const midX = (startX + endX) / 2;
            const midY = Math.min(startY, endY) - (Math.abs(startX - endX) * 0.15);

            // Draw base curve
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.quadraticCurveTo(midX, midY, endX, endY);
            ctx.strokeStyle = 'rgba(46, 125, 50, 0.22)';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Draw animated pulse particles flowing to Africa
            const progress = (time * 0.4 + (index * 0.25) + (dIndex * 0.15)) % 1;
            const t = progress;
            // Bezier formula B(t) = (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
            const px = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * midX + Math.pow(t, 2) * endX;
            const py = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * midY + Math.pow(t, 2) * endY;

            // Glowing light packet
            const glowGrad = ctx.createRadialGradient(px, py, 0, px, py, 6);
            glowGrad.addColorStop(0, 'rgba(201, 162, 39, 1)');
            glowGrad.addColorStop(0.4, 'rgba(107, 191, 89, 0.8)');
            glowGrad.addColorStop(1, 'rgba(46, 125, 50, 0)');

            ctx.fillStyle = glowGrad;
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fill();

            // Second trailing light
            const t2 = (progress - 0.04 + 1) % 1;
            const px2 = Math.pow(1 - t2, 2) * startX + 2 * (1 - t2) * t2 * midX + Math.pow(t2, 2) * endX;
            const py2 = Math.pow(1 - t2, 2) * startY + 2 * (1 - t2) * t2 * midY + Math.pow(t2, 2) * endY;
            ctx.fillStyle = 'rgba(107, 191, 89, 0.6)';
            ctx.beginPath();
            ctx.arc(px2, py2, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedRegion]);

  return (
    <section className="relative min-h-[92vh] lg:min-h-[95vh] bg-[#0E1A2B] overflow-hidden flex flex-col justify-between border-b border-[#1E334E]/60">
      {/* Background Architectural Grid & Subtle Latitude/Longitude Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E334E_1px,transparent_1px)] [background-size:36px_36px] opacity-25 pointer-events-none"></div>
      
      {/* Deep sovereign gradient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#2E7D32]/10 via-[#0E1A2B]/40 to-transparent blur-3xl pointer-events-none"></div>

      {/* Main Content & Interactive Globe Visualization Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 flex-1 flex flex-col justify-center">
        
        {/* Top Sovereign Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15263D]/80 border border-[#2E7D32]/50 text-xs text-[#E6E2D3] mb-6 backdrop-blur-sm self-start shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#6BBF59] animate-ping"></span>
          <span className="font-mono text-[#C9A227] font-semibold tracking-wider">PAN-AFRICA TRADE EXPANSION ARCHITECTURE</span>
          <span className="text-[#E6E2D3]/40">•</span>
          <span className="text-xs text-[#E6E2D3]/80">Zero Inventory • 100% Performance Representation</span>
        </div>

        {/* Hero Title & Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#F7F5EE] leading-[1.08]">
              Connecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7F5EE] via-[#E6E2D3] to-[#C9A227]">
                Global Businesses
              </span> <br />
              to <span className="text-[#6BBF59] underline decoration-[#C9A227]/50 underline-offset-8">African Markets</span>
            </h1>

            <p className="text-[#E6E2D3]/90 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl font-sans">
              Bridgeafriport helps manufacturers, exporters, distributors, investors, and brands establish meaningful commercial presence across Africa through local expertise, verified networks, and performance-driven growth strategies.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md text-base font-semibold tracking-wide bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/50 shadow-xl shadow-[#2E7D32]/30 hover:shadow-[#2E7D32]/50 transition-all duration-200 group"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-5 h-5 text-[#C9A227] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md text-base font-medium tracking-wide bg-[#15263D]/90 hover:bg-[#1C3352] text-[#F7F5EE] border border-[#1E334E] hover:border-[#C9A227]/40 transition-all duration-200"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 text-[#6BBF59]" />
              </Link>
            </div>

            {/* Quick Institutional Proof Badges */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#1E334E]/60 max-w-xl">
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#F7F5EE]">6+</div>
                <div className="text-xs text-[#E6E2D3]/70 font-sans mt-0.5">West Africa Beachheads</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#6BBF59]">1,450+</div>
                <div className="text-xs text-[#E6E2D3]/70 font-sans mt-0.5">Verified Dist. Networks</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#C9A227]">$1.2B+</div>
                <div className="text-xs text-[#E6E2D3]/70 font-sans mt-0.5">Trade Deals Structured</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Global Trade Network HUD */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl bg-[#09111D]/90 border border-[#1E334E] shadow-2xl p-4 sm:p-6 overflow-hidden backdrop-blur-md">
              
              {/* HUD Header */}
              <div className="flex items-center justify-between border-b border-[#1E334E]/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#6BBF59] animate-pulse" />
                  <span className="font-mono text-xs text-[#F7F5EE] tracking-wider uppercase font-semibold">
                    Global Trade Corridor Matrix
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#2E7D32]/20 border border-[#2E7D32]/40 text-[#6BBF59]">
                  LIVE RADAR
                </span>
              </div>

              {/* Region Filter Selector */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {regions.map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                      selectedRegion === reg
                        ? 'bg-[#2E7D32] text-[#F7F5EE] font-bold border border-[#6BBF59]/60'
                        : 'bg-[#15263D]/60 text-[#E6E2D3]/70 hover:bg-[#15263D] hover:text-[#F7F5EE] border border-transparent'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>

              {/* Map & Trade Network Visual Area */}
              <div className="relative w-full h-64 sm:h-72 rounded-lg bg-[#070D16] border border-[#1E334E]/60 overflow-hidden flex items-center justify-center">
                
                {/* World Map SVG Silhouette */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                  viewBox="0 0 1000 500"
                  fill="#6BBF59"
                  preserveAspectRatio="none"
                >
                  {/* Simplified Continental Outlines */}
                  {/* North America */}
                  <path d="M120 80 Q 200 60 300 90 Q 280 180 200 240 Q 150 160 120 80 Z" />
                  {/* South America */}
                  <path d="M280 260 Q 380 270 360 400 Q 300 460 270 380 Q 260 300 280 260 Z" />
                  {/* Europe */}
                  <path d="M460 80 Q 560 70 540 160 Q 480 170 460 80 Z" />
                  {/* Africa - Highlighted with higher opacity */}
                  <path
                    d="M440 180 Q 580 180 560 320 Q 510 440 450 360 Q 400 240 440 180 Z"
                    fill="#2E7D32"
                    opacity="0.9"
                  />
                  {/* Asia */}
                  <path d="M580 90 Q 860 80 840 260 Q 720 280 640 220 Q 580 160 580 90 Z" />
                  {/* Oceania */}
                  <path d="M780 320 Q 900 320 880 420 Q 800 420 780 320 Z" />
                </svg>

                {/* Animated Canvas for Curved Flow Lines */}
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

                {/* Target Africa Glowing Beacon */}
                <div
                  className="absolute left-[48%] top-[53%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <span className="absolute -inset-4 rounded-full bg-[#6BBF59]/20 animate-ping"></span>
                  <span className="absolute -inset-8 rounded-full bg-[#2E7D32]/20 blur-sm"></span>
                  <div className="relative px-2 py-1 rounded bg-[#09111D]/90 border border-[#C9A227] text-[10px] font-mono font-bold text-[#C9A227] flex items-center gap-1 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6BBF59]"></span>
                    AFRICAN HUB
                  </div>
                </div>

                {/* Origin Nodes */}
                {GLOBAL_NODES.map((node) => {
                  const isFiltered = selectedRegion !== 'All' && node.region !== selectedRegion && !node.isDestination;
                  if (isFiltered) return null;

                  return (
                    <div
                      key={node.id}
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <div
                        className={`w-3 h-3 rounded-full flex items-center justify-center transition-all ${
                          node.isDestination
                            ? 'bg-[#6BBF59] ring-4 ring-[#2E7D32]/50 shadow-lg'
                            : 'bg-[#C9A227] ring-2 ring-[#C9A227]/40 hover:scale-150'
                        }`}
                      >
                        <span className="w-1 h-1 rounded-full bg-[#F7F5EE]"></span>
                      </div>

                      {/* Hover Info Tooltip */}
                      <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 rounded bg-[#0E1A2B] border border-[#C9A227] shadow-xl text-left pointer-events-none z-30">
                        <div className="font-mono text-xs font-bold text-[#F7F5EE]">{node.name}</div>
                        <div className="text-[10px] text-[#6BBF59] font-mono mt-0.5">{node.region}</div>
                        <div className="text-[10px] text-[#E6E2D3]/80 mt-1 border-t border-[#1E334E] pt-1">
                          <span className="text-[#C9A227]">Trade:</span> {node.primaryExports}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* HUD Footer Information */}
              <div className="mt-3 pt-3 border-t border-[#1E334E]/60 flex items-center justify-between text-xs font-mono">
                <span className="text-[#E6E2D3]/70">
                  {hoveredNode
                    ? `${hoveredNode.name}: ${hoveredNode.primaryExports}`
                    : 'Target Destination: Pan-African Inward Commercial Hubs'}
                </span>
                <span className="text-[#6BBF59] font-semibold">100% Inward Flow</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Global Continents Flow Strip */}
      <div className="relative z-10 border-t border-[#1E334E]/60 bg-[#09111D]/80 backdrop-blur-sm py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#C9A227] font-semibold tracking-wider flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-[#6BBF59]" />
              ORIGIN CORRIDORS:
            </span>
            <div className="flex flex-wrap gap-2 text-[#E6E2D3]/90">
              <span className="px-2 py-0.5 rounded bg-[#15263D] border border-[#1E334E]">Asia</span>
              <span className="px-2 py-0.5 rounded bg-[#15263D] border border-[#1E334E]">Europe</span>
              <span className="px-2 py-0.5 rounded bg-[#15263D] border border-[#1E334E]">North America</span>
              <span className="px-2 py-0.5 rounded bg-[#15263D] border border-[#1E334E]">Middle East</span>
              <span className="px-2 py-0.5 rounded bg-[#15263D] border border-[#1E334E]">South America</span>
              <span className="px-2 py-0.5 rounded bg-[#15263D] border border-[#1E334E]">Oceania</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#6BBF59]">
            <span className="text-[#E6E2D3]/60">Destination:</span>
            <span className="font-semibold text-[#F7F5EE] bg-[#2E7D32]/30 px-2.5 py-1 rounded border border-[#2E7D32]">
              West & Pan-African Commercial Corridors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
