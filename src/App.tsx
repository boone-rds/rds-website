import "./App.css";
import aquaintMark from "./assets/logos/aquaint-mark.png";
import rdsLogo from "./assets/logos/rds-logo-white.png";
import rdsMark from "./assets/logos/rds-mark.png";
import srcsMark from "./assets/logos/srcs-mark.png";
import Header from "./components/Header";

import { useEffect, useState } from "react";

function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.85);
    };

    handleScroll(); // Check on mount

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!showContactModal) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowContactModal(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showContactModal]);

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">RANEY DAY SOLUTIONS</p>

            <h1>We solve problems.</h1>

            <p className="hero-lead">
              By brining together the right people, information, systems, and
              technology.
            </p>

            <p className="hero-purpose">For the glory of God.</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#network">
                Explore the RDS Network
              </a>

              <a className="button button-secondary" href="#contact">
                Start a Conversation
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one">
              <span className="satellite satellite-one" />
            </div>

            <div className="orbit orbit-two">
              <span className="satellite satellite-two" />
            </div>

            <div className="orbit orbit-three">
              <span className="satellite satellite-three" />
            </div>

            <div className="hero-globe">
              <img src={rdsLogo} alt="RDS Logo" />
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="statement-inner">
            <p className="statement-eyebrow">HOW WE THINK</p>

            <h2>
              The problem defines
              <br />
              the solution.
            </h2>

            <div className="statement-detail">
              <p className="statement-counterpoint">
                Not the other way around.
              </p>

              <p className="statement-copy">
                We don&apos;t begin with a product to sell. We begin by
                understanding the problem, the people affected by it, and the
                outcome that actually matters.
              </p>
            </div>
          </div>
        </section>

        <section className="network" id="network">
          <div className="section-heading network-heading">
            <p className="eyebrow">THE RDS NETWORK</p>

            <h2>
              Different organizations.
              <br />
              Shared purpose.
            </h2>

            <p className="section-intro">
              Raney Day Solutions builds and supports organizations around
              specific problems, industries, and opportunities. Each brings
              focused expertise while sharing relationships, systems, and a
              commitment to excellent work.
            </p>
          </div>

          <div className="company-grid">
            <article className="company-card company-card-rds">
              <div className="company-card-top">
                <span className="relationship">Core</span>
                <img
                  className="company-mark company-mark-rds"
                  src={rdsMark}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3>Raney Day Solutions</h3>
                <p>
                  The systems, technology, operations, and problem-solving
                  engine that connects the network.
                </p>
              </div>

              <a href="#" className="company-link">
                About RDS <span aria-hidden="true">→</span>
              </a>
            </article>

            <article className="company-card company-card-aquaint">
              <div className="company-card-top">
                <span className="relationship">An RDS Company</span>
                <img
                  className="company-mark company-mark-aquaint"
                  src={aquaintMark}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3>Aqua Intelligence</h3>
                <p>
                  Water intelligence that turns field monitoring and complex
                  data into practical decisions.
                </p>
              </div>

              <a
                href="https://aquaint.io"
                className="company-link"
                target="_blank"
                rel="noreferrer"
              >
                Visit AquaINT <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="company-card company-card-properties">
              <div className="company-card-top">
                <span className="relationship">RDS Business</span>
                <span
                  className="company-node company-node-properties"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3>Raney Day Properties</h3>
                <p>
                  Real estate solutions built around creative financing,
                  responsible stewardship, and helping people move confidently
                  into their next chapter.
                </p>
              </div>

              <span className="company-link company-link-muted">
                Coming soon
              </span>
            </article>

            <article className="company-card company-card-srcs">
              <div className="company-card-top">
                <span className="relationship">Sister Company</span>
                <img
                  className="company-mark company-mark-srcs"
                  src={srcsMark}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3>Soil-Right Consulting Services</h3>
                <p>
                  Independent agronomic consulting and agricultural intelligence
                  built around better decisions from the ground up.
                </p>
              </div>

              <a
                href="https://soilright.com"
                className="company-link"
                target="_blank"
                rel="noreferrer"
              >
                Visit Soil-Right <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </section>

        <section className="process" id="process">
          <div className="section-heading process-heading">
            <p className="eyebrow">HOW WE WORK</p>

            <h2>
              Understand.
              <br />
              Connect.
              <br />
              Build.
              <br />
              Steward.
            </h2>

            <p className="section-intro">
              Good solutions rarely begin with the answer. They begin by getting
              close enough to the problem to understand what is actually
              happening.
            </p>
          </div>

          <div className="process-line" aria-hidden="true" />

          <div className="process-grid">
            <article>
              <span className="process-number">01</span>
              <div className="process-node" aria-hidden="true" />
              <h3>Understand</h3>
              <p>
                Learn the problem, the people, the constraints, and the outcome
                that actually matters.
              </p>
            </article>

            <article>
              <span className="process-number">02</span>
              <div className="process-node" aria-hidden="true" />
              <h3>Connect</h3>
              <p>
                Bring together the right people, information, systems,
                technology, and experience.
              </p>
            </article>

            <article>
              <span className="process-number">03</span>
              <div className="process-node" aria-hidden="true" />
              <h3>Build</h3>
              <p>
                Create the simplest useful solution that solves the real problem
                without adding unnecessary complexity.
              </p>
            </article>

            <article>
              <span className="process-number">04</span>
              <div className="process-node" aria-hidden="true" />
              <h3>Steward</h3>
              <p>
                Improve what works, care for what has been entrusted to us, and
                multiply the value created.
              </p>
            </article>
          </div>
        </section>

        <section className="capabilities">
          <div className="section-heading capability-heading">
            <p className="eyebrow">WHAT WE DO</p>

            <h2>
              Build.
              <br />
              Operate.
              <br />
              Advise.
            </h2>

            <p className="section-intro">
              The form of the solution changes with the problem. Sometimes we
              build something new. Sometimes we make an existing system work
              better. Sometimes we help people see the path forward.
            </p>
          </div>

          <div className="capability-grid">
            <article className="capability-item">
              <div className="capability-top">
                <span className="capability-number">01</span>
                <span className="capability-symbol">+</span>
              </div>

              <h3>Build</h3>

              <p className="capability-summary">
                Create what the problem actually needs.
              </p>

              <p className="capability-copy">
                Software, internal tools, workflows, products, operating
                systems, and companies built around real-world problems.
              </p>
            </article>

            <article className="capability-item">
              <div className="capability-top">
                <span className="capability-number">02</span>
                <span className="capability-symbol">↻</span>
              </div>

              <h3>Operate</h3>

              <p className="capability-summary">
                Make good ideas work in the real world.
              </p>

              <p className="capability-copy">
                Shared services, technology, data, processes, and operational
                support that help organizations execute consistently.
              </p>
            </article>

            <article className="capability-item">
              <div className="capability-top">
                <span className="capability-number">03</span>
                <span className="capability-symbol">→</span>
              </div>

              <h3>Advise</h3>

              <p className="capability-summary">
                Help people see the problem more clearly.
              </p>

              <p className="capability-copy">
                Strategy and practical problem-solving where business,
                technology, operations, data, and people intersect.
              </p>
            </article>
          </div>
        </section>

        <section className="purpose" id="purpose">
          <div className="purpose-inner">
            <p className="eyebrow">WHY WE WORK</p>

            <h2>
              Our work is not the point.
              <br />
              Faithfulness is.
            </h2>

            <div className="purpose-content">
              <p className="purpose-lead">
                Raney Day Solutions exists to honor God through the way we work,
                the way we treat people, and the way we steward the
                opportunities entrusted to us.
              </p>

              <div className="purpose-principles">
                <article>
                  <span>01</span>
                  <h3>Excellent work</h3>
                  <p>
                    We believe doing things well is part of the witness. Care,
                    precision, and follow-through matter.
                  </p>
                </article>

                <article>
                  <span>02</span>
                  <h3>Honest relationships</h3>
                  <p>
                    People are more important than transactions. We want trust
                    to outlast the work itself.
                  </p>
                </article>

                <article>
                  <span>03</span>
                  <h3>Responsible stewardship</h3>
                  <p>
                    Time, money, people, opportunities, and influence are things
                    to be handled carefully, not merely used.
                  </p>
                </article>
              </div>

              <p className="purpose-close">
                Whatever we build, we want the fruit of it to matter beyond
                ourselves.
              </p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <p className="contact-eyebrow">START A CONVERSATION</p>

            <h2>Have a problem worth solving?</h2>

            <div className="contact-bottom">
              <p>
                We&apos;re at our best with complicated problems, especially the
                ones that don&apos;t fit neatly inside someone else&apos;s
                service offering.
              </p>

              <button
                className="button contact-button"
                type="button"
                onClick={() => setShowContactModal(true)}
              >
                Start a Conversation <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <p className="footer-name">Raney Day Solutions</p>
              <p className="footer-tagline">
                Solve well. Steward faithfully. Glorify God.
              </p>
            </div>

            <div className="footer-columns">
              <div className="footer-column">
                <p className="footer-heading">Network</p>

                <a href="https://aquaint.io" target="_blank" rel="noreferrer">
                  Aqua Intelligence ↗
                </a>

                <span>Raney Day Properties</span>

                <a
                  href="https://soilright.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Soil-Right ↗
                </a>
              </div>

              <div className="footer-column">
                <p className="footer-heading">RDS</p>

                <a href="#network">Network</a>
                <a href="#process">How We Work</a>
                <a href="#purpose">Purpose</a>
                <a href="#contact">Contact</a>
              </div>

              <div className="footer-column">
                <p className="footer-heading">Internal</p>

                <a
                  href="https://utilities.raneydaysolutions.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  RDS Utilities ↗
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Raney Day Solutions, Inc.</span>

            <span>Built to solve real problems.</span>
          </div>
        </footer>

        {showContactModal && (
          <div
            className="contact-modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setShowContactModal(false);
              }
            }}
          >
            <div
              className="contact-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
            >
              <button
                className="contact-modal-close"
                type="button"
                onClick={() => setShowContactModal(false)}
                aria-label="Close contact form"
              >
                ×
              </button>

              <p className="contact-modal-eyebrow">START A CONVERSATION</p>

              <h2 id="contact-modal-title">
                What problem are you trying to solve?
              </h2>

              <p className="contact-modal-intro">
                Tell us a little about what you&apos;re working through.
                We&apos;ll take it from there.
              </p>

              <form
                className="contact-modal-form"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="contact-modal-row">
                  <label>
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label>
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>Company / Organization</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                  />
                </label>

                <label>
                  <span>Tell us about the problem</span>
                  <textarea name="problem" rows={5} required />
                </label>

                <button className="button contact-modal-submit" type="submit">
                  Send Message <span aria-hidden="true">→</span>
                </button>
              </form>

              <div className="contact-modal-options">
                <div>
                  <p>Prefer email?</p>
                  <a href="mailto:boone@raneydaysolutions.com">
                    Email us <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div>
                  <p>Ready to talk?</p>
                  <a
                    href="https://calendly.com/YOUR-CALENDLY-LINK"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Schedule a conversation <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      </main>
    </>
  );
}

export default App;
