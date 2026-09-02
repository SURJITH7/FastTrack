// import { useState, useMemo } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, toggleWishlist } from "../redux/CartSlice";
// import { watches } from "../constant/titanwatchdata";
// import { FaShoppingCart, FaRegHeart, FaStar } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Watches() {
//   const [sortOption, setSortOption] = useState("default");
//   const [maxPrice, setMaxPrice] = useState(100000);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const handleAddToCart = (item) => {
//   const cleanItem = {
//     ...item,
//     price: getNumericPrice(item.price), 
//   };
//   dispatch(addToCart(cleanItem));
// };
//   const handleToggleWishlist = (item) => {
//   const cleanItem = {
//     ...item,
//     price: getNumericPrice(item.price),
//   };
//   dispatch(toggleWishlist(cleanItem));
// };

//   const getNumericPrice = (price) => {
//     return Number(String(price).replace(/[₹,]/g, ""));
//   };

//   const categories = useMemo(() => {
//     const counts = {};
//     watches.forEach((w) => {
//       const cat = w.category || "Uncategorized";
//       counts[cat] = (counts[cat] || 0) + 1;
//     });
//     return Object.entries(counts);
//   }, []);

//   const latestProducts = useMemo(() => {
//     return [...watches].sort((a, b) => b.id - a.id).slice(0, 3);
//   }, []);

//   const sortedWatches = useMemo(() => {
//     let copy = [...watches];

//     if (activeCategory !== "all") {
//       copy = copy.filter((w) => w.category === activeCategory);
//     }

//     copy = copy.filter((w) => getNumericPrice(w.price) <= maxPrice);

//     if (sortOption === "low") {
//       return copy.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
//     }
//     if (sortOption === "high") {
//       return copy.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
//     }
//     if (sortOption === "newest") {
//       return copy.sort((a, b) => b.id - a.id);
//     }
//     return copy;
//   }, [sortOption, maxPrice, activeCategory]);

//   return (
//     <>
//       <Header />
//       <main className="watches-page">

//         {/* COLLECTION HEADER */}
//         <section className="collection-header">
//           <p>FASTTRACK COLLECTION</p>
//           <h1>Find Your Perfect Watch</h1>
//           <span>
//             Explore our collection of watches designed for every
//             style and every moment.
//           </span>
//         </section>

//         {/* WATCH COLLECTION */}
//         <section className="collection-section-layout">

//           {/* SIDEBAR */}
//           <aside className="watch-sidebar">

//             <div className="sidebar-block">
//               <h4>Filter by Price</h4>
//               <input
//                 type="range"
//                 min="0"
//                 max="100000"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(Number(e.target.value))}
//               />
//               <div className="price-labels">
//                 <span>₹0</span>
//                 <span>₹{maxPrice}</span>
//               </div>
//             </div>

//             <div className="sidebar-block">
//               <h4>Category</h4>
//               <ul className="category-list">
//                 <li
//                   className={activeCategory === "all" ? "active" : ""}
//                   onClick={() => setActiveCategory("all")}
//                 >
//                   All <span>({watches.length})</span>
//                 </li>
//                 {categories.map(([name, count]) => (
//                   <li
//                     key={name}
//                     className={activeCategory === name ? "active" : ""}
//                     onClick={() => setActiveCategory(name)}
//                   >
//                     {name} <span>({count})</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="sidebar-block">
//               <h4>Latest Products</h4>
//               <ul className="latest-products">
//                 {latestProducts.map((item) => (
//                   <li key={item.id}>
//                     <img src={item.image} alt={item.name} />
//                     <div>
//                       <p>{item.name}</p>
//                       <span>{item.price}</span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//           </aside>

//           {/* GRID */}
//           <div className="collection-main">

//             <div className="collection-top">
//               <h2>All Watches</h2>
//               <select
//                 value={sortOption}
//                 onChange={(e) => setSortOption(e.target.value)}
//               >
//                 <option value="default">Sort by</option>
//                 <option value="low">Price: Low to High</option>
//                 <option value="high">Price: High to Low</option>
//                 <option value="newest">Newest</option>
//               </select>
//             </div>

//             <div className="collection-grid">
//               {sortedWatches.map((item) => (
//                 <div className="collection-cards" key={item.id}>

//                   {item.badge && (
//                     <span className={`badge badge-${item.badge.toLowerCase()}`}>
//                       {item.badge}
//                     </span>
//                   )}

//                   <Link
//                     to="/wishlist"
//                     className="wishlist-icon"
//                     onClick={() => handleToggleWishlist(item)}
//                   >
//                     <FaRegHeart />
//                   </Link>

//                   <div className="collection-image">
//                     <img src={item.image} alt={item.name} />
//                   </div>

//                   <div className="collection-details">
//                     <h3>{item.name}</h3>
//                     <strong>
//                       {typeof item.price === "number"
//                         ? `₹${item.price.toLocaleString()}`
//                         : item.price}
//                     </strong>

