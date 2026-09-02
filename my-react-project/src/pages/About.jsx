import Header from "../components/Header";
import Footer from "../components/Footer";
import fast1 from "../assets/images/fast.png";
import fast2 from "../assets/images/fast2.png";
import fast3 from "../assets/images/fast3.png";
import aboutimg1 from "../assets/images/aboutimg1.png";
import aboutimg2 from "../assets/images/aboutimg2.png";
import aboutimg3 from "../assets/images/aboutimg3.png";
import aboutimg4 from "../assets/images/aboutimg4.png";

function About() {
  return (
    <>
      <Header />

      <main className="about-page">

        {/* Hero */}
        <section className="about-hero">

          <div className="about-hero-content">
            <p className="about-label">ABOUT FASTRACK</p>

            <h1>
              Time That
              <br />
              Defines You.
            </h1>

            <p>
              Fastrack watches are designed for people who
              believe that time is more than just numbers on
              a dial. It is a reflection of your style,
              personality, and attitude.
            </p>
          </div>

        </section>

        {/* Why Choose Us - image cards */}
        <section className="about-why-choose">

          <div className="about-section-heading">
            <p className="about-label">WHY CHOOSE US</p>
            <h2>The Best Luxury Watch</h2>
          </div>

          <div className="why-choose-grid">

            <div className="why-choose-card">
              <img src={fast1} alt="Premium Quality" />
              <div className="why-choose-info">
                <span className="why-choose-icon">
                  <i className="fa-solid fa-gem"></i>
                </span>
                <div>
                  <h4>Premium Quality</h4>
                  <p>Finest materials & excellent craftsmanship.</p>
                </div>
              </div>
            </div>

            <div className="why-choose-card">
              <img src={fast2} alt="Exclusive Design" />
              <div className="why-choose-info">
                <span className="why-choose-icon">
                  <i className="fa-solid fa-compass-drafting"></i>
                </span>
                <div>
                  <h4>Exclusive Design</h4>
                  <p>Timeless designs that define luxury.</p>
                </div>
              </div>
            </div>

            <div className="why-choose-card">
              <img src={fast3} alt="Perfect Timepiece" />
              <div className="why-choose-info">
                <span className="why-choose-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </span>
                <div>
                  <h4>Perfect Timepiece</h4>
                  <p>Precision, elegance & performance combined.</p>
                </div>
              </div>
            </div>

          </div>

        </section>


        {/* Collection preview grid */}
        <section className="about-collection">

          <div className="about-section-heading">
            <p className="about-label">OUR COLLECTION</p>
          </div>

          <div className="about-collection-grid">

            <div className="collection-card">
              <img src={aboutimg1} alt="Fastrack Submariner" />
              <h4>Fastrack Submariner</h4>
              <p className="collection-price">₹9,999</p>
              <div className="collection-rating">★★★★★</div>
              <a href="/watches" className="collection-btn">VIEW DETAILS</a>
            </div>

            <div className="collection-card">
              <img src={aboutimg2} alt="Fastrack Datejust" />
              <h4>Fastrack Datejust</h4>
              <p className="collection-price">₹8,750</p>
              <div className="collection-rating">★★★★★</div>
              <a href="/watches" className="collection-btn">VIEW DETAILS</a>
            </div>

            <div className="collection-card">
              <img src={aboutimg3} alt="Fastrack GMT Master" />
              <h4>Fastrack GMT Master</h4>
              <p className="collection-price">₹12,500</p>
              <div className="collection-rating">★★★★★</div>
              <a href="/watches" className="collection-btn">VIEW DETAILS</a>
            </div>

            <div className="collection-card">
              <img src={aboutimg4} alt="Fastrack Daytona" />
              <h4>Fastrack Daytona</h4>
              <p className="collection-price">₹15,990</p>
              <div className="collection-rating">★★★★★</div>
              <a href="/watches" className="collection-btn">VIEW DETAILS</a>
            </div>

          </div>

          <a href="/watches" className="about-btn view-all-btn">
            VIEW ALL COLLECTIONS
          </a>

        </section>


        {/* Features */}
        <section className="about-features">

          <div className="about-section-heading">
            <p className="about-label">WHY FASTRACK</p>

            <h2>
              More Than Just a Watch.
            </h2>

            <span>
              Style, precision and reliability in every detail.
            </span>
          </div>


          <div className="about-feature-grid">

            <div className="about-feature-card">
              <div className="about-feature-icon">
                ◷
              </div>

              <h3>Precision</h3>

              <p>
                Reliable timekeeping designed to keep up
                with your everyday moments.
              </p>
            </div>


            <div className="about-feature-card">
              <div className="about-feature-icon">
                ✦
              </div>

              <h3>Modern Design</h3>

              <p>
                Contemporary designs created to complement
                your individual style.
              </p>
            </div>


            <div className="about-feature-card">
              <div className="about-feature-icon">
                ♢
              </div>

              <h3>Quality</h3>

              <p>
                Carefully crafted watches built for
                everyday use and lasting performance.
              </p>
            </div>


            <div className="about-feature-card">
              <div className="about-feature-icon">
                ✓
              </div>

              <h3>Reliability</h3>

              <p>
                A dependable companion for work, travel,
                occasions and everything in between.
              </p>
            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="about-cta">

          <div>
            <p className="about-label">FIND YOUR STYLE</p>

            <h2>
              Your Time.
              <br />
              Your Statement.
            </h2>

            <p>
              Explore our collection and find the watch
              that matches your personality.
            </p>

            <a href="/watches" className="about-btn">
              Explore Collection
            </a>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}

export default About;