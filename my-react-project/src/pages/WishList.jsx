import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromWishlist } from "../redux/CartSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <>
      <Header />
      <main className="wishlist-page">

        <section className="wishlist-header">
          <p>YOUR SAVED WATCHES</p>
          <h1>Wishlist</h1>
          <span>
            {wishlistItems.length > 0
              ? `You have ${wishlistItems.length} item${wishlistItems.length > 1 ? "s" : ""} saved.`
              : "Watches you save will show up here."}
          </span>
        </section>

        <section className="wishlist-section">

          {wishlistItems.length === 0 ? (
            <div className="wishlist-empty">
              <p>Your wishlist is empty.</p>
              <Link to="/watches" className="wishlist-browse-btn">
                Browse Collection
              </Link>
            </div>
          ) : (
            <div className="wishlist-grid">
              {wishlistItems.map((item) => (
                <div className="wishlist-card" key={item.id}>
                  <div className="wishlist-card-image">
                    <img src={item.img || item.image} alt={item.title || item.name} />
                    <button
                      className="wishlist-remove-btn"
                      aria-label="Remove from wishlist"
                      onClick={() => handleRemove(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>

                  <div className="wishlist-card-info">
                    <h3>{item.title || item.name}</h3>
                    {item.des && <p>{item.des}</p>}

                    <div className="wishlist-card-bottom">
                      <span className="wishlist-price">
                        ₹{Number(item.price).toLocaleString()}
                      </span>
                      {cartItems.some((c) => c.id === item.id) ? (
                        <Link to="/cart" className="wishlist-cart-link">
                          <FaShoppingCart />
                        </Link>
                      ) : (
                        <button
                          className="wishlist-addcart-btn"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </section>

      </main>
      <Footer />
    </>
  );
}

export default Wishlist;