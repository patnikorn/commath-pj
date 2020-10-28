import React, { useState } from "react";
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getRootFinding } from "../functions/function";

function RootFinding() {
  const navigate = useNavigate();
  const [a, seta] = useState(0);
  const [b, setb] = useState(1);
  const [dx, setdx] = useState(0.0001);
  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };


  const generate = () => {
    const data = {
      a: a,
      b: b,
      dx: dx
    };
    getRootFinding(data).then((res) => {
      setresult(res);
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="3"></Col>
        <Col sm="6">
          <div className="text-center">
            <h2 style={{ marginTop: "5px", marginRight: "10px" }}>
              <b>Root-finding</b>
            </h2>
          </div>
          <div className="text-center">
            <p>exam:</p>
            <p>a = 0</p>
            <p>b = 1</p>
            <p>dx = 0.0001</p>
          </div>

          <Card style={{ alignItems: "center" }}>
            <Row style={{ marginTop: "10px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h4 style={{ marginTop: "20px", marginRight: "20px" }}>a:</h4>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a}
                    onChange={(e) => seta(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h4 style={{ marginTop: "20px", marginRight: "20px" }}>b:</h4>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={b}
                    onChange={(e) => setb(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h4 style={{ marginTop: "20px", marginRight: "20px" }}>dx:</h4>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={dx}
                    onChange={(e) => setdx(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
              </div>
            </Row>
            <h5 style={{ marginBottom: "10px" }}>Result: {result}</h5>

            <Row style={{ marginBottom: "30px" }}>
              <Col sm="8">
                <Button onClick={generate} color="danger">
                  <div style={{ width: 300 }}>
                    <h5 style={{ marginTop: "10px" }}>Calculate</h5>
                  </div>
                </Button>
              </Col>
              <Col sm="4">
                <Button onClick={back} color="dark">
                  <div style={{ width: 100 }}>
                    <h5 style={{ marginTop: "10px" }}>Back</h5>
                  </div>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm="3"></Col>
      </Row>
    </div>
  );
}
export default RootFinding;
