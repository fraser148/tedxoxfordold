import React        from 'react';
import Header       from './Header.js';
import { Container, Row, Col }   from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class Speakers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }
    }

    render() {
      return (
        <div className="w-back">
            <div className="main-container">
                <Header />
            </div>
            <div className="talks-page">
                <Container className="container-talks-top">
                    <div className="container1">
                        <Row className="heading align-items-center">
                            <Col sm={12} md={9} lg={8} xl={7} className="talks-header">
                                <div className="talks-heading">
                                    <h1>View all of our talks over the past 15 years.</h1>
                                    <p>
                                    Here we have compiled all of the previous TEDxOxford
                                    talks. From Blah talking about blag
                                    to them talking about this, Oxford have seen a huge number
                                    of exceptional speakers. Browse all of our talks as well as
                                    many more from around the world
                                    on TED's Official&nbsp;
                                    <a
                                        href="https://www.youtube.com/user/TEDtalksDirector"
                                        rel="noreferrer"
                                        target="_blank"
                                        alt="YouTube Link to TED Channel"
                                    >
                                        YouTube Channel.
                                    </a>
                                </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
        
      );
    }
  }
  
  export default Speakers;
  