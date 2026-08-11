import rdsLogo from "../assets/logos/rds-logo-white-cropped.png";

type HeaderProps = {
  onContactClick: () => void;
};

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Raney Day Solutions home">
        <img className="brand-logo" src={rdsLogo} alt="Raney Day Solutions" />
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#network">Network</a>
        <a href="#process">How We Work</a>
        <a href="#capabilities">What We Do</a>
        <a href="#purpose">Why We Do It</a>

        <button className="nav-contact" type="button" onClick={onContactClick}>
          Contact
        </button>

        <a
          className="utility-link"
          href="https://utilities.raneydaysolutions.com"
          target="_blank"
          rel="noreferrer"
        >
          Utilities ↗
        </a>
      </nav>
    </header>
  );
}
