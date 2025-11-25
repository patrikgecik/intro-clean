import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { id: "fb", icon: <Facebook className="w-5 h-5" />, url: "#", label: "Facebook" },
    { id: "ig", icon: <Instagram className="w-5 h-5" />, url: "#", label: "Instagram" },
    { id: "tw", icon: <Twitter className="w-5 h-5" />, url: "#", label: "Twitter" },
    { id: "ln", icon: <Linkedin className="w-5 h-5" />, url: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 space-y-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:items-start md:justify-between">
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                T
              </div>
              <div>
                <p className="text-lg font-bold text-white">Terminar</p>
                <p className="text-sm text-gray-400">Moderný rezervačný systém pre salóny a služby.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <FeaturePill text="Vlastná konfigurácia poukážok" />
              <FeaturePill text="Okamžité doručenie e‑poukazu" />
              <FeaturePill text="Automatické pripomienky" />
              <FeaturePill text="Online platby a faktúry" />
            </div>
          </div>

          <div className="flex gap-12 text-sm">
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Produkt</h4>
              <a className="block text-gray-400 hover:text-white transition-colors" href="#features">Funkcie</a>
              <a className="block text-gray-400 hover:text-white transition-colors" href="#pricing">Cenník</a>
              <a className="block text-gray-400 hover:text-white transition-colors" href="#faq">FAQ</a>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Právne</h4>
              <a className="block text-gray-400 hover:text-white transition-colors" href="#">Ochrana súkromia</a>
              <a className="block text-gray-400 hover:text-white transition-colors" href="#">Podmienky používania</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Sociálne siete</h4>
            <ul className="flex gap-3">
              {socialLinks.map(({ id, url, icon, label }) => (
                <li key={id}>
                  <a href={url} className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-white">
                    <span className="sr-only">{label}</span>
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Terminar. Všetky práva vyhradené.</p>
          <p className="text-gray-400">Vyrobené pre salóny, štúdiá a služby, ktoré chcú rásť.</p>
        </div>
      </div>
    </footer>
  );
};

function FeaturePill({ text }) {
  return (
    <div className="px-3 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 text-emerald-100 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
      <span>{text}</span>
    </div>
  );
}

export default Footer;
