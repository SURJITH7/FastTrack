import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  

  const handleQuantityChange = (id, change) => {
    dispatch(updateQuantity({ id, change }));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <Header />
      <main className="cart-page">

        <section className="cart-header">
          <h1>Your Cart</h1>
          <span>{cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart</span>
        </section>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <Link to="/watches" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <section className="cart-layout">

            {/* CART ITEMS */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>

                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">{item.price.toLocaleString()}</p>

                    <div className="quantity-control">
                      <button onClick={() => handleQuantityChange(item.id, -1)}>
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-actions">
                    <p className="cart-item-total">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                      <FaTrash />
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}
            <div className="cart-summary">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              <button className="checkout-btn">Proceed to Checkout</button>
              <Link to="/watches" className="continue-shopping-link">
                Continue Shopping
              </Link>
            </div>

          </section>
        )}

      </main>
      <Footer />
    </>
  );
}

export default Cart;