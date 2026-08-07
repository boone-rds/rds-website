import Header from "./components/Header";
import rdsLogo from "./assets/logos/rds-logo-white.png";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">RANEY DAY SOLUTIONS</p>

            <h1>We solve problems.</h1>

            <p className="hero-lead">
              Through people, systems, technology, and stewardship.
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
              <p className="statement-counterpoint">Not the other way around.</p>

              <p className="statement-copy">
                We don't begin with a product to sell. We begin by understanding the
                problem, the people affected by it, and what a useful outcome actually
                looks like.
              </p>
            </div>
          </div>
        </section>

        <section className="network" id="network">
          <div className="section-heading">
            <p className="eyebrow">THE RDS NETWORK</p>
            <h2>Different organizations. Shared relationships. Shared purpose.</h2>
          </div>

          <div className="company-grid">
            <article className="company-card">
              <span className="relationship">Core</span>
              <h3>Raney Day Solutions</h3>
              <p>
                The shared systems, technology, and problem-solving engine behind
                the network.
              </p>
            </article>

            <article className="company-card">
              <span className="relationship">An RDS Company</span>
              <h3>Aqua Intelligence</h3>
              <p>
                Water intelligence that turns monitoring and field data into
                practical decisions.
              </p>
            </article>

            <article className="company-card">
              <span className="relationship">Sister Company</span>
              <h3>Soil-Right Consulting Services</h3>
              <p>
                Independent agronomic consulting and agricultural intelligence
                built around better decisions from the ground up.
              </p>
            </article>
          </div>
        </section>

        <section className="process" id="process">
          <div className="section-heading">
            <p className="eyebrow">HOW WE WORK</p>
            <h2>Understand. Connect. Build. Steward.</h2>
          </div>

          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Understand</h3>
              <p>Get close enough to the problem to understand what is real.</p>
            </article>

            <article>
              <span>02</span>
              <h3>Connect</h3>
              <p>
                Bring together the right people, information, technology, and
                experience.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Build</h3>
              <p>Create the simplest useful solution that solves the real problem.</p>
            </article>

            <article>
              <span>04</span>
              <h3>Steward</h3>
              <p>Improve, maintain, and multiply what works.</p>
            </article>
          </div>
        </section>

        <section className="capabilities">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Build. Operate. Advise.</h2>
          </div>

          <div className="capability-grid">
            <article>
              <h3>Build</h3>
              <p>
                Software, tools, workflows, products, and companies built around
                real problems.
              </p>
            </article>

            <article>
              <h3>Operate</h3>
              <p>
                Systems, shared services, data, and process that make organizations
                work better.
              </p>
            </article>

            <article>
              <h3>Advise</h3>
              <p>
                Strategy and problem-solving where technology, operations,
                business, and people intersect.
              </p>
            </article>
          </div>
        </section>

        <section className="purpose" id="purpose">
          <p className="eyebrow">WHY WE WORK</p>
          <h2>Our work is not the point. Faithfulness is.</h2>
          <p>
            Raney Day Solutions exists to honor God through the way we work, the
            way we treat people, and the way we steward the opportunities entrusted
            to us.
          </p>
        </section>

        <section className="contact" id="contact">
          <h2>Have a problem worth solving?</h2>
          <p>
            We like complicated problems, especially the ones that do not fit
            neatly inside someone else's service offering.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="mailto:boone@raneydaysolutions.com"
            >
              Start a Conversation
            </a>

            <a
              className="button button-secondary"
              href="https://utilities.raneydaysolutions.com"
            >
              RDS Utilities
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;