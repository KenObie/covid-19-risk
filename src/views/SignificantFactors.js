import React from "react";
import Gps from "./Gps";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";

function SignificantFactors() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
              </CardHeader>
              <CardBody>
                <Gps/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SignificantFactors;