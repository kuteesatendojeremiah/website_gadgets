import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Smartphone,
  Headphones,
  Watch,
  Cable,
  Laptop,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Heart,
} from "lucide-react";
import logo from "@/assets/logo.jpg";
import heroImg from "@/assets/hero-gadgets.jpg";
import catSmartphones from "@/assets/cat-smartphones.jpg";
import catAudio from "@/assets/cat-audio.jpg";
import catSmartwatch from "@/assets/cat-smartwatch.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import catLaptops from "@/assets/cat-laptops.jpg";
import catBundles from "@/assets/cat-bundles.jpg";
import pIphonePink from "@/assets/p-iphone-pro.jpg";
import pIphoneWhite from "@/assets/p-iphone-standard.jpg";
import pIphoneGreen from "@/assets/p-iphone-14-pro.jpg";
import pIphoneDeepBlue from "@/assets/p-iphone-13.jpg";
import pIphoneNatural from "@/assets/p-iphone-se.jpg";
import pIphoneLightGreen from "@/assets/p-iphone-light-green.jpg";
import pIphoneUnboxed from "@/assets/p-iphone-unboxed.jpg";
import pMacbook from "@/assets/p-macbook.jpg";
import pDellXps from "@/assets/p-dell-xps.jpg";
import pLenovoThinkpad from "@/assets/p-lenovo-thinkpad.jpg";
import pEarpods from "@/assets/p-airpods.jpg";
import pAirpodsMax from "@/assets/p-airpods-max.jpg";
import pAirpods4 from "@/assets/p-airpods-3.jpg";
import pGalaxySUltra from "@/assets/p-galaxy-s24-ultra.jpg";
import pGalaxyFold from "@/assets/p-galaxy-fold.jpg";
import pBatteryPack from "@/assets/p-battery-pack.jpg";
import pChargeCable from "@/assets/p-charge-cable.jpg";
import pSmartwatches from "@/assets/p-applewatch.jpg";

const WHATSAPP_NUMBER = "254754730364";
const CALL_NUMBER = "0752555017";
const EMAIL = "happyelvis24@icloud.com";
const LOCATION = "New Pioneer Mall PA85";

