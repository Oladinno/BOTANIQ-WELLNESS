import Link from "next/link";

const process = [
  {
    n: "01",
    title: "Discover",
    text: "Identify promising African plants, traditional uses and unmet consumer needs.",
  },
  {
    n: "02",
    title: "Validate",
    text: "Review evidence, authenticate materials and assess safety, quality and feasibility.",
  },
  {
    n: "03",
    title: "Formulate",
    text: "Translate findings into practical, stable and consumer-friendly formats.",
  },
  {
    n: "04",
    title: "Deliver",
    text: "Work with qualified partners on testing, compliance, manufacturing and market access.",
  },
];

const focusAreas = [
  {
    n: "01",
    title: "Metabolic health",
    text: "Evidence-informed approaches to blood-sugar balance, weight and everyday nutrition.",
  },
  {
    n: "02",
    title: "Gut & microbiome",
    text: "Exploring plant diversity, fibre, fermentation and digestive wellbeing.",
  },
  {
    n: "03",
    title: "Heart health",
    text: "Botanical and nutritional concepts designed around long-term cardiovascular wellbeing.",
  },
  {
    n: "04",
    title: "Healthy ageing",
    text: "Daily support concepts for energy, mobility, resilience and nutritional adequacy.",
  },
  {
    n: "05",
    title: "Stress & sleep",
    text: "Responsible formulations inspired by calming botanical traditions and modern research.",
  },
  {
    n: "06",
    title: "Men's & women's health",
    text: "Thoughtful, life-stage specific wellness concepts grounded in safety and relevance.",
  },
];

const formats = [
  "Functional foods",
  "Botanical gummies",
  "Oral wellness",
  "Powders & sachets",
  "Oils & extracts",
  "Ready-to-drink shots",
];

export default function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Africa&apos;s botanical wellness company
          </p>
          <h1>
            Science meets
            <br />
            <em>tradition.</em>
          </h1>
          <p className="hero-lead">
            We research African botanicals and traditional herbal knowledge
            (Agbo), then translate promising insights into responsible, modern
            wellness solutions.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/what-we-do">
              Explore our approach <span>→</span>
            </Link>
            <Link className="text-link" href="/partnerships">
              Partner with us <span>→</span>
            </Link>
          </div>
          <div className="proof-row">
            <div>
              <strong>Research-led</strong>
              <span>Built around evidence</span>
            </div>
            <div>
              <strong>Africa-rooted</strong>
              <span>Plants, people &amp; knowledge</span>
            </div>
            <div>
              <strong>Globally minded</strong>
              <span>Quality designed to travel</span>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract botanical composition">
          <div className="sun" />
          <div className="halo" />
          <div className="stem stem-one">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="stem stem-two">
            <i />
            <i />
            <i />
          </div>
          <div className="specimen-card">
            <span>BOTANICAL SPECIMEN</span>
            <b>01</b>
            <small>Origin · Identity · Evidence</small>
          </div>
          <p>
            Nature holds possibilities.
            <br />
            Science helps us understand them.
          </p>
        </div>
      </section>

      <section className="manifesto" id="about">
        <p className="section-label">Our purpose</p>
        <div>
          <h2>
            A new standard for
            <br />
            African botanical wellness.
          </h2>
          <p>
            Traditional knowledge has guided wellbeing for generations. BOTANIQ
            WELLNESS™ exists to study that knowledge responsibly—combining
            ethnobotany, nutrition, pharmacognosy and product science to create
            solutions people can understand, trust and use.
          </p>
          <p>
            We are building a bridge between cultural wisdom and the disciplines
            required for safe, consistent, modern wellness products.
          </p>
        </div>
      </section>

      <section className="science" id="science">
        <div className="section-head">
          <div>
            <p className="section-label light">Our research model</p>
            <h2>
              From plant knowledge
              <br />
              to practical wellbeing.
            </h2>
          </div>
          <p>
            Our work begins with questions—not claims. Each concept moves
            through a structured pathway designed to strengthen evidence,
            safety, quality and real-world relevance.
          </p>
        </div>
        <div className="process-grid">
          {process.map((step) => (
            <article key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="institute">
          <div className="seal">
            <span>BOTANIQ</span>
            <b>INSTITUTE</b>
            <small>R · S · Q</small>
          </div>
          <div>
            <p className="section-label light">The research engine</p>
            <h3>BOTANIQ™ Institute of Botanical &amp; Nutritional Sciences</h3>
            <p>
              Our planned research platform brings together plant science,
              nutrition, formulation, analytical testing and responsible
              commercialization.
            </p>
          </div>
          <Link href="#contact">
            Explore research partnerships <span>→</span>
          </Link>
        </div>
      </section>

      <section className="focus" id="focus">
        <div className="section-head dark">
          <div>
            <p className="section-label">Where we focus</p>
            <h2>
              Everyday needs.
              <br />
              Deeper thinking.
            </h2>
          </div>
          <p>
            We concentrate on high-impact wellness areas where African botanical
            resources and nutritional science may offer meaningful, responsible
            innovation.
          </p>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article key={area.title}>
              <span>{area.n}</span>
              <div className="mini-leaf" />
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <Link href="#contact" aria-label={`Discuss ${area.title}`}>
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="formats">
        <p className="section-label">Designed for real life</p>
        <div className="formats-title">
          <h2>
            Wellness people
            <br />
            can actually use.
          </h2>
          <p>
            Research only creates impact when it becomes accessible. We explore
            familiar, convenient formats that can fit naturally into everyday
            routines.
          </p>
        </div>
        <div className="format-list">
          {formats.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="note">
          Product concepts remain subject to scientific validation, safety
          assessment, regulatory review and manufacturing feasibility.
        </p>
      </section>

      <section className="partnerships" id="partnerships">
        <div className="partner-art">
          <div className="rings" />
          <div className="leaf-outline" />
        </div>
        <div>
          <p className="section-label light">Build with us</p>
          <h2>
            Meaningful innovation
            <br />
            takes the right partners.
          </h2>
          <p>
            We welcome conversations with researchers, universities,
            laboratories, formulation specialists, qualified manufacturers,
            healthcare experts and market partners who share our commitment to
            responsible botanical innovation.
          </p>
          <ul>
            <li>Research &amp; scientific collaboration</li>
            <li>Ingredient sourcing &amp; traceability</li>
            <li>Testing, formulation &amp; manufacturing</li>
            <li>Distribution &amp; market development</li>
          </ul>
          <Link className="button cream" href="#contact">
            Discuss a partnership <span>→</span>
          </Link>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">Start a conversation</p>
        <h2>
          Let&apos;s turn botanical potential
          <br />
          into responsible progress.
        </h2>
        <p>Tell us about your research, capability or partnership idea.</p>
        <a
          className="button primary"
          href="mailto:care@botaniqwell.com"
        >
          care@botaniqwell.com <span>→</span>
        </a>
      </section>
    </>
  );
}
