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

            <a href="#" className="face" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="#" className="insta" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" className="you" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="#" className="pin" aria-label="Pinterest">
              <FaPinterestP />
            </a>

          </div>

          <p className="operating-hours">
            Operating Hours: 10:00AM To 10:00PM Monday To Sunday..
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Collections</h3>

          <Link to="/watches">Analog</Link>

          <Link to="/watches">Smart Watch</Link>

          <Link to="/watches">Digital</Link>

          <Link to="/watches">Chronograph</Link>

          <Link to="/watches">Automatic</Link>
        </div>

        <div className="footer-column">

          <h3>About Fasttrack</h3>

          <Link to="/about">Brand Protection</Link>

          <Link to="/watches">Smart Watch</Link>

          <Link to="/watches">Digital</Link>

          <Link to="/watches">Chronograph</Link>

          <Link to="/watches">Automatic</Link>
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