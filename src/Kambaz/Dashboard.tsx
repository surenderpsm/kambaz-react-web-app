import { Link } from "react-router-dom";
import {Button, Card, Col, Row} from "react-bootstrap";
import "./styles.css"
export default function Dashboard() {
  return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            <Col className="wd-dashboard-course">
              <Card>
                <Card.Img className={"wd-dashboard-course-img"} variant="top" src="icons/react.png" />
                <Card.Body>
                  <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                    <div>
                      <Card.Title>
                        ReactJS Application
                      </Card.Title>
                      <Card.Text>
                        Full Stack software developer  </Card.Text>
                      <Button> Go </Button>
                    </div>
                  </Link>

                </Card.Body>
              </Card>
            </Col>

            <Col className="wd-dashboard-course">
            <Card>
                <Card.Img className={"wd-dashboard-course-img"} variant="top" src="icons/android-development.jpg" />
                <Card.Body>
                  <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                    <div>
                      <Card.Title>
                        Android Development
                      </Card.Title>
                      <Card.Text>
                        Learn Mobile application development  </Card.Text>
                      <Button> Go </Button>
                    </div>
                  </Link>

                </Card.Body>
              </Card>
            </Col>

            <Col className="wd-dashboard-course">

            <Card>
                <Card.Img className={"wd-dashboard-course-img"} variant="top" src="icons/distributed-data.png" />
                <Card.Body>
                  <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                    <div>
                      <Card.Title>
                        Distributed Databases
                      </Card.Title>
                      <Card.Text>
                        Learn various distributed systems  </Card.Text>
                      <Button> Go </Button>
                    </div>
                  </Link>

                </Card.Body>
              </Card>
            </Col>


            <Col className="wd-dashboard-course">

            <Card>
                <Card.Img className={"wd-dashboard-course-img"} variant="top" src="icons/nlp.png" />
                <Card.Body>
                  <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                    <div>
                      <Card.Title>
                        Natural Language Processing
                      </Card.Title>
                      <Card.Text>
                        Learn NLP tools  </Card.Text>
                      <Button> Go </Button>
                    </div>
                  </Link>

                </Card.Body>
              </Card>
            </Col>

            <Col className="wd-dashboard-course">

            <Card>
                <Card.Img className={"wd-dashboard-course-img"} variant="top" src="icons/swe.jpg" />
                <Card.Body>
                  <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                    <div>
                      <Card.Title>
                        Software Development Process
                      </Card.Title>
                      <Card.Text>
                        Learn design patterns  </Card.Text>
                      <Button> Go </Button>
                    </div>
                  </Link>

                </Card.Body>
              </Card>
            </Col>

            <Col className="wd-dashboard-course">

              <Card>
                <Card.Img className={"wd-dashboard-course-img"} variant="top" src="icons/distributed-data.png" />
                <Card.Body>
                  <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                    <div>
                      <Card.Title>
                        Distributed Databases
                      </Card.Title>
                      <Card.Text>
                        Learn various distributed systems  </Card.Text>
                      <Button> Go </Button>
                    </div>
                  </Link>

                </Card.Body>
              </Card>
            </Col>


            <Col className="wd-dashboard-course">

              <Card>
                <Card.Img className={"wd-dashboard-course-img"} variant="top" src="icons/nlp.png" />
                <Card.Body>
                  <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                    <div>
                      <Card.Title>
                        Natural Language Processing
                      </Card.Title>
                      <Card.Text>
                        Learn NLP tools  </Card.Text>
                      <Button> Go </Button>
                    </div>
                  </Link>

                </Card.Body>
              </Card>
            </Col>

            <Col className="wd-dashboard-course">

              <Card>
                <Card.Img className={"wd-dashboard-course-img"} variant="top" src="icons/swe.jpg" />
                <Card.Body>
                  <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                    <div>
                      <Card.Title>
                        Software Development Process
                      </Card.Title>
                      <Card.Text>
                        Learn design patterns  </Card.Text>
                      <Button> Go </Button>
                    </div>
                  </Link>

                </Card.Body>
              </Card>
            </Col><Col className="wd-dashboard-course">

            <Card>
              <Card.Img className={"wd-dashboard-course-img"} variant="top" src="icons/distributed-data.png" />
              <Card.Body>
                <Link to="/Kambaz/Courses/1234/Home"
                      className="wd-dashboard-course-link" >
                  <div>
                    <Card.Title>
                      Distributed Databases
                    </Card.Title>
                    <Card.Text>
                      Learn various distributed systems  </Card.Text>
                    <Button> Go </Button>
                  </div>
                </Link>

              </Card.Body>
            </Card>
          </Col>
          </Row>

        </div>
      </div>
  );}
