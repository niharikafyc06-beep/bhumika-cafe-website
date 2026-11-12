import { useState } from "react";
import {
  ArrowUpRight,
  Menu as MenuIcon,
  X,
  Coffee,
  MapPin,
  Clock,
  Phone,
  CalendarDays,
  ChevronDown,
  Heart
} from "lucide-react";

const CAFE_NAME = "Bhumika Cafe";
// Replace this masked value with the complete WhatsApp number, including country code.
// India example format: 91XXXXXXXXXX (digits only, no + or spaces).
const WHATSAPP_NUMBER = "9475XXXXX";
const PHONE_DISPLAY = "9475XXXXX";

const menuItems = [
  { name: "Classic Cappuccino", category: "Coffee", price: 149, description: "Rich espresso topped with silky steamed milk.", tag: "Guest favourite", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=900&q=85"},
  { name: "Caramel Latte", category: "Coffee", price: 179, description: "Smooth espresso, steamed milk and caramel.", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=85"},
  { name: "Iced Mocha", category: "Coffee", price: 189, description: "Chilled coffee blended with chocolate notes.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=900&q=85"},
  { name: "Hazelnut Cold Coffee", category: "Coffee", price: 199, description: "A cool, creamy coffee with a nutty finish.", tag: "Bestseller", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=85"},
  { name: "Truffle Cheese Sandwich", category: "Bites", price: 229, description: "Toasted bread, melted cheese and a savoury touch.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900&q=85"},
  { name: "Classic Veg Burger", category: "Bites", price: 199, description: "A hearty veggie patty with crisp greens.", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=900&q=85"},
  { name: "Peri Peri Fries", category: "Bites", price: 139, description: "Golden fries tossed in our spicy seasoning.", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=85"},
  { name: "Chocolate Brownie", category: "Desserts", price: 159, description: "A rich, fudgy treat for your sweet cravings.", tag: "Sweet pick", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=85"},
];

const gallery = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&q=85",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000&q=85",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000&q=85",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=85",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f?w=1000&q=85",
  "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1000&q=85",
];

function whatsappLink(message) {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!digits || digits.includes("X")) return `https://wa.me/?text=${encodeURIComponent(message + "\n\nPlease configure the cafe's full WhatsApp number in src/App.jsx.")}`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [booking, setBooking] = useState({ name: "", phone: "", date: "", time: "18:00", guests: "2", notes: "" });
  const [lightbox, setLightbox] = useState("");

  const categories = ["All", "Coffee", "Bites", "Desserts"];
  const visibleItems = activeCategory === "All" ? menuItems : menuItems.filter(item => item.category === activeCategory);

  const orderItem = (item) => {
    const message = `Hello ${CAFE_NAME}! I'd like to order:\n${item.name} — ₹${item.price}\nPlease share the next steps.`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const submitBooking = (event) => {
    event.preventDefault();
    const message = `Hello ${CAFE_NAME}! I'd like to request a table booking.\nName: ${booking.name}\nPhone: ${booking.phone}\nDate: ${booking.date}\nTime: ${booking.time}\nGuests: ${booking.guests}\nNotes: ${booking.notes || "None"}\nPlease confirm availability.`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">A little pause, a lot of flavour. <span>— Welcome to Bhumika Cafe</span></div>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMobile}>
          <span className="brand-mark"><Coffee size={21} /></span>
          <span><strong>BHUMIKA</strong><small>CAFE & CONVERSATIONS</small></span>
        </a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <MenuIcon />}
        </button>
        <nav className={mobileOpen ? "nav open" : "nav"}>
          <a href="#home" onClick={closeMobile}>Home</a>
          <a href="#story" onClick={closeMobile}>Our Story</a>
          <a href="#menu" onClick={closeMobile}>Menu</a>
          <a href="#gallery" onClick={closeMobile}>Gallery</a>
          <a href="#visit" onClick={closeMobile}>Visit Us</a>
          <a className="nav-cta" href="#booking" onClick={closeMobile}>Book a table <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-photo" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow light"><span /> GOOD COFFEE. GOOD COMPANY.</p>
            <h1>Make room for<br/><em>little moments.</em></h1>
            <p className="hero-copy">Your cosy corner for freshly brewed coffee, comforting bites and conversations that linger.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#menu">Explore the menu <ArrowUpRight size={17}/></a>
              <a className="text-link light-link" href="#story">Discover our story <span>↗</span></a>
            </div>
            <div className="hero-note"><span className="note-line"/> BREWED WITH A LITTLE EXTRA LOVE</div>
          </div>
          <div className="hero-side-label">SIP SLOW · STAY A LITTLE</div>
        </section>

        <section className="intro section-pad" id="story">
          <div className="intro-kicker"><span>01</span><i /></div>
          <div className="intro-main">
            <p className="eyebrow">A PLACE TO UNWIND</p>
            <h2>Not just a cafe.<br/><em>Your happy place.</em></h2>
          </div>
          <div className="intro-copy">
            <p>At Bhumika Cafe, we believe the best moments are often the simplest — your favourite cup, something delicious on the table and people who make you smile.</p>
            <a className="text-link" href="#visit">Come say hello <span>↗</span></a>
          </div>
        </section>

        <section className="menu-section section-pad" id="menu">
          <div className="section-heading">
            <div><p className="eyebrow">MADE TO MAKE YOU SMILE</p><h2>Good things<br/><em>on the menu.</em></h2></div>
            <p className="heading-aside">From your first sip to the last bite,<br/>there's something worth slowing down for.</p>
          </div>
          <div className="menu-toolbar">
            <div className="category-tabs">
              {categories.map(category => <button key={category} className={activeCategory === category ? "tab active" : "tab"} onClick={() => setActiveCategory(category)}>{category}</button>)}
            </div>
            <span className="menu-count">A FEW HOUSE FAVOURITES <span>✳</span></span>
          </div>
          <div className="menu-grid">
            {visibleItems.map((item, index) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-image-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80"; }}/>
                  {item.tag && <span className="item-tag">{item.tag}</span>}
                  <button className="order-round" aria-label={`Order ${item.name}`} onClick={() => orderItem(item)}><ArrowUpRight size={19}/></button>
                </div>
                <div className="menu-card-info">
                  <div><span className="item-category">{item.category}</span><h3>{item.name}</h3></div>
                  <strong>₹{item.price}</strong>
                </div>
                <p>{item.description}</p>
                <button className="order-text" onClick={() => orderItem(item)}>Order on WhatsApp <ArrowUpRight size={14}/></button>
              </article>
            ))}
          </div>
          <p className="menu-disclaimer">Menu and prices shown are sample content. Please update them with the cafe's confirmed menu.</p>
        </section>

        <section className="quote-band">
          <div className="quote-mark">“</div>
          <p>Some of the best conversations<br/>begin with <em>one more coffee.</em></p>
          <span>THE BHUMIKA CAFE FEELING</span>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="section-heading gallery-heading">
            <div><p className="eyebrow">A GLIMPSE INSIDE</p><h2>Little moments,<br/><em>beautifully captured.</em></h2></div>
            <p className="heading-aside">A peek at the kind of moments<br/>we'd love to share with you.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((src, i) => <button className={`gallery-photo photo-${i+1}`} key={src} onClick={() => setLightbox(src)} aria-label={`View cafe gallery photo ${i+1}`}><img src={src} alt={`Cafe atmosphere ${i+1}`} loading="lazy"/></button>)}
          </div>
          <p className="gallery-note"><Camera size={15}/> Replace these inspiration photos with real photos of Bhumika Cafe.</p>
        </section>

        <section className="booking-section" id="booking">
          <div className="booking-image" />
          <div className="booking-content">
            <p className="eyebrow light">SAVE YOURSELF A SEAT</p>
            <h2>There's always<br/>room for <em>one more.</em></h2>
            <p>Planning a catch-up, a little celebration or a coffee date? Send us a booking request.</p>
            <form className="booking-form" onSubmit={submitBooking}>
              <div className="form-row">
                <label>Your name<input required value={booking.name} onChange={e => setBooking({...booking, name:e.target.value})} placeholder="Enter your name"/></label>
                <label>Phone number<input required type="tel" value={booking.phone} onChange={e => setBooking({...booking, phone:e.target.value})} placeholder="Your contact number"/></label>
              </div>
              <div className="form-row">
                <label>Date<input required type="date" min={new Date().toISOString().split("T")[0]} value={booking.date} onChange={e => setBooking({...booking, date:e.target.value})}/></label>
                <label>Time<select value={booking.time} onChange={e => setBooking({...booking, time:e.target.value})}><option value="11:00">11:00 AM</option><option value="13:00">1:00 PM</option><option value="16:00">4:00 PM</option><option value="18:00">6:00 PM</option><option value="19:30">7:30 PM</option><option value="20:30">8:30 PM</option></select></label>
              </div>
              <div className="form-row">
                <label>Number of guests<select value={booking.guests} onChange={e => setBooking({...booking, guests:e.target.value})}>{["1","2","3","4","5","6","7","8+"].map(n=><option key={n}>{n}</option>)}</select></label>
                <label>Anything we should know?<input value={booking.notes} onChange={e => setBooking({...booking, notes:e.target.value})} placeholder="Optional note"/></label>
              </div>
              <button className="button button-gold submit-booking" type="submit">Request a table <ArrowUpRight size={17}/></button>
              <small className="form-help">Your request opens WhatsApp. The booking is confirmed only after the cafe replies.</small>
            </form>
          </div>
        </section>

        <section className="visit-section section-pad" id="visit">
          <div className="visit-title"><p className="eyebrow">WE'D LOVE TO SEE YOU</p><h2>Find your way<br/><em>to us.</em></h2></div>
          <div className="visit-details">
            <div className="detail"><MapPin/><div><span>FIND US</span><p>Add cafe's full address<br/>and city here</p></div></div>
            <div className="detail"><Clock/><div><span>OPENING HOURS</span><p>Add confirmed opening hours<br/>before publishing</p></div></div>
            <div className="detail"><Phone/><div><span>GIVE US A CALL</span><p>{PHONE_DISPLAY}</p></div></div>
            <a className="button button-dark" href={whatsappLink("Hello Bhumika Cafe! I'd like to know more.")} target="_blank" rel="noreferrer">Chat with us <ArrowUpRight size={17}/></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Coffee size={21}/></span><span><strong>BHUMIKA</strong><small>CAFE & CONVERSATIONS</small></span></a>
        <p>Good coffee. Warm moments. Always.</p>
        <span className="copyright">© {new Date().getFullYear()} Bhumika Cafe</span>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>

      {lightbox && <div className="lightbox" onClick={() => setLightbox("")}><button aria-label="Close image"><X/></button><img src={lightbox} alt="Expanded cafe gallery"/></div>}
    </div>
  );
}

export default App;
