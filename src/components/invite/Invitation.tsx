import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { wedding } from "@/config/wedding";
import { Button } from "@/components/ui/button";
import { MapPin, CalendarDays, MessageCircle, Music, Sun, Heart, Flame, Flower2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { whatsappWishesUrl } from "@/lib/whatsapp-wishes";
import { Arch, FloatingDecor, Jharokha, Lotus, Mandala, Placeholder, SacredSymbols, ThemeToggle, Toran } from "./Ornaments";

const fmt = (d: string) => new Date(d).toISOString().replace(/[-:]|\.\d{3}/g, "");
export const calendarUrl = () => {
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: `Wedding of ${wedding.bride.short} & ${wedding.groom.short}`,
    dates: `${fmt(wedding.dateISO)}/${fmt(wedding.endISO)}`,
    details: wedding.message,
    location: `${wedding.venue.name}, ${wedding.venue.address}`,
  });
  return `https://calendar.google.com/calendar/render?${p}`;
};
export const mapsUrl = () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(wedding.venue.mapsQuery)}`;

function VenueActions() {
  return <div className="venue-actions mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
    <Button asChild className="btn-gold"><a href={mapsUrl()} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden />Open in Google Maps</a></Button>
    <Button asChild variant="outline" className="btn-outline"><a href={calendarUrl()} target="_blank" rel="noopener noreferrer"><CalendarDays aria-hidden />Add to Google Calendar</a></Button>
  </div>;
}

const eventIcons = { flower: Flower2, music: Music, sun: Sun, heart: Heart, flame: Flame };

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-10 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">{title}</h2>
      <Lotus className="mx-auto mt-4 w-28 text-gold" />
      <Jharokha className="mx-auto mt-3 w-40" />
      <div className="divider-gold" />
    </Reveal>
  );
}

function Sparkles() {
  const dots = useMemo(() => Array.from({ length: 22 }, (_, i) => ({ i, l: (i * 37) % 100, t: (i * 53) % 100, d: (i % 7) * 0.45 })), []);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {dots.map((p) => <span key={p.i} className="sparkle" style={{ left: `${p.l}%`, top: `${p.t}%`, animationDelay: `${p.d}s` }} />)}
    </div>
  );
}

function Petals() {
  const petals = useMemo(() => Array.from({ length: 36 }, (_, i) => ({
    left: Math.random() * 100, delay: Math.random() * 1.5, dur: 4 + Math.random() * 3, size: 8 + Math.random() * 10, rot: Math.random() * 360, i,
  })), []);
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <span key={p.i} className="petal" style={{ left: `${p.left}%`, width: p.size, height: p.size * 1.3, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`, rotate: `${p.rot}deg` }} />
      ))}
    </div>
  );
}

function Cover({ guest, onOpen }: { guest?: string | undefined; onOpen: () => void }) {
  const reduce = useReducedMotion();
  return (
    <motion.section key="cover" className="cover fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-6"
      exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.2, delay: reduce ? 0 : 1.1 }}>
      <motion.div className="absolute inset-y-0 left-0 w-1/2 door-left" exit={reduce ? {} : { rotateY: -105 }} transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        <Arch className="gate-arch text-gold" /><Mandala className="gate-medallion text-gold" /><span className="gate-handle" />
      </motion.div>
      <motion.div className="absolute inset-y-0 right-0 w-1/2 door-right" exit={reduce ? {} : { rotateY: 105 }} transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        <Arch className="gate-arch text-gold" /><Mandala className="gate-medallion text-gold" /><span className="gate-handle" />
      </motion.div>
      <Toran className="absolute inset-x-0 top-0 h-20 w-full" />
      <Mandala className="absolute left-1/2 top-1/2 -ml-[260px] -mt-[260px] h-[520px] w-[520px] text-gold opacity-20 spin-slow" />
      <FloatingDecor />
      <motion.div className="cover-frame relative w-full" exit={{ opacity: 0, y: reduce ? 0 : -12 }} transition={{ duration: reduce ? 0 : 0.25 }}>
        <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="cover-content absolute flex flex-col items-center justify-between text-center">
          <SacredSymbols />
          <p className="cover-eyebrow">The Wedding Celebration</p>
          <h1 className="cover-names font-display text-foreground">
            {wedding.bride.short}<span className="block font-script text-gold">&amp;</span>{wedding.groom.short}
          </h1>
          <Lotus className="w-20 shrink-0 text-gold" />
          <p className="font-display text-base text-foreground/80">{wedding.coverDateLabel}</p>
          <p className="cover-hashtag wedding-hashtag">{wedding.hashtag}</p>
          <div className="w-full text-sm text-muted-foreground">
            <p className="text-xs uppercase">Dear</p>
            <p className="cover-guest font-display text-xl text-foreground">{guest || "Our Beloved Guest"}</p>
          </div>
          <Button onClick={onOpen} className="btn-gold btn-pulse cover-open">Open Invitation</Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function MusicControl({ playing, toggle }: { playing: boolean; toggle: () => void }) {
  const has = !!wedding.musicUrl;
  return (
    <Button variant="outline" size="icon" onClick={toggle} disabled={!has} aria-pressed={playing}
      aria-label={has ? (playing ? "Pause music" : "Play music") : "Background music not configured"}
      title={has ? undefined : "Add a music file in the wedding config"}
      className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-card/90 text-gold shadow-soft backdrop-blur disabled:opacity-50">
      <span className={playing ? "animate-spin [animation-duration:4s]" : ""}>{playing ? "❚❚" : "♫"}</span>
    </Button>
  );
}

