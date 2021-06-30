import React        from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link }     from 'react-router-dom';


class Talks extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }
    }

    render() {
      return (
        <div className="footer">
            <div className="widget socials">
                <SocialIcon url="https://www.facebook.com/TEDxOxford" />
            </div>
            <Link className='more' to='/donate'>Donate</Link>
        </div>
        
      );
    }
  }
  
  export default Talks;
  