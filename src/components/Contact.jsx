import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "../hooks/useInView";
import contactImg from "../assets/img/hari3.jpg";

const INITIAL = {
  firstName: "",
  lastName:  "",
  email:     "",
  phone:     "",
  message:   "",
};

const Contact = () => {
  const [ref, inView]     = useInView();
  const [form, setForm]   = useState(INITIAL);
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [btnText, setBtnText] = useState("Send Message");

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = form;
    if (!firstName || !email || !message) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.open(`mailto:haripacedev@gmail.com?subject=${subject}&body=${body}`);

    setBtnText("Sent!");
    setStatus("success");
    setForm(INITIAL);
    setTimeout(() => { setBtnText("Send Message"); setStatus(null); }, 4000);
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={5} className="d-none d-md-block">
            <img
              src={contactImg}
              alt="Hari Pace"
              className="contact-img"
            />
          </Col>

          <Col md={7}>
            <div
              ref={ref}
              className={`reveal reveal--right${inView ? " is-visible" : ""}`}
            >
              <h2 className="section-heading gradient-text" style={{ marginBottom: "0.4rem" }}>
                Get in Touch
              </h2>
              <p className="section-subtext" style={{ marginBottom: "1.75rem" }}>
                Have a project in mind or just want to say hello? Drop me a line.
              </p>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First name *</label>
                    <input
                      id="firstName"
                      type="text"
                      value={form.firstName}
                      placeholder="Jane"
                      required
                      autoComplete="given-name"
                      onChange={(e) => update("firstName", e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      id="lastName"
                      type="text"
                      value={form.lastName}
                      placeholder="Doe"
                      autoComplete="family-name"
                      onChange={(e) => update("lastName", e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email address *</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      placeholder="jane@example.com"
                      required
                      autoComplete="email"
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      placeholder="+49 123 456 789"
                      autoComplete="tel"
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    placeholder="Your message..."
                    required
                    onChange={(e) => update("message", e.target.value)}
                  />
                </div>

                {status === "success" && (
                  <p className="form-status success" role="status">
                    Thanks! Your email client should open shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="form-status error" role="alert">
                    Please fill in the required fields (first name, email, message).
                  </p>
                )}

                <button type="submit" className="btn-primary">
                  {btnText}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
