import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaWhatsapp,
  FaStar,
  FaChevronDown,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import {
  GiScissors,
  GiDress,
  GiSewingNeedle,
  GiDelicatePerfume,
} from "react-icons/gi";
import { HiSparkles, HiChevronDown } from "react-icons/hi";
import { Nav } from "@/components/boutique/Nav";
import { Reveal, Counter } from "@/components/boutique/Reveal";
import { Lightbox } from "@/components/boutique/Lightbox";

export const Route = createFileRoute("/")({
  component: BoutiquePage,
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
});

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const collections = [
  {
    title: "Designer Blouses",
    desc: "Hand-embroidered statement blouses crafted with zardosi, cutdana and thread work.",
    src: "/images/blouses.png",
  },
  {
    title: "Bridal Collection",
    desc: "Heirloom bridal ensembles designed for the moment you say forever.",
    src: "/images/bridal.png",
  },
  {
    title: "Designer Sarees",
    desc: "Silk, organza and tissue drapes reimagined with modern couture detailing.",
    src: "/images/sarees.png",
  },
  {
    title: "Reception Dresses",
    desc: "Show-stopping gowns and lehengas for your grandest evening entrance.",
    src: "/images/ReceptionDress.jpeg",
  },
  {
    title: "Festive Wear",
    desc: "Radiant kurtas, anarkalis and shararas for every celebration of the year.",
    src: "/images/FestiveWear.jpeg",
  },
  {
    title: "Lehengas",
    desc: "Voluminous silhouettes with intricate craft — from mehendi to sangeet nights.",
    src: "/images/Lehenga.jpeg",
  },
];

const features = [
  {
    icon: GiDress,
    title: "Premium Fabrics",
    desc: "Hand-picked pure silks, organzas, tissue and Banarasi weaves sourced directly from master weavers.",
  },
  {
    icon: GiSewingNeedle,
    title: "Handcrafted Embroidery",
    desc: "Zardosi, aari, cutdana and resham work executed by third-generation karigars.",
  },
  {
    icon: GiScissors,
    title: "Perfect Fit Guarantee",
    desc: "Precision tailoring with unlimited trials until every seam falls exactly right.",
  },
  {
    icon: GiDelicatePerfume,
    title: "Personalized Styling",
    desc: "One-on-one styling sessions to design a wardrobe entirely your own.",
  },
];

const gallery = [
  "/images/gallery1.jpeg",
  "/images/gallery2.jpeg",
  "/images/gallery3.jpeg",
  "/images/gallery4.jpeg",
  "/images/gallery5.jpeg",
  "/images/gallery7.jpeg",
  "/images/gallery9.png",
  "/images/gallery10.png",
];

const process = [
  { step: "01", title: "Consultation", desc: "A private sitting to understand your occasion, story and silhouette." },
  { step: "02", title: "Fabric Selection", desc: "Curated swatches of silks, organzas and hand-woven textiles." },
  { step: "03", title: "Design Approval", desc: "Detailed sketches, embroidery samples and colour boards for sign-off." },
  { step: "04", title: "Stitching", desc: "Master tailors and karigars bring your design to life over 4–6 weeks." },
  { step: "05", title: "Quality Check", desc: "Every stitch, stone and seam inspected against our couture standard." },
  { step: "06", title: "Final Delivery", desc: "A final trial, styling notes, and packaging fit for an heirloom." },
];

