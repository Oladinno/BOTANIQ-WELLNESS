import Link from "next/link";

export const metadata = { title: "Our Research" };

const philosophy = [
  {
    title: "Tradition informs the question",
    text: "Historical and community use may identify promising research directions.",
  },
  {
    title: "Science examines the answer",
    text: "Laboratory, nutritional, toxicological and human evidence must determine what conclusions are justified.",
  },
  {
    title: "Safety comes first",
    text: "Commercial potential never replaces the need for proper safety assessment.",
  },
  {
    title: "Evidence determines claims",
    text: "Product communication must not exceed the strength of the available evidence.",
  },
  {
    title: "Knowledge should create African value",
    text: "Research should strengthen African scientific capacity, intellectual property and responsible economic participation.",
  },
];

const framework = [
  {
    n: "01",
    title: "Define the Health Need",
    text: "We begin by examining a specific health, nutrition or wellness challenge—including the affected population, scale of need, existing interventions, cultural practices and scientific opportunities.",
  },
  {
    n: "02",
    title: "Discover and Document",
    text: "We identify plants, food ingredients and traditional preparations associated with the research area, documenting traditional names, botanical species, preparation methods and existing literature. Community knowledge provides direction, but it is not presented as clinical proof.",
  },
  {
    n: "03",
    title: "Authenticate the Botanical Material",
    text: "Working with qualified botanists, pharmacognosists, universities and laboratories, we aim to verify scientific name, plant part, geographic origin, processing conditions, identity and supply-chain traceability.",
  },
  {
    n: "04",
    title: "Evaluate the Evidence",
    text: "We assess ethnobotanical records, laboratory studies, preclinical research, human and clinical studies, safety reports and regulatory publications—considering study quality, limitations and unanswered questions.",
  },
  {
    n: "05",
    title: "Assess Safety and Quality",
    text: "Relevant evaluation may include microbiological testing, heavy-metal analysis, contaminant screening, phytochemical analysis, toxicology, allergen review, contraindications, interactions, dosage ranges and stability studies.",
  },
  {
    n: "06",
    title: "Develop the Formulation",
    text: "Qualified specialists help translate research into practical formulations, considering population, dosage, compatibility, bioavailability, sensory acceptance, format, packaging, stability and regulatory classification.",
  },
  {
    n: "07",
    title: "Test and Validate",
    text: "Concepts may undergo laboratory testing, nutritional analysis, stability testing, sensory evaluation, consumer-acceptance studies, usability studies, pilot research and appropriate human or clinical studies.",
  },
  {
    n: "08",
    title: "Review Before Commercialisation",
    text: "A concept progresses only after review of evidence, safety, quality, formulation, manufacturing readiness, regulatory requirements, claims language, intellectual property, commercial feasibility and ethical sourcing.",
  },
];

const priorities = [
  {
    title: "Cardiovascular and Metabolic Wellness",
    text: "Research relating to blood pressure, circulation, blood-sugar balance, lipid health, weight management and everyday nutrition.",
  },
  {
    title: "Micronutrient Health",
    text: "Exploring food, fortification and botanical approaches relevant to common vitamin and mineral gaps, including iron status and anaemia.",
  },
  {
    title: "Gut and Microbiome Health",
    text: "Investigating dietary fibre, plant diversity, fermentation, digestive regularity and the relationship between nutrition and beneficial gut microorganisms.",
  },
  {
    title: "Stress and Sleep",
    text: "Evaluating botanical and nutritional concepts that may support relaxation, sleep quality and everyday resilience.",
  },
  {
    title: "Healthy Ageing",
    text: "Research focused on muscle maintenance, mobility, cognition, energy, nutritional adequacy and healthy ageing.",
  },
  {
    title: "Joint and Mobility Wellness",
    text: "Studying nutritional and botanical candidates with potential applications in movement, comfort and physical function.",
  },
  {
    title: "Liver-Health Research",
    text: "Examining normal liver function, oxidative stress and relevant nutritional or botanical pathways without making misleading “detox” claims.",
  },
  {
    title: "Men's Health and Vitality",
    text: "Responsible research relating to metabolic health, energy, libido, sexual wellbeing, erectile function, stamina and healthy testosterone support.",
  },
  {
    title: "Women's Health",
    text: "Research into life-stage nutrition and carefully evaluated botanical support for women's everyday wellbeing.",
  },
];

