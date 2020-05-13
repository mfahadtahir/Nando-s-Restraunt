import React from 'react';
import NavBar from '../Components/NavBar'
import Poster from '../Components/Poster';
import Footer from '../Components/Footer'
class Layout extends React.Component {
  componentDidMount(){
  }
  render(){
    return(
      <div>
          <NavBar />
          <Poster />
          <Footer />
      </div>
    );
  }
}

export default Layout;
