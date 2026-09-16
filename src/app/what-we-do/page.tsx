export const metadata = { title: "What We Do" };

const workAreas = [
  {
    n: "01",
    title: "Botanical Research and Discovery",
    lead: "We identify African plants, traditional practices and health needs that may offer meaningful opportunities for responsible research and innovation.",
    items: [
      "Documenting traditional botanical knowledge",
      "Reviewing ethnobotanical uses",
      "Identifying promising African plant resources",
      "Examining existing scientific publications",
      "Understanding evidence gaps",
      "Evaluating potential modern applications",
    ],
    note: "Traditional use helps us identify important research questions. It is not treated as automatic proof of safety or effectiveness.",
  },
  {
    n: "02",
    title: "Botanical Identity and Pharmacognosy",
    lead: "Correct plant identification is essential to botanical safety, quality and consistency. Working with pharmacognosists, botanists, universities and qualified laboratories, we aim to establish:",
    items: [
      "Correct botanical species and plant parts",
      "Geographic origin",
      "Cultivation and harvesting conditions",
      "Processing and storage methods",
      "Ingredient specifications",
      "Authenticity and traceability",
      "Potential contamination or substitution risks",
    ],
  },
  {
    n: "03",
    title: "Evidence Review and Research Management",
    lead: "We organise available scientific knowledge around each botanical, health priority and product concept. Our research process may examine:",
    items: [
      "Traditional-use records",
      "Laboratory and preclinical studies",
      "Human and clinical research",
      "Known active compounds",
      "Possible biological mechanisms",
      "Safety and toxicology information",
      "Dosage considerations",
      "Contraindications and potential interactions",
      "Regulatory requirements",
      "Unanswered research questions",
    ],
    note: "Research findings and development decisions are managed through the private BOTANIQ™ ResearchHub.",
  },
  {
    n: "04",
    title: "Nutrition and Wellness Science",
    lead: "BOTANIQ explores the relationship between African botanicals, food ingredients, nutrition and everyday wellbeing. Our areas of interest include:",
    items: [
      "Cardiovascular and metabolic wellbeing",
      "Blood-sugar and weight-management research",
      "Micronutrient health",
      "Gut and microbiome health",
      "Digestive wellness",
      "Stress and sleep",
      "Healthy ageing",
      "Joint health and mobility",
      "Liver-health research",
      "Men's and women's wellness",
      "Energy and vitality",
    ],
    note: "These are research and innovation priorities—not claims that a BOTANIQ product prevents, treats or cures disease.",
  },
  {
    n: "05",
    title: "Formulation and Product Development",
    lead: "Promising research must eventually become something people can use safely and conveniently. Potential formats include:",
    items: [
      "Functional foods and nutrition products",
      "Botanical powders and drink sachets",
      "Gummies and botanical chews",
      "Oils and standardised extracts",
      "Ready-to-drink wellness shots",
      "Botanical oral-care products",
      "Infusions and beverage systems",
      "Everyday sensory and behavioural-wellness products",
    ],
    note: "Every formulation remains subject to ingredient compatibility, dosage review, sensory testing, stability, safety, manufacturing feasibility and regulatory assessment.",
  },
  {
    n: "06",
    title: "Safety, Quality and Validation",
    lead: "Safety comes before commercialisation. Depending on the product and intended use, BOTANIQ may coordinate qualified partners to conduct:",
    items: [
      "Botanical authentication",
      "Microbiological testing",
      "Heavy-metal and contaminant analysis",
      "Phytochemical assessment",
      "Toxicology and safety evaluation",
      "Stability and shelf-life testing",
      "Nutritional analysis",
      "Sensory and consumer testing",
      "Appropriate clinical or human evaluation",
    ],
    note: "We do not describe a product as clinically proven, completely safe or free from side effects without the appropriate evidence.",
  },
  {
    n: "07",
    title: "Regulatory and Claims Development",
    lead: "BOTANIQ works to ensure that product positioning and communication remain consistent with available evidence and applicable regulations.",
    items: [
      "Product classification",
      "Ingredient and formulation review",
      "Label and packaging assessment",
      "Evidence-supported claims",
      "Product documentation",
      "NAFDAC preparation in Nigeria",
      "Regulatory planning for selected international markets",
      "Quality and manufacturing requirements",
    ],
    note: "Our language is intentionally responsible. We use terms such as researching, evaluating, designed to support, evidence-informed, under development and subject to validation where appropriate.",
  },
  {
    n: "08",
    title: "Ethical Sourcing and African Value Creation",
    lead: "BOTANIQ aims to build traceable and responsible relationships with growers, communities, processors and botanical suppliers. We seek to support:",
    items: [
      "Ethical plant sourcing",
      "Sustainable cultivation and harvesting",
      "Botanical traceability",
      "Appropriate recognition of traditional knowledge",
      "Local research and scientific participation",
      "Responsible processing and manufacturing",
      "Skills development",
      "Meaningful economic value within Africa",
    ],
    note: "Our objective is not only to sell African botanicals globally, but to strengthen the scientific, intellectual and commercial systems surrounding them.",
  },
  {
    n: "09",
    title: "Partnerships and Commercialisation",
    lead: "BOTANIQ operates through a partnership-enabled model. We collaborate with:",
    items: [
      "Universities and research institutions",
      "Pharmacognosists and botanical scientists",
      "Nutrition and microbiome researchers",
      "Analytical and toxicology laboratories",
      "Food scientists and formulation specialists",
      "Clinical and consumer-research professionals",
      "Qualified manufacturers",
      "Regulatory advisers",
      "Growers and ingredient suppliers",
      "Distributors and market partners",
      "Responsible investors",
    ],
  },
];

const pathway = [
  "Discover",
  "Document",
  "Validate",
  "Formulate",
  "Test",
  "Regulate",
  "Commercialise",
];

export default function WhatWeDoPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 140 }}>
        <div>
          <p className="section-label">What We Do</p>
          <h1>
            Turning African Botanical Knowledge into Responsible Wellness
            Innovation
          </h1>
          <p>
            BOTANIQ WELLNESS™ researches African botanicals and traditional herbal
            knowledge (Agbo), evaluates their scientific potential and works with
            qualified partners to translate promising findings into safe,
            consistent and practical modern wellness solutions.
          </p>
        </div>
        <div className="page-botanical" aria-hidden>
          <span />
          <i />
          <i />
        </div>
      </section>

      <section className="claim-note" style={{ paddingBottom: 40 }}>
        <p>
          Our work connects botanical knowledge, scientific research, product
          development, quality systems and commercialisation.
        </p>
      </section>

      <section className="work-list">
        {workAreas.map((area) => (
          <article key={area.n}>
            <span>{area.n}</span>
            <div>
              <h3>{area.title}</h3>
              <p>{area.lead}</p>
              <ul>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {area.note && (
                <p style={{ marginTop: 18, fontStyle: "italic", color: "#718074" }}>
                  {area.note}
                </p>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="pathway">
        <h2>Our Development Pathway</h2>
        <div className="pathway-flow">
          {pathway.map((step, i) => (
            <span key={step}>
              {step}
              {i < pathway.length - 1 && <i> → </i>}
            </span>
          ))}
        </div>
        <p>
          Not every botanical idea will become a product. Each project must
          demonstrate sufficient evidence, safety, quality, relevance and
          commercial feasibility before progressing.
        </p>
      </section>

      <section className="claim-note">
        <p className="section-label">BOTANIQ WELLNESS™</p>
        <p>African botanical knowledge. Responsible science. Modern wellness.</p>
      </section>
    </>
  );
}
