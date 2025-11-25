import React from 'react';
import { Sparkles, Palette, Wand2, Send, ShieldCheck, LayoutGrid, Zap } from 'lucide-react';
import builderImg from '../assets/builder.png';

const plans = [
  {
    name: 'Custom Lite',
    price: 20,
    badge: 'Začína od 20 €',
    description: 'Rýchle nasadenie farieb, logo a základné voucher flow.',
    features: [
      'Vložíme vaše logo a farby',
      'Výber z 5 šablón',
      'Okamžitá e-mail distribúcia',
      'Základná evidencia poukážok'
    ],
    accent: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'Custom Pro',
    price: 49,
    badge: 'Najobľúbenejší',
    description: 'Prémiový Customizer s vlastnou šablónou na mieru a podporou.',
    features: [
      'Šablóna na mieru',
      'Automatický generátor dizajnu',
      'Elektronická distribúcia + QR',
      'Evidencia a reporty o poukážkach',
      'Prioritná podpora'
    ],
    accent: 'from-sky-500 to-emerald-400',
    highlight: true
  }
];

export default function ComparisonGifts() {
  return (
    <section id="customizer" className="relative bg-slate-950 text-white py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-100 text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4" /> Customizer Premium
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Vlastné poukážky na mieru</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Vyrobíme vám šablónu na mieru, automatický generátor dizajnu a elektronickú distribúciu. Customizer je
            prémiová služba pripravená zapadnúť do vášho rezervačného systému.
          </p>
        </div>

        {/* Feature strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {[
            { icon: <Palette className="w-5 h-5" />, text: 'Šablóna na mieru' },
            { icon: <Wand2 className="w-5 h-5" />, text: 'Automatický generátor dizajnu' },
            { icon: <Send className="w-5 h-5" />, text: 'Elektronická distribúcia voucherov' },
            { icon: <ShieldCheck className="w-5 h-5" />, text: 'Evidencia a kontrola platnosti' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5">
              <span className="text-emerald-300">{item.icon}</span>
              <span className="text-gray-100">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl">
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
                <Wand2 className="w-7 h-7 text-emerald-400" />
                Nástroj na tvorbu poukážok
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Automatický generátor dizajnu s náhľadom v reálnom čase. Vyberte dizajn, farby a formát – hotová
                poukážka za pár sekúnd.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src={builderImg}
                alt="Customizer - nástroj na tvorbu poukážok"
                className="w-full h-auto"
              />
            </div>

            <p className="text-center text-sm text-gray-400">Screenshot z nástroja Customizer</p>
          </div>
        </div>

        {/* Pricing cards (slider on mobile) */}
        <div className="md:grid md:grid-cols-2 gap-6 flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl flex flex-col gap-5 snap-start min-w-[280px] md:min-w-0 ${
                plan.highlight ? 'ring-2 ring-emerald-400/60' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-emerald-200 uppercase tracking-wide">{plan.badge}</p>
                  <h3 className="text-2xl font-bold mt-1">{plan.name}</h3>
                </div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.accent} flex items-center justify-center text-white`}>
                  <LayoutGrid className="w-6 h-6" />
                </div>
              </div>

              <div className="text-5xl font-bold">
                €{plan.price}
                <span className="text-sm text-gray-400"> / projekt</span>
              </div>
              <p className="text-gray-300 text-sm">{plan.description}</p>

              <ul className="space-y-3 text-sm text-gray-100">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-300" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-2 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg hover:shadow-xl transition-all">
                Chcem Customizer
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
