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
import { getDifferentiation } from "../functions/function";

function Differentiation() {
  const navigate = useNavigate();
  const [h, seth] = useState(0.64);
  const [p, setp] = useState(2);

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      h: h,
      p: p

    };
    getDifferentiation(data).then((res) => {
      setresult(res)
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
          <div className="text-center">
            <h2 style={{ marginTop: "20px", marginRight: "10px" }}>
              <b>Differentiation</b>
            </h2>
          </div>
          <div className="text-center">
            <p>exam:</p>
            <p>h = 0.64</p>
            <p>p = 2</p>
          </div>

          <Card style={{ alignItems: "center" }}>
            <Row style={{ marginTop: "20px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h4 style={{ marginTop: "20px", marginRight: "20px" }}>h:</h4>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={h}
                    onChange={(e) => seth(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h4 style={{ marginTop: "20px", marginRight: "20px" }}>p:</h4>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={p}
                    onChange={(e) => setp(e.target.value)}
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
                    <h5 style={{ marginTop: "10px" }}>Result</h5>
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

        <Col sm="4"></Col>
      </Row>
    </div>
  );
}
export default Differentiation;
