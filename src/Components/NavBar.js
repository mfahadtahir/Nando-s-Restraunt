import React from 'react';
import M from 'materialize-css';
import logo from '../Images/logo.jpg'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {background: 'black', color: 'white'}
  }
  componentDidMount(){
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }
  render(){
    // let Data = JSON.parse( Data )
    // console.log(object)
    return(
      <>
      <div className="navbar-fixed" >
        <nav className='black-text ' style={{backgroundColor: this.state.background, boxShadow: 'none'}}>
          <div className="nav-wrapper" >
            <a href="!#" data-target="mobile-demo" className="right sidenav-trigger" style={{color: this.state.color}}>
              <i className="material-icons">menu</i>
            </a>
            <a href="#!" className="left brand-logo" style={{paddingLeft: 20, color: this.state.color}}>
              <img alt='' className='circle' src={logo} />
              </a>
            <ul className="right hide-on-med-and-down" style={{color: this.state.color}} >
              <li><a style={{color: this.state.color, fontWeight: "bold"}} href="#top" >Home</a></li>
              <li><a style={{color: this.state.color, fontWeight: "bold"}} href="#aboutus">About us</a></li>
              <li><a style={{color: this.state.color, fontWeight: "bold"}} href="#appeteasers">Menu</a></li>
              {/* <li><a style={{color: this.state.color, fontWeight: "bold"}} href="#top">Reservation</a></li> */}
              <li><a style={{color: this.state.color, fontWeight: "bold"}} href="#contactus">Contacts</a></li>
              <li><i className="material-icons" style={{paddingRight: 10}}>search</i></li>
              <li><i className="fa fa-facebook"  style={{fontSize: 24 , paddingRight: 10}}></i></li>
              <li><i className="fa fa-instagram" style={{fontSize: 24 , paddingRight:10}}></i></li>
              <li><i className="fa fa-twitter	"  style={{fontSize: 24 , paddingRight: 20}}></i></li>
            </ul>
          </div>
        </nav>
      </div>
        <ul className="sidenav" id="mobile-demo">
          <li><a href="#top">Home</a></li>
          <li><a href="#aboutus">About us</a></li>
          <li><a href="#appeteasers">Menu</a></li>
          <li><a href="#aboutus">Contacts</a></li>
          <li>
            <i className="fa fa-facebook"  style={{fontSize: 24 , paddingRight: 20, paddingLeft: 20}}></i>
            <i className="fa fa-instagram" style={{fontSize: 24 , paddingRight:20, paddingLeft: 20}}></i>
            <i className="fa fa-twitter	"  style={{fontSize: 24 , paddingRight: 20, paddingLeft: 20}}></i>
          </li>
        </ul>
        </>
    );
  }
}

export default NavBar;
