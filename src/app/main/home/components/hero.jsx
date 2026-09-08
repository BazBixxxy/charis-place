import { Button } from "@/components/ui/button";
import UserStack from "./user-stack";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-16 sm:py-40">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpeg')" }}
        aria-hidden="true"
      />

      {/* Scrim so text stays legible over the image */}
      <div
        className="pointer-events-none absolute inset-0 bg-background/80 backdrop-blur-[2px]"
        aria-hidden="true"
      />

      {/* Soft ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-[100px]"
        aria-hidden="true"
      />

      {/* Fade into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-background"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl space-y-16 text-center">
        {/* Main heading */}
        <div className="space-y-8">
          <h1 className="font-light leading-[0.9] tracking-tight text-balance">
            <span className="block animate-fade-in-up text-5xl text-muted-foreground md:text-6xl lg:text-7xl">
              Welcome To
            </span>

            <span className="block animate-pulse-slow bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-7xl font-semibold text-transparent drop-shadow-md md:text-8xl lg:text-9xl xl:text-[10rem]">
              Charis Place
            </span>
          </h1>

          <p className="mx-auto max-w-2xl animate-fade-in-up text-lg font-medium text-muted-foreground md:text-xl lg:text-2xl [animation-delay:400ms]">
            Where we are raising{" "}
            <span className="font-bold text-foreground md:font-semibold">
              Disciples of Christ
            </span>
          </p>
        </div>

        {/* Scripture */}
        <div className="mx-auto max-w-3xl space-y-6 px-2">
          <blockquote className="text-base font-light italic leading-relaxed text-foreground sm:text-lg md:text-xl lg:text-2xl">
            "This is how we know what love is: Jesus Christ laid down his life
            for us. And we ought to lay down our lives for our brothers and
            sisters."
          </blockquote>

          <cite className="block text-xs font-medium uppercase tracking-widest text-muted-foreground sm:text-sm">
            1 John 3:16
          </cite>
        </div>

        {/* CTA */}
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-3">
            <p className="mb-5 text-sm font-light tracking-wide text-muted-foreground sm:text-base">
              Join our online community
            </p>
          </div>

          <Link to="/articles">
            <Button
              size="lg"
              className="rounded-full px-8 py-5 text-sm font-medium tracking-wide transition-transform duration-200 hover:scale-105 hover:shadow-lg sm:text-base md:text-lg"
            >
              Read Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
