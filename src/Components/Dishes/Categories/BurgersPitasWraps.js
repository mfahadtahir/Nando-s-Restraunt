import React from 'react';
import {Data} from '../../../Data/Data'
import ProductSlider from '../ProductSlider'
import M from 'materialize-css'

class BurgersPitasWraps extends React.Component {
  componentDidMount(){
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }
  render(){
    return (
      <div id='urgersPitasWraps' >
        <div className="section white">
          <div className="row container" style={{marginBottom: 0}} >
            <h2 className="header" style={{fontFamily: 'Parisienne, cursive', fontStyle: 'italic', marginBottom: 0 }}>{Data.categorys[8].name}</h2>
            <p className="grey-text text-darken-3 lighten-3" >{Data.categorys[8].discription}</p>
          </div>
        </div>
        
        <div className='container'>
          <h3 style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic'}} >Menu Items</h3>
          <ProductSlider data={Data.categorys[8]['menu-items']} styleClass = {'dark-slider'} />
        </div>        
      
      </div>
    );
  }
}

export default BurgersPitasWraps;