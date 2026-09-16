export const metadata = { title: "ResearchHub" };

const modules = [
  {
    n: "01",
    title: "Health Problem Portfolio",
    text: "Needs, populations, burden, gaps and research priorities.",
  },
  {
    n: "02",
    title: "Botanical Library",
    text: "Plant identity, traditional use, sourcing and safety records.",
  },
  {
    n: "03",
    title: "Evidence Registry",
    text: "Studies, quality appraisal, findings and unanswered questions.",
  },
  {
    n: "04",
    title: "Product Pipeline",
    text: "Formulation briefs, testing gates, decisions and development status.",
  },
];

export default function ResearchHubPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 140 }}>
        <div>
          <p className="section-label">Private workspace</p>
          <h1>BOTANIQ™ ResearchHub</h1>
          <p>
            A structured research environment for organizing health problems,
            plants, evidence, formulations, partners and development decisions.
          </p>
        </div>
        <div className="page-botanical" aria-hidden>
          <span />
          <i />
          <i />
        </div>
      </section>

      <section className="hub-intro">
        <div>
          <p className="section-label">Research infrastructure</p>
          <h2>One place for the journey from question to product.</h2>
          <p>
            The private ResearchHub is being developed for the BOTANIQ research
            team and approved collaborators. It will connect evidence reviews,
            botanical profiles, formulation records, laboratory results,
            decisions and project status.
          </p>
        </div>
        <div className="hub-card">
          <span>PRIVATE ACCESS</span>
          <h3>Research team portal</h3>
          <p>
            Access is currently limited to authorized BOTANIQ collaborators.
          </p>
          <button type="button">Secure sign-in coming soon</button>
        </div>
      </section>

      <section className="hub-modules">
        {modules.map((mod) => (
          <article key={mod.n}>
            <b>{mod.n}</b>
            <h3>{mod.title}</h3>
            <p>{mod.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
