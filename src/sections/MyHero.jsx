import React, { useState } from 'react';
import { Calendar, Users, Clock, TrendingUp, Shield, Zap, Globe, Smartphone, ChevronRight, CheckCircle2, Star } from 'lucide-react';
import logoTerminar from '../assets/logo_terminar.png';

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

export default function ReservationSystemHero() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden px-4 sm:px-6 md:px-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${colors.primary.main}33` }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${colors.secondary.main}33`, animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${colors.accent.main}33`, animationDelay: '2s' }}></div>
      </div>

      {/* In-section Navigation (chosen header) */}
      <nav className="relative z-50 flex items-center justify-between px-4 md:px-8 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img
            src={logoTerminar}
            alt="Terminar logo"
            className="h-10 w-auto md:h-14 object-contain drop-shadow-xl flex-shrink-0"
          />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#customizer" className="text-gray-300 hover:text-white transition-colors">Customizer</a>
          <a href="#giftcards" className="text-gray-300 hover:text-white transition-colors">Pouk�ky</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Cenn�k</a>
          <a href="#reservations" className="text-gray-300 hover:text-white transition-colors">Rezerv�cie</a>
          <a
            href="#demo-tablet"
            className={`px-6 py-2 bg-gradient-to-r ${colors.primary.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all`}
            style={{ boxShadow: `0 4px 20px ${colors.primary.main}40` }}>
            Vyskusat
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className={`px-4 py-2 bg-gradient-to-r ${colors.primary.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all`}
            style={{ boxShadow: `0 4px 20px ${colors.primary.main}40` }}>
            {isMenuOpen ? 'Zavriet' : 'Menu'}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden relative z-40 max-w-7xl mx-auto px-4 pb-4">
          <div className="rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl p-4 space-y-3">
            <a href="#customizer" className="block text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Customizer</a>
            <a href="#giftcards" className="block text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Pouk�ky</a>
            <a href="#pricing" className="block text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Cenn�k</a>
            <a href="#reservations" className="block text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Rezerv�cie</a>
            <a
              href="#demo-tablet"
              className={`w-full py-3 bg-gradient-to-r ${colors.primary.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all text-center`}
              style={{ boxShadow: `0 4px 20px ${colors.primary.main}40` }}
              onClick={() => setIsMenuOpen(false)}
            >
              Vyskusat
            </a>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-20 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border" 
                style={{ 
                  backgroundColor: `${colors.primary.main}20`,
                  borderColor: `${colors.primary.main}30`,
                  color: colors.primary.light 
                }}>
                REZERVAČNÝ SYSTÉM
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
              ÚŽASNE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                JEDNODUCHÝ
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Navrhli sme Terminar ako systém, ktorý je ľahko použiteľný, rýchly na naučenie a prekvapivo výkonný.
            </p>

            <div className="flex gap-4">
              <a
                href="#demo-tablet"
                className={`group px-8 py-4 bg-gradient-to-r ${colors.primary.gradient} text-white rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center gap-2`}
                style={{ boxShadow: `0 10px 40px ${colors.primary.main}40` }}
              >
                <span>VYSKÚŠAŤ TERAZ</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#demo-tablet" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all">
                Pozriet Demo
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Dostupnosť</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white flex items-center gap-1">
                  4.9 <Star className="w-5 h-5 fill-current" style={{ color: colors.primary.main }} />
                </div>
                <div className="text-sm text-gray-400">Hodnotenie</div>
              </div>
            </div>
          </div>

          {/* Right - 3D iPad Mockup with Full Calendar (desktop only for responsiveness) */}
          <div className="relative hidden lg:block">
            <div className="relative transform hover:scale-105 transition-all duration-700" style={{ perspective: '1500px' }}>
              {/* Glowing Effect */}
              <div className="absolute -inset-8 rounded-[4rem] blur-3xl" 
                style={{ background: `linear-gradient(to right, ${colors.primary.main}30, ${colors.secondary.main}30, ${colors.accent.main}30)` }}></div>
              
              {/* 3D Stacked Screens Effect */}
              <div className="relative">
                {/* Back Layer */}
                <div className="absolute top-8 left-8 right-0 bottom-0 rounded-3xl backdrop-blur-xl border border-white/10 transform rotate-6"
                  style={{ background: `linear-gradient(to bottom right, ${colors.secondary.main}40, ${colors.background.dark}40)` }}></div>
                
                {/* Middle Layer */}
                <div className="absolute top-4 left-4 right-0 bottom-0 rounded-3xl backdrop-blur-xl border border-white/10 transform rotate-3"
                  style={{ background: `linear-gradient(to bottom right, ${colors.secondary.main}50, ${colors.background.dark}50)` }}></div>
                
                {/* Front Layer - Main Screen */}
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-4 shadow-2xl border border-white/10">
                  {/* Screen Content */}
                  <div className="bg-white rounded-2xl overflow-hidden">
                    {/* Calendar Header */}
                    <div className="p-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" style={{ color: colors.primary.main }} />
                          <span className="font-bold text-gray-800 text-sm">Kalendár rezervácií</span>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary.main }}></div>
                        </div>
                      </div>
                      <div className="text-[9px] text-gray-600">📍 Bratislava - Centrum</div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-1 p-2 bg-gray-50 border-b">
                      <button 
                        onClick={() => setActiveTab(0)}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-semibold transition-all ${
                          activeTab === 0 
                            ? 'text-white shadow-md' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        style={activeTab === 0 ? { background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light})` } : {}}>
                        📅 Kalendár
                      </button>
                      <button 
                        onClick={() => setActiveTab(1)}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-semibold transition-all ${
                          activeTab === 1 
                            ? 'text-white shadow-md' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        style={activeTab === 1 ? { background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light})` } : {}}>
                        📊 Štatistiky
                      </button>
                    </div>

                    {/* Calendar View */}
                    {activeTab === 0 && (
                      <div className="p-2">
                        {/* Week Header */}
                        <div className="grid grid-cols-8 gap-0.5 mb-1">
                          <div className="text-[8px] text-gray-500 font-semibold p-1">Čas</div>
                          {['PO 3.11', 'UT 4.11', 'ST 5.11', 'ŠT 6.11', 'PI 7.11', 'SO 8.11', 'NE 9.11'].map((day, idx) => (
                            <div key={idx} className={`text-center p-1 rounded text-[8px] font-bold ${
                              idx === 6 ? 'text-white' : 'text-gray-700'
                            }`}
                            style={idx === 6 ? { background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light})` } : { backgroundColor: '#f8fafc' }}>
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* Time Grid */}
                        <div className="grid grid-cols-8 gap-0.5">
                          {/* Time Column */}
                          <div className="space-y-0.5">
                            {['08:00', '10:00', '12:00', '14:00', '16:00'].map((time) => (
                              <div key={time} className="h-12 bg-gray-50 rounded flex items-center justify-center text-[7px] text-gray-600 font-medium">
                                {time}
                              </div>
                            ))}
                          </div>

                          {/* Days */}
                          {Array.from({ length: 7 }).map((_, dayIdx) => (
                            <div key={dayIdx} className="space-y-0.5">
                              {Array.from({ length: 5 }).map((_, slotIdx) => {
                                let slotType = 'free';
                                let label = '';
                                
                                if (dayIdx === 1 && slotIdx === 0) { slotType = 'blocked'; label = 'J.K.'; }
                                else if (dayIdx === 1 && slotIdx === 2) { slotType = 'blocked'; label = 'M.N.'; }
                                else if (dayIdx === 3 && slotIdx === 0) { slotType = 'blocked'; label = 'Obsadené'; }
                                else if (dayIdx === 3 && slotIdx === 2) { slotType = 'blocked'; label = 'Farbenie'; }
                                else if (dayIdx === 5 && slotIdx === 0) { slotType = 'blocked'; label = 'Strih'; }
                                else if (dayIdx === 5 && slotIdx === 2) { slotType = 'blocked'; label = 'Masáž'; }
                                else if (dayIdx === 0 && slotIdx === 1) { slotType = 'waiting'; label = 'Čaká'; }
                                else if (dayIdx === 6 && slotIdx === 1) { slotType = 'waiting'; label = 'Čaká'; }

                                const bgColor = slotType === 'free' 
                                  ? `linear-gradient(to bottom right, ${colors.status.free}20, ${colors.status.free}30)`
                                  : slotType === 'blocked'
                                  ? `linear-gradient(to bottom right, ${colors.status.blocked}20, ${colors.status.blocked}30)`
                                  : `linear-gradient(to bottom right, ${colors.status.waiting}20, ${colors.status.waiting}30)`;

                                const textColor = slotType === 'free' 
                                  ? colors.status.free
                                  : slotType === 'blocked'
                                  ? colors.status.blocked
                                  : colors.status.waiting;

                                return (
                                  <div 
                                    key={slotIdx}
                                    className="h-12 rounded border-2 flex items-center justify-center text-[7px] font-bold cursor-pointer hover:scale-105 transition-transform"
                                    style={{ 
                                      background: bgColor,
                                      borderColor: `${textColor}60`,
                                      color: textColor
                                    }}>
                                    {label || (slotType === 'free' ? '✓' : '')}
                                  </div>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Stats View */}
                    {activeTab === 1 && (
                      <div className="p-3 space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-lg p-2 text-center shadow-sm border-2"
                            style={{ 
                              background: `linear-gradient(to bottom right, ${colors.primary.main}20, ${colors.primary.main}30)`,
                              borderColor: `${colors.primary.main}40`
                            }}>
                            <div className="text-xl font-bold" style={{ color: colors.primary.main }}>124</div>
                            <div className="text-[8px] text-gray-600">Klienti</div>
                          </div>
                          <div className="rounded-lg p-2 text-center shadow-sm border-2"
                            style={{ 
                              background: `linear-gradient(to bottom right, ${colors.accent.main}20, ${colors.accent.main}30)`,
                              borderColor: `${colors.accent.main}40`
                            }}>
                            <div className="text-xl font-bold" style={{ color: colors.accent.main }}>56</div>
                            <div className="text-[8px] text-gray-600">Rezervácie</div>
                          </div>
                          <div className="rounded-lg p-2 text-center shadow-sm border-2"
                            style={{ 
                              background: `linear-gradient(to bottom right, ${colors.secondary.main}20, ${colors.secondary.main}30)`,
                              borderColor: `${colors.secondary.main}40`
                            }}>
                            <div className="text-xl font-bold" style={{ color: colors.secondary.main }}>14</div>
                            <div className="text-[8px] text-gray-600">Služby</div>
                          </div>
                          <div className="rounded-lg p-2 text-center shadow-sm border-2"
                            style={{ 
                              background: `linear-gradient(to bottom right, ${colors.status.waiting}20, ${colors.status.waiting}30)`,
                              borderColor: `${colors.status.waiting}40`
                            }}>
                            <div className="text-xl font-bold" style={{ color: colors.status.waiting }}>8</div>
                            <div className="text-[8px] text-gray-600">Zamestnanci</div>
                          </div>
                        </div>

                        {/* Mini Chart */}
                        <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                          <div className="text-[8px] font-bold text-gray-700 mb-2">Mesačné tržby</div>
                          <div className="flex items-end justify-between h-20 gap-1">
                            {[60, 75, 90, 80, 85, 100].map((height, idx) => (
                              <div key={idx} className="flex-1 flex flex-col items-center">
                                <div 
                                  className="w-full rounded-t transition-all hover:opacity-80 cursor-pointer"
                                  style={{ 
                                    height: `${height}%`,
                                    background: `linear-gradient(to top, ${colors.primary.main}, ${colors.primary.light})`
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* iPad Home Indicator */}
                  <div className="flex justify-center mt-2">
                    <div className="w-16 h-0.5 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className={`absolute -top-8 -left-8 bg-gradient-to-br ${colors.primary.gradient} rounded-2xl p-3 shadow-2xl animate-float`}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className={`absolute -bottom-8 -right-8 bg-gradient-to-br ${colors.secondary.gradient} rounded-2xl p-3 shadow-2xl animate-float`} 
                style={{ animationDelay: '1s' }}>
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-32">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div 
            className="group relative backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-opacity-50 transition-all duration-500 overflow-hidden"
            style={{ backgroundColor: colors.background.card }}
            onMouseEnter={() => setHoveredFeature(0)}
            onMouseLeave={() => setHoveredFeature(null)}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(to bottom right, ${colors.primary.main}20, transparent)` }}></div>
            <div className="relative">
              <div className={`w-16 h-16 bg-gradient-to-br ${colors.primary.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-semibold mb-2" style={{ color: colors.primary.light }}>ĽAHKÁ INTEGRÁCIA</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Pracujte efektívnejšie
              </h3>
              <p className="text-gray-300 mb-6">
                S Terminarom sú únavné úlohy minulosťou. Automatizácia a inteligentné procesy posúvajú vašu produktivitu na novú úroveň.
              </p>
              <button className="group/btn flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                style={{ color: colors.primary.light }}>
                <Zap className="w-5 h-5" />
                <span>POZRIEŤ DEMO</span>
                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="group relative backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-opacity-50 transition-all duration-500 overflow-hidden"
            style={{ backgroundColor: colors.background.card }}
            onMouseEnter={() => setHoveredFeature(1)}
            onMouseLeave={() => setHoveredFeature(null)}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(to bottom right, ${colors.secondary.main}20, transparent)` }}></div>
            <div className="relative">
              <div className={`w-16 h-16 bg-gradient-to-br ${colors.secondary.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-semibold mb-2" style={{ color: colors.secondary.light }}>BEZPEČNOSŤ & DÔVERA</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Spoľahnite sa na nás
              </h3>
              <p className="text-gray-300 mb-6">
                Bezpečnosť vašich dát je naša priorita. Moderné šifrovanie a robustné bezpečnostné protokoly chránia vaše informácie.
              </p>
              <button className="group/btn flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                style={{ color: colors.secondary.light }}>
                <Shield className="w-5 h-5" />
                <span>ČÍTAŤ DOKUMENTÁCIU</span>
                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Feature Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {[
            { icon: <Zap className="w-6 h-6" />, title: 'Automatizované', subtitle: 'Notifikácie', gradient: colors.primary.gradient },
            { icon: <Users className="w-6 h-6" />, title: 'Spolupráca', subtitle: 'Tímová práca', gradient: colors.secondary.gradient },
            { icon: <TrendingUp className="w-6 h-6" />, title: 'Ultra rýchle', subtitle: 'Cloud úložisko', gradient: colors.primary.gradient },
            { icon: <Smartphone className="w-6 h-6" />, title: '24/7 podpora', subtitle: 'Pre zákazníkov', gradient: colors.secondary.gradient }
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="group backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer hover:scale-105"
              style={{ backgroundColor: colors.background.card }}>
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                {feature.icon}
              </div>
              <div className="text-sm text-gray-400 mb-1">{feature.title}</div>
              <div className="text-white font-semibold">{feature.subtitle}</div>
            </div>
          ))}
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
    </div>
  );
}





