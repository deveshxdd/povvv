import React from "react";
import useActive from "@/hooks/useActive";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
const Aboutddetails = () => {
    const ref = useActive("/Aboutddetails");
    return (
<section >
    
        <Row>
          <Col lg={6}>
            <div className="cta-three__image">
              <Image src="/assets/images/111.png" alt="Awesome Image" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="cta-three__content">
              <div className="block-title text-left">
                <h2 className="block-title__title black-text-color">
                  <TextSplit text="Organic reach made easy!"/>
                </h2>
              </div>
              <p className="cta-three__text"></p>
              <ul className="cta-three__list">
               
                  <li  className="cta-three__list-item">
                  Vision:  <br></br>
                  Fueling brands to reach millions organically, we redefine digital landscapes. Join us on a journey where growth has no limits.
                  </li>
                  <li  className="cta-three__list-item">
                  Mission: <br></br>
                   Guiding brands with precision, we craft strategic content journeys to amplift their unique narratives, sparking a revolution in the digital realm.
                  </li>
              
              </ul>
             
            </div>
          </Col>
        </Row>
     
    </section>
      );
    };
    export default Aboutddetails