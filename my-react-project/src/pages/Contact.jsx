import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <main className="contact-page">

      {/* Header */}
      <header className="page-header">
        <div className="logo">
          Fastrack
        </div>

        <div className="page-navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/watches">Collection</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>

      {/* Contact Hero */}
      <section className="contact-hero">

        <div className="contact-hero-content">
          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h1>
            Let's Talk.
          </h1>

          <p>
            Have a question about our watches or need help with
            your order? We're here to help.
          </p>
        </div>

      </section>

      {/* Contact Content */}
      <section className="contact-content">

        {/* Left Side */}
        <div className="contact-details">

          <p className="contact-small-title">
            CONTACT US
          </p>

          <h2>
            We'd love to hear from you.
          </h2>

          <p className="contact-description">
            Whether you have a question about our collection,
            your order, or anything else, our team is ready to
            help you.
          </p>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">
              ✉
            </div>

            <div>
              <h3>Email</h3>
              <p>support@fastrack.com</p>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">
              ☎
            </div>

            <div>
              <h3>Phone</h3>
              <p>1800 123 4567</p>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">
              ⌖
            </div>

            <div>
              <h3>Visit Us</h3>
              <p>
                Fastrack Store,
                <br />
                Bengaluru, India
              </p>
            </div>
          </div>

        </div>

        {/* Right Side - Form */}
        <div className="contact-form-container">

          <form className="contact-form">

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* Social Media */}
      <section className="contact-social">

        <p>FOLLOW FASTRACK</p>

        <div className="contact-social-icons">

          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaXTwitter />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaYoutube />
          </a>

          <a href="#">
            <FaPinterestP />
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="site-footer">

        <div className="footer-logo">
          Fastrack
        </div>

        <p>
          Time. Style. Precision.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/watches">Collection</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">

          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaXTwitter />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaYoutube />
          </a>

          <a href="#">
            <FaPinterestP />
          </a>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Fastrack. All rights reserved.
          </p>
        </div>

      </footer>

    </main>
  );
}

export default Contact;