//                     {item.rating && (
//                       <div className="rating">
//                         {Array.from({ length: 5 }).map((_, i) => (
//                           <FaStar
//                             key={i}
//                             className={i < item.rating ? "star-filled" : "star-empty"}
//                           />
//                         ))}
//                       </div>
//                     )}

//                     {cartItems.some((c) => c.id === item.id) ? (
//                       <Link to="/cart" className="cart-added-btn">
//                         <FaShoppingCart /> Added
//                       </Link>
//                     ) : (
//                       <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
//                     )}
//                   </div>

//                 </div>
//               ))}
//             </div>

//           </div>

//         </section>

//       </main>
//       <Footer />
//     </>
//   );
// }

// export default Watches;

import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleWishlist } from "../redux/CartSlice";
import { watches } from "../constant/titanwatchdata";
import { FaShoppingCart, FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Watches() {
  const [sortOption, setSortOption] = useState("default");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [activeCategory, setActiveCategory] = useState("all");

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const getNumericPrice = (price) => {
    return Number(String(price).replace(/[₹,]/g, ""));
  };

  const handleAddToCart = (item) => {
    const cleanItem = {
      ...item,
      price: getNumericPrice(item.price),
    };
    dispatch(addToCart(cleanItem));
  };

  const handleToggleWishlist = (item) => {
    const cleanItem = {
      ...item,
      price: getNumericPrice(item.price),
    };
    dispatch(toggleWishlist(cleanItem));
  };

  const categories = useMemo(() => {
    const counts = {};
    watches.forEach((w) => {
      const cat = w.category || "Uncategorized";
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return Object.entries(counts);
  }, []);

  const latestProducts = useMemo(() => {
    return [...watches].sort((a, b) => b.id - a.id).slice(0, 3);
  }, []);

  const sortedWatches = useMemo(() => {
    let copy = [...watches];

    if (activeCategory !== "all") {
      copy = copy.filter((w) => w.category === activeCategory);
    }

    copy = copy.filter((w) => getNumericPrice(w.price) <= maxPrice);

    if (sortOption === "low") {
      return copy.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
    }
    if (sortOption === "high") {
      return copy.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
    }
    if (sortOption === "newest") {
      return copy.sort((a, b) => b.id - a.id);
    }
    return copy;
  }, [sortOption, maxPrice, activeCategory]);

  return (
    <>
      <Header />
      <main className="watches-page">

        <section className="collection-header">
          <p>FASTTRACK COLLECTION</p>
          <h1>Find Your Perfect Watch</h1>
          <span>
            Explore our collection of watches designed for every
            style and every moment.
          </span>
        </section>

        <section className="collection-section-layout">

          <aside className="watch-sidebar">
            <div className="sidebar-block">
              <h4>Filter by Price</h4>
              <input
                type="range"
                min="0"
                max="100000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              <div className="price-labels">
                <span>₹0</span>
                <span>₹{maxPrice}</span>
              </div>
            </div>

            <div className="sidebar-block">
              <h4>Category</h4>
              <ul className="category-list">
                <li
                  className={activeCategory === "all" ? "active" : ""}
                  onClick={() => setActiveCategory("all")}
                >
                  All <span>({watches.length})</span>
                </li>
                {categories.map(([name, count]) => (
                  <li
                    key={name}
                    className={activeCategory === name ? "active" : ""}
                    onClick={() => setActiveCategory(name)}
                  >
                    {name} <span>({count})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-block">
              <h4>Latest Products</h4>
              <ul className="latest-products">
                {latestProducts.map((item) => (
                  <li key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <span>{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="collection-main">
            <div className="collection-top">
              <h2>All Watches</h2>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Sort by</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <div className="collection-grid">
              {sortedWatches.map((item) => {
                const isWishlisted = wishlistItems.some((w) => w.id === item.id);
                const isInCart = cartItems.some((c) => c.id === item.id);

                return (
                  <div className="collection-cards" key={item.id}>

                    {item.badge && (
                      <span className={`badge badge-${item.badge.toLowerCase()}`}>
                        {item.badge}
                      </span>
                    )}

                    <button
                      className="wishlist-icon"
                      aria-label="Toggle wishlist"
                      onClick={() => handleToggleWishlist(item)}
                    >
                      {isWishlisted ? <FaHeart className="heart-filled" /> : <FaRegHeart />}
                    </button>

                    <div className="collection-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="collection-details">
                      <h3>{item.name}</h3>
                      <strong>
                        {typeof item.price === "number"
                          ? `₹${item.price.toLocaleString()}`
                          : item.price}
                      </strong>

                      {item.rating && (
                        <div className="rating">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                              key={i}
                              className={i < item.rating ? "star-filled" : "star-empty"}
                            />
                          ))}
                        </div>
                      )}

                      {isInCart ? (
                        <Link to="/cart" className="cart-added-btn">
                          <FaShoppingCart /> Added
                        </Link>
                      ) : (
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}

export default Watches;