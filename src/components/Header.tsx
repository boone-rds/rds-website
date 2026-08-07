import rdsLogo from "../assets/logos/rds-logo-white-cropped.png";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Raney Day Solutions home">
        <img
          className="brand-logo"
          src={rdsLogo}
          alt="Raney Day Solutions"
        />
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#network">Network</a>
        <a href="#process">How We Work</a>
        <a href="#purpose">Purpose</a>
        <a href="#contact">Contact</a>

        <a
          className="utility-link"
          href="https://utilities.raneydaysolutions.com"
        >
          Utilities ↗
        </a>
      </nav>
    </header>
  );
}