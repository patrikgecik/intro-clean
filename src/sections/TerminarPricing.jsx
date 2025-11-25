import React, { useState } from 'react';
import { Calendar, Users, Clock, TrendingUp, Shield, Zap, Globe, Smartphone, ChevronRight, CheckCircle2, Star } from 'lucide-react';

// FARBY - Ľahko editovateľné
const colors = {
  primary: {
    main: '#10b981', // zelená
    light: '#34d399',
    dark: '#059669',
    gradient: 'from-emerald-500 to-teal-500'
  },
  secondary: {
    main: '#64748b', // šedá
    light: '#94a3b8',
    dark: '#475569',
    gradient: 'from-slate-600 to-slate-700'
  },
  accent: {
    main: '#0ea5e9', // modrá akcent
    light: '#38bdf8',
    dark: '#0284c7'
  },
  background: {
    dark: '#0f172a',
    darker: '#020617',
    card: 'rgba(30, 41, 59, 0.6)',
    cardHover: 'rgba(30, 41, 59, 0.8)'
  },
  status: {
    free: '#10b981',
    blocked: '#ef4444',
    waiting: '#f59e0b'
  }
};

export default function TerminarPricing() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <section id="pricing" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>



     
     




      {/* Pricing Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Flexibilné ceny pre
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              podniky všetkých veľkostí
            </span>
          </h2>
          <p className="text-xl text-gray-400">Vyberte si plán, ktorý vám vyhovuje</p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
            <button className="px-8 py-3 text-gray-400 font-semibold rounded-xl hover:text-white transition-colors">
              MESAČNE
            </button>
            <button 
              className="px-8 py-3 text-white font-semibold rounded-xl transition-all shadow-lg"
              style={{ background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light})` }}>
              ROČNE
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Starter Plan */}
          <div className="relative backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group"
            style={{ backgroundColor: colors.background.card }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={`w-16 h-16 bg-gradient-to-br ${colors.secondary.gradient} rounded-2xl flex items-center justify-center shadow-xl border-4 border-slate-900`}>
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="mt-6">
              <div className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-6"
                style={{ 
                  backgroundColor: `${colors.secondary.main}30`,
                  color: colors.secondary.light,
                  border: `1px solid ${colors.secondary.main}50`
                }}>
                STARTER
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">€15</span>
                  <span className="text-gray-400 text-lg">/mesiac</span>
                </div>
                <p className="text-gray-400">Ideálne pre začínajúce salóny</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  '1 pobočka',
                  '3 zamestnanci',
                  '200 rezervácií/mesiac',
                  'Email notifikácie',
                  'Základný kalendár'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: colors.secondary.light }} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 rounded-xl font-semibold transition-all border-2 text-white hover:scale-105"
                style={{ 
                  borderColor: colors.secondary.main,
                  backgroundColor: `${colors.secondary.main}20`
                }}>
                <span className="flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  ZAČAŤ
                </span>
              </button>
            </div>
          </div>

          {/* Professional Plan - Featured */}
          <div className="relative backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-500 group transform md:scale-110 md:shadow-2xl"
            style={{ 
              backgroundColor: colors.background.cardHover,
              borderColor: colors.primary.main,
              boxShadow: `0 20px 60px ${colors.primary.main}40`
            }}>
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-xs font-bold text-white shadow-lg"
              style={{ background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light})` }}>
              NAJPOPULÁRNEJŠÍ
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={`w-20 h-20 bg-gradient-to-br ${colors.primary.gradient} rounded-2xl flex items-center justify-center shadow-2xl border-4 border-slate-900`}>
                <Star className="w-10 h-10 text-white" />
              </div>
            </div>

            <div className="mt-12">
              <div className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-6"
                style={{ 
                  backgroundColor: `${colors.primary.main}30`,
                  color: colors.primary.light,
                  border: `1px solid ${colors.primary.main}50`
                }}>
                PROFESSIONAL
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bold text-white">€45</span>
                  <span className="text-gray-400 text-lg">/mesiac</span>
                </div>
                <p className="text-gray-300 font-semibold">Pre stredné a väčšie prevádzky</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Neomedzené pobočky',
                  'Neomedzení zamestnanci',
                  'Neomedzené rezervácie',
                  'SMS & Email notifikácie',
                  'Pokročilý kalendár',
                  'Analytika a reporty',
                  'Online platby',
                  'API prístup'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: colors.primary.light }} />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 rounded-xl font-semibold transition-all text-white hover:scale-105 shadow-lg"
                style={{ 
                  background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light})`,
                  boxShadow: `0 10px 30px ${colors.primary.main}50`
                }}>
                <span className="flex items-center justify-center gap-2">
                  <Star className="w-5 h-5" />
                  ZAČAŤ TERAZ
                </span>
              </button>

              <div className="mt-4 text-center">
                <span className="text-sm font-semibold" style={{ color: colors.primary.light }}>
                  ⚡ Limitovaná ponuka -20% zľava
                </span>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group"
            style={{ backgroundColor: colors.background.card }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={`w-16 h-16 bg-gradient-to-br ${colors.primary.gradient} rounded-2xl flex items-center justify-center shadow-xl border-4 border-slate-900`}>
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="mt-6">
              <div className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-6"
                style={{ 
                  backgroundColor: `${colors.primary.main}30`,
                  color: colors.primary.light,
                  border: `1px solid ${colors.primary.main}50`
                }}>
                ENTERPRISE
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">€99</span>
                  <span className="text-gray-400 text-lg">/mesiac</span>
                </div>
                <p className="text-gray-400">Pre veľké reťazce a siete</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Všetko z Professional',
                  'Vlastný dedikovaný server',
                  'White-label riešenie',
                  'Prioritná podpora 24/7',
                  'Osobný account manager',
                  'Vlastné integrácie',
                  'SLA garantované'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: colors.primary.light }} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 rounded-xl font-semibold transition-all border-2 text-white hover:scale-105"
                style={{ 
                  borderColor: colors.primary.main,
                  backgroundColor: `${colors.primary.main}20`
                }}>
                <span className="flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  KONTAKTOVAŤ
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Všetky plány zahŕňajú 14-dňovú bezplatnú skúšobnú dobu. Bez viazanosti.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" style={{ color: colors.primary.main }} />
              <span>Zrušte kedykoľvek</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" style={{ color: colors.primary.main }} />
              <span>Bez skrytých poplatkov</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" style={{ color: colors.primary.main }} />
              <span>30-dňová záruka vrátenia peňazí</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
