import React from "react";
// react plugin used to create charts
// reactstrap components
import Casecount2 from "./Casecount2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function User() {
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

export default User;
