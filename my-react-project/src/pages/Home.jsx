import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";
import watch from "../assets/images/watch.png";
import watchh from "../assets/images/watch1.png";
import watchp from "../assets/images/watchpremium.png";
import watchs from "../assets/images/sportwatch.png";
import watchb from "../assets/images/watchbanner.png";
import digital from "../assets/images/digital.png";
import { useState } from "react"; 

function Home() {
   const [activeCard, setActiveCard] = useState(0);
   const categories = [
  { id: 0, name: "Analog", image: watchh,  price: "₹2,499" },
  { id: 1, name: "Smart Watch", image: watchp,  price: "₹3,999" },
  { id: 2, name: "Digital", image: digital,  price: "₹2,999" },
  { id: 3, name: "Chronograph", image: watchh, price: "₹3,499" },
  { id: 4, name: "Automatic", image: watchp, price: "₹4,499" },
  { id: 5, name: "Sport Watch", image: watchs, price: "₹2,799" },
];

  return (
    <>
    <h1 className="hhh">Precision Meets Personality</h1>
    <Header />
    <main>
          {/* HEADER */}    
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-small-title">
            TIME. STYLE. PRECISION.
          </p>
          <h1>
            Your Time.
            <br />
            Your Style.
          </h1>
          <p className="hero-description">
            Discover premium watches designed for those
            who value timeless style and precision.
          </p>
          <Link to="/watches" className="hero-btn">
            Explore Collection
          </Link>
        </div>
        <div className="hero-watch">
          <div className="watch-circle">
            <img
              src={watch}
              alt="FastTrack Watch"
            />


          </div>
        </div>
      </section>

      <div className="ticker-wrapper">
        <div className="ticker-track">
            <div className="ticker-group">
              <span>SHOP TISSOT WATCHES</span>
              <span>BOOK YOUR WATCH FOR SERVICE</span>
              <span>FREE DELIVERY</span>
              <span>EXPLORE COLLECTION</span>
            </div>
          <div className="ticker-group" >
            <span>SHOP TISSOT WATCHES</span>
            <span>BOOK YOUR WATCH FOR SERVICE</span>
            <span>FREE DELIVERY</span>
            <span>EXPLORE COLLECTION</span>
          </div>
        </div>
      </div>

      <section className="featured-section">
        <div className="section-heading">
          <h2>SHOP BY CATEGORY</h2>
          <span>
            Discover watches designed to match every moment.
          </span>
        </div>
 
        <div className="watch-grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              // className="watch-card"
              className={`watch-card ${activeCard === cat.id ? "active" : ""}`}
              // onClick={() => setActiveCard(cat.id)}
              onMouseEnter={() => setActiveCard(cat.id)}
              onMouseLeave={() => setActiveCard(null)}
              onTouchStart={() => setActiveCard(cat.id)}
            >
              <div className="watch-card-image">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className={cat.secondaryImage ? "img-primary" : ""}
                />
                {/* {cat.secondaryImage && (
                  <img src={cat.secondaryImage} alt="alternate" className="img-secondary" />
                )} */}
              </div>
              <h3>{cat.name}</h3>
              <Link to="/watches" className="price-link">{cat.price}</Link>
            </div>
          ))}
        </div>
      
        <div className="category-dots">
          {categories.map((cat) => (
            <span
              key={cat.id}
              className={`dot ${activeCard === cat.id ? "active" : ""}`}
              onClick={() => setActiveCard(cat.id)}
            ></span>
          ))}
        </div>
 
</section>

      {/* =========================
          WHY FASTTRACK
      ========================= */}
      <section className="why-section">
        <div className="section-heading">
          <p>WHY FASTTRACK</p>
          <h2>
            Built for Every Moment
          </h2>
          <span>
            More than a watch. A statement of style,
            precision, and reliability.
          </span>
        </div>
        <div className="features-grid">
          {/* FEATURE 1 */}

          <div className="feature-card">

            <div className="feature-icon">
              🎯
            </div>

            <h3>
              Precision
            </h3>

            <p>
              Accurate timekeeping designed for
              your everyday life.
            </p>

          </div>



          {/* FEATURE 2 */}

          <div className="feature-card">

            <div className="feature-icon">
              ⚜️
            </div>

            <h3>
              Premium Design
            </h3>

            <p>
              Elegant designs crafted to complement
              your personal style.
            </p>

          </div>



          {/* FEATURE 3 */}

          <div className="feature-card">

            <div className="feature-icon">
              ⚓
            </div>

            <h3>
              Built to Last
            </h3>

            <p>
              Durable materials made to keep up
              with every moment.
            </p>

          </div>



          {/* FEATURE 4 */}

          <div className="feature-card">

            <div className="feature-icon">
              📜
            </div>

            <h3>
              1 Year Warranty
            </h3>

            <p>
              Enjoy complete confidence with
              our warranty support.
            </p>

          </div>


        </div>

      </section>



      {/* =========================
          PROMOTIONAL SECTION
      ========================= */}

      <section className="promo-section">


        <div className="promo-content">

          <p className="promo-label">
            THE FASTTRACK COLLECTION
          </p>

          <h2>
            Time That
            <br />
            Defines You.
          </h2>

          <p>
            Discover a collection created for those
            who believe every second should make
            a statement.
          </p>

          <Link
            to="/watches"
            className="promo-btn"
          >
            Shop Now
          </Link>

        </div>



        <div className="promo-image">

          <img
            src={watchb}
            alt="FastTrack Premium Watch"
          />

        </div>


      </section>

    </main>
    <Footer />
    </>
    
  );
}

export default Home;