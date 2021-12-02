import React from "react";
import Casecount2 from "./Casecount2";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";

function Clusters() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
              </CardHeader>
              <CardBody>
                <Casecount2/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Clusters;