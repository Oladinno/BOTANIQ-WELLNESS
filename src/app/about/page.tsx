export const metadata = { title: "About" };

const principles = [
  "Scientific integrity",
  "Respect for traditional knowledge",
  "Safety before commercialisation",
  "Evidence before claims",
  "Transparency and traceability",
  "Ethical sourcing",
  "Responsible innovation",
  "African value creation",
];

const differences = [
  "Discover",
  "Document",
  "Validate",
  "Formulate",
  "Test",
  "Commercialise",
];

const hubItems = [
  "Botanical profiles and traditional-use records",
  "Scientific publications and evidence reviews",
  "Health and research priorities",
  "Formulation and product-development records",
  "Laboratory and safety findings",
  "Regulatory documentation",
  "Intellectual-property records",
  "Project decisions and development progress",
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 140 }}>
        <div>
          <p className="section-label">About BOTANIQ</p>
          <h1>
            Rooted in African Knowledge.
            <br />
            Guided by Science.
          </h1>
          <p>
            BOTANIQ WELLNESS™ is an African botanical wellness, research and
            product-development company working to transform African plant
            resources and traditional knowledge into responsibly developed,
            science-led wellness solutions.
          </p>
        </div>
        <div className="page-botanical" aria-hidden>
          <span />
          <i />
          <i />
        </div>
      </section>

      <section className="content-split">
        <div>
          <p className="section-label">Why we exist</p>
          <h2>BOTANIQ exists to help bridge that gap.</h2>
        </div>
        <div>
          <p>
            For generations, African communities have used plants and traditional
            herbal preparations (Agbo) to support health and wellbeing. This
            knowledge represents an important cultural and scientific resource.
            However, traditional use alone does not establish a botanical
            ingredient&apos;s safety, effectiveness, quality or appropriate dosage.
          </p>
          <p style={{ marginTop: 28 }}>
            We combine traditional knowledge with botanical research,
            pharmacognosy, nutrition science, formulation, analytical testing and
            responsible commercialisation. Our goal is not simply to repackage
            traditional remedies, but to investigate promising botanicals carefully
            and translate validated knowledge into safe, consistent and practical
            modern wellness solutions.
          </p>
        </div>
      </section>

      <section className="values">
        <article>
          <span>PURPOSE</span>
          <h3>Our Purpose</h3>
          <p>
            To preserve and advance valuable African botanical knowledge while
            improving the evidence, safety, quality and accessibility of modern
            botanical wellness.
          </p>
        </article>
        <article>
          <span>VISION</span>
          <h3>Our Vision</h3>
          <p>
            To become a trusted African botanical wellness and research
            company—rooted in African knowledge, guided by science and globally
            respected for responsible innovation.
          </p>
        </article>
        <article>
          <span>MISSION</span>
          <h3>Our Mission</h3>
          <p>
            To research, validate and responsibly develop African botanical
            resources into safe, consistent, relevant and commercially scalable
            wellness solutions for Nigeria, Africa and selected international
            markets.
          </p>
        </article>
        <article>
          <span>APPROACH</span>
          <h3>Partnership-enabled</h3>
          <p>
            We coordinate research priorities, evidence management, product
            concepts, intellectual-property strategy, partner governance,
            responsible claims, brand development and market planning.
          </p>
        </article>
      </section>

      <section className="pathway">
        <h2>What Makes BOTANIQ Different</h2>
        <p style={{ marginBottom: 28 }}>
          BOTANIQ begins with questions, not medical claims. We examine health
          needs, traditional practices, plant identity, existing scientific
          evidence, safety considerations and practical applications before
          developing a product concept.
        </p>
        <div className="pathway-flow">
          {differences.map((step, i) => (
            <span key={step}>
              {step}
              {i < differences.length - 1 && <i> → </i>}
            </span>
          ))}
        </div>
        <p>
          Each concept remains subject to scientific validation, safety
          assessment, manufacturing feasibility and applicable regulatory review.
        </p>
      </section>

      <section className="content-split">
        <div>
          <p className="section-label">How we work</p>
          <h2>A partnership-enabled model.</h2>
        </div>
        <div>
          <p>
            Qualified universities, researchers, laboratories, pharmacognosists,
            nutrition scientists, toxicologists, formulation specialists,
            manufacturers and regulatory professionals may support the specialist
            work required throughout development.
          </p>
          <p style={{ marginTop: 28 }}>
            This approach allows BOTANIQ to bring together the right expertise for
            each botanical, health area and product format.
          </p>
        </div>
      </section>

      <section className="institute-page">
        <p className="section-label light">Our Research Infrastructure</p>
        <h2>BOTANIQ™ ResearchHub &amp; Institute</h2>
        <p>
          We are developing the BOTANIQ™ ResearchHub, a private digital
          environment for organising botanical profiles, evidence reviews,
          formulation records, laboratory findings, regulatory documentation and
          development progress.
        </p>
        <div>
          {hubItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p style={{ marginTop: 40 }}>
          We also propose to establish the BOTANIQ™ Institute of Botanical &amp;
          Nutritional Sciences as the company&apos;s scientific and
          knowledge-development arm—bringing together botanical science,
          pharmacognosy, nutrition, microbiome research, formulation and
          responsible product development.
        </p>
      </section>

      <section className="principle-grid">
        {principles.map((item) => (
          <article key={item}>
            <h3>{item}</h3>
            <p>A guiding principle of BOTANIQ&apos;s research and development work.</p>
          </article>
        ))}
      </section>

      <section className="statement">
        <p>Building from Africa for the World</p>
        <h2>
          African botanical knowledge can be preserved, scientifically
          investigated and transformed into credible modern wellness
          innovation—while ensuring that meaningful value remains within Africa.
        </h2>
      </section>

      <section className="claim-note">
        <p className="section-label">BOTANIQ WELLNESS™</p>
        <h2 style={{ marginBottom: 18 }}>
          Science Meets Tradition. Everyday Botanical Wellness.
        </h2>
        <p>
          African botanical knowledge. Responsible science. Modern wellness.
        </p>
      </section>
    </>
  );
}
