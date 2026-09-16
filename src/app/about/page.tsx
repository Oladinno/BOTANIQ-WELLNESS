export const metadata = { title: "About" };

const values = [
  {
    n: "01",
    title: "Respect the source",
    text: "Engage knowledge holders and botanical resources ethically, with traceability and shared value.",
  },
  {
    n: "02",
    title: "Follow the evidence",
    text: "Ask disciplined questions, validate materials and avoid claims that run ahead of the science.",
  },
  {
    n: "03",
    title: "Design for people",
    text: "Create practical formats, clear communication and solutions relevant to everyday life.",
  },
  {
    n: "04",
    title: "Build for the world",
    text: "Develop quality systems and partnerships that can meet local needs and global expectations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 140 }}>
        <div>
          <p className="section-label">About BOTANIQ</p>
          <h1>
            Rooted in Africa.
            <br />
            Built for responsible progress.
          </h1>
          <p>
            BOTANIQ WELLNESS™ is a research-led botanical wellness company
            exploring how African plants, nutrition and traditional knowledge
            can become safe, credible and useful modern solutions.
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
          <h2>Africa&apos;s botanical heritage deserves deeper research.</h2>
        </div>
        <div>
          <p>
            Across African communities, plant knowledge—including traditional
            herbal remedies (Agbo)—has been developed and passed down through
            generations. That knowledge is valuable, but tradition alone is not
            proof of safety or effectiveness.
          </p>
          <p style={{ marginTop: 28 }}>
            We bring together ethnobotanical insight, pharmacognosy, nutrition
            science, analytical testing and formulation to investigate what is
            promising, what is safe, and what can responsibly become a modern
            wellness solution.
          </p>
        </div>
      </section>

      <section className="values">
        {values.map((item) => (
          <article key={item.n}>
            <span>{item.n}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="statement">
        <p>Our vision</p>
        <h2>
          To help establish Africa as a respected global source of scientifically
          understood botanical wellness innovation.
        </h2>
      </section>
    </>
  );
}
