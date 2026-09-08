import React from "react";

/**
 * Charis Place — About page
 *
 * Design notes:
 * - Palette evokes an early morning prayer gathering: deep ink navy background,
 *   parchment foreground, a single warm gold accent standing in for dawn light.
 * - Theme is scoped locally via CSS variables on the wrapper (shadcn/ui token
 *   names: background, foreground, muted-foreground, border, card, primary),
 *   so it can sit inside an app with a different default theme.
 * - Typography: Fraunces (serif) carries headlines and scripture, Inter (sans)
 *   carries body copy and supporting text.
 * - All artwork below is hand built SVG (no stock photography), so it can be
 *   recolored and reused freely as the site grows.
 * - Motion is restrained: one ambient drift in the hero, a gentle entrance
 *   sequence on load, and a soft pulse on the story illustration. Everything
 *   respects prefers-reduced-motion.
 */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,340;0,9..144,470;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap";

function PrayerIcon({ className }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 6C24 6 24 18 24 22C24 26 20 28 20 32C20 36 22 38 24 38C26 38 28 36 28 32C28 28 24 26 24 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 38V42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 42C14 42 18 39 24 39C30 39 34 42 34 42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WordIcon({ className }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 12C21 9.5 16 8 10 8V34C16 34 21 35.5 24 38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 12C27 9.5 32 8 38 8V34C32 34 27 35.5 24 38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24 12V38" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PathIcon({ className }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 38C14 38 14 30 20 30C26 30 26 22 32 22C36 22 38 18 40 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="0.5 6"
      />
      <circle cx="8" cy="38" r="2.4" fill="currentColor" />
      <circle cx="20" cy="30" r="2.4" fill="currentColor" />
      <circle cx="32" cy="22" r="2.4" fill="currentColor" />
      <circle cx="40" cy="14" r="2.4" fill="currentColor" />
    </svg>
  );
}

const FOUNDATIONS = [
  {
    key: "prayer",
    title: "Prayer",
    reference: "1 Thessalonians 5:17",
    quote: "Pray without ceasing.",
    body: "Prayer is the rhythm of Charis Place, the constant conversation that shapes everything else we do.",
    Icon: PrayerIcon,
  },
  {
    key: "word",
    title: "The word of God",
    reference: "2 Timothy 3:14 to 17",
    quote:
      "But you must continue in the things which you have learned and been assured of, knowing from whom you have learned them, and that from childhood you have known the Holy Scriptures, which are able to make you wise for salvation through faith which is in Christ Jesus. All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work.",
    body: "Scripture is our anchor, the standard we return to and test everything against.",
    Icon: WordIcon,
  },
  {
    key: "discipleship",
    title: "Discipleship",
    reference: "Matthew 28:18 to 20",
    quote:
      'And Jesus came and spoke to them, saying, "All authority has been given to Me in heaven and on earth. Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age."',
    body: "We exist to grow one another toward maturity, walking the path of faith together rather than alone.",
    Icon: PathIcon,
  },
];

// Hand placed node positions for the "gathering" illustration. Values are
// percentages of the SVG viewBox, arranged loosely around a bright center
// so the network reads as people converging rather than a grid.
const GATHERING_NODES = [
  { x: 200, y: 200, r: 7, delay: 0, core: true },
  { x: 120, y: 140, r: 3.2, delay: 0.2 },
  { x: 268, y: 128, r: 2.6, delay: 0.9 },
  { x: 90, y: 232, r: 2.8, delay: 1.4 },
  { x: 300, y: 210, r: 3.4, delay: 0.5 },
  { x: 232, y: 288, r: 2.4, delay: 1.1 },
  { x: 148, y: 300, r: 3, delay: 1.8 },
  { x: 60, y: 168, r: 2.2, delay: 0.7 },
  { x: 320, y: 300, r: 2.6, delay: 1.6 },
  { x: 180, y: 90, r: 2.4, delay: 2.1 },
];

