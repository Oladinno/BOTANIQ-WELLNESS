export const metadata = { title: "Focus Areas" };

const areas = [
  {
    n: "01",
    title: "Metabolic health",
    text: "Blood-sugar balance, weight management and nutrition patterns.",
  },
  {
    n: "02",
    title: "Heart & circulation",
    text: "Blood pressure, lipids and everyday cardiovascular wellbeing.",
  },
  {
    n: "03",
    title: "Gut & microbiome",
    text: "Fibre, plant diversity, fermentation and digestive regularity.",
  },
  {
    n: "04",
    title: "Micronutrient health",
    text: "Evidence-led approaches to common vitamin and mineral gaps.",
  },
  {
    n: "05",
    title: "Stress & sleep",
    text: "Botanical and behavioural concepts supporting rest and resilience.",
  },
  {
    n: "06",
    title: "Healthy ageing",
    text: "Muscle, mobility, cognition and nutritional adequacy through adulthood.",
  },
  {
    n: "07",
    title: "Men's health",
    text: "Responsible research around vitality, metabolic and sexual wellbeing.",
  },
  {
    n: "08",
    title: "Women's health",
    text: "Life-stage nutrition and carefully evaluated botanical support.",
  },
  {
    n: "09",
    title: "Liver & detoxification science",
    text: 'Studying normal liver function without misleading "detox" promises.',
  },
  {
    n: "10",
    title: "Joint & mobility",
    text: "Nutrition and botanical candidates relevant to comfort and movement.",
  },
  {
    n: "11",
    title: "Anaemia research",
    text: "Iron status, dietary patterns, absorption and population-specific solutions.",
  },
  {
    n: "12",
    title: "Future discovery",
    text: "Emerging areas identified through health data, community insight and scientific opportunity.",
  },
];

export default function FocusAreasPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 140 }}>
        <div>
          <p className="section-label">Focus areas</p>
          <h1>
            Major health needs.
            <br />
            Locally relevant research.
          </h1>
          <p>
            We prioritize needs that affect everyday life across African
            populations while designing evidence and quality systems capable of
            supporting wider global markets.
          </p>
        </div>
        <div className="page-botanical" aria-hidden>
          <span />
          <i />
          <i />
        </div>
      </section>

      <section className="area-directory">
        {areas.map((area) => (
          <article key={area.n}>
            <span>{area.n}</span>
            <h2>{area.title}</h2>
            <p>{area.text}</p>
          </article>
        ))}
      </section>

      <section className="claim-note">
        <p className="section-label">Responsible by design</p>
        <h2 style={{ marginBottom: 24 }}>These are research priorities—not promises.</h2>
        <p>
          These are research priorities—not promises that a product prevents,
          treats or cures disease. Any future product claim must reflect
          evidence, safety, regulation and the final formulation.
        </p>
      </section>
    </>
  );
}
