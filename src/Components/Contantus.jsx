import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import contact_image from "../assets/img/webp/contact-image.png";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out all fields.");
    } else {
      setError("");

      // Form data including access key
      const form = new FormData();
      form.append("access_key", "c66c76ec-d085-41d1-ba99-f70dfcfadda1"); // Replace with your actual Web3Forms access key
      form.append("name", name);
      form.append("email", email);
      form.append("message", message);

      try {
        // Sending the data to Web3Forms API
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: form,
        });

        if (!response.ok) {
          throw new Error("There was an issue submitting the form.");
        }

        // If successful, reset the form and show a success message
        setFormData({ name: "", email: "", message: "" });
        alert("Message sent successfully!");
      } catch (err) {
        setError("Failed to send message. Please try again later.");
      }
    }
  };

  return (
    <Container className="space_contact">
      <Row className="row_bg pb-5 pb-lg-0">
        <Col lg={6} className="p-0 pe-lg-3">
          <img className="w-100 h-100" src={contact_image} alt="Contact" />
        </Col>
        <Col lg={6} className="text-center text-lg-start pb-lg-5">
          <h2 className="ff_Jakarta fw-semibold fs_64 lh_175 text-white mb-0">
            Contact Us
          </h2>
          <p className="ff_Jakarta fw-medium fs_32 lh_132 text-white mb-0">
            Feel free to contact us anytime. We will get back to you as soon as
            we can.
          </p>
          <Form onSubmit={handleSubmit} className="mt-5 pt-1">
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="bg-transparent border-0 font-md fw-normal text-white form_txt form-control"
                required
                aria-label="Name"
              />
            </Form.Group>
            <Form.Group controlId="email" className="mt-5">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="bg-transparent border-0 font-md fw-normal form_txt text-white form-control"
                required
                aria-label="Email"
              />
            </Form.Group>
            <Form.Group controlId="message" className="mt-5">
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                className="bg-transparent border-0 font-md fw-normal form_txt text-white form-control"
                required
                aria-label="Message"
              />
            </Form.Group>
            {error && <p className="text-danger fw-semibold mb-3">{error}</p>}
            <Button
              type="submit"
              className="form_bttn mt-5 ff_Jakarta fw-semibold fs_32 lh_118"
            >
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactus;