const hubModules = [
  "Health Problem Portfolios",
  "Botanical profiles and monographs",
  "Traditional-use documentation",
  "Scientific publications",
  "Evidence assessments",
  "Laboratory findings",
  "Safety and toxicology records",
  "Formulation documents",
  "Product-development decisions",
  "Regulatory files",
  "Intellectual-property records",
  "Partner contributions",
  "Project progress",
];

const disciplines = [
  "Ethnobotany",
  "Pharmacognosy",
  "Natural-products research",
  "Nutrition science",
  "Microbiome and fermentation science",
  "Analytical testing",
  "Toxicology and safety",
  "Product formulation",
  "Clinical and consumer research",
  "Regulatory science",
];

export default function SciencePage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 140 }}>
        <div>
          <p className="section-label">Our Research</p>
          <h1>
            Questions First.
            <br />
            Evidence Before Claims.
          </h1>
          <p>
            BOTANIQ WELLNESS™ researches how African botanical resources,
            traditional knowledge and nutrition science may contribute to safe,
            relevant and practical modern wellness solutions.
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
          <p className="section-label">Our Research Philosophy</p>
          <h2>
            African botanical knowledge deserves both respect and rigorous
            scientific investigation.
          </h2>
        </div>
        <div>
          <p>
            Traditional herbal knowledge (Agbo) helps us identify important
            plants, practices and research questions. However, traditional use
            alone does not establish safety, effectiveness, quality or
            appropriate dosage.
          </p>
          <p style={{ marginTop: 28 }}>
            Our responsibility is to examine each opportunity systematically—
            combining cultural knowledge with botanical authentication,
            scientific evidence, safety assessment, formulation and appropriate
            validation.
          </p>
          <p style={{ marginTop: 28 }}>
            <Link href="/community-health" className="text-link">
              Explore Community Health Intelligence →
            </Link>
          </p>
        </div>
      </section>

      <section className="values">
        {philosophy.map((item) => (
          <article key={item.title}>
            <span>PRINCIPLE</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="work-list">
        <div style={{ gridColumn: "1 / -1", marginBottom: 20 }}>
          <p className="section-label">Our Research Framework</p>
          <h2 style={{ color: "var(--forest)", fontSize: "clamp(36px,4vw,56px)" }}>
            A structured development pathway.
          </h2>
        </div>
        {framework.map((step) => (
          <article key={step.n}>
            <span>{step.n}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="area-directory">
        {priorities.map((item, i) => (
          <article key={item.title}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="pathway">
        <h2>Project-Based Research</h2>
        <p style={{ marginBottom: 20 }}>
          BOTANIQ organises research around clearly defined projects. Each
          project should establish the health problem, target population,
          candidate botanicals, existing evidence, evidence gaps, safety
          questions, proposed applications, required partners, regulatory
          considerations and clear progression or stop decisions.
        </p>
        <p>
          Our initial priority programme is <strong>Project 001: Hypertension
          and Cardiovascular Wellness</strong>. It remains a research
          programme—not a claim that a BOTANIQ product treats or prevents
          hypertension.
        </p>
      </section>

      <section className="institute-page">
        <p className="section-label light">BOTANIQ™ ResearchHub</p>
        <h2>Private research and innovation management</h2>
        <p>
          Access is limited to authorised BOTANIQ researchers, advisers and
          approved collaborators. Research records, formulations and confidential
          project information are not publicly accessible.
        </p>
        <div>
          {hubModules.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="institute-page" style={{ background: "var(--forest)", paddingTop: 80 }}>
        <p className="section-label light">Proposed BOTANIQ™ Institute</p>
        <h2>Institute of Botanical &amp; Nutritional Sciences</h2>
        <p>
          Until it is formally established, the Institute remains a proposed
          BOTANIQ initiative supporting interdisciplinary scientific work.
        </p>
        <div>
          {disciplines.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="statement">
        <p>Our Research Commitment</p>
        <h2>
          Tradition may reveal the possibility. Science must determine the
          responsible path forward.
        </h2>
      </section>
    </>
  );
}
