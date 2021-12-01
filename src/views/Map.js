import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import Gps from "./Gps";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Map() {
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

export default Map;