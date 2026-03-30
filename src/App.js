import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Star,
  Check,
  X,
  Menu,
  ChevronRight,
  Heart,
  Sparkles,
  User,
  Mail,
} from "lucide-react";

// Simulated backend service
const BookingService = {
  appointments: JSON.parse(localStorage.getItem("appointments") || "[]"),

  getAvailableSlots(date) {
    const slots = [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM",
      "05:00 PM",
    ];
    const booked = this.appointments
      .filter((apt) => apt.date === date)
      .map((apt) => apt.time);
    return slots.filter((slot) => !booked.includes(slot));
  },

  bookAppointment(appointment) {
    this.appointments.push({ ...appointment, id: Date.now() });
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
    return true;
  },
};

const services = [
  {
    name: "Hydrafacial Treatment",
    description: "Deep cleansing and hydration for radiant, glowing skin",
    duration: "60 min",
    price: "₹3,500",
    icon: "✨",
  },
  {
    name: "Anti-Aging Therapy",
    description: "Advanced treatments to restore youthful vitality",
    duration: "75 min",
    price: "₹4,500",
    icon: "🌸",
  },
  {
    name: "Acne Treatment",
    description: "Specialized care for clear, healthy skin",
    duration: "45 min",
    price: "₹2,800",
    icon: "🍃",
  },
  {
    name: "Chemical Peels",
    description: "Gentle exfoliation for renewed complexion",
    duration: "50 min",
    price: "₹3,200",
    icon: "💫",
  },
  {
    name: "Laser Hair Removal",
    description: "Safe, effective hair reduction therapy",
    duration: "30 min",
    price: "₹2,000",
    icon: "⚡",
  },
  {
    name: "Skin Brightening",
    description: "Natural radiance enhancement treatments",
    duration: "60 min",
    price: "₹3,800",
    icon: "☀️",
  },
];

const reviews = [
  {
    name: "Aisha Khan",
    rating: 5,
    text: "Absolutely wonderful experience! The staff is so caring and professional.",
    date: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Best skincare clinic in Srinagar. Results are amazing!",
    date: "1 month ago",
  },
  {
    name: "Saima Malik",
    rating: 4,
    text: "Very clean facility and friendly environment. Highly recommend.",
    date: "3 weeks ago",
  },
];

