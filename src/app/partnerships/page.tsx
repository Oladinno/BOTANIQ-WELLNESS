export const metadata = { title: "Partnerships" };

const partners = [
  {
    title: "Researchers & universities",
    text: "Ethnobotany, pharmacognosy, nutrition, microbiome science, clinical research and data analysis.",
  },
  {
    title: "Laboratories",
    text: "Plant authentication, phytochemistry, microbiology, contaminants, stability and analytical validation.",
  },
  {
    title: "Formulation & manufacturing",
    text: "Food, supplement and botanical product development with quality and regulatory discipline.",
  },
  {
    title: "Communities & growers",
    text: "Ethical sourcing, cultivation, traceability, knowledge stewardship and shared economic value.",
  },
  {
    title: "Healthcare & public health",
    text: "Health-needs insight, responsible study design and pathways for appropriate real-world use.",
  },
  {
    title: "Market partners",
    text: "Distribution, licensing, investment and market development in Africa and international markets.",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 140 }}>
        <div>
          <p className="section-label">Partnerships</p>
          <h1>
            The right expertise turns
            <br />
            potential into progress.
          </h1>
          <p>
            We collaborate across science, communities, quality, manufacturing
            and markets to build botanical wellness responsibly.
          </p>
        </div>
        <div className="page-botanical" aria-hidden>
          <span />
          <i />
          <i />
        </div>
      </section>

      <section className="partner-types">
        {partners.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="contact partner-contact" id="contact">
        <p className="section-label">Start a conversation</p>
        <h2>
          What could we investigate
          <br />
          or build together?
        </h2>
        <p>
          Introduce your organization, capability and proposed area of
          collaboration.
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
