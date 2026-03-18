import { Gamepad2, Menu, Star, Twitter, X } from "lucide-react";
import { useState } from "react";
import { SiItchdotio } from "react-icons/si";

const FEATURED_GAMES = [
  {
    id: 1,
    title: "Motu Patlu Furfari Nager",
    desc: "Jump and swim through wild waters with Motu Patlu in this fun action adventure!",
    link: "https://gamedevpurvesh.itch.io/motu-patlu-furfari-nager/purchase",
    image: "/assets/generated/game-motu-patlu.dim_400x240.jpg",
  },
  {
    id: 2,
    title: "Tales After Midnight: The Neighbor",
    desc: "A spooky tale unfolds when your neighbor hides a dark midnight secret.",
    link: "https://static-mind.itch.io/tales-after-midnight-the-neighbor/purchase",
    image: "/assets/generated/game-tales-midnight.dim_400x240.jpg",
  },
  {
    id: 3,
    title: "Mann ka Shaitann",
    desc: "Face the demons within your own mind in this psychological horror adventure.",
    link: "https://Mann-ka-shaitann",
    image: "/assets/generated/game-mann-shaitann.dim_400x240.jpg",
  },
  {
    id: 4,
    title: "Alien Invasion III",
    desc: "The aliens are back and stronger than ever. Defend Earth in this epic shooter!",
    link: "https://alienInvasionlll",
    image: "/assets/generated/game-alien-invasion.dim_400x240.jpg",
  },
  {
    id: 5,
    title: "Animal Problems",
    desc: "Solve quirky puzzles and help animals with their hilariously weird problems.",
    link: "https://animalProblems",
    image: "/assets/generated/game-animal-problems.dim_400x240.jpg",
  },
  {
    id: 6,
    title: "Mouthout 2",
    desc: "The sequel to the wacky mouth-flapping adventure you never knew you needed.",
    link: "https://Mouthout2",
    image: "/assets/generated/game-mouthout2.dim_400x240.jpg",
  },
];

const BLACKBIRD_GAMES = [
  {
    id: 1,
    title: "Invite the Blackbird",
    desc: "An eerie invitation you can't refuse. Enter the blackbird's world.",
    link: "https://anamerzlaya.itch.io/invite-the-blackbird",
    image: "/assets/generated/game-invite-blackbird.dim_400x240.jpg",
    emoji: "✉️",
  },
  {
    id: 2,
    title: "Trust the Blackbird",
    desc: "Can you trust the mysterious blackbird guiding you through shadows?",
    link: "https://anamerzlaya.itch.io/trust-the-blackbird",
    image: "/assets/generated/game-trust-blackbird.dim_400x240.jpg",
    emoji: "🤝",
  },
  {
    id: 3,
    title: "Follow the Blackbird",
    desc: "Follow the blackbird's trail into the unknown depths of a strange world.",
    link: "https://anamerzlaya.itch.io/follow-the-blackbird",
    image: "/assets/generated/game-follow-blackbird.dim_400x240.jpg",
    emoji: "🪶",
  },
  {
    id: 4,
    title: "Sleep the Blackbird",
    desc: "Close your eyes and let the blackbird carry you to dreamlike realms.",
    link: "https://anamerzlaya.itch.io/sleep-the-blackbird",
    image: "/assets/generated/game-sleep-blackbird.dim_400x240.jpg",
    emoji: "🌙",
  },
];

