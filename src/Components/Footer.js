import React from 'react';
import StarRatings from 'react-star-ratings';
import { Data } from '../Data/Data'

class Footer extends React.Component {
  render(){

    return (
      <footer id="footer" className="grey darken-4 page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">{Data["restaurant-info"].name}</h5>
              <p className="grey-text text-lighten-4">The Nando’s story started centuries ago, when the Portuguese explorers set sail for the East. The winds of Africa called them ashore and it was there that they were introduced to the African Bird’s Eye Chilli – more commonly known as PERi-PERi. A spice like no other, they used it to create a unique PERi-PERi sauce that put fire in their bellies and ignited passion in their souls.</p>
              <p><i className='material-icons Tiny' >restaurant</i> {Data["restaurant-info"].address}</p>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Payment Options</h5>
              <ul>
                <li style={{marginBottom: 10, padding: 5, height: 30}}><a className="grey-text text-lighten-3"  href="#!"> <i class="fa fa-credit-card" style={{marginRight: 10}}></i>{Data["restaurant-info"]["payment-methods"][0].type}</a></li>
                <li style={{marginBottom: 10, padding: 5, height: 30}}><a className="grey-text text-lighten-3"  href="#!"> <i class="material-icons left" style={{marginRight: 5}}>phone_android</i>{Data["restaurant-info"]["payment-methods"][1].type}</a></li>
                <li style={{marginBottom: 10, padding: 5, height: 30}}><a className="grey-text text-lighten-3"  href="#!"> <i class="material-icons left"  style={{marginRight: 5}}>attach_money</i> {Data["restaurant-info"]["payment-methods"][2].type}</a></li>
              </ul>
              <h5>Ratings</h5>
              <p>      
                <StarRatings
                  starRatedColor="blue"
                  numberOfStars={5}
                  rating={Data["restaurant-info"].rating[0].rating}
                  starDimension="15px"
                  starSpacing="5px"
                />
              </p>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">  <i style={{marginRight: 4}} class="fa fa-facebook"></i> Facebook</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">  <i style={{marginRight: 4}} class="fa fa-twitter"></i>Twitter</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">  <i style={{marginRight: 4}} class="fa fa-instagram"></i> Instagram</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">  <i style={{marginRight: 4}} class="fa fa-google"></i> Google</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2010 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">Privacy {' & '} Policy</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