function useCountdown(target: string) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const diff = Math.max(0, new Date(target).getTime() - (now ?? 0));
  if (now === null) return null;
  return { d: Math.floor(diff / 864e5), h: Math.floor(diff / 36e5) % 24, m: Math.floor(diff / 6e4) % 60, s: Math.floor(diff / 1e3) % 60 };
}
function Countdown() {
  const c = useCountdown(wedding.dateISO);
  const items: [string, number | undefined][] = [["Days", c?.d], ["Hours", c?.h], ["Minutes", c?.m], ["Seconds", c?.s]];
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4" role="timer" aria-live="off">
      {items.map(([l, v]) => (
        <motion.div key={l} whileHover={{ y: -4 }} className="card-soft card-glow py-4 text-center">
          <div className="font-display text-3xl tabular-nums text-foreground sm:text-5xl">{v === undefined ? "--" : String(v).padStart(2, "0")}</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">{l}</div>
        </motion.div>
      ))}
    </div>
  );
}

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const items = wedding.gallery;
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => o === null ? null : (o + 1) % items.length);
      if (e.key === "ArrowLeft") setOpen((o) => o === null ? null : (o - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [open, items.length]);
  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((src, i) => (
          <Reveal key={i} delay={(i % 3) * 0.08} className={i % 3 === 0 ? "row-span-2" : ""}>
            <Button variant="ghost" onClick={() => setOpen(i)} aria-label={`View photo ${i + 1}`}
              className={`group block h-auto w-full overflow-hidden rounded-lg p-0 ${i % 3 === 0 ? "aspect-[3/5]" : "aspect-square"}`}>
              <div className="h-full w-full transition-transform duration-700 group-hover:scale-105"><Placeholder src={src} label={`Gallery photo ${i + 1}`} /></div>
            </Button>
          </Reveal>
        ))}
      </div>
      {open !== null && createPortal(
        <AnimatePresence>
          <motion.div role="dialog" aria-modal aria-label="Photo viewer" className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <motion.div key={open} initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="photo-viewer w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <Placeholder src={items[open]} label={`Gallery photo ${open + 1}`} className="!object-contain" />
            </motion.div>
            <Button variant="outline" size="icon" autoFocus onClick={() => setOpen(null)} className="absolute right-4 top-4" aria-label="Close"><X /></Button>
            <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + items.length) % items.length); }} className="absolute left-3" aria-label="Previous photo"><ChevronLeft /></Button>
            <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % items.length); }} className="absolute right-3" aria-label="Next photo"><ChevronRight /></Button>
          </motion.div>
        </AnimatePresence>, document.body
      )}
    </>
  );
}

