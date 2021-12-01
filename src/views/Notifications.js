import React from "react";
// react plugin used to create charts
// reactstrap components
import Gps3 from "./Gps3";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Notifications() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
              </CardHeader>
              <CardBody>
                <Gps3/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
