import React, { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constants";
import Button from "../components/Button.jsx";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [current, setCurrent] = useState(0);
  const visiblePlans = plans.slice(0, 3);

  const next = () => setCurrent((prev) => (prev + 1) % visiblePlans.length);
  const prev = () => setCurrent((prev) => (prev - 1 + visiblePlans.length) % visiblePlans.length);

  return (
    <section id="pricing" className="bg-slate-950 text-white py-16">
      <Element name="pricing">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Cenník</h2>
            <p className="text-gray-400">Vyberte si, čo vám sedí. Mesačne alebo ročne.</p>
            <div className="inline-flex mt-6 bg-slate-900 border border-white/10 rounded-2xl p-1">
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold ${isMonthly ? "bg-emerald-500 text-white shadow" : "text-gray-300 hover:text-white"}`}
              >
                Mesačne
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold ${!isMonthly ? "bg-emerald-500 text-white shadow" : "text-gray-300 hover:text-white"}`}
              >
                Ročne
              </button>
            </div>
          </div>

          {/* Unified slider (all breakpoints) */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-3">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {visiblePlans.map((plan) => (
                  <div key={plan.id} className="min-w-full px-2">
                    <PricingCard plan={plan} isMonthly={isMonthly} />
                  </div>
                ))}
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
                {visiblePlans.map((_, idx) => (
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
        </div>
      </Element>
    </section>
  );
}

function PricingCard({ plan, isMonthly }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 flex flex-col gap-6 shadow-lg">
      <div className="text-sm font-semibold text-emerald-300 uppercase tracking-wide">{plan.title}</div>
      <div className="text-5xl font-bold flex items-baseline gap-2">
        <span>{isMonthly ? plan.priceMonthly : plan.priceYearly}€</span>
        <span className="text-sm text-gray-400">/ {isMonthly ? "mesiac" : "mesiac (ročné)"}</span>
      </div>
      <p className="text-gray-400 text-sm">{plan.caption}</p>
      <ul className="space-y-3 text-sm text-gray-200">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button containerClassName="w-full text-center justify-center" onClick={() => {}}>
        Začať
      </Button>
    </div>
  );
}
