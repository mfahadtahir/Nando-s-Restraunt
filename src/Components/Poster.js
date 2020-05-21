import React from 'react';
import posterImg from '../Images/donuts-1.jpg'
import {Data} from '../Data/Data'
import M from 'materialize-css'

class Poster extends React.Component {
  UNSAFE_componentDidMount(){
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }
  render(){
    return (
      <div>
        <div className="parallax-container">
            <p style={styleBox.paragraph} >{Data['restaurant-info'].name}</p>
          <div className="parallax" style={{opacity: 0.8}}>
            <img src={posterImg} alt=''/>
          </div>
        </div>
        <div className='container' style={{textAlign: 'center'}}>
          <a href="#appeteasers" className="btn-floating pulse" style={{display: 'block', margin: '20px auto', background: 'black', color: 'white'}}>
            <i className="material-icons">arrow_drop_down</i></a>
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

  }
}

export default Poster;
