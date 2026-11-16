import { useEffect, useState } from "react";
export function Arch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 420" className={className} fill="none" aria-hidden>
      <path d="M20 410V170C20 90 80 30 150 14C220 30 280 90 280 170V410" stroke="currentColor" strokeWidth="1.5" />
      <path d="M34 410V176C34 102 88 48 150 32C212 48 266 102 266 176V410" stroke="currentColor" strokeWidth="0.75" opacity=".6" />
      <circle cx="150" cy="10" r="4" fill="currentColor" />
      {[60, 110, 190, 240].map((x) => <circle key={x} cx={x} cy={x < 150 ? 70 - (150 - x) / 6 : 70 - (x - 150) / 6} r="1.6" fill="currentColor" opacity=".7" />)}
    </svg>
  );
}
export function Lotus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <path d="M0 30H40M80 30H120" opacity=".6" />
      <path d="M60 6C52 16 52 26 60 34C68 26 68 16 60 6Z" />
      <path d="M60 34C50 30 44 22 44 14C52 16 58 24 60 34ZM60 34C70 30 76 22 76 14C68 16 62 24 60 34Z" />
    </svg>
  );
}
export function Placeholder({ label, src, className = "" }: { label: string; src?: string | undefined; className?: string }) {
  if (src) return <img src={src} alt={label} loading="lazy" decoding="async" className={`h-full w-full object-cover ${className}`} />;
  return (
    <div role="img" aria-label={`${label} (placeholder)`} className={`placeholder-photo flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center ${className}`}>
      <Lotus className="w-14 text-gold" />
      <span className="font-display text-lg italic text-foreground/70">{label}</span>
      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Photo placeholder</span>
    </div>
  );
}

/** Rajasthani toran — hanging marigold & mango-leaf garland */
export function Toran({ className = "" }: { className?: string }) {
  const n = 13;
  return (
    <svg viewBox="0 0 390 70" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M0 6Q195 30 390 6" stroke="var(--gold)" strokeWidth="1.5" fill="none" />
      {Array.from({ length: n }, (_, i) => {
        const x = 15 + i * (360 / (n - 1));
        const y = 6 + 24 * (1 - Math.pow((x - 195) / 195, 2)) * 0.8;
        return (
          <g key={i} className="toran-swing" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${i * 0.15}s` }}>
            <line x1={x} y1={y} x2={x} y2={y + 22} stroke="var(--gold)" strokeWidth=".7" />
            <circle cx={x} cy={y + 8} r="4" fill="var(--marigold)" />
            <circle cx={x} cy={y + 16} r="3.2" fill="var(--blush-deep)" />
            {i % 2 === 0 ? <path d={`M${x} ${y + 22}q-6 10 0 20q6-10 0-20z`} fill="var(--leaf)" /> : <circle cx={x} cy={y + 25} r="2" fill="var(--gold)" />}
          </g>
        );
      })}
    </svg>
  );
}

/** Slowly rotating mandala */
export function Mandala({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-100 -100 200 200" className={`mandala-spin ${className}`} fill="none" stroke="currentColor" aria-hidden>
      {[90, 70, 48, 26].map((r) => <circle key={r} r={r} strokeWidth=".6" opacity=".7" />)}
      {Array.from({ length: 16 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 22.5})`}>
          <path d="M0-26C8-40 8-58 0-70C-8-58-8-40 0-26Z" strokeWidth=".7" />
          <path d="M0-72C6-80 6-86 0-90C-6-86-6-80 0-72Z" strokeWidth=".6" />
          <circle cy="-48" r="1.5" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

/** Jharokha-style scalloped divider */
export function Jharokha({ className = "" }: { className?: string }) {
  return <div className={`jharokha-band ${className}`} aria-hidden />;
}

const FLOAT = Array.from({ length: 18 }, (_, i) => ({
  i, left: (i * 53) % 100, size: 12 + ((i * 7) % 14), dur: 14 + ((i * 5) % 12), delay: -((i * 3.3) % 20), kind: i % 3,
}));
/** Glowing hearts & flowers floating upward */
export function FloatingDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {FLOAT.map((f) => (
        <span key={f.i} className="float-up" style={{ left: `${f.left}%`, width: f.size, height: f.size, animationDuration: `${f.dur}s`, animationDelay: `${f.delay}s` }}>
          {f.kind === 0 ? (
            <svg viewBox="0 0 24 24" className="glow-heart h-full w-full"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" fill="currentColor" /></svg>
          ) : (
            <svg viewBox="-12 -12 24 24" className={`h-full w-full ${f.kind === 1 ? "glow-flower" : "glow-marigold"}`}>
              {Array.from({ length: 5 }, (_, k) => <ellipse key={k} rx="3.6" ry="7" cy="-5" transform={`rotate(${k * 72})`} fill="currentColor" opacity=".85" />)}
              <circle r="2.6" fill="var(--gold-light)" />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useStateTheme();
  return (
    <button onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={dark}
      className="fixed right-4 top-4 z-[55] flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-card/85 text-gold shadow-soft backdrop-blur transition-transform hover:rotate-12">
      {dark ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="4.5" />{Array.from({ length: 8 }, (_, i) => <line key={i} x1="12" y1="2" x2="12" y2="4.5" transform={`rotate(${i * 45} 12 12)`} />)}</svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" /></svg>
      )}
    </button>
  );
}
function useStateTheme(): [boolean, (v: boolean) => void] {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(localStorage.getItem("theme") === "dark"); }, []);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  return [dark, (v) => { setDark(v); localStorage.setItem("theme", v ? "dark" : "light"); }];
}
