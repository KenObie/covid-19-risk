import React from "react";
import Casecount from "./Casecount";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";

function Demographics() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
              </CardHeader>
              <CardBody>
                <Casecount/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Demographics;