export default function GlobalNav() {
  const links = ['milxya', 'milxy', 'milx', 'Watch', 'TV', 'Music', 'Support']
  return (
    <header className="bx-topbar">
      <div className="bx-topbar__inner">
        <a href="#" className="bx-brand" aria-label="Blixu">
          <span className="bx-brand__dot" />
          <span className="bx-brand__text">Support</span>
        </a>
        <nav className="bx-nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l} href="#" className="bx-nav__link">
              {l}
            </a>
          ))}
        </nav>
        <div className="bx-topbar__actions">
          <button
            type="button"
            className="bx-icon-btn"
            aria-label="Search Blixu.com"
          >
            <i className="bi bi-search" />
          </button>
          <button
            type="button"
            className="bx-icon-btn"
            aria-label="Shopping Bag"
          >
            <i className="bi bi-bag" />
            <span className="bx-icon-btn__dot" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
