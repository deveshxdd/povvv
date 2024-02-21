import React from "react";
import { Col } from "react-bootstrap";

import useActive from "@/hooks/useActive";

const SinglePricingOne = ({ singlePricing = {} }) => {
  const { isPopular, imag, name, features, tagline } = singlePricing;

  return (
    <Col lg={4}>
      <div className={`pricing-one__single${isPopular ? " popular" : ""}`}>
        {/* <h3 className="pricing-one__amount">{image}</h3> */}
        {/* <imag src={require(`/src/assets/images/${imag}`).default.src} /> */}
        <span className="pricing-one__month">{name}</span>

        <ul className="pricing-one__list">
          {features.map((feature, i) => (
            <li key={i} className="pricing-one__list-item">
              {feature}
            </li>
          ))}
        </ul>
        {/* <a href="#" className="thm-btn pricing-one__btn">
          Choose Plan
        </a> */}
        <span className="pricing-one__tag-line">{tagline}</span>
      </div>
    </Col>
  );
};

export default SinglePricingOne;
