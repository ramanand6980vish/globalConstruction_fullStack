import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../cssFiles/home.css";

const slides = [
  {
    eyebrow: "BUILDING A BETTER TOMORROW",
    title: "Building Today.\nShaping Tomorrow.",
    description:
      "Delivering dependable construction, modern infrastructure, and thoughtfully engineered spaces for a better future.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85",
    button: "Explore Our Services",
    secondary: "Contact Our Team",
  },
  {
    eyebrow: "ENGINEERED FOR EXCELLENCE",
    title: "Turning Vision\nInto Reality.",
    description:
      "From planning to project completion, we bring expertise, quality, and attention to every detail.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    button: "Discover Our Work",
    secondary: "Get In Touch",
  },
  {
    eyebrow: "INFRASTRUCTURE THAT LASTS",
    title: "Strong Foundations.\nLasting Impact.",
    description:
      "Creating practical, future-ready spaces through responsible construction and a commitment to quality.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85",
    button: "Our Capabilities",
    secondary: "Talk To Us",
  },
];

const services = [
  {
    number: "01",
    icon: "▥",
    title: "Commercial Construction",
    description:
      "Functional commercial spaces designed around performance, quality, and long-term value.",
  },
  {
    number: "02",
    icon: "⌂",
    title: "Residential Construction",
    description:
      "Thoughtfully planned residential spaces built around comfort, reliability, and practical design.",
  },
  {
    number: "03",
    icon: "▤",
    title: "Civil Engineering",
    description:
      "Engineering-focused construction solutions with attention to planning and execution.",
  },
  {
    number: "04",
    icon: "⚙",
    title: "Project Management",
    description:
      "Coordinated project planning, progress monitoring, and resource management.",
  },
  {
    number: "05",
    icon: "⌁",
    title: "Infrastructure Development",
    description:
      "Infrastructure solutions focused on usability, durability, and future requirements.",
  },
  {
    number: "06",
    icon: "✓",
    title: "Quality & Safety",
    description:
      "A commitment to responsible practices, careful execution, and quality-conscious delivery.",
  },
];

const projects = [
  {
    category: "COMMERCIAL",
    title: "Modern Commercial Complex",
    location: "Commercial Development",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "INFRASTRUCTURE",
    title: "Urban Infrastructure",
    location: "Infrastructure Development",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "ENGINEERING",
    title: "Contemporary Architecture",
    location: "Building Construction",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=80",
  },
];

