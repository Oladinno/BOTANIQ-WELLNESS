export const metadata = { title: "Community Health Intelligence" };

const understand = [
  "The health and nutrition challenges affecting a community",
  "Which populations are most affected",
  "Existing foods, products and traditional practices",
  "How people currently manage the problem",
  "Barriers to accessing suitable support",
  "Community beliefs and expectations",
  "Product formats people understand and can use",
  "Affordability and accessibility",
  "Potential safety concerns",
  "Opportunities for responsible botanical innovation",
];

const approach = [
  {
    title: "Listen",
    text: "We engage communities, health professionals, researchers and knowledge holders to understand lived experiences and priorities.",
  },
  {
    title: "Map",
    text: "We connect community insight with credible scientific, nutritional and public-health information.",
  },
  {
    title: "Prioritise",
    text: "We identify needs where botanical research, nutrition science or responsible product development may offer meaningful value.",
  },
  {
    title: "Investigate",
    text: "We develop research questions and evaluate promising botanicals, ingredients or interventions.",
  },
  {
    title: "Translate",
    text: "Where evidence supports continued development, we explore practical and culturally relevant product applications.",
  },
  {
    title: "Learn",
    text: "We use research findings, consumer feedback and real-world experience to improve future decisions.",
  },
];

const ethics = [
  "Recognise the cultural context of botanical knowledge",
  "Protect confidential or sensitive information",
  "Document consent where appropriate",
  "Avoid exploiting communities or knowledge holders",
  "Promote botanical traceability",
  "Encourage responsible sourcing",
  "Support African scientific participation",
  "Create meaningful value within Africa",
];

const questions = [
  { title: "What do people need?", text: "Lived experience and health priorities." },
  { title: "What knowledge already exists?", text: "Traditional practice and community insight." },
  { title: "What does the evidence support?", text: "Scientific and public-health findings." },
  { title: "What can be developed responsibly?", text: "Safe, relevant and ethical innovation." },
];

export default function CommunityHealthPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 140 }}>
        <div>
          <p className="section-label">Community Health Intelligence</p>
          <h1>
            Better Innovation Begins with Understanding People
          </h1>
          <p>
            BOTANIQ WELLNESS™ uses community insight and credible health data to
            understand the needs, practices and experiences that should guide our
            research.
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
          <p className="section-label">What it means</p>
          <h2>
            Community Health Intelligence helps BOTANIQ begin with real problems.
          </h2>
        </div>
        <div>
          <p>
            Health challenges do not exist in isolation. They are influenced by
            food habits, income, location, culture, healthcare access, working
            conditions, age, gender and traditional practices—including the use of
            herbal preparations (Agbo).
          </p>
          <p style={{ marginTop: 28 }}>
            Community Health Intelligence is the structured process of combining
            community experiences, traditional botanical knowledge, public-health
            information, nutrition and lifestyle patterns, consumer behaviour,
            scientific evidence and market-access realities.
          </p>
          <p style={{ marginTop: 28 }}>
            Community insight informs our research direction. It does not replace
            laboratory testing, clinical research or qualified medical advice.
          </p>
        </div>
      </section>

      <section className="work-list">
        <article>
          <span>01</span>
          <div>
            <h3>What We Seek to Understand</h3>
            <ul>
              {understand.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="stage-grid">
        {approach.map((item, i) => (
          <article key={item.title}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="institute-page">
        <p className="section-label light">Ethical Knowledge Use</p>
        <h2>Traditional knowledge deserves respect and responsible stewardship.</h2>
        <div>
          {ethics.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="values">
        {questions.map((item) => (
          <article key={item.title}>
            <span>QUESTION</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="statement">
        <p>From Community Insight to Responsible Innovation</p>
        <h2>
          We begin by listening—because relevant science must understand the
          people it intends to serve.
        </h2>
      </section>
    </>
  );
}