function StarShape({
  className,
  style,
}: { className: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      style={style}
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

function BlobShape({
  className,
  style,
}: { className: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M44.8,-66.2C56.5,-57.7,63.2,-42.5,68.4,-27.2C73.5,-11.9,77.1,3.5,73.5,17.3C69.8,31.1,59,43.4,46.4,52.4C33.8,61.3,19.3,67,3.7,62.7C-11.9,58.5,-28.6,44.4,-39.9,30.6C-51.2,16.9,-57.2,3.6,-57.4,-9.9C-57.5,-23.3,-51.7,-36.9,-41.8,-46.3C-32,-55.7,-18.1,-61,0.6,-61.7C19.3,-62.5,33,-74.7,44.8,-66.2Z"
        transform="translate(100 100)"
        fill="currentColor"
      />
    </svg>
  );
}

function CloudShape({
  className,
  style,
}: { className: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 60"
      className={className}
      fill="currentColor"
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="50" cy="45" rx="45" ry="15" />
      <circle cx="30" cy="35" r="18" />
      <circle cx="55" cy="28" r="22" />
      <circle cx="75" cy="38" r="14" />
    </svg>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Games", href: "#games" },
    { label: "Blackbird Series", href: "#blackbird" },
    { label: "Developer", href: "#developer" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto">
        <div className="nav-glass px-6 py-3 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#about"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/rocket-mascot-transparent.dim_120x120.png"
              alt="Play Planet rocket"
              className="w-10 h-10 object-contain"
            />
            <span
              className="font-fredoka text-xl text-white tracking-wide"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
            >
              PLAY PLANET
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-nunito font-700 text-white/90 hover:text-white transition-colors hover:scale-105 inline-block"
                style={{ fontWeight: 700, transition: "all 0.2s ease" }}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#games"
              className="btn-cta hidden md:inline-block text-sm"
              data-ocid="nav.primary_button"
            >
              Play Now 🎮
            </a>
            <button
              type="button"
              className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="mobile-nav mt-1 px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-nunito font-bold text-white py-2 border-b border-white/10 last:border-0"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#games"
              className="btn-cta text-center mt-2"
              data-ocid="nav.primary_button"
            >
              Play Now 🎮
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-4 text-center min-h-[80vh] flex flex-col items-center justify-center"
    >
      {/* Floating Blobs */}
      <BlobShape
        className="absolute -top-16 -left-24 w-72 h-72 float-1 spin-slow"
        style={{ color: "oklch(0.52 0.18 280 / 0.15)" }}
      />
      <BlobShape
        className="absolute top-12 -right-20 w-64 h-64 float-2"
        style={{ color: "oklch(0.72 0.17 50 / 0.12)" }}
      />
      <BlobShape
        className="absolute bottom-8 left-12 w-48 h-48 float-3"
        style={{ color: "oklch(0.52 0.18 280 / 0.2)" }}
      />
      <BlobShape
        className="absolute bottom-0 right-16 w-56 h-56 float-5"
        style={{ color: "oklch(0.68 0.18 40 / 0.15)" }}
      />

      {/* Floating Stars */}
      <StarShape
        className="absolute top-20 left-[15%] w-8 h-8 pulse-star"
        style={{ color: "oklch(0.87 0.16 90)" }}
      />
      <StarShape
        className="absolute top-32 right-[20%] w-5 h-5 float-4 pulse-star"
        style={{ color: "oklch(0.87 0.16 90)" }}
      />
      <StarShape
        className="absolute bottom-32 left-[25%] w-6 h-6 float-2"
        style={{ color: "oklch(0.77 0.12 340)" }}
      />
      <StarShape
        className="absolute top-16 right-[35%] w-4 h-4 pulse-star"
        style={{ color: "oklch(0.87 0.16 90 / 0.8)" }}
      />
      <StarShape
        className="absolute bottom-20 right-[30%] w-7 h-7 float-6"
        style={{ color: "oklch(0.87 0.16 90)" }}
      />

      {/* Floating Clouds */}
      <CloudShape
        className="absolute top-8 left-[40%] w-32 h-16 opacity-20 float-3"
        style={{ color: "oklch(0.92 0.05 290)" }}
      />
      <CloudShape
        className="absolute bottom-16 left-[55%] w-24 h-14 opacity-15 float-1"
        style={{ color: "oklch(0.92 0.05 290)" }}
      />

      {/* Big Decorative Planet */}
      <div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 spin-slow"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.52 0.18 280), oklch(0.22 0.12 283))",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
          <span className="text-sm font-nunito font-bold text-white/90">
            🎮 Indie Games Portal
          </span>
        </div>

        <h1
          className="font-fredoka gradient-text mb-6 leading-tight"
          style={{
            fontSize: "clamp(3rem, 8vw, 5rem)",
            lineHeight: 1.1,
          }}
        >
          Play Planet
        </h1>

        <p
          className="font-nunito text-white/85 mb-8 max-w-xl mx-auto"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
            fontWeight: 600,
            lineHeight: 1.6,
          }}
        >
          A small world full of fun and mysterious indie games. 🌍✨
          <br />
          Discover unique experiences made with heart.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#games"
            className="btn-cta text-lg px-8 py-4"
            data-ocid="hero.primary_button"
          >
            Explore Games 🚀
          </a>
          <a
            href="#blackbird"
            className="font-fredoka text-lg px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all hover:scale-105"
            style={{ letterSpacing: "0.02em" }}
            data-ocid="hero.secondary_button"
          >
            Blackbird Series 🐦
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 justify-center mt-12">
          {[
            { value: "10+", label: "Games" },
            { value: "100%", label: "Indie Made" },
            { value: "∞", label: "Fun" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-fredoka text-3xl"
                style={{ color: "oklch(0.87 0.16 90)" }}
              >
                {stat.value}
              </div>
              <div className="font-nunito text-white/70 text-sm font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GameCard({
  game,
  index,
}: { game: (typeof FEATURED_GAMES)[0]; index: number }) {
  return (
    <div
      className="game-card flex flex-col"
      data-ocid={`games.item.${index + 1}`}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, transparent 50%, oklch(0.22 0.12 283) 100%)",
          }}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-fredoka text-xl text-white mb-2"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
        >
          {game.title}
        </h3>
        <p
          className="font-nunito text-white/70 text-sm mb-4 flex-1"
          style={{ fontWeight: 600, lineHeight: 1.5 }}
        >
          {game.desc}
        </p>
        <a
          href={game.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-center text-sm"
          data-ocid={`games.button.${index + 1}`}
        >
          Play Game 🎮
        </a>
      </div>
    </div>
  );
}

function FeaturedGamesSection() {
  return (
    <section id="games" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Gamepad2 size={28} style={{ color: "oklch(0.87 0.16 90)" }} />
            <span
              className="font-nunito font-bold text-sm uppercase tracking-widest"
              style={{ color: "oklch(0.75 0.17 60)" }}
            >
              Explore
            </span>
          </div>
          <h2
            className="font-fredoka text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              textShadow: "0 2px 12px rgba(0,0,0,0.3)",
            }}
          >
            Featured Games ✨
          </h2>
          <p className="font-nunito text-white/70 mt-2 font-semibold">
            Hand-picked indie adventures waiting for you.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="games.list"
        >
          {FEATURED_GAMES.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlackbirdCard({
  game,
  index,
}: { game: (typeof BLACKBIRD_GAMES)[0]; index: number }) {
  return (
    <div
      className="blackbird-card flex flex-col"
      data-ocid={`blackbird.item.${index + 1}`}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, oklch(0.15 0.08 285) 100%)",
          }}
        />
        <div
          className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-lg"
          style={{ background: "oklch(0.30 0.14 282 / 0.8)" }}
        >
          {game.emoji}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-fredoka text-lg text-white mb-2"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
        >
          {game.title}
        </h3>
        <p
          className="font-nunito text-white/60 text-sm mb-4 flex-1"
          style={{ fontWeight: 600, lineHeight: 1.5 }}
        >
          {game.desc}
        </p>
        <a
          href={game.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-center text-sm"
          data-ocid={`blackbird.button.${index + 1}`}
        >
          Play Game 🐦
        </a>
      </div>
    </div>
  );
}

function BlackbirdSection() {
  return (
    <section
      id="blackbird"
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.15 0.10 285) 0%, oklch(0.18 0.12 290) 100%)",
      }}
    >
      {/* Decorative lines */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.52 0.18 280), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.52 0.18 280), transparent)",
        }}
      />

      {/* Floating dark blobs */}
      <BlobShape
        className="absolute -top-10 -right-10 w-56 h-56 opacity-10 float-1"
        style={{ color: "oklch(0.52 0.18 280)" }}
      />
      <BlobShape
        className="absolute bottom-0 -left-10 w-48 h-48 opacity-10 float-3"
        style={{ color: "oklch(0.52 0.18 280)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-3 rounded-full px-5 py-2 mb-4 border border-white/10"
            style={{ background: "oklch(0.28 0.13 283 / 0.6)" }}
          >
            <span className="text-2xl" aria-hidden="true">
              🐦‍⬛
            </span>
            <span
              className="font-fredoka text-sm uppercase tracking-widest"
              style={{ color: "oklch(0.77 0.12 340)" }}
            >
              A Series of Mystery
            </span>
          </div>
          <h2
            className="font-fredoka text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              textShadow: "0 2px 16px rgba(0,0,0,0.6)",
            }}
          >
            🐦 The Blackbird Series
          </h2>
          <p className="font-nunito text-white/60 mt-2 font-semibold max-w-lg mx-auto">
            Four eerie chapters. One mysterious blackbird. A world of shadows
            and secrets.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="blackbird.list"
        >
          {BLACKBIRD_GAMES.map((game, i) => (
            <BlackbirdCard key={game.id} game={game} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DeveloperSection() {
  return (
    <section id="developer" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border border-white/10"
          style={{ background: "oklch(0.35 0.14 282 / 0.5)" }}
        >
          <Star size={14} style={{ color: "oklch(0.87 0.16 90)" }} />
          <span
            className="font-nunito font-bold text-sm"
            style={{ color: "oklch(0.87 0.16 90)" }}
          >
            Behind the Games
          </span>
        </div>

        <h2
          className="font-fredoka text-white mb-8"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            textShadow: "0 2px 12px rgba(0,0,0,0.3)",
          }}
        >
          Meet the Developer 👾
        </h2>

        {/* Card */}
        <div
          className="rounded-3xl p-8 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, oklch(0.38 0.15 282 / 0.7), oklch(0.28 0.13 283 / 0.8))",
            border: "1px solid oklch(0.55 0.14 280 / 0.3)",
            boxShadow: "0 12px 48px oklch(0.15 0.08 280 / 0.5)",
          }}
        >
          {/* BG blob */}
          <BlobShape
            className="absolute -top-12 -right-12 w-48 h-48 opacity-10 float-2"
            style={{ color: "oklch(0.72 0.17 50)" }}
          />

          <div className="relative z-10">
            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div
                className="w-28 h-28 rounded-full overflow-hidden border-4"
                style={{
                  borderColor: "oklch(0.72 0.17 50 / 0.6)",
                  boxShadow: "0 0 24px oklch(0.72 0.17 50 / 0.3)",
                }}
              >
                <img
                  src="/assets/generated/dev-avatar-transparent.dim_200x200.png"
                  alt="Developer avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p
              className="font-nunito text-white/85 leading-relaxed"
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              Hi! I&apos;m an indie game developer with a big passion for
              creating unique, imaginative experiences. Every game I make is a
              little world of its own — full of surprises, heart, and fun.{" "}
              <span style={{ color: "oklch(0.87 0.16 90)" }}>
                Welcome to Play Planet!
              </span>{" "}
              🌍
            </p>

            <div className="flex flex-wrap gap-3 justify-center mt-6">
              {[
                "🎮 Game Dev",
                "🎨 Pixel Artist",
                "✨ Storyteller",
                "🚀 Indie Creator",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-nunito font-bold text-sm px-4 py-1.5 rounded-full border border-white/20 text-white/80"
                  style={{ background: "oklch(0.40 0.15 282 / 0.5)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="relative mt-8 px-4 pt-16 pb-8"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.15 0.10 285) 0%, oklch(0.13 0.08 288) 100%)",
        borderTopLeftRadius: "3rem",
        borderTopRightRadius: "3rem",
        borderTop: "1px solid oklch(0.40 0.14 280 / 0.3)",
      }}
    >
      {/* Blobs */}
      <BlobShape
        className="absolute top-0 right-0 w-64 h-64 opacity-5 float-1"
        style={{ color: "oklch(0.52 0.18 280)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/assets/generated/rocket-mascot-transparent.dim_120x120.png"
                alt="Play Planet"
                className="w-10 h-10 object-contain"
              />
              <span className="font-fredoka text-xl text-white">
                PLAY PLANET
              </span>
            </div>
            <p className="font-nunito text-white/60 text-sm font-semibold leading-relaxed">
              A small world full of fun and mysterious indie games. Made with ♥
              for gamers everywhere.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "oklch(0.40 0.15 282 / 0.5)",
                  border: "1px solid oklch(0.55 0.14 280 / 0.3)",
                }}
                aria-label="itch.io"
                data-ocid="footer.link"
              >
                <SiItchdotio size={16} className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "oklch(0.40 0.15 282 / 0.5)",
                  border: "1px solid oklch(0.55 0.14 280 / 0.3)",
                }}
                aria-label="Twitter / X"
                data-ocid="footer.link"
              >
                <Twitter size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-fredoka text-lg text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Featured Games", href: "#games" },
                { label: "Blackbird Series", href: "#blackbird" },
                { label: "Meet the Developer", href: "#developer" },
                { label: "About Play Planet", href: "#about" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-nunito text-white/60 text-sm font-semibold hover:text-white transition-colors"
                    data-ocid="footer.link"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-fredoka text-lg text-white mb-4">
              Start Playing
            </h3>
            <p className="font-nunito text-white/60 text-sm font-semibold mb-4">
              Dive into a world of indie magic. No downloads, just pure fun.
            </p>
            <a
              href="#games"
              className="btn-cta text-sm"
              data-ocid="footer.primary_button"
            >
              Explore All Games 🚀
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid oklch(0.40 0.14 280 / 0.3)" }}
        >
          <p className="font-nunito text-white/50 text-sm font-semibold">
            © {year} Play Planet. Made with ♥ by an indie dev.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-nunito text-white/40 text-xs font-semibold hover:text-white/60 transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedGamesSection />
        <BlackbirdSection />
        <DeveloperSection />
      </main>
      <Footer />
    </div>
  );
}
