import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <h2>Fasttrack</h2>

          <p>
            Time. Style. Precision.
          </p>

          <div className="footer-socials">

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="#" aria-label="Pinterest">
              <FaPinterestP />
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/watches">Collection</Link>

          <Link to="/contact">Contact</Link>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            <span>Email</span>
            support@fasttrack.com
          </p>

          <p>
            <span>Phone</span>
            1700 123 4567
          </p>

          <p>
            <span>Location</span>
            Coimbatore, India
          </p>

        </div>


        {/* Newsletter / Message */}
        <div className="footer-column footer-message">

          <h3>Stay Connected</h3>

          <p>
            Discover the latest collections,
            new arrivals and timeless styles.
          </p>

          <Link to="/watches" className="footer-button">
            Explore Collection
          </Link>

        </div>

      </div>


      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © 2026 Fasttrack. All Rights Reserved.
        </p>

        <p>
          Designed with style & precision.
        </p>

      </div>

    </footer>
  );
}

export default Footer;