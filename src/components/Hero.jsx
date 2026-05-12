export default function Banner() {
  return (
    <section className="bx-hero">
      <div className="bx-hero__inner">
        <span className="bx-hero__chip">
          <span className="bx-hero__chip-dot" />
          official Support · live now
        </span>
        <h1 className="bx-hero__title">
          <span className="bx-hero__title-grad">Apple Support</span>
          <span className="bx-hero__title-tail" aria-hidden="true">
          
          </span>
        </h1>
        <p className="bx-hero__intro">
          Welcome — official Blix support. Secure help, clear guidance, and a
          calm place to get unstuck whenever you need us.
        </p>
        <div className="bx-hero__actions">
          <a className="bx-btn bx-btn--primary" href="tel:+1(866) 749-6190">
            <i className="bi bi-telephone-outbound" /> Call support
          </a>
          <a className="bx-btn bx-btn--ghost" href="#">
            Learn more <i className="bi bi-arrow-up-right" />
          </a>
        </div>
        <div className="bx-hero__stats" aria-hidden="true">
          <div className="bx-stat">
            <div className="bx-stat__num">24/7</div>
            <div className="bx-stat__label">Always here</div>
          </div>
          <div className="bx-stat">
            <div className="bx-stat__num">1m+</div>
            <div className="bx-stat__label">Sessions helped</div>
          </div>
          <div className="bx-stat">
            <div className="bx-stat__num">A+</div>
            <div className="bx-stat__label">Trusted care</div>
          </div>
        </div>
      </div>
      <div className="bx-hero__orb" aria-hidden="true" />
    </section>
  )
}
