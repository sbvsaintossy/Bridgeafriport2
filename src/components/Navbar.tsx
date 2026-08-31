import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Globe, Shield, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Markets', path: '/markets' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Institutional Ticker Bar */}
      <div className="bg-[#09111D] border-b border-[#1E334E]/60 text-xs text-[#E6E2D3]/70 py-1.5 px-4 sm:px-8 hidden md:flex items-center justify-between font-mono z-50 relative">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#6BBF59] animate-pulse"></span>
            <span className="text-[#F7F5EE] font-medium tracking-wide">OPERATIONAL COVERAGE:</span>
            <span className="text-[#C9A227]">NIGERIA • GHANA • CÔTE D'IVOIRE • SENEGAL • TOGO • BENIN</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-[#E6E2D3]/80">
            <Shield className="w-3.5 h-3.5 text-[#6BBF59]" />
            <span>INSTITUTIONAL GRADE SOVEREIGN EXPANSION</span>
          </div>
          <div className="h-3 w-[1px] bg-[#1E334E]"></div>
          <div className="flex items-center gap-1.5 text-[#C9A227]">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL 6-CONTINENT TRADE DESK</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E1A2B]/95 backdrop-blur-md shadow-2xl border-b border-[#1E334E]/80 py-3.5'
            : 'bg-[#0E1A2B]/80 backdrop-blur-sm border-b border-[#1E334E]/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="group focus:outline-none" aria-label="Bridgeafriport Home">
            <Logo size={isScrolled ? 'md' : 'lg'} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium tracking-wider transition-all duration-200 rounded-md relative ${
                    isActive
                      ? 'text-[#F7F5EE] bg-[#15263D] shadow-inner font-semibold'
                      : 'text-[#E6E2D3]/80 hover:text-[#F7F5EE] hover:bg-[#15263D]/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#6BBF59] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold tracking-wide bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/40 shadow-lg shadow-[#2E7D32]/20 hover:shadow-[#2E7D32]/40 transition-all duration-200 group"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#C9A227] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              to="/contact"
              className="px-3.5 py-1.5 rounded text-xs font-semibold bg-[#2E7D32] text-[#F7F5EE] flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Inquire</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-[#E6E2D3] hover:text-[#F7F5EE] hover:bg-[#15263D] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#09111D] border-b border-[#1E334E] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="py-2 border-b border-[#1E334E]/60 text-xs font-mono text-[#C9A227] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6BBF59] inline-block"></span>
              WEST AFRICA OPERATIONAL EXPANSION
            </div>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#15263D] text-[#F7F5EE] font-semibold border-l-4 border-[#6BBF59]'
                      : 'text-[#E6E2D3]/80 hover:bg-[#15263D]/60 hover:text-[#F7F5EE]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-[#1E334E]/60">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md text-base font-semibold bg-[#2E7D32] text-[#F7F5EE] shadow-lg shadow-[#2E7D32]/25"
              >
                <span>Initiate Commercial Inquiry</span>
                <ArrowUpRight className="w-4 h-4 text-[#C9A227]" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
