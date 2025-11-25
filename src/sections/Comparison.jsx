import React, { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 19,
    annualPrice: 15,
    features: {
      branding: "Vlastné logo + farby",
      templates: "5 šablón",
      vouchers: "10 / mesiac",
      distribution: "Email",
      sms: false,
      reports: "Základná evidencia",
      api: false,
      whiteLabel: false,
    },
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    annualPrice: 24,
    popular: true,
    features: {
      branding: "Vlastná šablóna na mieru",
      templates: "10+ dizajnov",
      vouchers: "50 / mesiac",
      distribution: "Email + QR + PDF",
      sms: true,
      reports: "Reporty a exporty",
      api: true,
      whiteLabel: true,
    },
  },
];

const featureList = [
  { key: "branding", label: "Branding/šablóna" },
  { key: "templates", label: "Počet dizajnov" },
  { key: "vouchers", label: "Limit poukážok" },
  { key: "distribution", label: "Distribúcia" },
  { key: "sms", label: "SMS notifikácie" },
  { key: "reports", label: "Evidencia/reporty" },
  { key: "api", label: "API / exporty" },
  { key: "whiteLabel", label: "White-label" },
];

const renderValue = (value) => {
  if (typeof value === "boolean") {
    return value ? (
      <span className="text-emerald-400 text-xl">✓</span>
    ) : (
      <span className="text-slate-500 text-xl">—</span>
    );
  }
  return <span className="text-sm font-semibold text-emerald-200">{value}</span>;
};

export default function Comparison() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(null);

  const next = () => setCurrent((prev) => (prev + 1) % plans.length);
  const prev = () => setCurrent((prev) => (prev - 1 + plans.length) % plans.length);

  return (
    <section
      id="customizer"
      className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 md:py-20 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-12 left-12 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 right-12 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10 md:mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-100 text-xs font-semibold uppercase tracking-[0.2em]">
            Customizer pre poukážky
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Porovnanie balíkov na mieru
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Tri balíky pre váš poukážkový systém: základný branding, vlastná šablóna alebo plný white-label s API.
          </p>

          <div className="inline-flex items-center bg-slate-900/80 border border-white/10 rounded-full p-1 shadow-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all text-sm font-semibold ${
                !isAnnual
                  ? "bg-emerald-500 text-white shadow"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              Mesačne
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all text-sm font-semibold ${
                isAnnual
                  ? "bg-emerald-500 text-white shadow"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              Ročne <span className="ml-2 text-[11px] bg-emerald-500/20 text-emerald-100 px-2 py-0.5 rounded-full">-17%</span>
            </button>
          </div>
        </div>

        {/* Desktop table (PC) */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-white/10 rounded-2xl shadow-xl bg-slate-900/80">
              <table className="min-w-full divide-y divide-white/5">
                <thead>
                  <tr className="bg-slate-900/90">
                    <th className="px-6 py-5 text-left text-sm font-semibold text-emerald-100">
                      Funkcie
                    </th>
                    {plans.map((plan) => (
                      <th
                        key={plan.name}
                        className={`px-6 py-5 text-center ${
                          plan.popular
                            ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white"
                            : "text-emerald-100"
                        }`}
                      >
                        <div className="font-bold text-lg mb-1">{plan.name}</div>
                        {plan.popular && (
                          <div className="text-xs bg-amber-300 text-gray-900 px-2 py-1 rounded-full inline-block mb-2">
                            Najobľúbenejší
                          </div>
                        )}
                        <div className="text-3xl font-bold mt-2">
                          €{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </div>
                        <div className="text-sm opacity-80">/mesiac</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {featureList.map((feature, idx) => (
                    <tr
                      key={feature.key}
                      className={idx % 2 === 0 ? "bg-slate-900/60" : "bg-slate-900/40"}
                    >
                      <td className="px-6 py-4 text-sm text-gray-200">
                        {feature.label}
                      </td>
                      {plans.map((plan) => (
                        <td
                          key={plan.name}
                          className={`px-6 py-4 text-center ${
                            plan.popular ? "bg-emerald-500/5" : ""
                          }`}
                        >
                          {renderValue(plan.features[feature.key])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Slider (mobile + touch) */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-3">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {plans.map((plan, idx) => {
                const isExpanded = expanded === idx;
                const shown = isExpanded ? featureList : featureList.slice(0, 4);
                return (
                  <div key={plan.name} className="min-w-full px-2">
                    <div
                      className={`bg-slate-900/80 rounded-2xl shadow-xl overflow-hidden border border-white/10 ${
                        plan.popular ? "ring-2 ring-emerald-400/60" : ""
                      }`}
                    >
                      <div
                        className={`p-6 ${
                          plan.popular
                            ? "bg-gradient-to-r from-emerald-600 to-teal-500"
                            : "bg-slate-950"
                        }`}
                      >
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {plan.name}
                        </h3>
                        {plan.popular && (
                          <div className="inline-block bg-amber-300 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                            Najobľúbenejší
                          </div>
                        )}
                        <div className="text-4xl font-bold text-white">
                          €{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          <span className="text-lg font-normal">/mesiac</span>
                        </div>
                      </div>
                      <div className="p-6 space-y-3">
                        {shown.map((item) => (
                          <div
                            key={item.key}
                            className="flex justify-between items-center py-2 border-b border-white/5 text-sm text-gray-200"
                          >
                            <span className="text-gray-400">
                              {item.label}
                            </span>
                            <span>{renderValue(plan.features[item.key])}</span>
                          </div>
                        ))}
                        {!isExpanded && featureList.length > shown.length && (
                          <button
                            onClick={() => setExpanded(idx)}
                            className="w-full py-2 px-4 rounded-lg text-sm font-semibold bg-emerald-500/10 border border-emerald-400/30 text-emerald-100 hover:bg-emerald-500/20 transition"
                          >
                            Zobraziť viac
                          </button>
                        )}
                        {isExpanded && (
                          <button
                            onClick={() => setExpanded(null)}
                            className="w-full py-2 px-4 rounded-lg text-sm font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/15 transition"
                          >
                            Zbaliť
                          </button>
                        )}
                        <button
                          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                            plan.popular
                              ? "bg-emerald-500 text-white hover:bg-emerald-400"
                              : "bg-slate-800 text-white hover:bg-slate-700"
                          }`}
                        >
                          Vybrať balík
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={prev}
              className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white text-sm hover:bg-white/20 transition"
            >
              Predch.
            </button>
            <div className="flex gap-2">
              {plans.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${current === idx ? "w-6 bg-emerald-400" : "w-2 bg-emerald-900"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white text-sm hover:bg-white/20 transition"
            >
              Ďalší
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          <p>* SMS upozornenia sa účtujú podľa skutočného využitia</p>
          <p className="mt-2">
            Všetky ceny sú uvedené bez DPH. Pri ročnom platení ušetríte 17%.
          </p>
        </div>
      </div>
    </section>
  );
}
