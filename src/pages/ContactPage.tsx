import React, { useState } from 'react';
import { OFFICES_DATA } from '../data/companyData';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Globe, Shield, Clock, Building, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    company_name: '',
    country: '',
    role: 'Manufacturer',
    email: '',
    whatsapp: '',
    product_category: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const roles = [
    'Manufacturer',
    'Distributor',
    'Investor',
    'Strategic Partner',
    'Corporate Buyer'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Basic validation
    if (!formData.full_name || !formData.company_name || !formData.email || !formData.whatsapp || !formData.product_category || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields before submitting your executive inquiry.');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xwlkpqkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        try {
          const confettiModule = await import('canvas-confetti');
          const confetti = confettiModule.default;
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 }
          });
        } catch {
          // Graceful fallback if confetti module fails to load
        }
        setFormData({
          full_name: '',
          company_name: '',
          country: '',
          role: 'Manufacturer',
          email: '',
          whatsapp: '',
          product_category: '',
          message: ''
        });
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setErrorMessage(data.errors.map((error: { message: string }) => error.message).join(', '));
        } else {
          setErrorMessage('Unable to submit inquiry at this time. Please contact office@bridgeafriport.com directly.');
        }
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('A network error occurred. Please check your connection or email office@bridgeafriport.com.');
    }
  };

  return (
    <div className="bg-[#0E1A2B] text-[#F7F5EE] min-h-screen">
      
      {/* Contact Header */}
      <section className="relative py-20 lg:py-28 bg-[#09111D] border-b border-[#1E334E]/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1E334E_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15263D] border border-[#2E7D32]/50 text-xs font-mono text-[#C9A227]">
              <span className="w-2 h-2 rounded-full bg-[#6BBF59] inline-block"></span>
              INSTITUTIONAL INQUIRY PORTAL
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F5EE] leading-[1.1]">
              Global Commercial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7F5EE] via-[#E6E2D3] to-[#C9A227]">
                Directorate & Offices
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#E6E2D3]/90 font-sans leading-relaxed">
              Connect with our regional trade officers across West Africa and our Global Corporate Headquarters. Submit an institutional inquiry to initiate performance-based market expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Office Network Grid */}
      <section className="py-20 lg:py-28 bg-[#0E1A2B] border-b border-[#1E334E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Formspree-Powered Inquiry Form */}
            <div className="lg:col-span-7 bg-[#09111D] rounded-2xl border border-[#1E334E] p-8 sm:p-10 shadow-2xl relative">
              
              <div className="pb-6 border-b border-[#1E334E]/80 mb-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-semibold">
                    OFFICIAL COMMERCIAL APPLICATION
                  </span>
                  <span className="font-mono text-[11px] text-[#6BBF59] flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" />
                    CONFIDENTIAL / SOVEREIGN
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F5EE] mt-2">
                  Initiate Market Expansion Mandate
                </h2>
                <p className="text-xs sm:text-sm text-[#E6E2D3]/80 font-sans mt-1">
                  Please provide your corporate details. Our senior trade directors will review your inquiry within 24 business hours.
                </p>
              </div>

              {/* Success Notification */}
              {status === 'success' && (
                <div className="mb-8 p-6 rounded-xl bg-[#2E7D32]/20 border border-[#6BBF59] text-[#F7F5EE] space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#6BBF59] flex-shrink-0" />
                    <h4 className="font-serif text-lg font-bold">Inquiry Transmitted Successfully</h4>
                  </div>
                  <p className="text-sm font-sans text-[#E6E2D3]/90 pl-9">
                    Thank you. Your commercial inquiry has been routed to our Trade Directorate. A regional director will contact you via email and WhatsApp.
                  </p>
                </div>
              )}

              {/* Error Notification */}
              {status === 'error' && (
                <div className="mb-8 p-5 rounded-xl bg-red-950/40 border border-red-500/60 text-red-200 space-y-1 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span>Submission Notice</span>
                  </div>
                  <p className="text-xs font-sans pl-7 text-red-300">
                    {errorMessage || 'An error occurred while transmitting your inquiry. Please verify all fields and retry.'}
                  </p>
                </div>
              )}

              {/* Formspree Form */}
              <form
                action="https://formspree.io/f/xwlkpqkv"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="full_name" className="block text-xs font-mono uppercase tracking-wider text-[#E6E2D3]/90 font-semibold">
                      Full Name <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="e.g. Marcus Vance"
                      className="w-full px-4 py-3 rounded-lg bg-[#0E1A2B] border border-[#1E334E] text-[#F7F5EE] text-sm focus:outline-none focus:border-[#6BBF59] focus:ring-1 focus:ring-[#6BBF59] transition-colors placeholder:text-[#E6E2D3]/30"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="company_name" className="block text-xs font-mono uppercase tracking-wider text-[#E6E2D3]/90 font-semibold">
                      Company Name <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      required
                      value={formData.company_name}
                      onChange={handleChange}
                      placeholder="e.g. Apex Industrial Systems Inc."
                      className="w-full px-4 py-3 rounded-lg bg-[#0E1A2B] border border-[#1E334E] text-[#F7F5EE] text-sm focus:outline-none focus:border-[#6BBF59] focus:ring-1 focus:ring-[#6BBF59] transition-colors placeholder:text-[#E6E2D3]/30"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Country of Origin */}
                  <div className="space-y-2">
                    <label htmlFor="country" className="block text-xs font-mono uppercase tracking-wider text-[#E6E2D3]/90 font-semibold">
                      Country of Origin / Base <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. Germany, UAE, United States, China"
                      className="w-full px-4 py-3 rounded-lg bg-[#0E1A2B] border border-[#1E334E] text-[#F7F5EE] text-sm focus:outline-none focus:border-[#6BBF59] focus:ring-1 focus:ring-[#6BBF59] transition-colors placeholder:text-[#E6E2D3]/30"
                    />
                  </div>

                  {/* Role in Transaction */}
                  <div className="space-y-2">
                    <label htmlFor="role" className="block text-xs font-mono uppercase tracking-wider text-[#E6E2D3]/90 font-semibold">
                      Role / Capacity <span className="text-[#C9A227]">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0E1A2B] border border-[#1E334E] text-[#F7F5EE] text-sm focus:outline-none focus:border-[#6BBF59] focus:ring-1 focus:ring-[#6BBF59] transition-colors"
                    >
                      {roles.map((role) => (
                        <option key={role} value={role} className="bg-[#0E1A2B] text-[#F7F5EE]">
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Corporate Email Address */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#E6E2D3]/90 font-semibold">
                      Corporate Email Address <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. executive@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#0E1A2B] border border-[#1E334E] text-[#F7F5EE] text-sm focus:outline-none focus:border-[#6BBF59] focus:ring-1 focus:ring-[#6BBF59] transition-colors placeholder:text-[#E6E2D3]/30"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="block text-xs font-mono uppercase tracking-wider text-[#E6E2D3]/90 font-semibold">
                      WhatsApp / Direct Phone <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="e.g. +49 170 1234567"
                      className="w-full px-4 py-3 rounded-lg bg-[#0E1A2B] border border-[#1E334E] text-[#F7F5EE] text-sm focus:outline-none focus:border-[#6BBF59] focus:ring-1 focus:ring-[#6BBF59] transition-colors placeholder:text-[#E6E2D3]/30"
                    />
                  </div>

                </div>

                {/* Product Category */}
                <div className="space-y-2">
                  <label htmlFor="product_category" className="block text-xs font-mono uppercase tracking-wider text-[#E6E2D3]/90 font-semibold">
                    Product Category / Commercial Portfolio <span className="text-[#C9A227]">*</span>
                  </label>
                  <input
                    type="text"
                    id="product_category"
                    name="product_category"
                    required
                    value={formData.product_category}
                    onChange={handleChange}
                    placeholder="e.g. Heavy Industrial Equipment, Pharmaceuticals, Solar Tech, FMCG, Food Processing"
                    className="w-full px-4 py-3 rounded-lg bg-[#0E1A2B] border border-[#1E334E] text-[#F7F5EE] text-sm focus:outline-none focus:border-[#6BBF59] focus:ring-1 focus:ring-[#6BBF59] transition-colors placeholder:text-[#E6E2D3]/30"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#E6E2D3]/90 font-semibold">
                    Executive Scope & Target African Markets <span className="text-[#C9A227]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please outline your target countries (e.g. Nigeria, Ghana, Côte d'Ivoire, etc.), current export volumes, distribution requirements, or partnership goals..."
                    className="w-full px-4 py-3 rounded-lg bg-[#0E1A2B] border border-[#1E334E] text-[#F7F5EE] text-sm focus:outline-none focus:border-[#6BBF59] focus:ring-1 focus:ring-[#6BBF59] transition-colors placeholder:text-[#E6E2D3]/30 resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-base font-semibold tracking-wide bg-[#2E7D32] hover:bg-[#256629] text-[#F7F5EE] border border-[#6BBF59]/50 shadow-xl shadow-[#2E7D32]/30 hover:shadow-[#2E7D32]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 text-[#C9A227] animate-spin" />
                        <span>Transmitting Executive Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4 text-[#C9A227] transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-mono text-[#E6E2D3]/50">
                    Direct Formspree Integration • Endpoint: https://formspree.io/f/xwlkpqkv
                  </span>
                </div>
              </form>

            </div>

            {/* Right Column: Premium International Office Directory */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-2xl bg-[#09111D] border border-[#1E334E] space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#C9A227] uppercase font-semibold">
                  <Building className="w-4 h-4 text-[#6BBF59]" />
                  GENERAL CORPORATE HEADQUARTERS
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F7F5EE]">
                  Global Corporate Directorate
                </h3>
                <p className="text-xs text-[#E6E2D3]/80 font-sans leading-relaxed">
                  For multi-jurisdictional mandates, sovereign trade agreements, and bilateral manufacturer partnerships.
                </p>
                <div className="pt-2 border-t border-[#1E334E]/60 text-xs font-mono text-[#6BBF59] flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  <a href="mailto:office@bridgeafriport.com" className="underline hover:text-[#F7F5EE]">
                    office@bridgeafriport.com
                  </a>
                </div>
              </div>

              {/* Individual Country Offices */}
              <div className="space-y-4">
                
                {/* Nigeria */}
                <div className="p-5 rounded-xl bg-[#09111D] border border-[#1E334E] hover:border-[#6BBF59]/50 transition-all space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-[#F7F5EE]">🇳🇬 NIGERIA</span>
                    <span className="font-mono text-[10px] text-[#C9A227]">WEST AFRICA ANCHOR</span>
                  </div>
                  <div className="space-y-1 text-xs font-mono text-[#E6E2D3]/80">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#6BBF59]" />
                      <a href="mailto:Nigeria@bridgeafriport.com" className="hover:text-[#6BBF59]">
                        Nigeria@bridgeafriport.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                      <a href="tel:+2347031882447" className="hover:text-[#C9A227]">
                        +234 703 188 2447
                      </a>
                    </div>
                  </div>
                </div>

                {/* Ghana */}
                <div className="p-5 rounded-xl bg-[#09111D] border border-[#1E334E] hover:border-[#6BBF59]/50 transition-all space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-[#F7F5EE]">🇬🇭 GHANA</span>
                    <span className="font-mono text-[10px] text-[#C9A227]">AfCFTA GATEWAY</span>
                  </div>
                  <div className="space-y-1 text-xs font-mono text-[#E6E2D3]/80">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#6BBF59]" />
                      <a href="mailto:Ghana@bridgeafriport.com" className="hover:text-[#6BBF59]">
                        Ghana@bridgeafriport.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Togo */}
                <div className="p-5 rounded-xl bg-[#09111D] border border-[#1E334E] hover:border-[#6BBF59]/50 transition-all space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-[#F7F5EE]">🇹🇬 TOGO</span>
                    <span className="font-mono text-[10px] text-[#C9A227]">DEEP-WATER PORT</span>
                  </div>
                  <div className="space-y-1 text-xs font-mono text-[#E6E2D3]/80">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#6BBF59]" />
                      <a href="mailto:Togo@bridgeafriport.com" className="hover:text-[#6BBF59]">
                        Togo@bridgeafriport.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                      <a href="tel:+22870645550" className="hover:text-[#C9A227]">
                        +228 70 64 55 50
                      </a>
                    </div>
                  </div>
                </div>

                {/* Benin */}
                <div className="p-5 rounded-xl bg-[#09111D] border border-[#1E334E] hover:border-[#6BBF59]/50 transition-all space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-[#F7F5EE]">🇧🇯 BENIN</span>
                    <span className="font-mono text-[10px] text-[#C9A227]">GDIZ INDUSTRIAL ZONE</span>
                  </div>
                  <div className="space-y-1 text-xs font-mono text-[#E6E2D3]/80">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#6BBF59]" />
                      <a href="mailto:Benin@bridgeafriport.com" className="hover:text-[#6BBF59]">
                        Benin@bridgeafriport.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                      <a href="tel:+22960357649" className="hover:text-[#C9A227]">
                        +229 60 35 76 49
                      </a>
                    </div>
                  </div>
                </div>

                {/* Côte d'Ivoire */}
                <div className="p-5 rounded-xl bg-[#09111D] border border-[#1E334E] hover:border-[#6BBF59]/50 transition-all space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-[#F7F5EE]">🇨🇮 CÔTE D'IVOIRE</span>
                    <span className="font-mono text-[10px] text-[#C9A227]">FRANCOPHONE HUB</span>
                  </div>
                  <div className="space-y-1 text-xs font-mono text-[#E6E2D3]/80">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#6BBF59]" />
                      <a href="mailto:office@bridgeafriport.com" className="hover:text-[#6BBF59]">
                        office@bridgeafriport.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Senegal */}
                <div className="p-5 rounded-xl bg-[#09111D] border border-[#1E334E] hover:border-[#6BBF59]/50 transition-all space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-[#F7F5EE]">🇸🇳 SENEGAL</span>
                    <span className="font-mono text-[10px] text-[#C9A227]">ATLANTIC NEXUS</span>
                  </div>
                  <div className="space-y-1 text-xs font-mono text-[#E6E2D3]/80">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#6BBF59]" />
                      <a href="mailto:office@bridgeafriport.com" className="hover:text-[#6BBF59]">
                        office@bridgeafriport.com
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