const testimonials = [
  {
    quote:
      "Clear communication, organized planning, and a professional approach make a real difference in construction projects.",
    name: "Client Feedback",
    role: "Project Collaboration",
  },
  {
    quote:
      "A successful project depends on teamwork, thoughtful execution, and attention to the smallest details.",
    name: "Project Partner",
    role: "Construction & Engineering",
  },
  {
    quote:
      "Reliable coordination and a strong focus on quality help create better project outcomes.",
    name: "Industry Partner",
    role: "Project Delivery",
  },
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`home-section-heading ${light ? "light" : ""}`}>
      <span className="home-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openContact = () => scrollTo("contact");

  return (
    <div className="home-page">
      {/* TOP INFORMATION BAR */}
      <div className="home-topbar">
        <div className="home-container home-topbar-inner">
          <div className="home-topbar-left">
            <span>Building with purpose. Delivering with care.</span>
          </div>

          <div className="home-topbar-right">
            <span>Construction</span>
            <span className="home-topbar-divider">|</span>
            <span>Engineering</span>
            <span className="home-topbar-divider">|</span>
            <span>Infrastructure</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <header className="home-navbar">
        <div className="home-container home-navbar-inner">
          <button
            className="home-brand"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="GlobalConstruction home"
          >
            <span className="home-brand-mark">
              <span className="home-brand-mark-top" />
              <span className="home-brand-mark-bottom" />
            </span>

            <span className="home-brand-text">
              <strong>GLOBAL</strong>
              <span>CONSTRUCTION</span>
            </span>
          </button>

          <button
            className="home-mobile-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((previous) => !previous)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            className={`home-nav-links ${mobileMenuOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            <button type="button" onClick={() => scrollTo("home")}>
              Home
            </button>
            <button type="button" onClick={() => scrollTo("about")}>
              About Us
            </button>
            <button type="button" onClick={() => scrollTo("services")}>
              Services
            </button>
            <button type="button" onClick={() => scrollTo("projects")}>
              Projects
            </button>
            <button type="button" onClick={() => scrollTo("videos")}>
              Our Work
            </button>
            <button type="button" onClick={openContact}>
              Contact
            </button>

            <button
              type="button"
              className="home-nav-cta"
              onClick={openContact}
            >
              Let's Discuss <span>↗</span>
            </button>
          </nav>
        </div>
      </header>

      {/* HERO CAROUSEL */}
      <section className="home-hero" id="home">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`home-hero-slide ${
              index === activeSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url("${slide.image}")` }}
            aria-hidden={index !== activeSlide}
          >
            <div className="home-hero-overlay" />

            <div className="home-container home-hero-content">
              <div className="home-hero-copy">
                <div className="home-hero-eyebrow">
                  <span className="home-eyebrow-line" />
                  {slide.eyebrow}
                </div>

                <h1>
                  {slide.title.split("\n").map((line, lineIndex) => (
                    <React.Fragment key={line}>
                      {line}
                      {lineIndex === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h1>

                <p>{slide.description}</p>

                <div className="home-hero-actions">
                  <button
                    type="button"
                    className="home-button home-button-primary"
                    onClick={() => scrollTo("services")}
                    tabIndex={index === activeSlide ? 0 : -1}
                  >
                    {slide.button} <span>↗</span>
                  </button>

                  <button
                    type="button"
                    className="home-button home-button-outline"
                    onClick={openContact}
                    tabIndex={index === activeSlide ? 0 : -1}
                  >
                    {slide.secondary}
                  </button>
                </div>

                <div className="home-hero-trust">
                  <span className="home-trust-icon">✓</span>
                  <span>Built on planning, teamwork, and quality</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="home-hero-bottom">
          <div className="home-container home-hero-bottom-inner">
            <div className="home-carousel-controls">
              <button
                type="button"
                className="home-carousel-arrow"
                aria-label="Previous slide"
                onClick={() => goToSlide(activeSlide - 1)}
              >
                ←
              </button>

              <div className="home-carousel-dots">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={index === activeSlide ? "active" : ""}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === activeSlide ? "true" : undefined}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="home-carousel-arrow"
                aria-label="Next slide"
                onClick={() => goToSlide(activeSlide + 1)}
              >
                →
              </button>
            </div>

            <div className="home-hero-slide-count">
              <strong>0{activeSlide + 1}</strong>
              <span>/ 0{slides.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT MARQUEE */}
      <div className="home-marquee" aria-label="Our values">
        <div className="home-marquee-track">
          {[0, 1].map((copy) => (
            <div className="home-marquee-group" key={copy} aria-hidden={copy === 1}>
              <span>BUILD WITH CONFIDENCE</span>
              <i>✦</i>
              <span>ENGINEERED FOR THE FUTURE</span>
              <i>✦</i>
              <span>QUALITY IN EVERY DETAIL</span>
              <i>✦</i>
              <span>STRONGER FOUNDATIONS</span>
              <i>✦</i>
            </div>
          ))}
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="home-intro section-padding" id="about">
        <div className="home-container home-intro-grid">
          <div className="home-intro-visual">
            <div className="home-intro-image-main">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=85"
                alt="Architectural building design and construction"
                loading="lazy"
              />
            </div>

            <div className="home-intro-image-small">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                alt="Construction professionals at work"
                loading="lazy"
              />
            </div>

            <div className="home-intro-caption">
              <span className="home-intro-caption-mark">G</span>
              <div>
                <strong>Built Around Your Vision</strong>
                <span>Planning. Precision. Progress.</span>
              </div>
            </div>
          </div>

          <div className="home-intro-copy">
            <span className="home-eyebrow">WHO WE ARE</span>
            <h2>
              Building More Than Structures.
              <span> Building Trust.</span>
            </h2>

            <p>
              At GlobalConstruction, we believe every successful project begins
              with a clear vision, careful planning, and a commitment to doing
              things right.
            </p>

            <p>
              Our approach brings construction, engineering, and project
              coordination together to help turn ideas into practical,
              long-lasting spaces.
            </p>

            <div className="home-intro-points">
              <div>
                <span className="home-check">✓</span>
                <span>Quality-focused execution</span>
              </div>
              <div>
                <span className="home-check">✓</span>
                <span>Thoughtful planning and coordination</span>
              </div>
              <div>
                <span className="home-check">✓</span>
                <span>Safety-conscious working practices</span>
              </div>
            </div>

            <button
              type="button"
              className="home-text-link"
              onClick={() => scrollTo("services")}
            >
              Discover What We Do <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* COMPANY HIGHLIGHTS */}
      <section className="home-highlights">
        <div className="home-container home-highlights-grid">
          <div className="home-highlight-intro">
            <span>OUR APPROACH</span>
            <h2>Built on the right principles.</h2>
          </div>

          <div className="home-highlight">
            <span className="home-highlight-number">01</span>
            <strong>Quality</strong>
            <p>Attention to detail at every stage.</p>
          </div>

          <div className="home-highlight">
            <span className="home-highlight-number">02</span>
            <strong>Integrity</strong>
            <p>Clear communication and accountability.</p>
          </div>

          <div className="home-highlight">
            <span className="home-highlight-number">03</span>
            <strong>Innovation</strong>
            <p>Practical solutions for changing needs.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services section-padding" id="services">
        <div className="home-container">
          <SectionHeading
            eyebrow="OUR EXPERTISE"
            title="Solutions for Every Stage of Construction."
            description="Explore our core capabilities, from early planning to construction and project coordination."
          />

          <div className="home-services-grid">
            {services.map((service) => (
              <article className="home-service-card" key={service.number}>
                <div className="home-service-card-top">
                  <span className="home-service-icon">{service.icon}</span>
                  <span className="home-service-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <button
                  type="button"
                  className="home-service-link"
                  onClick={openContact}
                  aria-label={`Discuss ${service.title}`}
                >
                  Discuss this service <span>↗</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="home-projects section-padding" id="projects">
        <div className="home-container">
          <div className="home-projects-heading">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Ideas Made Into Spaces."
              description="A look at the types of projects and environments that inspire our work."
            />

            <button
              type="button"
              className="home-button home-button-dark"
              onClick={openContact}
            >
              Discuss Your Project <span>↗</span>
            </button>
          </div>

          <div className="home-projects-grid">
            {projects.map((project, index) => (
              <article className="home-project-card" key={project.title}>
                <div className="home-project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                  <span className="home-project-category">
                    {project.category}
                  </span>
                  <span className="home-project-index">0{index + 1}</span>
                </div>

                <div className="home-project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.location}</p>
                  </div>

                  <button
                    type="button"
                    aria-label={`Ask about ${project.title}`}
                    onClick={openContact}
                  >
                    ↗
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="home-project-disclaimer">
            These images illustrate project categories and are not presented
            as verified completed projects by GlobalConstruction.
          </p>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="home-video-section section-padding" id="videos">
        <div className="home-container">
          <SectionHeading
            eyebrow="INSIDE CONSTRUCTION"
            title="See How Great Work Takes Shape."
            description="Explore construction, planning, and engineering through our video showcase."
            light
          />

          <div className="home-video-feature">
            <div className="home-video-player">
              <video
                controls
                preload="metadata"
                poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85"
              >
                <source
                  src="/videos/construction-showcase.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML video.
              </video>
            </div>

            <div className="home-video-description">
              <span className="home-video-label">FEATURED SHOWCASE</span>
              <h3>From Planning to Progress</h3>
              <p>
                See the coordination, equipment, and construction activities
                involved in bringing a project to life.
              </p>
              <span className="home-video-note">
                Add your own company video to display it here.
              </span>
            </div>
          </div>

          <div className="home-video-cards">
            <article className="home-video-card">
              <div className="home-video-card-image">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                  alt="Building construction"
                  loading="lazy"
                />
                <span className="home-video-play">▶</span>
              </div>
              <div className="home-video-card-info">
                <span>CONSTRUCTION</span>
                <h3>On-Site Project Execution</h3>
                <p>Construction processes and coordination.</p>
              </div>
            </article>

            <article className="home-video-card">
              <div className="home-video-card-image">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                  alt="Architectural planning"
                  loading="lazy"
                />
                <span className="home-video-play">▶</span>
              </div>
              <div className="home-video-card-info">
                <span>PLANNING</span>
                <h3>Design and Development</h3>
                <p>Turning concepts into practical plans.</p>
              </div>
            </article>

            <article className="home-video-card">
              <div className="home-video-card-image">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Modern infrastructure"
                  loading="lazy"
                />
                <span className="home-video-play">▶</span>
              </div>
              <div className="home-video-card-info">
                <span>INFRASTRUCTURE</span>
                <h3>Building for the Future</h3>
                <p>Modern spaces and infrastructure concepts.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="home-why section-padding">
        <div className="home-container home-why-grid">
          <div className="home-why-copy">
            <span className="home-eyebrow">WHY GLOBALCONSTRUCTION</span>
            <h2>
              A Better Process.
              <span> A Stronger Result.</span>
            </h2>
            <p>
              Great construction requires more than materials and machinery. It
              requires a clear process, people working together, and decisions
              made with the bigger picture in mind.
            </p>

            <button
              type="button"
              className="home-button home-button-primary"
              onClick={openContact}
            >
              Start a Conversation <span>↗</span>
            </button>
          </div>

          <div className="home-why-list">
            <article>
              <span className="home-why-icon">01</span>
              <div>
                <h3>Clear Project Coordination</h3>
                <p>
                  Organized communication and a shared understanding of project
                  requirements.
                </p>
              </div>
            </article>

            <article>
              <span className="home-why-icon">02</span>
              <div>
                <h3>Quality-Minded Execution</h3>
                <p>
                  An approach that values careful work and attention to detail.
                </p>
              </div>
            </article>

            <article>
              <span className="home-why-icon">03</span>
              <div>
                <h3>Responsible Planning</h3>
                <p>
                  Considering practical needs, resources, and project goals
                  from the start.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL */}
      <section className="home-testimonials section-padding">
        <div className="home-container">
          <SectionHeading
            eyebrow="WORKING TOGETHER"
            title="Good Work Starts With Trust."
            description="Strong partnerships grow through communication, coordination, and shared goals."
          />

          <div className="home-testimonial-card">
            <span className="home-quote-mark">“</span>
            <p className="home-testimonial-quote">
              {testimonials[activeTestimonial].quote}
            </p>

            <div className="home-testimonial-bottom">
              <div>
                <strong>{testimonials[activeTestimonial].name}</strong>
                <span>{testimonials[activeTestimonial].role}</span>
              </div>

              <div className="home-testimonial-controls">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setActiveTestimonial(
                      (current) =>
                        (current - 1 + testimonials.length) %
                        testimonials.length
                    )
                  }
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() =>
                    setActiveTestimonial(
                      (current) => (current + 1) % testimonials.length
                    )
                  }
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <p className="home-testimonial-disclaimer">
            The quotes above are illustrative placeholders. Replace them with
            approved feedback from real clients before publishing.
          </p>
        </div>
      </section>

      {/* CONTACT CALL TO ACTION */}
      <section className="home-contact-cta" id="contact">
        <div className="home-container home-contact-cta-inner">
          <div>
            <span className="home-contact-eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>Let's Build Something That Lasts.</h2>
            <p>
              Tell us about your project, your goals, and how we can help.
            </p>
          </div>

          <button
            type="button"
            className="home-button home-button-white"
            onClick={() => navigate("/contact")}
          >
            Contact Our Team <span>↗</span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="home-container home-footer-main">
          <div className="home-footer-brand">
            <div className="home-brand home-brand-footer">
              <span className="home-brand-mark">
                <span className="home-brand-mark-top" />
                <span className="home-brand-mark-bottom" />
              </span>
              <span className="home-brand-text">
                <strong>GLOBAL</strong>
                <span>CONSTRUCTION</span>
              </span>
            </div>

            <p>
              Building with purpose, planning with care, and working toward
              stronger spaces for the future.
            </p>
          </div>

          <div className="home-footer-column">
            <h3>Explore</h3>
            <button type="button" onClick={() => scrollTo("about")}>
              About Us
            </button>
            <button type="button" onClick={() => scrollTo("services")}>
              Services
            </button>
            <button type="button" onClick={() => scrollTo("projects")}>
              Projects
            </button>
          </div>

          <div className="home-footer-column">
            <h3>Our Expertise</h3>
            <button type="button" onClick={() => scrollTo("services")}>
              Construction
            </button>
            <button type="button" onClick={() => scrollTo("services")}>
              Engineering
            </button>
            <button type="button" onClick={() => scrollTo("videos")}>
              Our Work
            </button>
          </div>

          <div className="home-footer-column">
            <h3>Get In Touch</h3>
            <p>Have a project to discuss?</p>
            <button
              type="button"
              className="home-footer-contact-link"
              onClick={openContact}
            >
              Contact our team <span>↗</span>
            </button>
          </div>
        </div>

        <div className="home-footer-bottom">
          <div className="home-container home-footer-bottom-inner">
            <span>
              © {new Date().getFullYear()} GlobalConstruction. All rights
              reserved.
            </span>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}