function Wishes({ guest }: { guest?: string | undefined }) {
  const [name, setName] = useState(guest ?? "");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<{ kind: "err" | "info"; text: string } | null>(null);
  const [readyUrl, setReadyUrl] = useState<string | null>(null);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const n = name.trim(), m = msg.trim();
    if (!n || n.length > 60) return setStatus({ kind: "err", text: "Please enter your name (up to 60 characters)." });
    if (!m || m.length > 500) return setStatus({ kind: "err", text: "Please write a message (up to 500 characters)." });
    const url = whatsappWishesUrl(n, m);
    setReadyUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus({ kind: "info", text: "Your wishes are ready in WhatsApp, but haven't been sent yet." });
  };
  return (
    <form onSubmit={submit} className="card-soft space-y-4 p-6 text-left" noValidate>
      <label className="block"><span className="text-sm text-muted-foreground">Your name</span>
        <input value={name} onChange={(e) => { setName(e.target.value); setReadyUrl(null); setStatus(null); }} maxLength={60} className="field mt-1" autoComplete="name" required /></label>
      <label className="block"><span className="text-sm text-muted-foreground">Your wishes</span>
        <textarea value={msg} onChange={(e) => { setMsg(e.target.value); setReadyUrl(null); setStatus(null); }} maxLength={500} rows={4} className="field mt-1 resize-none" required /></label>
      <Button type="submit" className="btn-gold w-full gap-2 px-3 tracking-normal"><MessageCircle aria-hidden />Send Wishes on WhatsApp</Button>
      {status && <p role="status" className={`text-sm ${status.kind === "err" ? "text-destructive" : "text-muted-foreground"}`}>{status.text}</p>}
      {readyUrl && <Button asChild variant="link" className="h-auto whitespace-normal px-0 text-gold"><a href={readyUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp for {wedding.bride.short}</a></Button>}
    </form>
  );
}