const wa = (product?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    product
      ? `Hi Happy Gadgets! I'd like to inquire about: ${product}`
      : "Hi Happy Gadgets! I'd like to make an order.",
  )}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Gadgets — A smile in every click" },
      {
        name: "description",
        content:
          "Happy Gadgets — smartphones, audio, smartwatches, accessories & smart home devices at New Pioneer Mall PA85. Chat on WhatsApp for instant orders.",
      },
      { property: "og:title", content: "Happy Gadgets — A smile in every click" },
      {
        property: "og:description",
        content:
          "Modern gadget store at New Pioneer Mall PA85. Smartphones, audio, smartwatches, accessories & smart home. Order via WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

type Category = {
  title: string;
  desc: string;
  image: string;
  tag: string;
  icon: typeof Smartphone;
};

const categories: Category[] = [
  {
    title: "Smartphones",
    desc: "Latest flagships and everyday performers from top brands.",
    image: catSmartphones,
    tag: "New arrivals",
    icon: Smartphone,
  },
  {
    title: "Audio & Headphones",
    desc: "Wireless earbuds, over-ear headphones and portable speakers.",
    image: catAudio,
    tag: "Best sellers",
    icon: Headphones,
  },
  {
    title: "Smartwatches",
    desc: "Track fitness, sleep and notifications with style.",
    image: catSmartwatch,
    tag: "Trending",
    icon: Watch,
  },
  {
    title: "Accessories",
    desc: "Chargers, cables, power banks, cases and more essentials.",
    image: catAccessories,
    tag: "Everyday",
    icon: Cable,
  },
  {
    title: "Laptops",
    desc: "MacBooks, ultrabooks and business laptops for work and play.",
    image: catLaptops,
    tag: "Power up",
    icon: Laptop,
  },
  {
    title: "Curated Bundles",
    desc: "Hand-picked combos at friendly inquiry prices — just ask.",
    image: catBundles,
    tag: "Ask us",
    icon: Sparkles,
  },
];

type Featured = {
  name: string;
  category: string;
  desc: string;
  image: string;
  badge?: string;
};

const featured: Featured[] = [
  {
    name: "iPhone 17 Pro Max",
    category: "iPhone",
    desc: "Titanium design, pro camera system and all-day battery.",
    image: heroImg,
    badge: "Flagship",
  },
  {
    name: "iPhone 17 Air",
    category: "iPhone",
    desc: "Ultra-thin titanium design with all-day battery life.",
    image: catSmartphones,
    badge: "New",
  },
  {
    name: "iPhone 13",
    category: "iPhone",
    desc: "Sleek pink finish with a pro-grade dual camera system.",
    image: pIphonePink,
    badge: "Flagship",
  },
  {
    name: "iPhone 17 Air",
    category: "iPhone",
    desc: "Everyday iPhone with a clean white finish and USB-C.",
    image: pIphoneWhite,
    badge: "Popular",
  },
  {
    name: "iPhone 17",
    category: "iPhone",
    desc: "Fresh green colourway with the latest camera hardware.",
    image: pIphoneGreen,
  },
  {
    name: "iPhone 16",
    category: "iPhone",
    desc: "Rich blue finish with a vibrant OLED display.",
    image: pIphoneDeepBlue,
  },
  {
    name: "iPhone 17 Pro Max",
    category: "iPhone",
    desc: "Compact, powerful and wallet-friendly.",
    image: pIphoneNatural,
    badge: "Value",
  },
  {
    name: "iPhone 15 Plus",
    category: "iPhone",
    desc: "Soft green tone with all-day battery life.",
    image: pIphoneLightGreen,
  },
  {
    name: "iPhone 15 Plus",
    category: "iPhone",
    desc: "Ships boxed with a fast-charge USB-C cable included.",
    image: pIphoneUnboxed,
  },
  {
    name: "Samsung Galaxy S26 Ultra",
    category: "Samsung",
    desc: "Flagship camera system, S Pen and titanium frame.",
    image: pGalaxySUltra,
    badge: "Flagship",
  },
  {
    name: "Samsung Galaxy Z Fold",
    category: "Samsung",
    desc: "Foldable multitasking powerhouse.",
    image: pGalaxyFold,
    badge: "Foldable",
  },
  {
    name: "MacBook Neo",
    category: "Laptops",
    desc: "Apple silicon speed with all-day battery.",
    image: pMacbook,
    badge: "New",
  },
  {
    name: "Dell XPS",
    category: "Laptops",
    desc: "Premium ultrabook with edge-to-edge display.",
    image: pDellXps,
  },
  {
    name: "Lenovo ThinkPad",
    category: "Laptops",
    desc: "Business-grade reliability and legendary keyboard.",
    image: pLenovoThinkpad,
  },
  {
    name: "Windows Laptop",
    category: "Laptops",
    desc: "Sleek, everyday performer for work and study.",
    image: catLaptops,
  },
  {
    name: "AirPods 4",
    category: "Audio",
    desc: "The latest generation of AirPods with adaptive audio.",
    image: pAirpods4,
    badge: "Best seller",
  },
  {
    name: "AirPods Max",
    category: "Audio",
    desc: "Over-ear premium sound with spatial audio.",
    image: pAirpodsMax,
  },
  {
    name: "EarPods USB-C",
    category: "Audio",
    desc: "Everyday wired earphones with a USB-C connector.",
    image: pEarpods,
  },
  {
    name: "MagSafe Battery Pack",
    category: "Accessories",
    desc: "Magnetic wireless battery pack for on-the-go charging.",
    image: pBatteryPack,
  },
  {
    name: "USB-C Charge Cable",
    category: "Accessories",
    desc: "60W fast-charge cable, braided and durable.",
    image: pChargeCable,
  },
  {
    name: "Premium Phone Cases",
    category: "Accessories",
    desc: "Leather cases with wristlet in a range of colours.",
    image: catAccessories,
  },
  {
    name: "Smartwatches",
    category: "Wearables",
    desc: "Health, fitness and notifications on your wrist.",
    image: pSmartwatches,
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <Perks />
      <Catalog />
      <FeaturedProducts />
      <ContactBanner />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden bg-gradient-brand text-primary-foreground md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {LOCATION}
          </span>
          <a href={`tel:${CALL_NUMBER}`} className="flex items-center gap-1.5 hover:opacity-90">
            <Phone className="h-3.5 w-3.5" /> {CALL_NUMBER}
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:opacity-90">
            <Mail className="h-3.5 w-3.5" /> {EMAIL}
          </a>
        </div>
        <span className="font-medium">A smile in every click ✨</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:flex md:justify-between">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-2xl shadow-glow">
            <img src={logo} alt="Happy Gadgets" className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0">
            <div className="truncate font-display text-lg font-bold leading-none">Happy Gadgets</div>
            <div className="truncate text-xs text-muted-foreground">A smile in every click</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#home" className="text-foreground hover:text-primary">Home</a>
          <a href="#products" className="text-muted-foreground hover:text-primary">Products</a>
          <a href="#about" className="text-muted-foreground hover:text-primary">About Us</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a>
        </nav>

        <a
          href={wa()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2 text-sm font-semibold text-[var(--whatsapp-foreground)] shadow-card transition hover:brightness-110 md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>

        <a
          href={wa()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] shadow-card md:hidden"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Fresh arrivals every week
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            Gadgets that put a <span className="text-gradient-brand">smile</span> on every click.
          </h1>
          <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
            From the newest smartphones to smart home essentials — shop curated tech at Happy Gadgets,
            {" "}{LOCATION}. Order instantly on WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 text-sm font-semibold text-[var(--whatsapp-foreground)] shadow-glow transition hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <a
              href={`tel:${CALL_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              <Phone className="h-5 w-5" /> Call {CALL_NUMBER}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Genuine products</span>
            <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Same-day pickup</span>
            <span className="flex items-center gap-2"><Heart className="h-4 w-4 text-primary" /> Friendly service</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-brand blur-2xl opacity-30" />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-glow">
            <img
              src={heroImg}
              alt="Latest smartphones, headphones and smartwatches from Happy Gadgets"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Perks() {
  const items = [
    { icon: MessageCircle, title: "Order on WhatsApp", desc: "Instant replies, easy inquiries." },
    { icon: ShieldCheck, title: "Genuine & warranted", desc: "Only original products, guaranteed." },
    { icon: Truck, title: "Fast delivery", desc: "Countrywide delivery & mall pickup." },
    { icon: Sparkles, title: "Curated picks", desc: "Hand-selected gadgets you'll love." },
  ];
  return (
    <section id="about" className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="flex items-start gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-background shadow-card">
              <it.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-muted-foreground">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Catalog() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Shop by category</span>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Popular gadgets</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Explore what's hot right now. Tap Inquire to chat and get today's best price on WhatsApp.
          </p>
        </div>
        <a
          href={wa()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Ask for a custom quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <article
            key={c.title}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                {c.tag}
              </span>
              <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow">
                <c.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.desc}</p>
              <a
                href={wa(c.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition hover:bg-primary"
              >
                <MessageCircle className="h-4 w-4" /> Inquire / Buy
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section id="featured" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Featured products</span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">iPhones, laptops, AirPods & more</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              A hand-picked lineup of what everyone's asking for this week. Tap any product to chat on WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <a
              key={`${p.name}-${p.image}`}
              href={wa(p.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative aspect-square overflow-hidden bg-background">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-gradient-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground shadow-glow">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {p.category}
                </div>
                <h3 className="mt-1 font-display text-base font-bold">{p.name}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Inquire on WhatsApp <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBanner() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-primary-foreground shadow-glow md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Ready to make someone smile?
              </h2>
              <p className="mt-3 max-w-md text-primary-foreground/85">
                Message us on WhatsApp for instant help, product photos, and today's best offer.
                Or drop by our shop at {LOCATION}.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={wa()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 text-sm font-semibold text-[var(--whatsapp-foreground)] transition hover:brightness-110"
                >
                  <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                </a>
                <a
                  href={`tel:${CALL_NUMBER}`}
                  className="inline-flex items-center gap-2 rounded-full bg-background/15 px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-white/25 backdrop-blur transition hover:bg-background/25"
                >
                  <Phone className="h-5 w-5" /> Call now
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={MapPin} label="Location" value={LOCATION} />
              <InfoCard icon={MessageCircle} label="WhatsApp" value="0754 730 364" href={wa()} />
              <InfoCard icon={Phone} label="Call us" value={CALL_NUMBER} href={`tel:${CALL_NUMBER}`} />
              <InfoCard icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-2xl bg-background/10 p-4 ring-1 ring-white/15 backdrop-blur transition hover:bg-background/20">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background/20">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-primary-foreground/70">{label}</div>
        <div className="truncate font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-2xl shadow-glow">
              <img src={logo} alt="Happy Gadgets" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="font-display text-lg font-bold">Happy Gadgets</div>
              <div className="text-xs text-muted-foreground">A smile in every click</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Your friendly neighbourhood tech shop at {LOCATION}.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#products" className="hover:text-primary">Products</a></li>
            <li><a href="#about" className="hover:text-primary">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Reach us</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {LOCATION}</li>
            <li><a className="flex items-center gap-2 hover:text-primary" href={wa()} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp 0754 730 364</a></li>
            <li><a className="flex items-center gap-2 hover:text-primary" href={`tel:${CALL_NUMBER}`}><Phone className="h-4 w-4" /> {CALL_NUMBER}</a></li>
            <li><a className="flex items-center gap-2 hover:text-primary" href={`mailto:${EMAIL}`}><Mail className="h-4 w-4" /> {EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Happy Gadgets. All rights reserved.
      </div>
    </footer>
  );
}
