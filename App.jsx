import React, { useState } from "react";
import PerfumeScene from "./PerfumeScene.jsx";

const fragranceFamilies = [
  {
    name: "Oud & woods",
    descriptor: "A deeper, warmer direction.",
    index: "01",
  },
  {
    name: "Florals",
    descriptor: "Soft notes with a little lift.",
    index: "02",
  },
  {
    name: "Fresh",
    descriptor: "A clear, easygoing feel.",
    index: "03",
  },
];

const shopLocations = ["Kunnamkulam", "Thrissur", "Kuttippuram"];
const phoneNumber = "+919847953894";
const whatsappUrl = "https://wa.me/919847953894";
const instagramUrl = "https://www.instagram.com/abeerperfumes_";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function App() {
  const [activeFamily, setActiveFamily] = useState(fragranceFamilies[0]);
  const [shopMode, setShopMode] = useState("Retail");
  const [menuOpen, setMenuOpen] = useState(false);

  const enquiryLabel = shopMode === "Wholesale" ? "wholesale" : "retail";
  const customScentUrl = `${whatsappUrl}?text=${encodeURIComponent(
    "Hi Abeer Perfumes, I’m interested in creating a customized scent.",
  )}`;

  return (
    <>
      <header className="masthead">
        <div className="container masthead__inner">
          <a className="wordmark" href="#home" aria-label="Abeer Perfumes home">
            <span className="wordmark__name">Abeer</span>
            <span className="wordmark__sub">Perfumes</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <nav
            className={`navigation${menuOpen ? " navigation--open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <a href="#collection" onClick={() => setMenuOpen(false)}>
              The collection
            </a>
            <a href="#trade" onClick={() => setMenuOpen(false)}>
              For retailers
            </a>
            <a className="navigation__action" href="#contact" onClick={() => setMenuOpen(false)}>
              Get in touch <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="container hero__inner">
            <div className="hero__copy">
              <h1 id="hero-title">A scent that feels like yours.</h1>
              <p className="hero__lede">
                Discover your next fragrance, create a custom scent, or stock your shelves.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#collection">
                  Explore the collection <ArrowIcon />
                </a>
                <a className="text-link" href="#contact">
                  Retail and wholesale enquiries
                </a>
              </div>
            </div>
            <div className="hero__stage" role="img" aria-label="Animated 3D perfume bottle">
              <div className="hero__stage-top">
                <span>01 / Abeer</span>
                <span>Fragrance, found your way</span>
              </div>
              <PerfumeScene />
              <p className="hero__stage-caption">A new point of view on fragrance.</p>
            </div>
          </div>
          <div className="hero__baseline" aria-hidden="true">
            <span>Kerala</span>
            <span>Retail / wholesale</span>
            <span>Explore by character</span>
          </div>
        </section>

        <section className="collection section-pad" id="collection" aria-labelledby="collection-title">
          <div className="container">
            <div className="section-heading collection__heading">
              <div>
                <h2 id="collection-title">A world of notes.</h2>
              </div>
              <p className="section-heading__aside">
                Start with a fragrance family. We’ll help you find what fits.
              </p>
            </div>

            <div className="family-grid" role="group" aria-label="Choose a fragrance family">
              {fragranceFamilies.map((family) => (
                <article
                  className="family-option"
                  key={family.name}
                  data-selected={activeFamily.name === family.name}
                >
                  <span className="family-option__index">{family.index}</span>
                  <span className="family-option__name">{family.name}</span>
                  <span className="family-option__descriptor">{family.descriptor}</span>
                  <button
                    className="family-option__select"
                    type="button"
                    aria-pressed={activeFamily.name === family.name}
                    onClick={() => setActiveFamily(family)}
                  >
                    {activeFamily.name === family.name ? "Selected" : "Explore family"}
                    <ArrowIcon />
                  </button>
                </article>
              ))}
            </div>

            <div className="collection-note" aria-live="polite">
              <span className="collection-note__rule" />
              <p>
                <strong>{activeFamily.name}</strong>: {activeFamily.descriptor} Ask us about
                the current selection.
              </p>
              <a className="text-link" href="#contact">
                Ask about this family <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="story" aria-labelledby="story-title">
          <div className="container story__inner">
            <figure
              className="story__photo"
              data-slot="perfume-photo"
              data-alt="A real Abeer perfume bottle photographed in soft natural light"
            >
              <img
                src="/images/fragrance-reference.jpg"
                width="1920"
                height="1440"
                alt="An unbranded ribbed glass perfume bottle with a dark cap on a pale shelf"
                sizes="(min-width: 60rem) 50vw, 100vw"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.closest("[data-slot]")?.remove();
                }}
              />
            </figure>
            <p className="story__caption">
              A reference image, not a product listing.
            </p>
            <div className="story__copy">
              <h2 id="story-title">The right scent is a feeling.</h2>
              <p className="story__body">
                Some days call for something light. Others linger a little longer. Begin
                with what draws you in, then explore from there.
              </p>
              <a className="text-link" href="#collection">
                Find your starting point <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="trade section-pad" id="trade" aria-labelledby="trade-title">
          <div className="container trade__inner">
            <div className="trade__intro">
              <h2 id="trade-title">For the everyday, and for the shop floor.</h2>
              <p>
                Looking for a personal fragrance or a range for your business? Tell us
                what you have in mind.
              </p>
            </div>
            <div className="trade__panel">
              <div className="mode-switch" role="group" aria-label="Choose how you shop">
                {["Retail", "Wholesale"].map((mode) => (
                  <button
                    className={shopMode === mode ? "mode-switch__option is-active" : "mode-switch__option"}
                    key={mode}
                    type="button"
                    aria-pressed={shopMode === mode}
                    onClick={() => setShopMode(mode)}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <div className="trade__answer" aria-live="polite">
                <span className="trade__number">{shopMode === "Retail" ? "01" : "02"}</span>
                <h3>{shopMode === "Retail" ? "A scent for you." : "A range for your business."}</h3>
                <p>
                  {shopMode === "Retail"
                    ? "Tell us what you usually reach for, or start with a fragrance family."
                    : "Let’s talk about the fragrances and quantities that suit your shelves."}
                </p>
              </div>
              <a
                className="button button--light"
                href="#contact"
              >
                Ask about {enquiryLabel} <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="custom-scent section-pad" id="custom-scents" aria-labelledby="custom-title">
          <div className="container custom-scent__inner">
            <div className="custom-scent__copy">
              <h2 id="custom-title">A fragrance of your own.</h2>
              <p>
                A scent can feel like a memory, a mood, or simply you. Talk with us
                about creating a customized fragrance that feels personal.
              </p>
              <a className="button button--primary" href={customScentUrl} target="_blank" rel="noreferrer">
                Create a custom scent <ArrowIcon />
              </a>
            </div>
            <div className="custom-scent__note" aria-hidden="true">
              <span className="custom-scent__note-index">AP / C</span>
              <span className="custom-scent__note-word">Yours,<br />by nature.</span>
              <span className="custom-scent__note-rule" />
              <span className="custom-scent__note-caption">Abeer Perfumes · Kerala</span>
            </div>
          </div>
        </section>

        <section className="locations section-pad" id="locations" aria-labelledby="locations-title">
          <div className="container locations__inner">
            <div className="locations__intro">
              <h2 id="locations-title">Meet us in Kerala.</h2>
              <p>Visit Abeer Perfumes in one of our shop locations.</p>
            </div>
            <ul className="locations__list">
              {shopLocations.map((location, index) => (
                <li className="locations__item" key={location}>
                  <span className="locations__index">0{index + 1}</span>
                  <a
                    className="locations__link"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Abeer Perfumes ${location}`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {location} <ArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
          <div className="container contact__inner">
            <div className="contact__copy">
              <h2 id="contact-title">Start a conversation.</h2>
              <p>
                Tell us about your {enquiryLabel} enquiry. We’ll take it from there.
              </p>
            </div>
            <div className="contact__details">
              <span className="contact__detail-label">Call or WhatsApp</span>
              <a className="contact__number" href={`tel:${phoneNumber}`}>
                +91 98479 53894
              </a>
              <a
                className="button button--primary"
                href={`${whatsappUrl}?text=${encodeURIComponent(`Hi Abeer Perfumes, I’m enquiring about ${enquiryLabel}.`)}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us <ArrowIcon />
              </a>
              <a className="contact__instagram" href={instagramUrl} target="_blank" rel="noreferrer">
                Follow on Instagram <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a className="wordmark wordmark--footer" href="#home">
            <span className="wordmark__name">Abeer</span>
            <span className="wordmark__sub">Perfumes</span>
          </a>
          <p className="footer__note">Fragrance for every way of being.</p>
          <div className="footer__links">
            <a href="#collection">Collection</a>
            <a href="#custom-scents">Custom scents</a>
            <a href="#locations">Our shops</a>
            <a href="#trade">Wholesale</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer__credit" data-credits>
            Photographs: <a href="https://commons.wikimedia.org/wiki/File:Perfume_glass_bottle.jpg">Santeri Viinamäki</a>
            (CC BY-SA 4.0, Wikimedia Commons)
          </p>
          <p className="footer__copyright">© Abeer Perfumes</p>
        </div>
      </footer>
    </>
  );
}

export default App;