const testimonials = [
  {
    name: "Ananya Rao",
    role: "Bride, 2025",
    quote:
      "My bridal lehenga felt like it was written for me. Every consultation was thoughtful and the craftsmanship exceeded every expectation.",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Meera Iyer",
    role: "Reception Client",
    quote:
      "The team designed a gown I still receive compliments on. Impeccable fit, delicate hand embroidery, and an experience truly personal.",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Reddy",
    role: "Festive Wardrobe",
    quote:
      "From consultation to final delivery, Élan treats you like family. My festive wardrobe has never felt this considered and elegant.",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
];

const faqs = [
  {
    q: "How long does a custom outfit take to stitch?",
    a: "Standard couture pieces take 3–4 weeks, while bridal ensembles are crafted over 8–12 weeks depending on embroidery complexity.",
  },
  {
    q: "Do you offer full customization of designs?",
    a: "Absolutely. Every ensemble is designed around your silhouette, palette and story. We welcome inspirations and co-create the final look with you.",
  },
  {
    q: "How do bridal consultations work?",
    a: "Bridal appointments are private, 90-minute sittings with our head designer, including fabric curation, mood boards and preliminary sketches.",
  },
  {
    q: "Do you deliver outside Vijayawada?",
    a: "Yes — we ship pan-India via insured courier and offer international shipping on request with full customs handling.",
  },
  {
    q: "How are measurements taken?",
    a: "We offer in-boutique measurement appointments and a guided remote video session for clients outside the city.",
  },
  {
    q: "What fabrics do you work with?",
    a: "Pure Kanjivaram, Banarasi, raw silk, organza, tissue, georgette, velvet and heritage handloom textiles sourced across India.",
  },
];

function BoutiquePage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="bg-ivory text-charcoal overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative h-screen min-h-[640px] flex items-center justify-center">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: "easeOut" }}
            src={img("photo-1595777457583-95e059d581b8", 1920)}
            alt="Elegant designer boutique interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="eyebrow text-gold mb-6"
          >
            Est. 2018 · Vijayawada
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-balance"
          >
            Luxury Designer Wear
            <br />
            <span className="italic text-gold font-light">Tailored for Every Celebration</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-white/85 mt-8 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed"
          >
            Handcrafted designer blouses, heirloom bridal couture, festive collections and
            personalized fashion — envisioned for the women who make every moment their own.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <a href="#collections" className="btn-gold">Explore Collections</a>
            <a href="#contact" className="btn-outline-gold">Book Consultation</a>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-gold"
          aria-label="Scroll"
        >
          <HiChevronDown size={32} />
        </motion.a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={img("photo-1567401893414-76b7b1e5a7a5", 900)}
                alt="Boutique interior"
                className="w-full h-[560px] object-cover shadow-2xl"
              />
              <div className="hidden md:block absolute -bottom-8 -right-8 bg-gold text-white px-8 py-6 shadow-xl">
                <p className="font-display text-3xl leading-none">8+</p>
                <p className="eyebrow text-white/90 mt-2" style={{ color: "#fff" }}>
                  Years of Couture
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="eyebrow">Our Atelier</p>
            <h2 className="text-4xl md:text-5xl mt-4 leading-tight text-balance">
              A house of craft, quiet luxury and considered design.
            </h2>
            <div className="w-16 h-px bg-gold my-8" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              Élan Couture Boutique is an atelier devoted to custom designer blouses, bridal wear,
              festive dresses and premium tailoring. Every piece is drawn by hand, cut with care,
              and finished by karigars whose craft has been passed down for generations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              We believe couture should feel personal — a slow, intimate collaboration between you,
              our designers and our artisans. The result is clothing that carries a story, a fit,
              and a finish worthy of the moments you'll wear it in.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { n: 500, s: "+", label: "Custom Designs" },
                { n: 8, s: "+", label: "Years Experience" },
                { n: 300, s: "+", label: "Happy Clients" },
                { n: 100, s: "%", label: "Personalized Service" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-beige p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <p className="font-display text-4xl text-gold">
                    <Counter to={s.n} suffix={s.s} />
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Featured Collections</p>
            <h2 className="text-4xl md:text-5xl mt-4 text-balance">Signature pieces from the atelier</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="group bg-ivory overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="overflow-hidden aspect-[4/5]">
                    <img
                      src={c.src}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl group-hover:text-gold transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.desc}</p>
                    <a href="#contact" className="mt-5 inline-block text-xs uppercase tracking-[0.2em] text-gold hover:text-brown">
                      Enquire →
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY / SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl mt-4 text-balance">The Élan promise</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="bg-white border border-beige p-8 h-full text-center group hover:-translate-y-2 hover:shadow-2xl hover:border-gold transition-all duration-500">
                  <div className="w-16 h-16 mx-auto rounded-full bg-ivory border border-beige flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                    <f.icon size={28} />
                  </div>
                  <h3 className="font-display text-xl mt-6">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Our Gallery</p>
            <h2 className="text-4xl md:text-5xl mt-4 text-balance">Moments in couture</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </Reveal>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 4) * 0.05} className="mb-4 break-inside-avoid">
                <button
                  onClick={() => setLightbox(src)}
                  className="block w-full overflow-hidden group"
                >
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 px-6 bg-charcoal text-ivory">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="eyebrow">Our Process</p>
            <h2 className="text-4xl md:text-5xl mt-4 text-balance text-ivory">
              From first sketch to final stitch
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </Reveal>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 md:-translate-x-1/2" />
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div
                  className={`relative flex items-start gap-6 md:gap-12 mb-14 md:mb-16 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="absolute left-4 md:left-auto md:right-auto w-3 h-3 bg-gold rounded-full mt-2 md:top-2 md:-translate-x-[7px] md:right-[-7px]"
                    style={i % 2 === 0 ? { right: "-7px" } : { left: "-7px" }}
                  />
                  <div className="pl-12 md:pl-0 w-full">
                    <p className="font-display text-5xl text-gold/70">{p.step}</p>
                    <h3 className="font-display text-2xl mt-2 text-ivory">{p.title}</h3>
                    <p className="text-white/60 mt-3 leading-relaxed text-sm">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Testimonials</p>
            <h2 className="text-4xl md:text-5xl mt-4 text-balance">Words from our clients</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="bg-white border border-beige p-8 h-full flex flex-col hover:shadow-xl transition-shadow">
                  <div className="flex gap-1 text-gold mb-5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <FaStar key={k} size={14} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-beige">
                    <img
                      src={t.src}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-display text-lg">{t.name}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="eyebrow">FAQ</p>
            <h2 className="text-4xl md:text-5xl mt-4 text-balance">Questions, answered</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </Reveal>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="bg-white border border-beige">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between text-left p-6 hover:text-gold transition-colors"
                  >
                    <span className="font-display text-lg pr-6">{f.q}</span>
                    <FaChevronDown
                      className={`text-gold transition-transform shrink-0 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === i ? "auto" : 0,
                      opacity: openFaq === i ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Contact</p>
            <h2 className="text-4xl md:text-5xl mt-4 text-balance">Book a private consultation</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <img
                src={img("photo-1441984904996-e0b6ba687e04", 900)}
                alt="Boutique fitting room"
                className="w-full h-80 object-cover shadow-lg"
              />
              <div className="mt-8 space-y-5">
                {[
                  { icon: FaMapMarkerAlt, label: "Visit Us", value: "MG Road, Vijayawada, Andhra Pradesh 520010" },
                  { icon: FaPhone, label: "Call", value: "+91 98765 43210" },
                  { icon: FaEnvelope, label: "Email", value: "hello@elancouture.com" },
                  { icon: FaClock, label: "Hours", value: "Mon – Sat · 10:30am to 8:00pm" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-full bg-ivory border border-beige flex items-center justify-center text-gold">
                      <c.icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="eyebrow text-charcoal" style={{ color: "var(--charcoal)" }}>
                        {c.label}
                      </p>
                      <p className="text-muted-foreground mt-1">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 aspect-[16/9] bg-ivory border border-beige overflow-hidden">
                <iframe
                  title="Map"
                  src="https://maps.google.com/maps?q=Vijayawada%20Andhra%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full grayscale-[40%]"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <form
                onSubmit={submit}
                className="bg-ivory border border-beige p-8 md:p-10 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="eyebrow" style={{ color: "var(--charcoal)" }}>Name</span>
                    <input
                      required
                      className="mt-2 w-full bg-transparent border-b border-beige focus:border-gold outline-none py-2"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow" style={{ color: "var(--charcoal)" }}>Phone</span>
                    <input
                      required
                      className="mt-2 w-full bg-transparent border-b border-beige focus:border-gold outline-none py-2"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="eyebrow" style={{ color: "var(--charcoal)" }}>Email</span>
                  <input
                    type="email"
                    required
                    className="mt-2 w-full bg-transparent border-b border-beige focus:border-gold outline-none py-2"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow" style={{ color: "var(--charcoal)" }}>Interested In</span>
                  <select className="mt-2 w-full bg-transparent border-b border-beige focus:border-gold outline-none py-2">
                    <option>Bridal Consultation</option>
                    <option>Designer Blouses</option>
                    <option>Reception Dress</option>
                    <option>Festive Wear</option>
                    <option>Custom Tailoring</option>
                  </select>
                </label>
                <label className="block">
                  <span className="eyebrow" style={{ color: "var(--charcoal)" }}>Message</span>
                  <textarea
                    rows={4}
                    className="mt-2 w-full bg-transparent border-b border-beige focus:border-gold outline-none py-2 resize-none"
                  />
                </label>
                <button type="submit" className="btn-gold w-full mt-2">
                  {sent ? "✓ Message Sent" : "Send Enquiry"}
                </button>
                <div className="flex items-center gap-3 justify-center pt-4">
                  {[FaInstagram, FaFacebookF, FaPinterestP, FaWhatsapp].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full border border-beige flex items-center justify-center text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-colors"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-ivory pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <p className="font-display text-3xl">Élan</p>
            <p className="eyebrow mt-1">Couture Boutique</p>
            <p className="text-white/60 text-sm leading-relaxed mt-6">
              An atelier for bespoke bridal couture, designer blouses and handcrafted festive
              wear — tailored for every celebration.
            </p>
            <div className="flex gap-3 mt-6">
              {[FaInstagram, FaFacebookF, FaPinterestP, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors"
                  aria-label="Social"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-6">Explore</p>
            <ul className="space-y-3 text-sm text-white/60">
              {["Home", "About", "Collections", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-gold">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Collections</p>
            <ul className="space-y-3 text-sm text-white/60">
              {["Bridal Couture", "Designer Blouses", "Sarees", "Lehengas", "Festive Wear", "Reception"].map(
                (l) => (
                  <li key={l}>
                    <a href="#collections" className="hover:text-gold">{l}</a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Get In Touch</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li>MG Road, Vijayawada</li>
              <li>Andhra Pradesh 520010</li>
              <li>+91 98765 43210</li>
              <li>hello@elancouture.com</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Élan Couture Boutique. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            <HiSparkles className="text-gold" /> Crafted with care in India
          </p>
        </div>
      </footer>

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}
