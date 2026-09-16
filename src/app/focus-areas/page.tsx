export const metadata = { title: "Focus Areas" };

const areas = [
  {
    n: "01",
    title: "Cardiovascular Wellness",
    text: "We investigate botanical and nutritional approaches relevant to healthy blood pressure, circulation, cholesterol and lipid health, vascular function, heart-supportive nutrition and everyday cardiovascular wellbeing.",
    note: "Our initial priority programme, Project 001: Hypertension and Cardiovascular Wellness, examines relevant health needs, candidate botanicals, nutrition strategies, safety considerations and potential applications.",
  },
  {
    n: "02",
    title: "Type 2 Diabetes and Glycaemic Health",
    text: "We explore evidence-informed approaches relating to blood-sugar balance, insulin sensitivity, post-meal glucose response, dietary fibre, carbohydrate quality, weight and metabolic health.",
    note: "Any future formulation would require careful assessment of dosage, safety and possible interactions with diabetes medicines.",
  },
  {
    n: "03",
    title: "Weight Management and Metabolic Health",
    text: "Our research considers fullness and appetite, protein and dietary fibre, energy intake, food quality, physical activity, sleep and stress, and metabolic function.",
    note: "BOTANIQ does not promote unrealistic rapid-weight-loss or “fat-burning” promises.",
  },
  {
    n: "04",
    title: "Micronutrient Health",
    text: "We study food, fortification and botanical approaches relevant to common vitamin and mineral gaps—including iron, zinc, vitamins A, D and B12, folate, calcium, magnesium and iodine.",
  },
  {
    n: "05",
    title: "Anaemia Research",
    text: "Our work may examine dietary iron intake, iron absorption and bioavailability, folate and vitamin B12, nutritional causes of anaemia, food-based approaches and population-specific needs.",
    note: "Anaemia can have different causes and requires appropriate diagnosis. It should not automatically be treated with iron or herbal products.",
  },
  {
    n: "06",
    title: "Gut and Microbiome Health",
    text: "We investigate how food and botanical diversity may influence beneficial gut microorganisms, digestive regularity, dietary-fibre intake, prebiotic function, fermentation, gut-barrier health and individual responses to foods and fibres.",
  },
  {
    n: "07",
    title: "Stress and Sleep",
    text: "BOTANIQ explores responsible botanical, nutritional and behavioural approaches designed to support relaxation, sleep quality, everyday stress management, mental resilience and healthy routines.",
    note: "We distinguish everyday wellness support from the diagnosis or treatment of anxiety, depression and sleep disorders.",
  },
  {
    n: "08",
    title: "Healthy Ageing",
    text: "Our research considers muscle maintenance, strength and mobility, bone health, cognitive wellbeing, digestive health, energy metabolism, adequate protein and micronutrients, and healthy everyday function.",
  },
  {
    n: "09",
    title: "Joint Health and Mobility",
    text: "We evaluate nutritional and botanical candidates with potential applications in joint comfort, mobility, physical function, recovery and healthy inflammatory balance.",
  },
  {
    n: "10",
    title: "Liver-Health Research",
    text: "We study nutrition, oxidative stress and botanical pathways relevant to normal liver function.",
    note: "We avoid vague or misleading “detox” claims. A botanical product cannot simply neutralise alcohol, reverse liver damage or replace medical care.",
  },
  {
    n: "11",
    title: "Men's Health and Vitality",
    text: "BOTANIQ conducts responsible research relating to energy and vitality, metabolic health, libido, erectile function, sexual stamina, premature ejaculation, healthy testosterone support and age-related nutritional needs.",
    note: "Male sexual-health difficulties may reflect cardiovascular, hormonal, neurological, psychological or medication-related factors. Responsible development requires careful safety and clinical considerations.",
  },
  {
    n: "12",
    title: "Women's Health",
    text: "We explore nutrition and carefully evaluated botanical approaches relevant to life-stage nutrition, menstrual wellbeing, energy and micronutrient status, metabolic health, healthy ageing and menopausal wellbeing.",
  },
];

const standard = [
  "Health-need assessment",
  "Evidence review",
  "Botanical authentication",
  "Safety evaluation",
  "Formulation",
  "Testing",
  "Regulatory review",
];

export default function FocusAreasPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingTop: 140 }}>
        <div>
          <p className="section-label">Wellness Focus Areas</p>
          <h1>
            Major Health Needs.
            <br />
            Locally Relevant Research.
          </h1>
          <p>
            BOTANIQ WELLNESS™ concentrates on high-impact areas where African
            botanical resources, nutrition science and responsible product
            development may offer meaningful opportunities.
          </p>
        </div>
        <div className="page-botanical" aria-hidden>
          <span />
          <i />
          <i />
        </div>
      </section>

      <section className="claim-note" style={{ paddingBottom: 30 }}>
        <p>
          These focus areas guide our research priorities, scientific partnerships
          and innovation pipeline. They do not represent claims that an existing
          BOTANIQ product prevents, diagnoses, treats or cures any condition.
        </p>
      </section>

      <section className="work-list">
        {areas.map((area) => (
          <article key={area.n}>
            <span>{area.n}</span>
            <div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              {area.note && (
                <p style={{ marginTop: 14, fontStyle: "italic", color: "#718074" }}>
                  {area.note}
                </p>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="pathway">
        <h2>Our Standard</h2>
        <div className="pathway-flow">
          {standard.map((step, i) => (
            <span key={step}>
              {step}
              {i < standard.length - 1 && <i> → </i>}
            </span>
          ))}
        </div>
        <p>
          Not every research opportunity will become a product. BOTANIQ will
          progress only those concepts that demonstrate sufficient evidence,
          safety, relevance, quality and responsible commercial potential.
        </p>
      </section>

      <section className="statement">
        <p>Our focus</p>
        <h2>
          Our focus is not on making the strongest promise. It is on building the
          most credible path forward.
        </h2>
      </section>
    </>
  );
}
