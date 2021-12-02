import React from "react";
import NormalizedCaseCount from "./NormalizedCaseCount";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Home() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="10">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Our Motiviation</CardTitle>
                <p>All over the world, COVID-19 has had an enormous impact. There have been over 247 million cases worldwide and over 5 million deaths. There were huge effects on economies, on livelihoods, and on the entire way our world operates. Looking back, it is interesting to see how COVID-19 has affected various populations differently. Preliminary studies have shown that location and socio-economic background play a huge role on the impact of COVID-19. With the latest information constantly emerging, our group believes it is extremely important that the general population and companies stay educated and up to date regarding updates with COVID-19 risk as the pandemic progresses. After looking into data collected during the pandemic, there have been various visualizations and analyses of COVID-19 datasets published in the last 1.5 years. Previous studies have focused on understanding the demographic factors on age, sex, and race that lead to serious COVID-19 inflections.1,2 There are other studies that focus on the effects of hospital resources.3 These journals look for individual correlations between factors and spread when we have seen that many of these factors compound to change the effect on the population.
We chose to use this project as an opportunity to dive into the data collected over the course of the pandemic to help the general population and policymakers make better decisions regarding their safety.  </p>
              </CardHeader>
              <CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
              </CardHeader>
              <CardBody>
                <NormalizedCaseCount/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
