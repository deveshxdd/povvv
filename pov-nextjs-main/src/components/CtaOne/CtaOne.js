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
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="faq-title text-center pb-3">
              <h2>FAQ</h2>
            </div>
          </div>
          <div className="col-md-6 offset-md-3">
            <div className="faq" id="accordion">
              <div className="card">
                <div className="card-header" id="faqHeading-1">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-1"
                      data-aria-expanded="true"
                      data-aria-controls="faqCollapse-1"
                    >
                      <span className="badge">1</span>What is Lorem Ipsum?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-1"
                  className="collapse"
                  aria-labelledby="faqHeading-1"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry&apos;s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-2">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-2"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-2"
                    >
                      <span className="badge">2</span> Where does it come from?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-2"
                  className="collapse"
                  aria-labelledby="faqHeading-2"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-3">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-3"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-3"
                    >
                      <span className="badge">3</span>Why do we use it?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-3"
                  className="collapse"
                  aria-labelledby="faqHeading-3"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using &apos;Content here, content here.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-4">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-4"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-4"
                    >
                      <span className="badge">4</span> Where can I get some?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-4"
                  className="collapse"
                  aria-labelledby="faqHeading-4"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don&apos;t look even slightly believable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-5">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-5"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-5"
                    >
                      <span className="badge">5</span> What is Lorem Ipsum?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-5"
                  className="collapse"
                  aria-labelledby="faqHeading-5"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      {" "}
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-6">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-6"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-6"
                    >
                      <span className="badge">6</span> Where does it come from?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-6"
                  className="collapse"
                  aria-labelledby="faqHeading-6"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero
                      are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation
                      by H. Rackham.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-7">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-7"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-7"
                    >
                      <span className="badge">7</span> Why do we use it?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-7"
                  className="collapse"
                  aria-labelledby="faqHeading-7"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for &apos;lorem ipsum&apos; will uncover many web sites still in
                      their infancy. Various versions have evolved over the
                      years, sometimes by accident, sometimes on purpose
                      (injected humour and the like).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
