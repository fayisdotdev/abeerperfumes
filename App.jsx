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
  {
    name: "Spiced",
    descriptor: "A little warmth with a lively edge.",
    index: "04",
  },
];

const products = [
  {
    name: "Abeer Royal Oud De Malabar",
    family: "Oud & woods",
    format: "100 ml Extrait de Parfum",
    price: 5499,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    notes: ["Wayanad cardamom, saffron", "Palakkad jasmine, rose", "Assam oud, sandalwood"],
  },
  {
    name: "Mulla Nights",
    family: "Florals",
    format: "100 ml Extrait de Parfum",
    price: 3899,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    notes: ["Green tea, bergamot", "Night jasmine, tuberose", "White musk, sandalwood"],
  },
  {
    name: "Ramacham Coastal Breeze",
    family: "Fresh",
    format: "100 ml Extrait de Parfum",
    price: 3499,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    notes: ["Sea salt, pink grapefruit", "Ramacham vetiver, neroli", "Cedarwood, amber"],
  },
  {
    name: "Wayanad Spice Route",
    family: "Spiced",
    format: "100 ml Extrait de Parfum",
    price: 4299,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    notes: ["Black pepper, nutmeg", "Cinnamon, clove", "Smoked vanilla, tonka"],
  },
  {
    name: "Imperial Travancore Sandalwood",
    family: "Oud & woods",
    format: "50 ml Concentrated Attar",
    price: 6200,
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
    notes: ["Sweet wood", "Sandalwood", "Earthy musk"],
  },
  {
    name: "Monsoon Petrichor & Lotus",
    family: "Fresh",
    format: "100 ml Extrait de Parfum",
    price: 3699,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    notes: ["Rain accord, pink lotus", "Mitti, fresh moss", "Clean amber, driftwood"],
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
  const [activeFamily, setActiveFamily] = useState(null);
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
                  data-selected={activeFamily?.name === family.name}
                >
                  <span className="family-option__index">{family.index}</span>
                  <span className="family-option__name">{family.name}</span>
                  <span className="family-option__descriptor">{family.descriptor}</span>
                  <button
                    className="family-option__select"
                    type="button"
                    aria-pressed={activeFamily?.name === family.name}
                    onClick={() => setActiveFamily(family)}
                  >
                    {activeFamily?.name === family.name ? "Selected" : "Explore family"}
                    <ArrowIcon />
                  </button>
                </article>
              ))}
            </div>

            <div className="collection-note" aria-live="polite">
              <span className="collection-note__rule" />
              <p>
                {activeFamily ? (
                  <>
                    <strong>{activeFamily.name}</strong>: {activeFamily.descriptor} Showing
                    matching scents.
                  </>
                ) : (
                  <>Showing all six fragrance concepts.</>
                )}
              </p>
              <a
                className="text-link"
                href="#products"
                onClick={() => setActiveFamily(null)}
              >
                Show all scents <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="products section-pad" id="products" aria-labelledby="products-title">
          <div className="container">
            <div className="section-heading products__heading">
              <div>
                <h2 id="products-title">Sample fragrance range.</h2>
              </div>
              <p className="section-heading__aside">
                Discover the perfume that feels like second nature and leaves an unforgettable impression.
              </p>
            </div>
            <div className="product-grid" aria-live="polite">
              {products
                .filter((product) => !activeFamily || product.family === activeFamily.name)
                .map((product) => (
                  <article className="product-card" key={product.name}>
                    <div className="product-card__visual">
                      <img
                        className="product-card__image"
                        src={product.image}
                        alt=""
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.remove();
                        }}
                      />
                    </div>
                    <div className="product-card__body">
                      <span className="product-card__family">{product.family}</span>
                      <h3 className="product-card__name">{product.name}</h3>
                      <p className="product-card__format">{product.format}</p>
                      <dl className="product-card__notes">
                        {product.notes.map((note, index) => (
                          <div key={note}>
                            <dt>{["Opening", "Heart", "Base"][index]}</dt>
                            <dd>{note}</dd>
                          </div>
                        ))}
                      </dl>
                      <div className="product-card__footer">
                        <span className="product-card__price">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        <a
                          className="text-link"
                          href={`${whatsappUrl}?text=${encodeURIComponent(
                            `Hi Abeer Perfumes, I’m interested in ${product.name}.`,
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ask about this scent <ArrowIcon />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
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
          <p className="footer__copyright">© Abeer Perfumes</p>
        </div>
      </footer>
    </>
  );
}

export default App;