export function Invitation({ guest }: { guest?: string | undefined }) {
  const [opened, setOpened] = useState(false);
  const [petals, setPetals] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => { document.body.style.overflow = opened ? "" : "hidden"; return () => { document.body.style.overflow = ""; }; }, [opened]);

  const toggle = () => {
    if (!wedding.musicUrl) return;
    if (!audio.current) { audio.current = new Audio(wedding.musicUrl); audio.current.loop = true; }
    if (playing) { audio.current.pause(); setPlaying(false); }
    else audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };
  const open = () => {
    setOpened(true); window.scrollTo(0, 0);
    if (!reduce) { setPetals(true); setTimeout(() => setPetals(false), 7000); }
    if (wedding.musicUrl) toggle();
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence>{!opened && <Cover guest={guest} onOpen={open} />}</AnimatePresence>
      {petals && <Petals />}
      {opened && <MusicControl playing={playing} toggle={toggle} />}
      {opened && <FloatingDecor />}
      {opened && <Sparkles />}
      <ThemeToggle />

      <main aria-hidden={!opened} inert={!opened} className="relative z-10">
        <Toran className="h-16 w-full" />
        {/* Welcome */}
        <section className="welcome-stage relative text-center">
          <img src={wedding.couplePhoto} alt={`${wedding.bride.short} and ${wedding.groom.short}`} className="welcome-backdrop" fetchPriority="high" />
          <div className="welcome-story relative">
          <SacredSymbols className="mx-auto mb-5" />
          <Reveal className="welcome-eyebrow"><p className="eyebrow">Together with their families</p></Reveal>
          <Reveal delay={0.1} className="welcome-names">
            <div className="couple-signature mx-auto mt-7">
              <h2 className="opened-names flex flex-wrap items-center justify-center">
                <span className="opened-person">
                <span className="signature-name font-couple">{wedding.bride.short}</span>
                <span className="signature-family font-display">{wedding.bride.name.slice(wedding.bride.short.length).trim()}</span>
                </span>
                <span className="signature-amp font-script text-gold">&amp;</span>
                <span className="opened-person">
                <span className="signature-name font-couple">{wedding.groom.short}</span>
                <span className="signature-family font-display">{wedding.groom.name.slice(wedding.groom.short.length).trim()}</span>
                </span>
              </h2>
              <Lotus className="mx-auto mt-6 w-28 text-gold" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="welcome-msg"><p className="mx-auto mt-10 max-w-md leading-relaxed text-muted-foreground">{wedding.message}</p>
            <p className="mt-4 font-display text-xl italic text-gold">{wedding.style}</p>
            <p className="wedding-hashtag mt-6">{wedding.hashtag}</p></Reveal>
          </div>
        </section>

        {/* Couple */}
        <section className="section bg-band">
          <Heading eyebrow="The Couple" title="Bride & Groom" />
          <div className="grid gap-6 sm:grid-cols-2">
            {[["The Bride", wedding.bride], ["The Groom", wedding.groom]].map(([role, p], i) => {
              const person = p as typeof wedding.bride;
              return (
                <Reveal key={role as string} delay={i * 0.12} className="card-soft p-5 text-center">
                  <div className="arch-frame mx-auto aspect-[3/4] max-w-[240px]"><Placeholder src={person.photo} label={`${person.short}'s portrait`} /></div>
                  <p className="eyebrow mt-6">{role as string}</p>
                  <h3 className="mt-2 font-display text-3xl">{person.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{person.family}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Countdown */}
        <section className="section">
          <Heading eyebrow="Counting down to" title="Our Special Day" />
          <Reveal><Countdown /><VenueActions /></Reveal>
        </section>

        {/* Details */}
        <section className="section bg-band">
          <Heading eyebrow="Let the celebrations begin" title="Wedding Events" />
          <div className="event-grid grid gap-5 sm:grid-cols-2">
            {wedding.events.map((event, i) => (
              <Reveal key={event.title} delay={i * 0.08} className={`event-card event-${event.icon} p-7 text-center`}>
                <span className="event-number" aria-hidden>0{i + 1}</span>
                {(() => { const Icon = eventIcons[event.icon as keyof typeof eventIcons] ?? Heart; return <Icon className="mx-auto mb-5 h-8 w-8 text-gold" aria-hidden />; })()}
                <h3 className="font-display text-4xl">{event.title}</h3>
                <p className="mt-2 text-sm uppercase text-muted-foreground">{event.names.join(" & ")}</p>
                <Lotus className="mx-auto my-5 w-24 text-gold" />
                <p className="font-display text-2xl">{event.time}</p>
                <p className="mt-2 text-sm text-muted-foreground">{event.meal}</p>
                <time dateTime={event.startISO} className="mt-7 block border-t border-gold/25 pt-5 font-display text-lg">{event.day} {event.month} {new Date(`${event.dateISO}T00:00:00Z`).getUTCFullYear()} <span className="block text-sm text-muted-foreground">{event.weekday}</span></time>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <MapPin className="mx-auto h-5 w-5 text-gold" aria-hidden />
            <p className="eyebrow mt-3">All celebrations at</p>
            <h3 className="mt-3 font-display text-3xl">{wedding.venue.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{wedding.venue.address}</p>
            <VenueActions />
          </Reveal>
        </section>

        <section className="section"><Heading eyebrow="Moments" title="Our Gallery" /><Gallery /></section>

        <section className="section bg-band"><Heading eyebrow="Blessings" title="Guest Wishes" /><Reveal><Wishes guest={guest} /></Reveal></section>

        {/* Closing */}
        <section className="section text-center">
          <Reveal><p className="mx-auto max-w-md font-display text-3xl leading-snug sm:text-4xl">Your presence will make our celebration more special.</p></Reveal>
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-sm"><div className="arch-frame aspect-[3/4]"><Placeholder src={wedding.closingPhoto} label="Final couple photograph" /></div></Reveal>
          <Reveal delay={0.1}><p className="mt-10 text-muted-foreground">With love,</p><p className="mt-1 font-script text-4xl text-gold">{wedding.hostFamily}</p></Reveal>
        </section>

        <footer className="relative z-10 border-t border-border py-8 text-center text-sm text-muted-foreground">
          Made with <span className="heartbeat inline-block text-blush-deep" aria-label="love">♥</span> by{" "}
          <a href={wedding.credit.url} target="_blank" rel="noopener noreferrer" className="text-gold underline-offset-4 hover:underline">{wedding.credit.name}</a>
        </footer>
      </main>
    </div>
  );
}
