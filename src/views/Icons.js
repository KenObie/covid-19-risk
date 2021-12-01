import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import Gps from "./Gps";
import Gps2 from "./Gps2";
import Casecount from "./Casecount";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Icons() {
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

export default Icons;
