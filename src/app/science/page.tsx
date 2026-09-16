export const metadata = { title: "Our Science" };

const stages = [
  {
    n: "01",
    title: "Listen & discover",
    text: "Map health needs, traditional uses, community knowledge and candidate plants.",
  },
  {
    n: "02",
    title: "Authenticate",
    text: "Confirm botanical identity, origin, handling and supply-chain traceability.",
  },
  {
    n: "03",
    title: "Review evidence",
    text: "Assess ethnobotanical records, published research, mechanisms and evidence gaps.",
  },
  {
    n: "04",
    title: "Test safety & quality",
    text: "Use qualified laboratories to examine contaminants, composition, stability and appropriate use.",
  },
  {
    n: "05",
    title: "Formulate",
    text: "Translate validated insights into practical foods, powders, gummies, oils or other suitable formats.",
  },
  {
    n: "06",
    title: "Validate & improve",
    text: "Conduct sensory, stability, usability and—where appropriate—clinical evaluation before responsible claims.",
  },
];

const disciplines = [
  "Ethnobotany",
  "Pharmacognosy",
  "Nutrition",
  "Natural products",
  "Microbiome science",
  "Product formulation",
];

export default function SciencePage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 140 }}>
        <div>
          <p className="section-label">Our science</p>
          <h1>
            Questions first.
            <br />
            Evidence before claims.
          </h1>
          <p>
            Our research framework connects traditional insight with modern
            methods, helping promising botanical ideas move through a
            disciplined pathway from discovery to real-world application.
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
          <p className="section-label">Research principles</p>
          <h2>
            Tradition informs the question.
            <br />
            Science examines the answer.
          </h2>
        </div>
        <div>
          <p>
            We do not treat traditional use as automatic proof. We use it as an
            informed starting point for research, material authentication,
            safety assessment and product development.
          </p>
          <p style={{ marginTop: 28 }}>
            Every project is shaped by the intended population, format, dose,
            manufacturing process, regulatory pathway and strength of available
            evidence.
          </p>
        </div>
      </section>

      <section className="stage-grid">
        {stages.map((stage) => (
          <article key={stage.n}>
            <span>{stage.n}</span>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
          </article>
        ))}
      </section>

      <section className="institute-page">
        <p className="section-label light">Research platform</p>
        <h2>BOTANIQ™ Institute of Botanical &amp; Nutritional Sciences</h2>
        <p>
          The Institute is our planned interdisciplinary engine for botanical
          discovery, nutrition research, formulation, data management and
          collaboration with universities, laboratories and specialist partners.
        </p>
        <div>
          {disciplines.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </section>
    </>
  );
}
