import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <Link className="brand footer-brand" href="/">
        <span className="brand-mark" aria-hidden="true">
          <i />
          <i />
        </span>
        <span>
          BOTANIQ <b>WELLNESS</b>
        </span>
      </Link>
      <p>
        Science Meets Tradition.
        <br />
        Everyday Botanical Wellness.
      </p>
      <div>
        <Link href="/about">About</Link>
        <Link href="/what-we-do">What We Do</Link>
        <Link href="/science">Research</Link>
        <Link href="/community-health">Community Health</Link>
        <Link href="/focus-areas">Focus Areas</Link>
        <Link href="/partnerships">Partnerships</Link>
        <Link href="/researchhub">ResearchHub</Link>
      </div>
      <small>
        © 2026 BOTANIQ WELLNESS™. All rights reserved.
        <br />
        Wellness information only; not medical advice.
      </small>
    </footer>
  );
}
