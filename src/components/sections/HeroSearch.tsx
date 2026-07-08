"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Loader2,
  MapPin,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { cn } from "@/lib/utils";

type Option = { label: string; hint?: string; value: string; featured?: boolean };

const OPEN_TO_IDEAS = "I'm open to ideas";

const featuredOptions: Option[] = destinations.map((d) => ({
  label: d.name,
  hint: d.country,
  value: d.name,
  featured: true,
}));

const openToIdeas: Option = { label: OPEN_TO_IDEAS, value: OPEN_TO_IDEAS };

async function fetchPlaces(query: string, signal: AbortSignal): Promise<Option[]> {
  const res = await fetch(
    `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=6&lang=en`,
    { signal },
  );
  if (!res.ok) throw new Error("place search failed");
  const data = (await res.json()) as {
    features: { properties: Record<string, string> }[];
  };
  return data.features.map((f) => {
    const p = f.properties;
    const parts = [p.name, p.city, p.state, p.country].filter(Boolean);
    const unique = [...new Set(parts)];
    const label = p.name || unique[0] || query;
    const hint = unique.filter((x) => x !== label).join(", ");
    return { label, hint, value: unique.join(", ") };
  });
}

// ── Date helpers ─────────────────────────────────────────────────────────────

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_NAMES = ["Mo","Tu","We","Th","Fr","Sa","Su"];

