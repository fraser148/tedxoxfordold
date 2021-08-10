import React        from 'react';
import Header       from './Header.js';
import moment from 'moment'
import { Container, Row, Col }   from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class TalksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {videos: []}
    }

    async componentDidMount() {
        try {
          let res = await fetch("/getVideos", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
          })
    
          let result = await res.json();
    
          if (result && result.success) {
            this.setState({
              videos: result.data
            })
          }
          console.log(result)
        }
        catch (err) {
          console.log(err);
        }
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
                        <Row>
                            {this.state.videos.map((data, index) => (
                                <Col xs={12} sm={6} md={4} lg={4} xl={4} className="video-holder">
                                    <a href={"https://www.youtube.com/watch?v=" + data.videoID} target="_blank" rel="noreferrer">
                                        <div className="video">
                                            <img src={data.thumbnail} alt="Default"/>
                                            <span className="date">{moment(data.datePublish).format('MMM D YYYY')}</span>
                                            <span className="title">{data.title}</span>
                                            <span className="speaker">{data.speaker}</span>
                                            <span className="description">{data.description}</span>
                                        </div>
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
        
      );
    }
  }
  
  export default TalksPage;
  