import { NavLink } from "react-router-dom";

function Header() {
  return (
    
    <header className="site-header">
      <div className="header-logo">
        FASTTRACK
      </div>

      <nav className="header-nav">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/watches">
          Collection
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

      </nav>
      
      <div className="header-actions">
        <div className="header-icons">
          <button className="icon-btn" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          <NavLink to="/CartPage">
            <button className="icon-btn" aria-label="Cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          </NavLink>

          <NavLink to="/WishList" className="wishlist-link">
          <button className="icon-btn" aria-label="Wishlist">
            <i className="fa-regular fa-heart"></i>
          </button>
          </NavLink>
          
        </div>
 
        <div className="header-divider"></div>
 
        <div className="header-auth">
          <NavLink to="/login" className="auth-login">
            Log In
          </NavLink>
          <NavLink to="/signup" className="auth-signup">
            Sign Up
          </NavLink>
        </div>
      </div>

    </header>
  );
}

export default Header;