export default function ZarmeenAesthetics() {
  const [activeSection, setActiveSection] = useState("home");
  const [showBooking, setShowBooking] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (bookingData.date) {
      setAvailableSlots(BookingService.getAvailableSlots(bookingData.date));
    }
  }, [bookingData.date]);

  const handleBookingSubmit = () => {
    if (
      bookingData.name &&
      bookingData.phone &&
      bookingData.service &&
      bookingData.date &&
      bookingData.time
    ) {
      BookingService.bookAppointment(bookingData);
      setBookingSuccess(true);
      setTimeout(() => {
        setShowBooking(false);
        setBookingSuccess(false);
        setBookingStep(1);
        setBookingData({
          service: "",
          date: "",
          time: "",
          name: "",
          phone: "",
          email: "",
        });
      }, 3000);
    }
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        background: "linear-gradient(135deg, #fdfbf7 0%, #f5f1e8 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Noise Texture Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Decorative Background Elements */}
      <div
        style={{
          position: "fixed",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(218, 165, 123, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "float 20s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "fixed",
          bottom: "-15%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(76, 110, 95, 0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "float 25s ease-in-out infinite reverse",
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .booking-modal {
          animation: fadeInUp 0.4s ease-out;
        }

        .slot-button {
          transition: all 0.3s ease;
        }

        .slot-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(218, 165, 123, 0.3);
        }
      `}</style>

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background:
            scrollY > 50 ? "rgba(253, 251, 247, 0.95)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
          padding: "1.5rem 2rem",
          zIndex: 100,
          transition: "all 0.3s ease",
          borderBottom:
            scrollY > 50 ? "1px solid rgba(218, 165, 123, 0.1)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <Sparkles size={28} color="#DAA57B" />
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                background: "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.5px",
              }}
            >
              Zarmeen Aesthetics
            </h1>
          </div>

          {/* Desktop Menu */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="desktop-menu"
          >
            {["home", "services", "about", "reviews", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    color: activeSection === section ? "#DAA57B" : "#4C6E5F",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    transition: "color 0.3s ease",
                    position: "relative",
                  }}
                >
                  {section}
                  {activeSection === section && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "#DAA57B",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </button>
              )
            )}
            <button
              onClick={() => setShowBooking(true)}
              style={{
                background: "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)",
                border: "none",
                padding: "0.75rem 1.75rem",
                borderRadius: "50px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.95rem",
                fontWeight: "600",
                color: "white",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(218, 165, 123, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 6px 20px rgba(218, 165, 123, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 15px rgba(218, 165, 123, 0.3)";
              }}
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#4C6E5F",
            }}
            className="mobile-menu-btn"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(253, 251, 247, 0.98)",
              backdropFilter: "blur(20px)",
              padding: "2rem",
              borderBottom: "1px solid rgba(218, 165, 123, 0.1)",
              animation: "fadeInUp 0.3s ease-out",
            }}
          >
            {["home", "services", "about", "reviews", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "#4C6E5F",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    padding: "1rem 0",
                    borderBottom: "1px solid rgba(218, 165, 123, 0.1)",
                  }}
                >
                  {section}
                </button>
              )
            )}
            <button
              onClick={() => {
                setShowBooking(true);
                setMobileMenuOpen(false);
              }}
              style={{
                marginTop: "1rem",
                width: "100%",
                background: "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)",
                border: "none",
                padding: "1rem",
                borderRadius: "50px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
                color: "white",
                cursor: "pointer",
              }}
            >
              Book Appointment
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "8rem 2rem 4rem 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div className="fade-in-up">
            <div
              style={{
                display: "inline-block",
                background: "rgba(218, 165, 123, 0.1)",
                padding: "0.5rem 1.5rem",
                borderRadius: "50px",
                marginBottom: "2rem",
                border: "1px solid rgba(218, 165, 123, 0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#DAA57B",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                ⭐ Rated 4.6 • 76 Reviews
              </span>
            </div>

            <h2
              style={{
                fontSize: "4.5rem",
                fontWeight: "700",
                color: "#2C3E3A",
                lineHeight: "1.1",
                marginBottom: "1.5rem",
                letterSpacing: "-1px",
              }}
            >
              Radiant Skin,
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Renewed Confidence
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.15rem",
                color: "#4C6E5F",
                lineHeight: "1.8",
                marginBottom: "2.5rem",
                maxWidth: "500px",
              }}
            >
              Experience personalized skincare treatments in Srinagar's premier
              aesthetic clinic. Professional, caring, and results-driven care
              for your skin's unique needs.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "3rem",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => setShowBooking(true)}
                style={{
                  background:
                    "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)",
                  border: "none",
                  padding: "1rem 2.5rem",
                  borderRadius: "50px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(218, 165, 123, 0.3)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 8px 25px rgba(218, 165, 123, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(218, 165, 123, 0.3)";
                }}
              >
                Book Consultation <ChevronRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection("services")}
                style={{
                  background: "white",
                  border: "2px solid #DAA57B",
                  padding: "1rem 2.5rem",
                  borderRadius: "50px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#DAA57B",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#DAA57B";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                  e.target.style.color = "#DAA57B";
                }}
              >
                Our Services
              </button>
            </div>

            <div
              style={{
                display: "flex",
                gap: "2rem",
                borderTop: "1px solid rgba(218, 165, 123, 0.2)",
                paddingTop: "2rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: "500",
                    color: "#DAA57B",
                    marginBottom: "0.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Safe & Inclusive
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.9rem",
                    color: "#4C6E5F",
                  }}
                >
                  LGBTQ+ Friendly
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: "500",
                    color: "#DAA57B",
                    marginBottom: "0.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Empowered
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.9rem",
                    color: "#4C6E5F",
                  }}
                >
                  Women-Owned
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              height: "600px",
            }}
            className="fade-in-up"
          >
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "10%",
                width: "70%",
                height: "70%",
                background:
                  "linear-gradient(135deg, rgba(218, 165, 123, 0.2) 0%, rgba(76, 110, 95, 0.1) 100%)",
                borderRadius: "200px 50px 200px 50px",
                transform: "rotate(-5deg)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "15%",
                right: "15%",
                width: "70%",
                height: "70%",
                background: "white",
                borderRadius: "200px 50px 200px 50px",
                transform: "rotate(3deg)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                border: "3px solid rgba(218, 165, 123, 0.2)",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  color: "#4C6E5F",
                }}
              >
                <Sparkles
                  size={64}
                  color="#DAA57B"
                  style={{ marginBottom: "1rem" }}
                />
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  Your skin's journey to
                  <br />
                  radiance begins here
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <div
              style={{
                position: "absolute",
                bottom: "5%",
                left: "0",
                background: "white",
                padding: "1.5rem 2rem",
                borderRadius: "20px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#DAA57B",
                  marginBottom: "0.25rem",
                }}
              >
                500+
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.9rem",
                  color: "#4C6E5F",
                }}
              >
                Happy Clients
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "0",
                left: "5%",
                background: "white",
                padding: "1.5rem 2rem",
                borderRadius: "20px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                animation: "float 8s ease-in-out infinite reverse",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#DAA57B",
                  marginBottom: "0.25rem",
                }}
              >
                10+
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.9rem",
                  color: "#4C6E5F",
                }}
              >
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          padding: "6rem 2rem",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "rgba(218, 165, 123, 0.1)",
                padding: "0.5rem 1.5rem",
                borderRadius: "50px",
                marginBottom: "1rem",
                border: "1px solid rgba(218, 165, 123, 0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#DAA57B",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Our Treatments
              </span>
            </div>

            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: "700",
                color: "#2C3E3A",
                marginBottom: "1rem",
              }}
            >
              Transformative Skincare
            </h3>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.15rem",
                color: "#4C6E5F",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Customized treatments using advanced technology and natural
              ingredients
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{
                  background: "white",
                  padding: "2.5rem",
                  borderRadius: "30px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(218, 165, 123, 0.1)",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  {service.icon}
                </div>

                <h4
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    color: "#2C3E3A",
                    marginBottom: "0.75rem",
                  }}
                >
                  {service.name}
                </h4>

                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.95rem",
                    color: "#4C6E5F",
                    lineHeight: "1.7",
                    marginBottom: "1.5rem",
                  }}
                >
                  {service.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(218, 165, 123, 0.2)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.9rem",
                      color: "#4C6E5F",
                    }}
                  >
                    <Clock size={16} />
                    {service.duration}
                  </div>

                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#DAA57B",
                    }}
                  >
                    {service.price}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setBookingData({ ...bookingData, service: service.name });
                    setShowBooking(true);
                  }}
                  style={{
                    marginTop: "1.5rem",
                    width: "100%",
                    background:
                      "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)",
                    border: "none",
                    padding: "1rem",
                    borderRadius: "50px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    color: "white",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 6px 20px rgba(218, 165, 123, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Book This Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "6rem 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(218, 165, 123, 0.15) 0%, rgba(76, 110, 95, 0.1) 100%)",
              padding: "4rem",
              borderRadius: "40px",
              border: "1px solid rgba(218, 165, 123, 0.2)",
            }}
          >
            <div
              style={{
                fontSize: "5rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              🌸
            </div>

            <div
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "3rem",
                  fontWeight: "700",
                  color: "#DAA57B",
                  marginBottom: "0.5rem",
                }}
              >
                4.6 ⭐
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.1rem",
                  color: "#4C6E5F",
                }}
              >
                Based on 76 reviews
              </div>
            </div>

            <div
              style={{
                marginTop: "3rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                { icon: "💚", text: "LGBTQ+ Friendly Space" },
                { icon: "👩‍⚕️", text: "Women-Owned Business" },
                { icon: "✨", text: "Certified Professionals" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    background: "white",
                    padding: "1rem 1.5rem",
                    borderRadius: "15px",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "1rem",
                      color: "#4C6E5F",
                      fontWeight: "500",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                display: "inline-block",
                background: "rgba(218, 165, 123, 0.1)",
                padding: "0.5rem 1.5rem",
                borderRadius: "50px",
                marginBottom: "1rem",
                border: "1px solid rgba(218, 165, 123, 0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#DAA57B",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                About Us
              </span>
            </div>

            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: "700",
                color: "#2C3E3A",
                marginBottom: "1.5rem",
                lineHeight: "1.2",
              }}
            >
              Expert Care,
              <br />
              Beautiful Results
            </h3>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.1rem",
                color: "#4C6E5F",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              At Zarmeen Aesthetics, we believe everyone deserves to feel
              confident in their skin. Our experienced team combines
              cutting-edge technology with personalized care to deliver
              exceptional results.
            </p>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.1rem",
                color: "#4C6E5F",
                lineHeight: "1.8",
                marginBottom: "2rem",
              }}
            >
              Located in the heart of Srinagar, we pride ourselves on creating a
              welcoming, inclusive environment where every client receives the
              highest standard of professional skincare.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => setShowBooking(true)}
                style={{
                  background:
                    "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(218, 165, 123, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(218, 165, 123, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(218, 165, 123, 0.3)";
                }}
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        id="reviews"
        style={{
          padding: "6rem 2rem",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, transparent 100%)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "rgba(218, 165, 123, 0.1)",
                padding: "0.5rem 1.5rem",
                borderRadius: "50px",
                marginBottom: "1rem",
                border: "1px solid rgba(218, 165, 123, 0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#DAA57B",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Testimonials
              </span>
            </div>

            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: "700",
                color: "#2C3E3A",
                marginBottom: "1rem",
              }}
            >
              Client Stories
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2.5rem",
                  borderRadius: "30px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(218, 165, 123, 0.1)",
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                    marginBottom: "1rem",
                  }}
                >
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#DAA57B" color="#DAA57B" />
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.05rem",
                    color: "#4C6E5F",
                    lineHeight: "1.7",
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  "{review.text}"
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(218, 165, 123, 0.2)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#2C3E3A",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {review.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.85rem",
                        color: "#4C6E5F",
                      }}
                    >
                      {review.date}
                    </div>
                  </div>

                  <Heart
                    size={24}
                    color="#DAA57B"
                    fill="rgba(218, 165, 123, 0.2)"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "6rem 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "rgba(218, 165, 123, 0.1)",
                padding: "0.5rem 1.5rem",
                borderRadius: "50px",
                marginBottom: "1rem",
                border: "1px solid rgba(218, 165, 123, 0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#DAA57B",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Get In Touch
              </span>
            </div>

            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: "700",
                color: "#2C3E3A",
                marginBottom: "1rem",
              }}
            >
              Visit Us
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
            className="contact-grid"
          >
            <div>
              <div
                style={{
                  background: "white",
                  padding: "3rem",
                  borderRadius: "30px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(218, 165, 123, 0.1)",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    gap: "1.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(218, 165, 123, 0.1)",
                      padding: "1rem",
                      borderRadius: "15px",
                    }}
                  >
                    <MapPin size={28} color="#DAA57B" />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#2C3E3A",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Location
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1rem",
                        color: "#4C6E5F",
                        lineHeight: "1.7",
                      }}
                    >
                      2nd floor Sector 4, Shams Abad
                      <br />
                      Shades Complex, Main Rd Bemina
                      <br />
                      Near SBI, Srinagar
                      <br />
                      Jammu and Kashmir 190018
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    gap: "1.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(218, 165, 123, 0.1)",
                      padding: "1rem",
                      borderRadius: "15px",
                    }}
                  >
                    <Phone size={28} color="#DAA57B" />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#2C3E3A",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Phone
                    </h4>
                    <a
                      href="tel:09149674520"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        color: "#DAA57B",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      091496 74520
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    gap: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(218, 165, 123, 0.1)",
                      padding: "1rem",
                      borderRadius: "15px",
                    }}
                  >
                    <Clock size={28} color="#DAA57B" />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#2C3E3A",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Hours
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1rem",
                        color: "#4C6E5F",
                        lineHeight: "1.7",
                      }}
                    >
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=3QGG+83 Srinagar",
                    "_blank"
                  )
                }
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)",
                  border: "none",
                  padding: "1.25rem",
                  borderRadius: "50px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(218, 165, 123, 0.3)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(218, 165, 123, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(218, 165, 123, 0.3)";
                }}
              >
                <MapPin size={20} />
                Get Directions
              </button>
            </div>

            <div
              style={{
                background: "white",
                padding: "3rem",
                borderRadius: "30px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(218, 165, 123, 0.1)",
              }}
            >
              <h4
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "600",
                  color: "#2C3E3A",
                  marginBottom: "2rem",
                }}
              >
                Send Us a Message
              </h4>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#4C6E5F",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "1rem 1.5rem",
                      border: "2px solid rgba(218, 165, 123, 0.2)",
                      borderRadius: "15px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "1rem",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#DAA57B")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(218, 165, 123, 0.2)")
                    }
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#4C6E5F",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    style={{
                      width: "100%",
                      padding: "1rem 1.5rem",
                      border: "2px solid rgba(218, 165, 123, 0.2)",
                      borderRadius: "15px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "1rem",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#DAA57B")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(218, 165, 123, 0.2)")
                    }
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#4C6E5F",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "1rem 1.5rem",
                      border: "2px solid rgba(218, 165, 123, 0.2)",
                      borderRadius: "15px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "1rem",
                      resize: "vertical",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#DAA57B")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(218, 165, 123, 0.2)")
                    }
                  />
                </div>

                <button
                  style={{
                    background:
                      "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)",
                    border: "none",
                    padding: "1.25rem",
                    borderRadius: "50px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "white",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(218, 165, 123, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 6px 20px rgba(218, 165, 123, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 4px 15px rgba(218, 165, 123, 0.3)";
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "linear-gradient(135deg, #2C3E3A 0%, #4C6E5F 100%)",
          padding: "3rem 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <Sparkles size={32} color="#DAA57B" />
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "white",
                letterSpacing: "0.5px",
              }}
            >
              Zarmeen Aesthetics
            </h1>
          </div>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "2rem",
            }}
          >
            Your journey to radiant skin begins here
          </p>

          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(255, 255, 255, 0.6)",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            © 2024 Zarmeen Aesthetics. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBooking && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div
            className="booking-modal"
            style={{
              background: "white",
              borderRadius: "30px",
              padding: "3rem",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "90vh",
              overflow: "auto",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
          >
            <button
              onClick={() => {
                setShowBooking(false);
                setBookingStep(1);
                setBookingSuccess(false);
              }}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(218, 165, 123, 0.1)",
                border: "none",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.background = "rgba(218, 165, 123, 0.2)")
              }
              onMouseLeave={(e) =>
                (e.target.style.background = "rgba(218, 165, 123, 0.1)")
              }
            >
              <X size={20} color="#DAA57B" />
            </button>

            {!bookingSuccess ? (
              <>
                <h3
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color: "#2C3E3A",
                    marginBottom: "0.5rem",
                  }}
                >
                  Book Appointment
                </h3>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1rem",
                    color: "#4C6E5F",
                    marginBottom: "2rem",
                  }}
                >
                  Step {bookingStep} of 3
                </p>

                {/* Progress Bar */}
                <div
                  style={{
                    width: "100%",
                    height: "4px",
                    background: "rgba(218, 165, 123, 0.2)",
                    borderRadius: "2px",
                    marginBottom: "2rem",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${(bookingStep / 3) * 100}%`,
                      height: "100%",
                      background:
                        "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)",
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>

                {bookingStep === 1 && (
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#4C6E5F",
                        marginBottom: "1rem",
                      }}
                    >
                      Select Service
                    </label>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      {services.map((service, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            setBookingData({
                              ...bookingData,
                              service: service.name,
                            })
                          }
                          style={{
                            background:
                              bookingData.service === service.name
                                ? "rgba(218, 165, 123, 0.1)"
                                : "white",
                            border: `2px solid ${
                              bookingData.service === service.name
                                ? "#DAA57B"
                                : "rgba(218, 165, 123, 0.2)"
                            }`,
                            padding: "1.5rem",
                            borderRadius: "15px",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            if (bookingData.service !== service.name) {
                              e.target.style.borderColor = "#DAA57B";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (bookingData.service !== service.name) {
                              e.target.style.borderColor =
                                "rgba(218, 165, 123, 0.2)";
                            }
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "start",
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  fontSize: "1.5rem",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                {service.icon}
                              </div>
                              <div
                                style={{
                                  fontFamily: "'Cormorant Garamond', serif",
                                  fontSize: "1.25rem",
                                  fontWeight: "600",
                                  color: "#2C3E3A",
                                  marginBottom: "0.25rem",
                                }}
                              >
                                {service.name}
                              </div>
                              <div
                                style={{
                                  fontFamily: "'Montserrat', sans-serif",
                                  fontSize: "0.85rem",
                                  color: "#4C6E5F",
                                }}
                              >
                                {service.duration} • {service.price}
                              </div>
                            </div>
                            {bookingData.service === service.name && (
                              <Check size={24} color="#DAA57B" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => bookingData.service && setBookingStep(2)}
                      disabled={!bookingData.service}
                      style={{
                        marginTop: "2rem",
                        width: "100%",
                        background: bookingData.service
                          ? "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)"
                          : "#ccc",
                        border: "none",
                        padding: "1.25rem",
                        borderRadius: "50px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "white",
                        cursor: bookingData.service ? "pointer" : "not-allowed",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Continue
                    </button>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#4C6E5F",
                        marginBottom: "1rem",
                      }}
                    >
                      Select Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={bookingData.date}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          date: e.target.value,
                          time: "",
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "1rem 1.5rem",
                        border: "2px solid rgba(218, 165, 123, 0.2)",
                        borderRadius: "15px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1rem",
                        marginBottom: "2rem",
                      }}
                    />

                    {bookingData.date && (
                      <>
                        <label
                          style={{
                            display: "block",
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "1rem",
                            fontWeight: "600",
                            color: "#4C6E5F",
                            marginBottom: "1rem",
                          }}
                        >
                          Select Time
                        </label>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "1rem",
                            marginBottom: "2rem",
                          }}
                        >
                          {availableSlots.map((slot, index) => (
                            <button
                              key={index}
                              onClick={() =>
                                setBookingData({ ...bookingData, time: slot })
                              }
                              className="slot-button"
                              style={{
                                background:
                                  bookingData.time === slot
                                    ? "rgba(218, 165, 123, 0.1)"
                                    : "white",
                                border: `2px solid ${
                                  bookingData.time === slot
                                    ? "#DAA57B"
                                    : "rgba(218, 165, 123, 0.2)"
                                }`,
                                padding: "1rem",
                                borderRadius: "15px",
                                cursor: "pointer",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "1rem",
                                fontWeight: "600",
                                color:
                                  bookingData.time === slot
                                    ? "#DAA57B"
                                    : "#4C6E5F",
                              }}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </>
                    )}

                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <button
                        onClick={() => setBookingStep(1)}
                        style={{
                          flex: 1,
                          background: "white",
                          border: "2px solid #DAA57B",
                          padding: "1.25rem",
                          borderRadius: "50px",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#DAA57B",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Back
                      </button>
                      <button
                        onClick={() =>
                          bookingData.date &&
                          bookingData.time &&
                          setBookingStep(3)
                        }
                        disabled={!bookingData.date || !bookingData.time}
                        style={{
                          flex: 1,
                          background:
                            bookingData.date && bookingData.time
                              ? "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)"
                              : "#ccc",
                          border: "none",
                          padding: "1.25rem",
                          borderRadius: "50px",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "white",
                          cursor:
                            bookingData.date && bookingData.time
                              ? "pointer"
                              : "not-allowed",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#4C6E5F",
                        marginBottom: "1rem",
                      }}
                    >
                      Your Details
                    </label>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                        marginBottom: "2rem",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={bookingData.name}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            name: e.target.value,
                          })
                        }
                        style={{
                          width: "100%",
                          padding: "1rem 1.5rem",
                          border: "2px solid rgba(218, 165, 123, 0.2)",
                          borderRadius: "15px",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "1rem",
                        }}
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={bookingData.phone}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            phone: e.target.value,
                          })
                        }
                        style={{
                          width: "100%",
                          padding: "1rem 1.5rem",
                          border: "2px solid rgba(218, 165, 123, 0.2)",
                          borderRadius: "15px",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "1rem",
                        }}
                      />
                      <input
                        type="email"
                        placeholder="Email (optional)"
                        value={bookingData.email}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            email: e.target.value,
                          })
                        }
                        style={{
                          width: "100%",
                          padding: "1rem 1.5rem",
                          border: "2px solid rgba(218, 165, 123, 0.2)",
                          borderRadius: "15px",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "1rem",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        background: "rgba(218, 165, 123, 0.1)",
                        padding: "1.5rem",
                        borderRadius: "15px",
                        marginBottom: "2rem",
                        border: "1px solid rgba(218, 165, 123, 0.2)",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#2C3E3A",
                          marginBottom: "1rem",
                        }}
                      >
                        Booking Summary
                      </h4>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.95rem",
                          color: "#4C6E5F",
                          lineHeight: "1.8",
                        }}
                      >
                        <div>
                          <strong>Service:</strong> {bookingData.service}
                        </div>
                        <div>
                          <strong>Date:</strong>{" "}
                          {new Date(bookingData.date).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </div>
                        <div>
                          <strong>Time:</strong> {bookingData.time}
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <button
                        onClick={() => setBookingStep(2)}
                        style={{
                          flex: 1,
                          background: "white",
                          border: "2px solid #DAA57B",
                          padding: "1.25rem",
                          borderRadius: "50px",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#DAA57B",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Back
                      </button>
                      <button
                        onClick={handleBookingSubmit}
                        disabled={!bookingData.name || !bookingData.phone}
                        style={{
                          flex: 1,
                          background:
                            bookingData.name && bookingData.phone
                              ? "linear-gradient(135deg, #DAA57B 0%, #C4956B 100%)"
                              : "#ccc",
                          border: "none",
                          padding: "1.25rem",
                          borderRadius: "50px",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "white",
                          cursor:
                            bookingData.name && bookingData.phone
                              ? "pointer"
                              : "not-allowed",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "rgba(218, 165, 123, 0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 2rem",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                >
                  <Check size={40} color="#DAA57B" />
                </div>

                <h3
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color: "#2C3E3A",
                    marginBottom: "1rem",
                  }}
                >
                  Booking Confirmed!
                </h3>

                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.1rem",
                    color: "#4C6E5F",
                    lineHeight: "1.8",
                  }}
                >
                  Thank you for choosing Zarmeen Aesthetics.
                  <br />
                  We'll send you a confirmation shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid,
          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr !important;
          }

          .desktop-menu {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
