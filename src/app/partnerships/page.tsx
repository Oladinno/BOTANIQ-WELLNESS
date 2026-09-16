export const metadata = { title: "Partner With Us" };

const partnerTypes = [
  {
    title: "Universities and Research Institutions",
    text: "Academic collaboration in ethnobotany, pharmacognosy, natural-products research, nutrition science, microbiome and fermentation science, toxicology, public health, clinical research and data analysis.",
  },
  {
    title: "Researchers and Scientific Advisers",
    text: "Specialists who can contribute to botanical reviews, research protocols, evidence evaluation, scientific oversight and responsible development decisions.",
  },
  {
    title: "Analytical and Toxicology Laboratories",
    text: "Botanical authentication, phytochemical analysis, microbiological testing, heavy-metal and contaminant screening, toxicology assessment, nutritional analysis and stability studies.",
  },
  {
    title: "Formulation and Product-Development Specialists",
    text: "Food scientists, pharmacists, nutrition scientists and other qualified formulation professionals who translate validated research into practical product formats.",
  },
  {
    title: "Clinical and Consumer-Research Partners",
    text: "Partners capable of sensory studies, consumer-acceptance testing, usability research, pilot studies, observational research and appropriate human or clinical evaluation.",
  },
  {
    title: "Growers, Communities and Botanical Suppliers",
    text: "Relationships that strengthen ethical sourcing, sustainable cultivation, correct plant identification, post-harvest quality, botanical traceability, knowledge stewardship and local economic participation.",
  },
  {
    title: "Qualified Manufacturers",
    text: "Capabilities in functional foods, nutrition products, botanical powders, sachets, gummies, oils and extracts, ready-to-drink products and botanical oral care—with appropriate quality systems and regulatory readiness.",
  },
  {
    title: "Regulatory and Quality Professionals",
    text: "Expertise in NAFDAC requirements, product classification, food and supplement regulation, claims assessment, label review, quality-management systems, documentation and international market requirements.",
  },
  {
    title: "Distribution and Market Partners",
    text: "Credible distributors, importers and market-development partners in Nigeria, across Africa and in selected international markets.",
  },
  {
    title: "Investors and Strategic Partners",
    text: "Responsible investment and strategic partnerships aligned with BOTANIQ’s long-term research, intellectual-property and commercialisation strategy.",
  },
];

const collaborateSteps = [
  "An introduction to your organisation and expertise",
  "Identification of a shared research or development opportunity",
  "Confidentiality and intellectual-property review",
  "Definition of responsibilities, deliverables and timelines",
  "Scientific, commercial and regulatory assessment",
  "A structured project agreement",
  "Stage-by-stage review and progression",
];

const valued = [
  "Relevant technical competence",
  "Scientific and professional integrity",
  "Respect for confidentiality",
  "Evidence-based decision-making",
  "Quality and regulatory discipline",
  "Ethical sourcing",
  "Transparent communication",
  "Reliable documentation",
  "Respect for African knowledge and value creation",
  "Commitment to long-term responsible innovation",
];

const opportunities = [
  "Botanical research",
  "Nutrition and microbiome science",
  "Toxicology and safety",
  "Formulation and product development",
  "Laboratory testing",
  "Clinical and consumer research",
  "Ethical sourcing and cultivation",
  "Manufacturing",
  "Regulatory compliance",
  "Technology and research infrastructure",
  "Distribution and market development",
  "Licensing",
  "Strategic investment",
];

export default function PartnershipsPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 140 }}>
        <div>
          <p className="section-label">Partner With Us</p>
          <h1>
            Responsible Botanical Innovation Requires the Right Partners
          </h1>
          <p>
            BOTANIQ WELLNESS™ is building a multidisciplinary network to research,
            validate and responsibly develop African botanical resources into modern
            wellness solutions.
          </p>
        </div>
        <div className="page-botanical" aria-hidden>
          <span />
          <i />
          <i />
        </div>
      </section>

      <section className="claim-note" style={{ paddingBottom: 20 }}>
        <p>
          We welcome organisations and professionals who share our commitment to
          scientific integrity, safety, ethical knowledge use and meaningful African
          value creation.
        </p>
      </section>

      <section className="partner-types">
        {partnerTypes.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="content-split">
        <div>
          <p className="section-label">How We Collaborate</p>
          <h2>A clear path from introduction to project agreement.</h2>
        </div>
        <div>
          <p>A partnership may begin with:</p>
          <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
            {collaborateSteps.map((step) => (
              <li
                key={step}
                style={{
                  borderTop: "1px solid #ced7cf",
                  padding: "12px 0",
                  fontSize: 14,
                  color: "#5a6f62",
                }}
              >
                <span style={{ color: "var(--gold)", marginRight: 8 }}>+</span>
                {step}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 24 }}>
            Partnership does not automatically provide access to confidential
            research, formulations or intellectual property. Access is granted
            according to the collaborator&apos;s approved role and project
            responsibilities.
          </p>
        </div>
      </section>

      <section className="principle-grid">
        {valued.map((item) => (
          <article key={item}>
            <h3>{item}</h3>
            <p>What we value in a partner.</p>
          </article>
        ))}
      </section>

      <section className="institute-page">
        <p className="section-label light">Opportunities to Build Together</p>
        <h2>Where collaboration can create value.</h2>
        <div>
          {opportunities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="contact partner-contact" id="contact">
        <p className="section-label">Start a Conversation</p>
        <h2>
          Let&apos;s turn African botanical potential
          <br />
          into responsible progress.
        </h2>
        <p>
          Introduce who you are, your area of expertise, your organisation,
          relevant experience or facilities, the opportunity you would like to
          explore, and the value you believe we could create together.
        </p>
        <a
          className="button primary"
          href="mailto:partnerships@botaniqwellness.com"
        >
          partnerships@botaniqwellness.com <span>→</span>
        </a>
      </section>
    </>
  );
}
