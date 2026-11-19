import { n as __toESM } from "../_runtime.mjs";
import { n as motion, r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as wedding, t as Route } from "./routes-DzDiBHxu.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as MapPin, c as ChevronRight, i as MessageCircle, l as ChevronLeft, n as Sun, o as Heart, r as Music, s as Flame, t as X, u as CalendarDays } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DpOhKtIn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function whatsappWishesUrl(name, message) {
	const text = `Dear ${wedding.bride.short},\n\n${message.trim()}\n\nWith love,\n${name.trim()}`;
	return `https://wa.me/${wedding.wishesWhatsApp}?text=${encodeURIComponent(text)}`;
}
function SacredSymbols({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `sacred-symbols ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 64 64",
				role: "img",
				"aria-label": "Ganesh ji",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.8",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23 15l9-9 9 9M22 17q10-5 20 0M24 22q-17-9-17 7q0 14 16 15M40 22q17-9 17 7q0 14-16 15M25 20q-7 10-1 20M39 20q7 10 1 20M29 31q3-4 6 0M32 32v12q0 11 10 8q5-2 1-7M23 47q-8 4-9 10h36q-1-6-9-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M26 29h1M37 29h1M30 20h4M18 57h28" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "h-8 w-px bg-gold/30",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 64 76",
				role: "img",
				"aria-label": "Jain Dharma — Ahimsa",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 60q-3-8-3-15V29q0-5 5-5q4 0 4 5v9V12q0-6 5-6q4 0 4 6v22V7q0-5 5-5t5 5v27V12q0-6 5-6t5 6v25q4-10 9-7q4 3 0 10l-9 20z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "32",
						cy: "47",
						r: "9"
					}),
					Array.from({ length: 24 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M32 39v3",
						transform: `rotate(${i * 15} 32 47)`,
						strokeWidth: ".7"
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "32",
						cy: "47",
						r: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "32",
						y: "72",
						textAnchor: "middle",
						stroke: "none",
						fill: "currentColor",
						fontSize: "7",
						children: "AHIMSA"
					})
				]
			})
		]
	});
}
function Lotus({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 40",
		className,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 30H40M80 30H120",
				opacity: ".6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60 6C52 16 52 26 60 34C68 26 68 16 60 6Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60 34C50 30 44 22 44 14C52 16 58 24 60 34ZM60 34C70 30 76 22 76 14C68 16 62 24 60 34Z" })
		]
	});
}
function Placeholder({ label, src, className = "" }) {
	if (src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: label,
		loading: "lazy",
		decoding: "async",
		className: `h-full w-full object-cover ${className}`
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "img",
		"aria-label": `${label} (placeholder)`,
		className: `placeholder-photo flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lotus, { className: "w-14 text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg italic text-foreground/70",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
				children: "Photo placeholder"
			})
		]
	});
}
/** Rajasthani toran — hanging marigold & mango-leaf garland */
function Toran({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 390 70",
		preserveAspectRatio: "none",
		className,
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M0 6Q195 30 390 6",
			stroke: "var(--gold)",
			strokeWidth: "1.5",
			fill: "none"
		}), Array.from({ length: 13 }, (_, i) => {
			const x = 15 + i * (360 / 12);
			const y = 6 + 24 * (1 - Math.pow((x - 195) / 195, 2)) * .8;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "toran-swing",
				style: {
					transformOrigin: `${x}px ${y}px`,
					animationDelay: `${i * .15}s`
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: x,
						y1: y,
						x2: x,
						y2: y + 22,
						stroke: "var(--gold)",
						strokeWidth: ".7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: x,
						cy: y + 8,
						r: "4",
						fill: "var(--marigold)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: x,
						cy: y + 16,
						r: "3.2",
						fill: "var(--blush-deep)"
					}),
					i % 2 === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${x} ${y + 22}q-6 10 0 20q6-10 0-20z`,
						fill: "var(--leaf)"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: x,
						cy: y + 25,
						r: "2",
						fill: "var(--gold)"
					})
				]
			}, i);
		})]
	});
}
/** Slowly rotating mandala */
function Mandala({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "-100 -100 200 200",
		className: `mandala-spin ${className}`,
		fill: "none",
		stroke: "currentColor",
		"aria-hidden": true,
		children: [[
			90,
			70,
			48,
			26
		].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			r,
			strokeWidth: ".6",
			opacity: ".7"
		}, r)), Array.from({ length: 16 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			transform: `rotate(${i * 22.5})`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0-26C8-40 8-58 0-70C-8-58-8-40 0-26Z",
					strokeWidth: ".7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0-72C6-80 6-86 0-90C-6-86-6-80 0-72Z",
					strokeWidth: ".6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cy: "-48",
					r: "1.5",
					fill: "currentColor"
				})
			]
		}, i))]
	});
}
/** Jharokha-style scalloped divider */
function Jharokha({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `jharokha-band ${className}`,
		"aria-hidden": true
	});
}
var FLOAT = Array.from({ length: 18 }, (_, i) => ({
	i,
	left: i * 53 % 100,
	size: 12 + i * 7 % 14,
	dur: 14 + i * 5 % 12,
	delay: -(i * 3.3 % 20),
	kind: i % 3
}));
/** Glowing hearts & flowers floating upward */
function FloatingDecor() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		"aria-hidden": true,
		children: FLOAT.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "float-up",
			style: {
				left: `${f.left}%`,
				width: f.size,
				height: f.size,
				animationDuration: `${f.dur}s`,
				animationDelay: `${f.delay}s`
			},
			children: f.kind === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "glow-heart h-full w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z",
					fill: "currentColor"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "-12 -12 24 24",
				className: `h-full w-full ${f.kind === 1 ? "glow-flower" : "glow-marigold"}`,
				children: [Array.from({ length: 5 }, (_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					rx: "3.6",
					ry: "7",
					cy: "-5",
					transform: `rotate(${k * 72})`,
					fill: "currentColor",
					opacity: ".85"
				}, k)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					r: "2.6",
					fill: "var(--gold-light)"
				})]
			})
		}, f.i))
	});
}
function ThemeToggle() {
	const [dark, setDark] = useStateTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "outline",
		size: "icon",
		onClick: () => setDark(!dark),
		"aria-label": dark ? "Switch to light theme" : "Switch to dark theme",
		"aria-pressed": dark,
		className: "fixed right-4 top-4 z-[55] flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-card/85 text-gold shadow-soft backdrop-blur transition-transform hover:rotate-12",
		children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: "h-5 w-5",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4.5"
			}), Array.from({ length: 8 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "12",
				y1: "2",
				x2: "12",
				y2: "4.5",
				transform: `rotate(${i * 45} 12 12)`
			}, i))]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "h-5 w-5",
			fill: "currentColor",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" })
		})
	});
}
function useStateTheme() {
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setDark(localStorage.getItem("theme") === "dark");
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark]);
	return [dark, (v) => {
		setDark(v);
		localStorage.setItem("theme", v ? "dark" : "light");
	}];
}
var fmt = (d) => new Date(d).toISOString().replace(/[-:]|\.\d{3}/g, "");
var calendarUrl = () => {
	return `https://calendar.google.com/calendar/render?${new URLSearchParams({
		action: "TEMPLATE",
		text: `Wedding of ${wedding.bride.short} & ${wedding.groom.short}`,
		dates: `${fmt(wedding.dateISO)}/${fmt(wedding.endISO)}`,
		details: wedding.message,
		location: `${wedding.venue.name}, ${wedding.venue.address}`
	})}`;
};
var mapsUrl = () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(wedding.venue.mapsQuery)}`;
function Reveal({ children, className = "", delay = 0 }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduce ? false : {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Heading({ eyebrow, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mb-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl text-foreground sm:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lotus, { className: "mx-auto mt-4 w-28 text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Jharokha, { className: "mx-auto mt-3 w-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "divider-gold" })
		]
	});
}
function Sparkles() {
	const dots = (0, import_react.useMemo)(() => Array.from({ length: 22 }, (_, i) => ({
		i,
		l: i * 37 % 100,
		t: i * 53 % 100,
		d: i % 7 * .45
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		"aria-hidden": true,
		children: dots.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sparkle",
			style: {
				left: `${p.l}%`,
				top: `${p.t}%`,
				animationDelay: `${p.d}s`
			}
		}, p.i))
	});
}
function Petals() {
	const petals = (0, import_react.useMemo)(() => Array.from({ length: 36 }, (_, i) => ({
		left: Math.random() * 100,
		delay: Math.random() * 1.5,
		dur: 4 + Math.random() * 3,
		size: 8 + Math.random() * 10,
		rot: Math.random() * 360,
		i
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-40 overflow-hidden",
		"aria-hidden": true,
		children: petals.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "petal",
			style: {
				left: `${p.left}%`,
				width: p.size,
				height: p.size * 1.3,
				animationDelay: `${p.delay}s`,
				animationDuration: `${p.dur}s`,
				rotate: `${p.rot}deg`
			}
		}, p.i))
	});
}
function Cover({ guest, onOpen }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		className: "cover fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-6",
		exit: reduce ? { opacity: 0 } : {
			opacity: 0,
			scale: 1.03
		},
		transition: { duration: reduce ? 0 : .8 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute inset-y-0 left-0 w-1/2 door-left",
				exit: reduce ? {} : { x: "-100%" },
				transition: { duration: .8 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute inset-y-0 right-0 w-1/2 door-right",
				exit: reduce ? {} : { x: "100%" },
				transition: { duration: .8 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toran, { className: "absolute inset-x-0 top-0 h-20 w-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mandala, { className: "absolute left-1/2 top-1/2 -ml-[260px] -mt-[260px] h-[520px] w-[520px] text-gold opacity-20 spin-slow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDecor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cover-frame relative w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: reduce ? false : {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .7 },
					className: "cover-content absolute flex flex-col items-center justify-between text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SacredSymbols, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "cover-eyebrow",
							children: "The Wedding Celebration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "cover-names font-display text-foreground",
							children: [
								wedding.bride.short,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-script text-gold",
									children: "&"
								}),
								wedding.groom.short
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lotus, { className: "w-20 shrink-0 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base text-foreground/80",
							children: wedding.coverDateLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "cover-hashtag text-gold",
							children: wedding.hashtag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase",
								children: "Dear"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "cover-guest font-display text-xl text-foreground",
								children: guest || "Our Beloved Guest"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: onOpen,
							className: "btn-gold btn-pulse cover-open",
							children: "Open Invitation"
						})
					]
				})
			})
		]
	}, "cover");
}
function MusicControl({ playing, toggle }) {
	const has = !!wedding.musicUrl;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "outline",
		size: "icon",
		onClick: toggle,
		disabled: !has,
		"aria-pressed": playing,
		"aria-label": has ? playing ? "Pause music" : "Play music" : "Background music not configured",
		title: has ? void 0 : "Add a music file in the wedding config",
		className: "fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-card/90 text-gold shadow-soft backdrop-blur disabled:opacity-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: playing ? "animate-spin [animation-duration:4s]" : "",
			children: playing ? "❚❚" : "♫"
		})
	});
}
function useCountdown(target) {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(Date.now());
		const t = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(t);
	}, []);
	const diff = Math.max(0, new Date(target).getTime() - (now ?? 0));
	if (now === null) return null;
	return {
		d: Math.floor(diff / 864e5),
		h: Math.floor(diff / 36e5) % 24,
		m: Math.floor(diff / 6e4) % 60,
		s: Math.floor(diff / 1e3) % 60
	};
}
function Countdown() {
	const c = useCountdown(wedding.dateISO);
	const items = [
		["Days", c?.d],
		["Hours", c?.h],
		["Minutes", c?.m],
		["Seconds", c?.s]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-2 sm:gap-4",
		role: "timer",
		"aria-live": "off",
		children: items.map(([l, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			whileHover: { y: -4 },
			className: "card-soft card-glow py-4 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-3xl tabular-nums text-foreground sm:text-5xl",
				children: v === void 0 ? "--" : String(v).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs",
				children: l
			})]
		}, l))
	});
}
function Gallery() {
	const [open, setOpen] = (0, import_react.useState)(null);
	const items = wedding.gallery;
	(0, import_react.useEffect)(() => {
		if (open === null) return;
		const k = (e) => {
			if (e.key === "Escape") setOpen(null);
			if (e.key === "ArrowRight") setOpen((o) => o === null ? null : (o + 1) % items.length);
			if (e.key === "ArrowLeft") setOpen((o) => o === null ? null : (o - 1 + items.length) % items.length);
		};
		window.addEventListener("keydown", k);
		return () => window.removeEventListener("keydown", k);
	}, [open, items.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
		children: items.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: i % 3 * .08,
			className: i % 3 === 0 ? "row-span-2" : "",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: () => setOpen(i),
				"aria-label": `View photo ${i + 1}`,
				className: `group block h-auto w-full overflow-hidden rounded-lg p-0 ${i % 3 === 0 ? "aspect-[3/5]" : "aspect-square"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full w-full transition-transform duration-700 group-hover:scale-105",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
						src,
						label: `Gallery photo ${i + 1}`
					})
				})
			})
		}, i))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		role: "dialog",
		"aria-modal": true,
		"aria-label": "Photo viewer",
		className: "fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: () => setOpen(null),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: .92,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .95,
					opacity: 0
				},
				className: "photo-viewer w-full max-w-4xl",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
					src: items[open],
					label: `Gallery photo ${open + 1}`,
					className: "!object-contain"
				})
			}, open),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "icon",
				autoFocus: true,
				onClick: () => setOpen(null),
				className: "absolute right-4 top-4",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "icon",
				onClick: (e) => {
					e.stopPropagation();
					setOpen((open - 1 + items.length) % items.length);
				},
				className: "absolute left-3",
				"aria-label": "Previous photo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "icon",
				onClick: (e) => {
					e.stopPropagation();
					setOpen((open + 1) % items.length);
				},
				className: "absolute right-3",
				"aria-label": "Next photo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
			})
		]
	}) })] });
}
function Wishes({ guest }) {
	const [name, setName] = (0, import_react.useState)(guest ?? "");
	const [msg, setMsg] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)(null);
	const [readyUrl, setReadyUrl] = (0, import_react.useState)(null);
	const submit = (e) => {
		e.preventDefault();
		const n = name.trim(), m = msg.trim();
		if (!n || n.length > 60) return setStatus({
			kind: "err",
			text: "Please enter your name (up to 60 characters)."
		});
		if (!m || m.length > 500) return setStatus({
			kind: "err",
			text: "Please write a message (up to 500 characters)."
		});
		const url = whatsappWishesUrl(n, m);
		setReadyUrl(url);
		window.open(url, "_blank", "noopener,noreferrer");
		setStatus({
			kind: "info",
			text: "Your wishes are ready in WhatsApp, but haven't been sent yet."
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "card-soft space-y-4 p-6 text-left",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted-foreground",
					children: "Your name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: name,
					onChange: (e) => {
						setName(e.target.value);
						setReadyUrl(null);
						setStatus(null);
					},
					maxLength: 60,
					className: "field mt-1",
					autoComplete: "name",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted-foreground",
					children: "Your wishes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: msg,
					onChange: (e) => {
						setMsg(e.target.value);
						setReadyUrl(null);
						setStatus(null);
					},
					maxLength: 500,
					rows: 4,
					className: "field mt-1 resize-none",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				className: "btn-gold w-full gap-2 px-3 tracking-normal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": true }), "Send Wishes on WhatsApp"]
			}),
			status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				className: `text-sm ${status.kind === "err" ? "text-destructive" : "text-muted-foreground"}`,
				children: status.text
			}),
			readyUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "link",
				className: "h-auto whitespace-normal px-0 text-gold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: readyUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					children: ["Open WhatsApp for ", wedding.bride.short]
				})
			})
		]
	});
}
function Invitation({ guest }) {
	const [opened, setOpened] = (0, import_react.useState)(false);
	const [petals, setPetals] = (0, import_react.useState)(false);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const audio = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = opened ? "" : "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [opened]);
	const toggle = () => {
		if (!wedding.musicUrl) return;
		if (!audio.current) {
			audio.current = new Audio(wedding.musicUrl);
			audio.current.loop = true;
		}
		if (playing) {
			audio.current.pause();
			setPlaying(false);
		} else audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
	};
	const open = () => {
		setOpened(true);
		window.scrollTo(0, 0);
		if (!reduce) {
			setPetals(true);
			setTimeout(() => setPetals(false), 7e3);
		}
		if (wedding.musicUrl) toggle();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
				guest,
				onOpen: open
			}) }),
			petals && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Petals, {}),
			opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicControl, {
				playing,
				toggle
			}),
			opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDecor, {}),
			opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				"aria-hidden": !opened,
				inert: !opened,
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toran, { className: "h-16 w-full" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "welcome-stage relative text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: wedding.couplePhoto,
							alt: `${wedding.bride.short} and ${wedding.groom.short}`,
							className: "welcome-backdrop",
							fetchPriority: "high"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "welcome-story relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SacredSymbols, { className: "mx-auto mb-5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									className: "welcome-eyebrow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Together with their families"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .1,
									className: "welcome-names",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "couple-signature mx-auto mt-7",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "opened-names flex flex-wrap items-center justify-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "opened-person",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "signature-name font-couple",
														children: wedding.bride.short
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "signature-family font-display",
														children: wedding.bride.name.slice(wedding.bride.short.length).trim()
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "signature-amp font-script text-gold",
													children: "&"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "opened-person",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "signature-name font-couple",
														children: wedding.groom.short
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "signature-family font-display",
														children: wedding.groom.name.slice(wedding.groom.short.length).trim()
													})]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lotus, { className: "mx-auto mt-6 w-28 text-gold" })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									delay: .1,
									className: "welcome-msg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mx-auto mt-10 max-w-md leading-relaxed text-muted-foreground",
											children: wedding.message
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 font-display text-xl italic text-gold",
											children: wedding.style
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm text-gold",
											children: wedding.hashtag
										})
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "section bg-band",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "The Couple",
							title: "Bride & Groom"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [["The Bride", wedding.bride], ["The Groom", wedding.groom]].map(([role, p], i) => {
								const person = p;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									delay: i * .12,
									className: "card-soft p-5 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "arch-frame mx-auto aspect-[3/4] max-w-[240px]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
												src: person.photo,
												label: `${person.short}'s portrait`
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow mt-6",
											children: role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-3xl",
											children: person.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: person.family
										})
									]
								}, role);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "section",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "Counting down to",
							title: "Our Special Day"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "section bg-band",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
								eyebrow: "Let the celebrations begin",
								title: "Wedding Events"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "event-grid grid gap-5 sm:grid-cols-2",
								children: wedding.events.map((event, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									delay: i * .08,
									className: `event-card event-${event.icon} p-7 text-center`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "event-number",
											"aria-hidden": true,
											children: ["0", i + 1]
										}),
										(() => {
											const Icon = [
												Music,
												Sun,
												Heart,
												Flame
											][i] ?? Heart;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "mx-auto mb-5 h-8 w-8 text-gold",
												"aria-hidden": true
											});
										})(),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-4xl",
											children: event.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm uppercase text-muted-foreground",
											children: event.names.join(" & ")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lotus, { className: "mx-auto my-5 w-24 text-gold" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-2xl",
											children: event.time
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: event.meal
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("time", {
											dateTime: event.startISO,
											className: "mt-7 block border-t border-gold/25 pt-5 font-display text-lg",
											children: [
												event.day,
												" ",
												event.month,
												" ",
												(/* @__PURE__ */ new Date(`${event.dateISO}T00:00:00Z`)).getUTCFullYear(),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-sm text-muted-foreground",
													children: event.weekday
												})
											]
										})
									]
								}, event.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: "mt-10 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mx-auto h-5 w-5 text-gold",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow mt-3",
										children: "All celebrations at"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-3xl",
										children: wedding.venue.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: wedding.venue.address
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											className: "btn-gold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: mapsUrl(),
												target: "_blank",
												rel: "noopener noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": true }), "Open in Google Maps"]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "outline",
											className: "btn-outline",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: calendarUrl(),
												target: "_blank",
												rel: "noopener noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { "aria-hidden": true }), "Add to Google Calendar"]
											})
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "section",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "Moments",
							title: "Our Gallery"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "section bg-band",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "Blessings",
							title: "Guest Wishes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wishes, { guest }) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "section text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto max-w-md font-display text-3xl leading-snug sm:text-4xl",
								children: "Your presence will make our celebration more special."
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								className: "mx-auto mt-10 max-w-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "arch-frame aspect-[3/4]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, {
										src: wedding.closingPhoto,
										label: "Final couple photograph"
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: .1,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-10 text-muted-foreground",
									children: "With love,"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-script text-4xl text-gold",
									children: wedding.hostFamily
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "relative z-10 border-t border-border py-8 text-center text-sm text-muted-foreground",
						children: [
							"Made with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "heartbeat inline-block text-blush-deep",
								"aria-label": "love",
								children: "♥"
							}),
							" by",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: wedding.credit.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-gold underline-offset-4 hover:underline",
								children: wedding.credit.name
							})
						]
					})
				]
			})
		]
	});
}
function Index() {
	const { to } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Invitation, { guest: to });
}
//#endregion
export { Index as component };
