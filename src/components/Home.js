import React        from 'react';
import Header       from './Header.js';
import artwork      from './../images/artwork-100.jpg';
import Event        from './Event.js';
import eventimg     from './../images/person.png';
import Talks        from './Talks.js';
import NewsletterSU from './NewsletterSU.js';
import Footer       from './Footer.js';


const Intro = () => {
  return (
    <div className='intro'>
      <div className="content">
        <h1>Beyond Frontiers</h1>
        <p>
          TEDxOxford is brought to you by a passionate
          group of university students who believe in
          TED's core mission of bringing ideas worth
          spreading to local communities and global
          audiences. Our team is dedicated to providing
          a platform that boasts a diverse, inclusive
          and innovative selection of talks that reflects
          an ever-evolving intellectual landscape.
        </p>
      </div>
      <div className="artwork">
        <img src={artwork} alt='Filler artwork'/>
      </div>
    </div>
  );
};

class Home extends React.Component {

    render() {
      return (
        <div>
          <div className="main-container">
            <Header />
            <Intro />
            <Event
              image={eventimg}
              date={"July 4, 5pm GMT"}
              title={"Our next event"}
              details={"At our next exciting event, you are bound to be interested!"}
              location={"Oxford Playhouse"}
              origin={"University of Oxford"}
              person={"John Smith"}
            />
          </div>
          <Talks/>
          <NewsletterSU />
          <Footer />
        </div>
      );
    }
  }
  
  export default Home;
  