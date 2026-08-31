import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { OFFICES_DATA } from '../data/companyData';
import { Mail, Phone, Globe, Shield, ArrowUpRight, Linkedin, Twitter, ExternalLink, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09111D] border-t border-[#1E334E] text-[#E6E2D3] relative overflow-hidden">
      
      {/* Top Trade Connectivity Visual Banner */}
      <div className="border-b border-[#1E334E]/60 bg-[#070D16] py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6BBF59] animate-pulse"></span>
            <span className="text-[#F7F5EE] font-semibold">SOVEREIGN TRADE CORRIDORS:</span>
            <span className="text-[#C9A227] hidden sm:inline">GLOBAL ORIGINS ➔ ECOWAS ➔ PAN-AFRICA</span>
          </div>

          <div className="flex items-center gap-6 text-[#E6E2D3]/70 text-[11px]">
            <span>LAGOS</span>
            <span>•</span>
            <span>ACCRA</span>
            <span>•</span>
            <span>ABIDJAN</span>
            <span>•</span>
            <span>DAKAR</span>
            <span>•</span>
            <span>LOMÉ</span>
            <span>•</span>
            <span>COTONOU</span>
          </div>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Brand & Mission Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1E334E]/80">
          
          <div className="lg:col-span-5 space-y-6">
            <Logo size="lg" />
            
            <p className="text-sm font-sans text-[#E6E2D3]/80 leading-relaxed max-w-md">
              Bridgeafriport is a multinational market-entry, trade development, commercial representation, and business growth corporation connecting global enterprises from Asia, Europe, North America, South America, Middle East, and Oceania with high-growth market opportunities across Africa.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#6BBF59]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#15263D] border border-[#1E334E]">
                <Shield className="w-3.5 h-3.5" />
                Zero Inventory Mandate
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#15263D] border border-[#1E334E]">
                <Globe className="w-3.5 h-3.5 text-[#C9A227]" />
                Institutional Representation
              </span>
            </div>
          </div>

          {/* Quick Links & Corporate Governance */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#C9A227] font-semibold">
              Corporate Directory
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link to="/" className="hover:text-[#6BBF59] transition-colors flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#6BBF59] transition-colors flex items-center gap-1">
                  <span>About Institutional Mandate</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#6BBF59] transition-colors flex items-center gap-1">
                  <span>Commercial Services (01 - 10)</span>
                </Link>
              </li>
              <li>
                <Link to="/markets" className="hover:text-[#6BBF59] transition-colors flex items-center gap-1">
                  <span>African Operational Markets</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#6BBF59] transition-colors flex items-center gap-1">
                  <span>Institutional Inquiry Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Operating Principles */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#C9A227] font-semibold">
              Operating Philosophy
            </h4>
            <div className="p-4 rounded-lg bg-[#0E1A2B] border border-[#1E334E] space-y-2 text-xs font-sans text-[#E6E2D3]/80 leading-relaxed">
              <p>
                <strong className="text-[#F7F5EE]">Performance-Driven Commercial Partnerships:</strong> We operate strictly through commission structures, verified business development agreements, and long-term sovereign market representation.
              </p>
              <p className="text-[#6BBF59] font-mono text-[11px] pt-1 border-t border-[#1E334E]">
                Official General Office: <a href="mailto:office@bridgeafriport.com" className="underline hover:text-[#F7F5EE]">office@bridgeafriport.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Full Office Directory (Luxury Annual Report Grid) */}
        <div className="py-12 border-b border-[#1E334E]/80">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#C9A227] font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#6BBF59]" />
              GLOBAL & REGIONAL OFFICE NETWORK
            </h4>
            <span className="font-mono text-[11px] text-[#E6E2D3]/60 hidden sm:inline">
              DIRECTORATE OF COMMERCIAL REPRESENTATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {OFFICES_DATA.map((office, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#0E1A2B]/70 border border-[#1E334E] hover:border-[#6BBF59]/50 transition-all text-xs font-mono space-y-2 group"
              >
                <div className="flex items-center justify-between border-b border-[#1E334E]/60 pb-2">
                  <span className="font-bold text-[#F7F5EE] group-hover:text-[#6BBF59] transition-colors">
                    {office.country}
                  </span>
                  <span className="text-[10px] text-[#C9A227]">{office.timeZone}</span>
                </div>
                
                <div className="text-[#E6E2D3]/80 font-sans text-xs">
                  {office.city}
                </div>

                <div className="space-y-1 pt-1 border-t border-[#1E334E]/40 text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#E6E2D3]/90">
                    <Mail className="w-3 h-3 text-[#6BBF59]" />
                    <a href={`mailto:${office.email}`} className="hover:text-[#6BBF59] truncate underline">
                      {office.email}
                    </a>
                  </div>
                  {office.phone && (
                    <div className="flex items-center gap-1.5 text-[#E6E2D3]/90">
                      <Phone className="w-3 h-3 text-[#C9A227]" />
                      <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-[#C9A227]">
                        {office.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Annual Report Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E6E2D3]/60">
          <div>
            © {currentYear} Bridgeafriport Corporation. All rights reserved. Sovereign Market Expansion & Commercial Representation.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#F7F5EE] cursor-pointer">Regulatory Governance</span>
            <span>•</span>
            <span className="hover:text-[#F7F5EE] cursor-pointer">AfCFTA Protocols</span>
            <span>•</span>
            <span className="hover:text-[#F7F5EE] cursor-pointer">Commercial Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
