import ctaOne from "@/data/ctaOne";
import useActive from "@/hooks/useActive";
import React from "react";
import TextSplit from "../Reuseable/TextSplit";
import { Col, Row } from "react-bootstrap";
const { title } = ctaOne;

const CtaOne = ({ isScrollActive = false }) => {
  const ref = useActive("#contact", isScrollActive);

  return (
    <section ref={ref} className="cta-one faq-section" id="contact">
      <div className="container text-center">
        <div className="block-title"></div>
      </div>
      <div className="ContactForm">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="contactForm">
                <form className="reply-form">
                  <Row>
                    <Col lg={6}>
                      <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="reply-form__field"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="reply-form__field"
                      />
                    </Col>
                    <Col lg={12}>
                      <textarea
                        placeholder="Write message"
                        name="message"
                        className="reply-form__field"
                      ></textarea>
                      <button className="reply-form__btn thm-btn" type="submit">
                        Submit
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
