import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle2, Star, Sparkles, Gift, Calendar } from 'lucide-react';

// FARBY - Ľahko editovateľné
const colors = {
  primary: {
    main: '#10b981',
    light: '#34d399',
    dark: '#059669',
    gradient: 'from-emerald-500 to-teal-500'
  },
  secondary: {
    main: '#64748b',
    light: '#94a3b8',
    dark: '#475569',
    gradient: 'from-slate-600 to-slate-700'
  },
  accent: {
    main: '#0ea5e9',
    light: '#38bdf8',
    dark: '#0284c7'
  },
  background: {
    dark: '#0f172a',
    darker: '#020617',
    card: 'rgba(30, 41, 59, 0.6)',
    cardHover: 'rgba(30, 41, 59, 0.8)'
  }
};

const getNextNovemberEnd = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const targetThisYear = new Date(Date.UTC(currentYear, 10, 30, 23, 59, 59)); // month 10 = November
  if (targetThisYear.getTime() > now.getTime()) return targetThisYear;
  return new Date(Date.UTC(currentYear + 1, 10, 30, 23, 59, 59));
};

export default function SpecialOfferBanner() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const targetDate = getNextNovemberEnd();
  useEffect(() => {
    const el = document.getElementById('email-offer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      const timestamp = new Date().toISOString();
      const payload = [
        {
          email,
          createdAt: timestamp
        }
      ];

      const triggerDownload = (blob, filename) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
      };

      // JSON výstup (pripravené na import)
      const jsonBlob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      triggerDownload(jsonBlob, 'zmluvy-emails.json');

      // Jednoduchý TXT zápis pre zmluvy/log
      const txtBlob = new Blob([`email=${email}; createdAt=${timestamp}\n`], { type: 'text/plain' });
      triggerDownload(txtBlob, 'zmluvy-emails.txt');

      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-10 py-8 md:py-12">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: `${colors.primary.main}30` }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: `${colors.accent.main}30`, animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: `${colors.primary.main}20`, animationDelay: '2s' }}></div>
      </div>

      {/* Main Banner */}
      <div className="relative z-10 max-w-6xl w-full">
        <div className="backdrop-blur-2xl rounded-[1.75rem] p-5 sm:p-7 md:p-8 border-2 shadow-2xl overflow-hidden"
          style={{ 
            backgroundColor: colors.background.cardHover,
            borderColor: colors.primary.main,
            boxShadow: `0 30px 80px ${colors.primary.main}50`
          }}>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: `linear-gradient(135deg, ${colors.primary.main}, ${colors.primary.light})` }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: `linear-gradient(135deg, ${colors.secondary.main}, ${colors.primary.main})` }}></div>
          
          {/* Floating Icons */}
          <div className="absolute top-8 left-8 animate-float">
            <div className={`w-16 h-16 bg-gradient-to-br ${colors.primary.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
              <Gift className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute top-8 right-8 animate-float" style={{ animationDelay: '1s' }}>
            <div className={`w-16 h-16 bg-gradient-to-br ${colors.accent.main} to-blue-500 rounded-2xl flex items-center justify-center shadow-xl`}>
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="relative text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full mb-6 border animate-pulse-slow"
              style={{ 
                backgroundColor: `${colors.primary.main}20`,
                borderColor: `${colors.primary.main}50`,
                boxShadow: `0 0 30px ${colors.primary.main}30`
              }}>
              <Sparkles className="w-5 h-5" style={{ color: colors.primary.light }} />
              <span className="text-sm font-bold" style={{ color: colors.primary.light }}>
                LIMITOVAN? PONUKA
              </span>
              <Sparkles className="w-5 h-5" style={{ color: colors.primary.light }} />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              2 mesiace za cenu 1
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Platí na poukážkový Customizer. Aktivujte do konca novembra 2024 a získate +1 mesiac zdarma.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto mb-6 sm:mb-8">
              <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl border transition-all hover:scale-105 cursor-pointer group"
                style={{ 
                  backgroundColor: `${colors.primary.main}15`,
                  borderColor: `${colors.primary.main}30`
                }}>
                <div className={`w-12 h-12 bg-gradient-to-br ${colors.primary.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white mb-1">Darčekové poukážky</h3>
                  <p className="text-xs text-gray-400">Vytvárajte a posielate digitálne darčekové karty s vlastným dizajnom</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl border transition-all hover:scale-105 cursor-pointer group"
                style={{ 
                  backgroundColor: `${colors.accent.main}15`,
                  borderColor: `${colors.accent.main}30`
                }}>
                <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white mb-1">Online rezervácie</h3>
                  <p className="text-xs text-gray-400">Kompletný rezervačný systém s kalendárom a automatickými notifikáciami</p>
                </div>
              </div>
            </div>

            {/* Email Form */}
            {!isSubmitted ? (
              <form id="email-offer" onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8 sm:mb-10">
                <div className="flex flex-col md:flex-row gap-4 p-2 rounded-2xl backdrop-blur-xl border"
                  style={{ 
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    borderColor: `${colors.primary.main}40`
                  }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Zadajte váš email"
                    className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                  />
                  <button
                    type="submit"
                    className="group px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 shadow-lg text-lg flex items-center justify-center gap-2 whitespace-nowrap"
                    style={{ 
                      background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light})`,
                      boxShadow: `0 10px 40px ${colors.primary.main}50`
                    }}>
                    <span>Mám záujem</span>
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Zanechajte svoj email a my sa vám ozveme s podrobnosťami
                </p>
              </form>
            ) : (
              <div className="max-w-2xl mx-auto mb-8 p-8 rounded-2xl backdrop-blur-xl border animate-scale-in"
                style={{ 
                  backgroundColor: `${colors.primary.main}20`,
                  borderColor: `${colors.primary.main}60`
                }}>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${colors.primary.main}, ${colors.primary.light})` }}>
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Ďakujeme!</h3>
                <p className="text-lg text-gray-300">
                  Váš email bol úspešne odoslaný. Čoskoro sa vám ozveme!
                </p>
              </div>
            )}

            {/* Benefits Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm">
              {[
                { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Okam?it? spustenie' },
                { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Bez viazanosti' },
                { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Zrušiteľné kedykoľvek' },
                { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Prioritná podpora' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div style={{ color: colors.primary.light }}>{item.icon}</div>
                  <span className="text-gray-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Urgency Timer */}
            <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl border text-center sm:text-left"
              style={{ 
                backgroundColor: `${colors.secondary.main}20`,
                borderColor: `${colors.secondary.main}40`
              }}>
              <Clock className="w-5 h-5 mx-auto sm:mx-0" style={{ color: colors.secondary.light }} />
              <div className="text-left">
                <div className="text-xs text-gray-400">Ponuka končí</div>
                <div className="text-lg font-bold text-white">30. novembra {targetDate.getUTCFullYear()}</div>
              </div>
            </div>

            {/* Trust Indicators */}
{/* Countdown Section */}
<div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t" style={{ borderColor: `${colors.primary.main}30` }}>
  <CountdownTimer targetDate={targetDate} colors={colors} />
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

function Clock({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

// 🕒 Countdown komponent
function CountdownTimer({ targetDate, colors }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) return null;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="mt-12 text-center text-white text-2xl font-semibold">
        🎉 Ponuka skončila!
      </div>
    );
  }

  return (
    <div className="mt-12 flex flex-col items-center gap-6">
      <div className="text-xs text-gray-400 uppercase tracking-wider">Ponuka končí o</div>
      <div className="flex items-center gap-0.5 text-white">
        {[
          { label: 'Dni', value: timeLeft.days },
          { label: 'Hodiny', value: timeLeft.hours },
          { label: 'Minúty', value: timeLeft.minutes },
          { label: 'Sekundy', value: timeLeft.seconds },
        ].map((unit, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-slate-900/70 px-6 py-4 rounded-2xl border shadow-lg"
            style={{
              borderColor: `${colors.primary.main}40`,
              boxShadow: `0 0 20px ${colors.primary.main}20`
            }}
          >
            <span className="text-4xl font-bold">{unit.value.toString().padStart(2, '0')}</span>
            <span className="text-xs text-gray-400 mt-1">{unit.label}</span>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-500 mt-4">
        Ponuka vyprší <span style={{ color: colors.primary.light }}>30. novembra 2024</span>
      </div>
    </div>
  );
}