function toIso(y: number, m: number, d: number): string {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function buildGrid(year: number, month: number): (string | null)[] {
  // Monday-first offset
  const firstDay = new Date(year, month, 1).getDay();
  const offset = (firstDay + 6) % 7;
  const totalDays = new Date(year, month + 1, 0).getDate();
  const cells: (string | null)[] = Array(offset).fill(null);
  for (let d = 1; d <= totalDays; d++) cells.push(toIso(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function formatRange(from: string, to: string): string {
  const f = new Date(`${from}T00:00:00`);
  if (!to) {
    return f.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  const t = new Date(`${to}T00:00:00`);
  const sameYear = f.getFullYear() === t.getFullYear();
  const sameMonth = sameYear && f.getMonth() === t.getMonth();
  const year = t.getFullYear();
  if (sameMonth) {
    return `${f.getDate()}–${t.getDate()} ${f.toLocaleDateString("en-GB", { month: "short" })} ${year}`;
  }
  if (sameYear) {
    const fm = f.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
    const tm = t.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
    return `${fm} – ${tm} ${year}`;
  }
  const opts = { day: "numeric", month: "short", year: "numeric" } as const;
  return `${f.toLocaleDateString("en-GB", opts)} – ${t.toLocaleDateString("en-GB", opts)}`;
}

// ── Component ─────────────────────────────────────────────────────────────────

export function HeroSearch() {
  const router = useRouter();
  const listId = useId();
  const todayIso = new Date().toISOString().slice(0, 10);
  const now = new Date();

  // ── Location state ──────────────────────────────────────────────────────────
  const [where, setWhere] = useState("");
  const [locOpen, setLocOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [remote, setRemote] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);
  const comboRef = useRef<HTMLDivElement>(null);

  // ── Date state ──────────────────────────────────────────────────────────────
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [calOpen, setCalOpen] = useState(false);
  const [phase, setPhase] = useState<"from" | "to">("from");
  const [hover, setHover] = useState("");
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const calRef = useRef<HTMLDivElement>(null);

  // ── Location autocomplete ───────────────────────────────────────────────────
  const results = useMemo(() => {
    const q = where.trim().toLowerCase();
    const local = q
      ? featuredOptions.filter(
          (o) => o.label.toLowerCase().includes(q) || o.hint?.toLowerCase().includes(q),
        )
      : featuredOptions;
    const merged: Option[] = [...local];
    for (const r of remote) {
      if (!merged.some((m) => m.value.toLowerCase() === r.value.toLowerCase())) merged.push(r);
    }
    merged.push(openToIdeas);
    return merged;
  }, [where, remote]);

  useEffect(() => {
    if (!locOpen) return;
    const q = where.trim();
    if (q.length < 2) { setRemote([]); setLoading(false); return; }
    setLoading(true);
    const ctrl = new AbortController();
    const timer = setTimeout(async () => {
      try { setRemote(await fetchPlaces(q, ctrl.signal)); }
      catch { setRemote([]); }
      finally { setLoading(false); }
    }, 260);
    return () => { clearTimeout(timer); ctrl.abort(); };
  }, [where, locOpen]);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (comboRef.current && !comboRef.current.contains(e.target as Node)) setLocOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  function chooseLocation(option: Option) { setWhere(option.value); setLocOpen(false); }

  function onWhereKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") { e.preventDefault(); if (!locOpen) setLocOpen(true); setActive((i) => Math.min(i + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter" && locOpen && results[active]) { e.preventDefault(); chooseLocation(results[active]); }
    else if (e.key === "Escape") setLocOpen(false);
  }

  // ── Calendar logic ──────────────────────────────────────────────────────────
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (calRef.current && !calRef.current.contains(e.target as Node)) setCalOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  function pickDay(iso: string) {
    if (iso < todayIso) return;
    if (phase === "from") {
      setFrom(iso);
      setTo("");
      setPhase("to");
    } else {
      if (iso < from) { setTo(from); setFrom(iso); }
      else setTo(iso);
      setCalOpen(false);
      setPhase("from");
    }
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewYear((y) => y - 1); setViewMonth(11); }
    else setViewMonth((m) => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewYear((y) => y + 1); setViewMonth(0); }
    else setViewMonth((m) => m + 1);
  }

  function isInRange(iso: string): boolean {
    const end = to || hover;
    if (!from || !end) return false;
    const [lo, hi] = from <= end ? [from, end] : [end, from];
    return iso > lo && iso < hi;
  }

  function dateLabel() {
    if (from && to) return formatRange(from, to);
    if (from) return `${new Date(from + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short" })} →`;
    return null;
  }

  const grid = buildGrid(viewYear, viewMonth);

  // ── Form submit ─────────────────────────────────────────────────────────────
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (where.trim()) params.set("destination", where.trim());
    const dates = from ? formatRange(from, to) : "";
    if (dates) params.set("dates", dates);
    const query = params.toString();
    router.push(query ? `/enquire?${query}` : "/enquire");
  }

  const labelCls = "sr-only";

  return (
    <form
      role="search"
      aria-label="Plan Your Trip"
      onSubmit={onSubmit}
      className="w-full overflow-visible rounded-xl sm:rounded-full bg-paper/97 text-left shadow-[0_20px_60px_-15px_rgba(37,37,31,0.45)] backdrop-blur-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-stretch">

        {/* ── Location ── */}
        <div ref={comboRef} className="relative flex flex-1 items-center gap-3 px-8 py-5">
          <MapPin className="h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <label htmlFor="hero-where" className={labelCls}>Location</label>
            <input
              id="hero-where"
              type="text"
              role="combobox"
              aria-expanded={locOpen}
              aria-controls={listId}
              aria-autocomplete="list"
              aria-activedescendant={locOpen && results[active] ? `${listId}-opt-${active}` : undefined}
              autoComplete="off"
              value={where}
              placeholder="Where would you like to go?"
              onChange={(e) => { setWhere(e.target.value); setLocOpen(true); setActive(0); }}
              onFocus={() => setLocOpen(true)}
              onKeyDown={onWhereKeyDown}
              className="w-full bg-transparent font-sans text-base text-ink outline-none placeholder:text-ink/90"
            />
            {locOpen && (results.length > 0 || loading) && (
              <ul
                id={listId}
                role="listbox"
                aria-label="Places"
                className="absolute left-0 right-0 bottom-full z-30 mb-2 max-h-64 overflow-auto rounded-2xl border border-border bg-paper py-2 text-left shadow-[0_-20px_50px_-15px_rgba(37,37,31,0.45)]"
              >
                {results.map((o, i) => (
                  <li
                    key={`${o.value}-${i}`}
                    id={`${listId}-opt-${i}`}
                    role="option"
                    aria-selected={where === o.value}
                    onMouseDown={(e) => { e.preventDefault(); chooseLocation(o); }}
                    onMouseEnter={() => setActive(i)}
                    className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5 ${i === active ? "bg-background" : ""}`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-sans text-sm text-ink">{o.label}</span>
                      {o.hint && <span className="block truncate text-xs text-muted-ink">{o.hint}</span>}
                    </span>
                    {o.featured ? (
                      <span className="shrink-0 rounded-full bg-sand/50 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.12em] text-deep-olive">Alma</span>
                    ) : where === o.value ? (
                      <Check className="h-4 w-4 shrink-0 text-olive" aria-hidden="true" />
                    ) : null}
                  </li>
                ))}
                {loading && (
                  <li className="flex items-center gap-2 px-4 py-2.5 text-xs text-muted-ink">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                    Searching…
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>

        <span aria-hidden="true" className="mx-0 hidden w-px self-stretch bg-border/60 sm:block" />

        {/* ── Dates ── */}
        <div ref={calRef} className="relative flex flex-1 items-center gap-3 border-t border-border/60 px-8 py-5 sm:border-t-0">
          <CalendarDays className="h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <label className={labelCls}>When?</label>
            <button
              type="button"
              onClick={() => { setCalOpen((o) => !o); setPhase(from && !to ? "to" : "from"); }}
              className="w-full text-left font-sans text-sm outline-none"
            >
              {dateLabel() ? <span className="text-base text-ink">{dateLabel()}</span> : <span className="text-base text-ink/90">Add dates</span>}
            </button>
          </div>

          {/* Calendar dropdown */}
          {calOpen && (
            <div className="absolute left-0 bottom-full z-30 mb-3 w-72 rounded-3xl border border-border bg-paper p-5 shadow-[0_-20px_50px_-15px_rgba(37,37,31,0.45)]">

              {/* Month navigation */}
              <div className="mb-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={prevMonth}
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-surface"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="h-4 w-4 text-ink" />
                </button>
                <span className="font-sans text-sm font-semibold text-ink">
                  {MONTH_NAMES[viewMonth]} {viewYear}
                </span>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-surface"
                  aria-label="Next month"
                >
                  <ChevronRight className="h-4 w-4 text-ink" />
                </button>
              </div>

              {/* Day name headers */}
              <div className="mb-1 grid grid-cols-7">
                {DAY_NAMES.map((d) => (
                  <span
                    key={d}
                    className="py-1 text-center font-sans text-[0.6rem] font-semibold uppercase tracking-widest text-muted-ink"
                  >
                    {d}
                  </span>
                ))}
              </div>

              {/* Day grid */}
              <div className="grid grid-cols-7">
                {grid.map((iso, i) => {
                  if (!iso) return <span key={`e-${i}`} className="h-8" />;
                  const isPast = iso < todayIso;
                  const isFrom = iso === from;
                  const isTo = iso === to;
                  const inRange = isInRange(iso);
                  const isToday = iso === todayIso;
                  const day = parseInt(iso.slice(8));
                  return (
                    <button
                      key={iso}
                      type="button"
                      disabled={isPast}
                      onClick={() => pickDay(iso)}
                      onMouseEnter={() => phase === "to" && !to && setHover(iso)}
                      onMouseLeave={() => setHover("")}
                      className={cn(
                        "relative flex h-8 w-full items-center justify-center font-sans text-xs transition-colors",
                        isPast && "cursor-not-allowed text-muted-ink/30",
                        !isPast && !isFrom && !isTo && "text-ink",
                        !isPast && !isFrom && !isTo && !inRange && "rounded-full hover:bg-surface",
                        (isFrom || isTo) && "z-10 rounded-full bg-deep-olive text-surface",
                        inRange && !isFrom && !isTo && "bg-terracotta/10",
                        isToday && !isFrom && !isTo && "font-bold",
                      )}
                    >
                      {day}
                      {isToday && !isFrom && !isTo && (
                        <span className="absolute bottom-0.5 left-1/2 h-0.75 w-0.75 -translate-x-1/2 rounded-full bg-terracotta" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Hint text + clear */}
              <div className="mt-4 flex items-center justify-between">
                <span className="font-sans text-[0.65rem] text-muted-ink">
                  {phase === "from" || !from ? "Select start date" : "Now select end date"}
                </span>
                {(from || to) && (
                  <button
                    type="button"
                    onClick={() => { setFrom(""); setTo(""); setPhase("from"); }}
                    className="font-sans text-[0.65rem] text-muted-ink underline-offset-2 hover:text-ink hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ── Submit ── */}
        <div className="flex items-center p-3 sm:p-1.5 sm:pl-0">
          <button
            type="submit"
            className="flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-deep-olive px-8 py-4 font-sans text-sm font-medium tracking-wide text-surface transition-colors hover:bg-ink sm:w-auto"
          >
            Plan Your Trip
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

      </div>
    </form>
  );
}
