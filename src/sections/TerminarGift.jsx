import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const colors = {
  primary: {
    main: '#10b981',
    light: '#34d399',
    dark: '#059669',
    gradient: 'from-emerald-500 to-teal-500'
  },
  background: {
    dark: '#0f172a',
    card: 'rgba(30, 41, 59, 0.6)',
  }
};

export default function GiftCardsSection() {
  const [senderName, setSenderName] = useState('Ján Kollár');
  const [recipientEmail, setRecipientEmail] = useState('patrikgecik@gmail.com');
  const [recipientName, setRecipientName] = useState('Patrik Gecik');
  const [message, setMessage] = useState('Veselé Vianoce');
  const [amount, setAmount] = useState(50);
  const [showPreview, setShowPreview] = useState(false);

  const previewCard = () => (
    <div className="relative backdrop-blur-xl rounded-3xl p-5 md:p-8 border-2 shadow-2xl transition-all duration-500 w-full"
      style={{ 
        backgroundColor: 'white',
        borderColor: colors.primary.main,
        boxShadow: `0 25px 50px ${colors.primary.main}30`,
        aspectRatio: '210/297'
      }}>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-br ${colors.primary.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
            <span className="text-2xl">💆</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-lg">Serenity Spa & Wellness</h4>
            <p className="text-xs text-gray-600">Spa & Beauty</p>
          </div>
        </div>
        <div className="text-4xl">🎁</div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">DARČEKOVÁ POUKÁŽKA</h2>
        <div className="w-32 h-1 mx-auto rounded-full"
          style={{ background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light})` }}></div>
      </div>

      <div className="rounded-2xl p-5 md:p-6 mb-8 text-center shadow-lg"
        style={{ background: `linear-gradient(135deg, ${colors.primary.main}, ${colors.primary.light})` }}>
        <div className="text-sm font-semibold text-white/90 mb-2">DARČEKOVÁ SUMA VO VÝŠKE</div>
        <div className="text-6xl font-bold text-white">€{amount}</div>
      </div>

      <div className="mb-6 p-4 bg-gray-50 rounded-xl">
        <h5 className="text-sm font-bold text-gray-700 mb-2">Osobný odkaz:</h5>
        <p className="text-sm text-gray-800 italic">"{message}"</p>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Pre:</span>
          <span className="font-semibold text-gray-800">{senderName}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Od:</span>
          <span className="font-semibold text-gray-800">{recipientName}</span>
        </div>
      </div>

      <div className="text-center pt-4 border-t-2 border-dashed"
        style={{ borderColor: colors.primary.main }}>
        <p className="text-xs text-gray-500 mb-2">Ako uplatniť poukážku?</p>
        <p className="text-xs text-gray-600">
          Predložte tento voucher pri návšteve alebo uveďte kód pri objednávke
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="px-4 py-2 rounded-lg text-xs font-bold text-white"
            style={{ background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light})` }}>
            Kód poukážky: 🏛️
          </div>
          <div className="px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-800">
            Serenity Spa & Wellness
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id="giftcards" className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Darčekové
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            Poukážky
          </span>
        </h2>
        <p className="text-xl text-gray-400">Vytvorte si vlastnú darčekovú kartu v reálnom čase</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Badge text="Konfigurácia dizajnu" />
          <Badge text="Okamžité doručenie e‑poukazu" />
          <Badge text="Automatický email pre prijímateľa" />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300">
          <span>• Rýchla tvorba poukážky</span>
          <span>• Automatický generátor dizajnu</span>
          <span>• Elektronická distribúcia</span>
          <span>• Evidencia poukážok v systéme</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
        <div className="backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10"
          style={{ backgroundColor: colors.background.card }}>
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-12 h-12 bg-gradient-to-br ${colors.primary.gradient} rounded-xl flex items-center justify-center`}>
              <span className="text-2xl">🎁</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Prispôsobte si darčekovú kartu</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Meno príjemcu
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-opacity-30 transition-all"
                style={{ borderColor: `${colors.primary.main}30` }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email príjemcu
              </label>
              <input
                type="email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-opacity-30 transition-all"
                style={{ borderColor: `${colors.primary.main}30` }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Vaše meno
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-opacity-30 transition-all"
                style={{ borderColor: `${colors.primary.main}30` }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Osobný odkaz
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-slate-900/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-opacity-30 transition-all resize-none"
                style={{ borderColor: `${colors.primary.main}30` }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Suma
              </label>
              <div className="grid grid-cols-3 gap-3 mb-3">
                {[25, 50, 75, 100, 150, 200].map((value) => (
                  <button
                    key={value}
                    onClick={() => setAmount(value)}
                    className={`py-3 px-4 rounded-xl font-bold transition-all ${
                      amount === value
                        ? 'text-white shadow-lg scale-105'
                        : 'bg-slate-900/60 text-gray-400 hover:bg-slate-800/60 border border-white/10'
                    }`}
                    style={amount === value ? { 
                      background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light})`,
                      boxShadow: `0 4px 20px ${colors.primary.main}40`
                    } : {}}>
                    €{value}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              style={{ 
                background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary.light})`,
                boxShadow: `0 10px 30px ${colors.primary.main}50`
              }}>
              <span>💳</span>
              <span>Pokračovať na platbu</span>
            </button>

            <button
              onClick={() => setShowPreview(true)}
              className="mt-3 w-full py-3 rounded-xl font-semibold text-white border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all lg:hidden"
            >
              Zobraziť náhľad poukážky
            </button>
          </div>
        </div>

        <div className="hidden lg:block w-full max-w-[520px] mx-auto lg:sticky lg:top-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Náhľad vo formáte A4</h3>
            <p className="text-sm text-gray-400">Zmeny sa zobrazujú v reálnom čase</p>
          </div>
          {previewCard()}
        </div>

        <div className="mt-6 p-4 rounded-xl backdrop-blur-xl border border-white/10"
          style={{ backgroundColor: colors.background.card }}>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${colors.primary.main}30` }}>
              <CheckCircle2 className="w-5 h-5" style={{ color: colors.primary.main }} />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Okamžité doručenie</h4>
              <p className="text-sm text-gray-400">
                Darčeková karta bude okamžite odoslaná na email príjemcu po úspešnej platbe
              </p>
            </div>
          </div>
        </div>
      </div>

      {showPreview && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-8">
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setShowPreview(false)}
              className="px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition"
            >
              Zavrieť
            </button>
          </div>
          <div className="w-full max-w-[calc(100vw-32px)]">{previewCard()}</div>
        </div>
      )}
    </div>
  );
}

function Badge({ text }) {
  return (
    <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-100 font-medium">
      {text}
    </div>
  );
}
