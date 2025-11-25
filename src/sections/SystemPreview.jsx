import React, { useState, useEffect } from 'react';
import { Calendar, Users, Briefcase, Clock, TrendingUp, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function IPadReservationShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [isMobileTabletOpen, setIsMobileTabletOpen] = useState(false);
  const [viewMode, setViewMode] = useState('week');

  useEffect(() => {
    if (window.location.hash === '#demo-tablet') {
      setIsMobileTabletOpen(true);
    }
  }, []);

  const nextSlide = () => {
    setSelectedSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setSelectedSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div id="demo-tablet" className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 pt-24 pb-16 md:pt-28 md:pb-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-sky-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-400 mb-4">
              Moderný rezervačný systém
            </h1>
            <p className="text-xl text-gray-300">Budúcnosť rezervácií na dosah ruky</p>
          </div>
          <button
            onClick={() => setIsMobileTabletOpen(true)}
            className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg hover:shadow-xl transition-all"
          >
            Demo tablet
          </button>
        </div>

        {/* iPad Device (desktop) */}
        <TabletDevice
          className="perspective-2000 mb-16 hidden md:block"
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {/* Mobile compact tablet preview */}
        {/* Removed per request */}

        {/* Image Slider */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 space-y-3">
            <span className="text-xs font-semibold tracking-[0.35em] text-emerald-200 uppercase block">Funkcie</span>
            <h2 className="text-3xl font-bold text-white">Ďalšie Funkcie Systému</h2>
            <p className="text-gray-300">Všetky drobnosti, ktoré zrýchlia prácu v salóne a držia klientov v obraze.</p>
          </div>
          
          <div className="relative bg-white/5 border border-emerald-500/15 rounded-3xl backdrop-blur-xl shadow-2xl p-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-400/10 to-sky-500/10 pointer-events-none"></div>
            {/* Main Slider */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${selectedSlide * 100}%)` }}
              >
                <SlideCard
                  title="Automatické notifikácie"
                  icon="🔔"
                  gradient="from-emerald-500/60 via-sky-500/40 to-teal-400/60"
                  features={['SMS pripomienky', 'Email potvrdenia', 'Push notifikácie']}
                />
                <SlideCard
                  title="Online platby"
                  icon="💳"
                  gradient="from-teal-500/60 via-emerald-500/40 to-sky-400/60"
                  features={['Bezpečné platby kartou', 'PayPal integrácia', 'Faktúry PDF']}
                />
                <SlideCard
                  title="Analýzy & Reporty"
                  icon="📊"
                  gradient="from-emerald-500/60 via-teal-500/50 to-sky-400/60"
                  features={['Mesačné reporty', 'Export do Excel', 'Predikcia tržieb']}
                />
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-emerald-500/10 backdrop-blur-lg p-3 rounded-full hover:bg-emerald-500/20 transition-all shadow-lg border border-emerald-400/30"
            >
              <ChevronLeft className="w-6 h-6 text-emerald-100" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-emerald-500/10 backdrop-blur-lg p-3 rounded-full hover:bg-emerald-500/20 transition-all shadow-lg border border-emerald-400/30"
            >
              <ChevronRight className="w-6 h-6 text-emerald-100" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6 relative z-10">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedSlide === idx ? 'w-8 bg-emerald-400' : 'w-2 bg-emerald-900'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              { icon: '📱', title: 'Mobilná Aplikácia', color: 'from-emerald-500/40 via-sky-500/30 to-teal-400/40' },
              { icon: '👥', title: 'Správa Klientov', color: 'from-emerald-500/40 via-teal-500/30 to-sky-400/40' },
              { icon: '⚙️', title: 'Nastavenia', color: 'from-sky-500/40 via-emerald-500/30 to-teal-500/40' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl p-6 border border-emerald-500/15 bg-slate-900/60 backdrop-blur-lg hover:border-emerald-400/60 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60`}></div>
                <div className="relative">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarScreenRealistic({ viewMode }) {
  return (
    <div className="h-full">
      {/* Calendar Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Kalendár rezervácií</h2>
          <p className="text-sm text-gray-600">📍 Bratislava - Centrum • november 2025</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <button className="px-3 py-1 hover:bg-gray-200 rounded">← Predchádzajúci týždeň</button>
          <span className="font-semibold">3. 11. 2025 - 9. 11. 2025</span>
          <button className="px-3 py-1 hover:bg-gray-200 rounded">Nasledujúci týždeň →</button>
        </div>
      </div>
      <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
        Pohľad: {viewMode === 'day' ? 'Deň' : viewMode === 'month' ? 'Mesiac' : 'Týždeň'}
      </div>

      {/* Filters */}
      <div className="mb-4 flex gap-2">
        <div className="text-sm text-gray-600">🏢 Vybrať pobočku:</div>
        <button className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-sm font-medium">
          🏛️ Bratislava - Centrum
        </button>
        <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">
          🏛️ Košice - Hlavná
        </button>
        <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">
          🏛️ Žilina - Obchodná
        </button>
      </div>

      <div className="mb-3 flex gap-2 items-center text-sm text-gray-600">
        <div>👥 Vybrať zamestnanca (2 dostupných):</div>
        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm font-medium">
          JN Ján Novák
        </button>
        <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">
          MK Mária Kováčová
        </button>
      </div>

      {/* Calendar Grid */}
      {viewMode === 'day' ? (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm p-4 space-y-3">
          {[
            { time: '08:30', title: 'Strihanie', who: 'Ján Kováč', status: 'blocked' },
            { time: '10:00', title: 'Manikúra', who: 'Lucia Petrová', status: 'waiting' },
            { time: '13:00', title: 'Farbenie', who: 'Mária Nováková', status: 'blocked' },
            { time: '15:30', title: 'Masáž', who: 'Peter Halák', status: 'free' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between rounded-lg border px-4 py-3" style={{ borderColor: 'rgba(148,163,184,0.5)' }}>
              <div className="flex items-center gap-3">
                <div className="text-sm font-semibold text-gray-700">{item.time}</div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.who}</div>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                item.status === 'blocked' ? 'bg-red-100 text-red-700' :
                item.status === 'waiting' ? 'bg-amber-100 text-amber-700' :
                'bg-emerald-100 text-emerald-700'
              }`}>
                {item.status === 'blocked' ? 'Obsadené' : item.status === 'waiting' ? 'Čaká' : 'Voľné'}
              </span>
            </div>
          ))}
        </div>
      ) : viewMode === 'month' ? (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50 text-center text-xs font-semibold text-gray-600">
            {['Po','Ut','St','Št','Pi','So','Ne'].map((d) => (
              <div key={d} className="p-2 border-r last:border-r-0 border-gray-200">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {[...Array(35).keys()].map((idx) => {
              const day = idx - 1; // start Monday as 1
              const display = day > 0 && day <= 30 ? day : '';
              return (
                <div
                  key={idx}
                  className="h-20 border-b border-r last:border-r-0 border-gray-200 p-2 text-xs relative"
                  style={{ backgroundColor: display === 14 ? 'rgba(16,185,129,0.08)' : '#fff' }}
                >
                  <div className="font-semibold text-gray-700">{display}</div>
                  {display === 14 && (
                    <div className="absolute inset-x-2 bottom-2 text-[10px] text-emerald-700 font-semibold bg-emerald-100 rounded px-2 py-1">
                      Promo akcia
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Time column and day headers */}
          <div className="grid grid-cols-8 border-b border-gray-200 text-xs md:text-sm">
            <div className="bg-gray-50 border-r border-gray-200 p-3 text-xs font-semibold text-gray-600">
              Čas
            </div>
            {[
              { day: 'PO', date: '3.11' },
              { day: 'UT', date: '4.11' },
              { day: 'ST', date: '5.11' },
              { day: 'ŠT', date: '6.11' },
              { day: 'PI', date: '7.11' },
              { day: 'SO', date: '8.11' },
              { day: 'NE', date: '9.11' }
            ].map((d, idx) => (
              <div
                key={idx}
                className={`text-center p-3 border-r border-gray-200 ${
                  idx === 6 ? 'bg-blue-600 text-white' : 'bg-gray-50'
                }`}
              >
                <div className="text-xs font-semibold">{d.day}</div>
                <div className={`text-base md:text-lg font-bold ${idx === 6 ? 'text-white' : 'text-gray-800'}`}>
                  {d.date}
                </div>
              </div>
            ))}
          </div>

          {/* Time slots */}
          <div className="grid grid-cols-8 text-[11px] md:text-xs">
            {/* Time labels column */}
            <div className="bg-gray-50 border-r border-gray-200">
              {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'].map((time) => (
                <div key={time} className="h-16 md:h-20 border-b border-gray-200 px-2 py-1 text-[11px] md:text-xs text-gray-600 font-medium flex items-start">
                  {time}
                </div>
              ))}
            </div>

            {/* Monday */}
            <div className="border-r border-gray-200 relative min-h-[9rem] md:min-h-[15rem]">
              <CalendarSlot start={0} duration={3} type="free" label="Voľný" time="08:00 - 11:00" />
              <CalendarSlot start={3} duration={1} type="waiting" label="Čaká" time="10:30" name="Farbenie" />
              <CalendarSlot start={4} duration={6} type="free" label="Voľný" time="12:00 - 18:00" />
            </div>

            {/* Tuesday */}
            <div className="border-r border-gray-200 relative min-h-[9rem] md:min-h-[15rem]">
              <CalendarSlot start={0} duration={1} type="free" label="Voľný" time="08:00 - 09:00" />
              <CalendarSlot start={1} duration={1} type="blocked" label="Ján Kováč" time="09:00" name="Strihanie" />
              <CalendarSlot start={2} duration={3} type="free" label="Voľný" time="10:00 - 14:00" />
              <CalendarSlot start={5} duration={1} type="blocked" label="Mária Nováková" time="13:00" name="Farbenie" />
              <CalendarSlot start={7} duration={2} type="free" label="Voľný" time="15:00 - 18:00" />
            </div>

            {/* Wednesday */}
            <div className="border-r border-gray-200 relative min-h-[9rem] md:min-h-[15rem]">
              <CalendarSlot start={0} duration={9} type="free" label="Voľný" time="08:00 - 18:00" />
            </div>

            {/* Thursday */}
            <div className="border-r border-gray-200 relative min-h-[9rem] md:min-h-[15rem]">
              <CalendarSlot start={0} duration={1} type="free" label="Voľný" time="08:00 - 09:00" />
              <CalendarSlot start={1} duration={1} type="blocked" label="Ján Kováč" time="09:00" name="Strihanie" />
              <CalendarSlot start={2} duration={2} type="free" label="Voľný" time="10:00 - 11:00" />
              <CalendarSlot start={4} duration={2} type="free" label="Voľný" time="12:00 - 14:00" />
              <CalendarSlot start={5} duration={1} type="blocked" label="Mária Nováková" time="13:00" name="Farbenie" />
              <CalendarSlot start={7} duration={2} type="free" label="Voľný" time="15:00 - 18:00" />
            </div>

            {/* Friday */}
            <div className="border-r border-gray-200 relative min-h-[9rem] md:min-h-[15rem]">
              <CalendarSlot start={0} duration={9} type="free" label="Voľný" time="08:00 - 18:00" />
            </div>

            {/* Saturday */}
            <div className="border-r border-gray-200 relative min-h-[9rem] md:min-h-[15rem]">
              <CalendarSlot start={0} duration={1} type="free" label="Voľný" time="08:00 - 09:00" />
              <CalendarSlot start={1} duration={1} type="blocked" label="Ján Kováč" time="09:00" name="Strihanie" />
              <CalendarSlot start={2} duration={3} type="free" label="Voľný" time="10:00 - 14:00" />
              <CalendarSlot start={5} duration={1} type="blocked" label="Mária Nováková" time="13:00" name="Farbenie" />
              <CalendarSlot start={7} duration={2} type="free" label="Voľný" time="15:00 - 18:00" />
            </div>

            {/* Sunday */}
            <div className="relative min-h-[9rem] md:min-h-[15rem]">
              <CalendarSlot start={0} duration={3} type="free" label="Voľný" time="08:00 - 11:00" />
              <CalendarSlot start={3} duration={1} type="waiting" label="Čaká" time="11:00" name="Farbenie" />
              <CalendarSlot start={4} duration={5} type="free" label="Voľný" time="12:00 - 18:00" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TabletDevice({
  className = '',
  activeScreen,
  setActiveScreen,
  viewMode,
  setViewMode,
  minHeight = 700,
  maxWidthClass = 'max-w-6xl',
  maxHeightClass = ''
}) {
  return (
    <div className={`${className} ${maxHeightClass}`}>
      <div
        className={`relative mx-auto ${maxWidthClass} transform hover:scale-[1.02] transition-all duration-700`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* iPad Body */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl" style={{ boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 0 100px rgba(16, 185, 129, 0.3)' }}>
          {/* Camera */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-950 rounded-full border-2 border-gray-700 z-20"></div>
          
          {/* Screen Bezel */}
          <div className="bg-black rounded-[2.5rem] p-1 shadow-inner">
            {/* Actual Screen */}
            <div
              className="bg-white rounded-[2.3rem] overflow-hidden"
              style={{ aspectRatio: '4/3', minHeight: `clamp(280px, 75vw, ${minHeight}px)` }}
            >
              {/* Screen Tabs */}
              <div className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 border-b flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {['📅 Kalendár', '📊 Dashboard', '📈 Štatistiky'].map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreen(idx)}
                      className={`py-1.5 px-4 md:py-2 md:px-6 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${
                        activeScreen === idx
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium border transition ${
                      viewMode === 'day'
                        ? 'bg-blue-600 text-white shadow-sm border-blue-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => setViewMode('day')}
                  >
                    Deň
                  </button>
                  <button
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium border transition ${
                      viewMode === 'week'
                        ? 'bg-blue-600 text-white shadow-sm border-blue-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => setViewMode('week')}
                  >
                    Týždeň
                  </button>
                  <button
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium border transition ${
                      viewMode === 'month'
                        ? 'bg-blue-600 text-white shadow-sm border-blue-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => setViewMode('month')}
                  >
                    Mesiac
                  </button>
                </div>
              </div>

              {/* Screen Content */}
              <div className="bg-gray-50 h-full p-3 md:p-6 overflow-y-auto">
                {activeScreen === 0 && <CalendarScreenRealistic viewMode={viewMode} />}
                {activeScreen === 1 && <DashboardScreen />}
                {activeScreen === 2 && <StatsScreen />}
              </div>
            </div>
          </div>

          {/* Home Button (iPad style) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
        </div>

        {/* iPad Shadow/Glow */}
        <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-sky-500/10 rounded-[4rem] blur-3xl -z-10"></div>
      </div>
    </div>
  );
}

function CalendarSlot({ start, duration, type, label, time, name }) {
  const colors = {
    free: 'bg-green-100 border-green-300 text-green-800',
    blocked: 'bg-red-100 border-red-300 text-red-800',
    waiting: 'bg-orange-100 border-orange-300 text-orange-800'
  };

  const topPosition = start * 80; // 80px per hour
  const height = duration * 80;

  return (
    <div
      className={`absolute left-0 right-0 ${colors[type]} border-2 rounded-lg p-2 m-1 cursor-pointer hover:shadow-lg transition-all`}
      style={{ top: `${topPosition}px`, height: `${height - 8}px` }}
    >
      <div className="text-xs font-bold">{label}</div>
      <div className="text-[10px] mt-0.5">{time}</div>
      {name && <div className="text-[10px] mt-1 font-semibold">{name}</div>}
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        <DashStatCard number="124" label="Zákazníci" icon="👥" color="from-blue-500 to-cyan-500" trend="+12%" />
        <DashStatCard number="8" label="Zamestnanci" icon="💼" color="from-teal-500 to-emerald-500" trend="+2" />
        <DashStatCard number="14" label="Služby" icon="✂️" color="from-green-500 to-emerald-500" trend="+3" />
        <DashStatCard number="56" label="Rezervácie" icon="📅" color="from-orange-500 to-red-500" trend="+18%" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Mesačné Tržby</h3>
        <div className="flex items-end justify-between h-48 gap-3">
          <RealisticBar height="65%" value="2400€" label="Jan" />
          <RealisticBar height="78%" value="2800€" label="Feb" />
          <RealisticBar height="90%" value="3200€" label="Mar" />
          <RealisticBar height="82%" value="2900€" label="Apr" />
          <RealisticBar height="88%" value="3100€" label="Máj" />
          <RealisticBar height="100%" value="3420€" label="Jún" />
        </div>
      </div>
    </div>
  );
}

function StatsScreen() {
  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Rozdelenie Služieb</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="relative w-64 h-64 mb-6">
            <svg viewBox="0 0 100 100" className="transform -rotate-90">
              <circle cx="50" cy="50" r="35" fill="none" stroke="#10b981" strokeWidth="18" strokeDasharray="77 220" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#3b82f6" strokeWidth="18" strokeDasharray="55 220" strokeDashoffset="-77" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="18" strokeDasharray="44 220" strokeDashoffset="-132" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#14b8a6" strokeWidth="18" strokeDasharray="33 220" strokeDashoffset="-176" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#64748b" strokeWidth="18" strokeDasharray="11 220" strokeDashoffset="-209" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-5xl font-bold text-gray-800">129</div>
              <div className="text-sm text-gray-600">Celkom</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <RealisticLegend color="bg-green-500" label="Strihanie vlasov" value="35%" count="45" />
          <RealisticLegend color="bg-blue-500" label="Farbenie" value="25%" count="28" />
          <RealisticLegend color="bg-amber-500" label="Masáž" value="20%" count="32" />
          <RealisticLegend color="bg-teal-500" label="Manikúra" value="15%" count="18" />
          <RealisticLegend color="bg-slate-500" label="Ostatné" value="5%" count="6" />
        </div>
      </div>
    </div>
  );
}

function DashStatCard({ number, label, icon, color, trend }) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-xl p-5 shadow-lg hover:scale-105 transition-transform`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-white mb-1">{number}</div>
      <div className="text-sm text-white/90 mb-2">{label}</div>
      <div className="text-xs font-semibold text-white/80">↑ {trend}</div>
    </div>
  );
}

function RealisticBar({ height, value, label }) {
  return (
    <div className="flex-1 flex flex-col items-center group">
      <div className="relative w-full">
        <div
          className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-md transition-all duration-300 hover:from-blue-500 hover:to-blue-300"
          style={{ height }}
        >
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 font-bold text-gray-800 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {value}
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-600 mt-2 font-medium">{label}</div>
    </div>
  );
}

function RealisticLegend({ color, label, value, count }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white border border-gray-200 hover:border-blue-300 transition-all cursor-pointer">
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 ${color} rounded shadow-sm`}></div>
        <div>
          <div className="text-sm font-medium text-gray-800">{label}</div>
          <div className="text-xs text-gray-500">{count} rezervácií</div>
        </div>
      </div>
      <div className="text-lg font-bold text-gray-800">{value}</div>
    </div>
  );
}

function SlideCard({ title, icon, gradient, features }) {
  return (
    <div className="min-w-full px-4">
      <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 shadow-2xl border border-white/20`}>
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
        <div className="space-y-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-white/90">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
