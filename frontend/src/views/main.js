import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/" + page);
  }

  return (
    <div>
      <h1 className="text-center" style={{ marginTop: "5%" }}>
        <b>Project Computational Mathematics</b>
      </h1>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="3"></Col>

        <Col sm="4">
          <div className="text-center">
            <Row>
              <Col sm="4">
                <Card>
                  <CardTitle>
                    <h5 style={{ marginTop: "5px" }}><u>Chapter 1</u></h5>
                  </CardTitle>
                  <CardText>
                    <h6>Basic Computing</h6>
                  </CardText>

                  <Button onClick={() => { nextPage("page01") }} color="dark">
                    <h6 style={{ marginTop: "0px" }}>Start</h6>
                  </Button>

                </Card>
              </Col>

              <Col sm="4" >
                <Card>
                  <CardTitle>
                    <h5 style={{ marginTop: "5px" }}><u>Chapter 2</u></h5>
                  </CardTitle>
                  <CardText>
                    <h6>Linear Equations</h6>
                  </CardText>
                  <Button onClick={() => { nextPage("page02") }} color="dark">
                    <h6 style={{ marginTop: "0px" }}>Start</h6>
                  </Button>
                </Card>
              </Col>

              <Col sm="10" style={{ marginRight: "-300px" }}>
                <Card>
                  <CardTitle>
                    <h3 style={{ marginTop: "5px" }}><b>Profile</b></h3>
                  </CardTitle>
                  <CardText>
                    นางสาวพัฒนิกร ไถ้เงิน <b>(แตงโม)</b> <br></br>
                      รหัสนักศึกษา 61114440449 <br></br>
                      สาขาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ <br></br>


                  </CardText>
                </Card>
              </Col>
            </Row>

            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="4">
                <Card>
                  <CardTitle>
                    <h5 style={{ marginTop: "5px" }}><u>Chapter 3</u></h5>
                  </CardTitle>
                  <CardText>
                    <h6>Interpolation</h6>
                  </CardText>
                  <Button onClick={() => { nextPage("page03") }} color="dark">
                    <h6 style={{ marginTop: "0px" }}>Start</h6>
                  </Button>
                </Card>
              </Col>

              <Col sm="4">
                <Card>
                  <CardTitle>
                    <h5 style={{ marginTop: "5px" }}><u>Chapter 4</u></h5>
                  </CardTitle>
                  <CardText>
                    <h6>Differentiation</h6>
                  </CardText>
                  <Button onClick={() => { nextPage("page04") }} color="dark">
                    <h6 style={{ marginTop: "0px" }}>Start</h6>
                  </Button>
                </Card>
              </Col>
            </Row>


            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="4">
                <Card>
                  <CardTitle>
                    <h5 style={{ marginTop: "5px" }}><u>Chapter 5</u></h5>
                  </CardTitle>
                  <CardText>
                    <h6>Integration</h6>
                  </CardText>
                  <Button onClick={() => { nextPage("page05") }} color="dark">
                    <h6 style={{ marginTop: "0px" }}>Start</h6>
                  </Button>
                </Card>
              </Col>

              <Col sm="4">
                <Card>
                  <CardTitle>
                    <h5 style={{ marginTop: "5px" }}><u>Chapter 6</u></h5>
                  </CardTitle>
                  <CardText>
                    <h6>Root-finding</h6>
                  </CardText>
                  <Button onClick={() => { nextPage("page06") }} color="dark">
                    <h6 style={{ marginTop: "0px" }}>Start</h6>
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm="3"></Col>
      </Row>
      <Row style={{ marginBottom: "5%" }}></Row>
    </div>
  );
}

export default Main;