export default function AboutPage() {
  return (
    <div className="charis-theme relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <style>{`
        @import url("${FONT_IMPORT_URL}");
      `}</style>

      {/* Fine grain overlay for a paper like texture across the whole page */}
      <svg
        className="pointer-events-none fixed inset-0 h-full w-full text-foreground opacity-[0.025] dark:opacity-[0.04]"
        aria-hidden="true"
      >
        <filter id="charis-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          fill="currentColor"
          filter="url(#charis-grain)"
        />
      </svg>

      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden px-6 pb-28 pt-28 sm:pt-36 md:pb-36">
        <div
          className="charis-drift pointer-events-none absolute -top-1/4 left-1/2 h-[52rem] w-[52rem] -translate-x-1/2 rounded-full opacity-40 dark:opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.28), transparent 65%)",
          }}
          aria-hidden="true"
        />

        <p
          className="font-serif-display pointer-events-none absolute left-1/2 top-[52%] w-[140%] -translate-x-1/2 -translate-y-1/2 select-none text-center text-[16vw] italic leading-none text-foreground opacity-[0.045] dark:opacity-[0.055] sm:text-[11vw]"
          aria-hidden="true"
        >
          pray without ceasing
        </p>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1
            className="charis-fade-up font-serif-display text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.05s" }}
          >
            Charis Place
          </h1>
          <p
            className="charis-fade-up mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
            style={{ animationDelay: "0.25s" }}
          >
            An online community gathered around prayer, the word of God, and
            discipleship.
          </p>
          <p
            className="charis-fade-up mt-3 text-sm text-muted-foreground"
            style={{ animationDelay: "0.4s" }}
          >
            Started in 2025. Still growing, one gathering at a time.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Story                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-border px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif-display text-3xl font-medium sm:text-4xl">
              Where we began
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Charis Place started in 2025 as a small prayer and fellowship
                group. Believers who had received the word of God gathered
                online, not in a building but in a shared moment, to pray
                together and to hear the word.
              </p>
              <p>
                That simple gathering is still the heart of who we are today.
                What began as a few voices on a call has grown into a community
                held together by three commitments we return to again and again.
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <svg
              viewBox="0 0 400 400"
              className="h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="charis-glow" cx="50%" cy="50%" r="50%">
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.55"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0"
                  />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="120" fill="url(#charis-glow)" />
              {GATHERING_NODES.map((node, i) =>
                node.core ? null : (
                  <line
                    key={`line-${i}`}
                    x1="200"
                    y1="200"
                    x2={node.x}
                    y2={node.y}
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                  />
                )
              )}
              {GATHERING_NODES.map((node, i) => (
                <circle
                  key={`node-${i}`}
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  fill={
                    node.core ? "hsl(var(--primary))" : "hsl(var(--foreground))"
                  }
                  className={node.core ? undefined : "charis-node"}
                  style={
                    node.core ? undefined : { animationDelay: `${node.delay}s` }
                  }
                  opacity={node.core ? 1 : undefined}
                />
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Foundations                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-border px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif-display text-3xl font-medium sm:text-4xl">
            The foundations we stand on
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Three commitments shape everything Charis Place does.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            className="absolute left-6 top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <ul className="space-y-16">
            {FOUNDATIONS.map((item, index) => {
              const { Icon } = item;
              const alignRight = index % 2 === 1;
              return (
                <li key={item.key} className="relative pl-16 sm:pl-0">
                  <span
                    className="absolute left-6 top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary sm:left-1/2"
                    aria-hidden="true"
                  />
                  <div className="sm:grid sm:grid-cols-2 sm:gap-12">
                    <div
                      className={
                        alignRight
                          ? "sm:col-start-2"
                          : "sm:col-start-1 sm:text-right"
                      }
                    >
                      <div
                        className={
                          "flex items-center gap-3 " +
                          (alignRight ? "" : "sm:flex-row-reverse")
                        }
                      >
                        <Icon className="h-7 w-7 shrink-0 text-primary" />
                        <h3 className="font-serif-display text-2xl font-medium">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm font-medium text-primary">
                        {item.reference}
                      </p>
                      <blockquote className="font-serif-display mt-4 text-lg italic leading-relaxed text-foreground/90">
                        {item.quote}
                      </blockquote>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Closing                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-border px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-serif-display text-3xl font-medium sm:text-4xl">
            Still becoming
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Charis Place is young and still growing. What you see here is only
            the beginning of what we believe God is building through this
            community. More is coming as we grow, together.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Footer                                                            */}
      {/* ---------------------------------------------------------------- */}
      <footer className="border-t border-border px-6 py-10 hidden">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif-display text-lg">Charis Place</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Gathered since 2025
          </p>
          <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-muted-foreground">
            Scripture quotations taken from the New King James Version.
            Copyright 1982 by Thomas Nelson. Used by permission. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
