import React from 'react';
import posterImg from '../Images/donuts-1.jpg'
import M from 'materialize-css'

class Poster extends React.Component {
  componentDidMount(){
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }
  render(){
    return (
      <div>
        <div className="parallax-container">
            <p style={styleBox.paragraph} >Restaurant<br /> {" & "} Dishes</p>
          <div className="parallax" style={{opacity: 0.8}}>
            <img src={posterImg} alt=''/>
          </div>
        </div>
        <div className='container' style={{textAlign: 'center'}}>
          <a className="btn-floating pulse" style={{display: 'block', margin: '20px auto', background: 'black', color: 'white'}}>
            <i className="material-icons">arrow_drop_down</i></a>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img src={posterImg} /></div>
        </div>

      </div>
    );
  }
}
const styleBox = {
  paragraph: {

    // fontFamily: "Cormorant Garamond",
    fontFamily: 'Parisienne, cursive',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 80,
    color: 'white',
    background: 'rgba(100,100,100,0.5)',
    borderColor: 'rgb(100, 100, 100)',
    opacity: 1,
    transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
    transformOrigin: '50% 50% 0px',
  }
}

export default Poster;
